const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');

// Run the page's actual script without starting a browser.
const html = readFileSync(require('node:path').join(__dirname, '../json.parser.html'), 'utf8');
const elements = new Map();
function element(id) {
    if (!elements.has(id)) elements.set(id, {
        value: '', innerHTML: '', style: {}, className: '',
        listeners: {},
        addEventListener(type, listener) { this.listeners[type] = listener; },
        querySelectorAll() { return []; }
    });
    return elements.get(id);
}
const context = vm.createContext({
    document: {
        getElementById: element,
        querySelector: element,
        documentElement: { setAttribute() {} },
        addEventListener() {}
    },
    window: { matchMedia: () => ({ matches: false, addEventListener() {} }) },
    localStorage: { getItem: () => null }
});
vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1], context);

function parse(input) {
    element('jsonInput').value = input;
    element('jsonInput').listeners.input();
    assert.equal(element('jsonOutput').className, '', element('jsonOutput').innerHTML);
    return JSON.parse(context.normalizeInput(input.trim()));
}

const pasted = String.raw`{\"items\": \n[{\"description\": \"发明名称“一种加热不燃烧装置”中包含了规则禁止出现的“不燃烧”二字。\", \"error_summary\": \"标题包含禁止词“不燃烧”\", \"judgment_basis\": \"文本【发明名称】部分原文为：“一种加热不燃烧装置”。\", \"judgment_logic\": \"用户自定义规则明确要求标题不能出现“不燃烧”两个字，该标题完整包含了这一禁止词组，直接触发本条规则。\", \"locations\": [{\"location_end_anchor\": \"一种加热不燃烧装置\", \"location_field\": \"title\", \"location_start_anchor\": \"一种加热不燃烧装置\", \"reason\": \"标题全文包含禁止词“不燃烧”\", \"text\": \"一种加热不燃烧装置\"}], \"rule_id\": \"66df0aea-6c27-4a10-adb7-abf97b9fb7ca\", \"severity\": \"triggered\", \"suggestion\": \"将标题中的“不燃烧”替换为其他合规表述，例如改为“一种加热雾化装置”或“一种气溶胶生成装置”，避免使用规则明确禁止的词汇。\"}]\n\n}`;

test('识别用户粘贴的无外层引号的转义 JSON，并显示树', () => {
    const result = parse(pasted);
    assert.equal(result.items.length, 1);
    assert.equal(result.items[0].rule_id, '66df0aea-6c27-4a10-adb7-abf97b9fb7ca');
    assert.equal(result.items[0].locations[0].text, '一种加热不燃烧装置');
    assert.match(element('jsonOutput').innerHTML, /json-tree/);
    assert.match(element('jsonOutput').innerHTML, /标题包含禁止词“不燃烧”/);
});

const expected = { path: 'C:\\temp\\new', quote: '他说 "你好"', text: '第一行\n第二行', literal: '\\n', unicode: '中文' };
const json = JSON.stringify(expected, null, 2);

test('标准 JSON 的反斜杠、引号、换行保持原值', () => {
    assert.deepEqual(parse(json), expected);
});

test('兼容现有带外层引号的 JSON 字符串', () => {
    assert.deepEqual(parse(JSON.stringify(json)), expected);
});

test('无外层引号的转义 JSON 只解码一层，保留数据中的转义', () => {
    assert.deepEqual(parse(JSON.stringify(json).slice(1, -1)), expected);
});

test('兼容转义文本混合真实换行和制表符', () => {
    assert.deepEqual(parse(String.raw`{\"items\": \n` + '\n\t' + String.raw`[\"中文\"]\n}`), { items: ['中文'] });
});

test('兼容转义数组', () => {
    assert.deepEqual(parse(String.raw`[\"中文\", {\"ok\": true}, null]`), ['中文', { ok: true }, null]);
});

test('兼容原有直接套引号的 JSON', () => {
    assert.deepEqual(parse('"{"ok":true}"'), { ok: true });
});

test('标准 JSON 基础类型保持兼容', () => {
    for (const value of [null, true, 42, [], {}]) assert.deepEqual(parse(JSON.stringify(value)), value);
});

test('不完整或非法转义仍显示错误', () => {
    for (const input of [String.raw`{\"items\": [}`, String.raw`{\"text\": \"\q\"}`, '{"a": 1,}']) {
        element('jsonInput').value = input;
        element('jsonInput').listeners.input();
        assert.equal(element('jsonOutput').className, 'error');
    }
});

test('空白输入仍显示占位提示', () => {
    element('jsonInput').value = ' \n ';
    element('jsonInput').listeners.input();
    assert.equal(element('jsonOutput').className, '');
    assert.match(element('jsonOutput').innerHTML, /Formatted JSON will appear here/);
});
