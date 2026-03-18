# Tools

[English](./README.md)

一个零依赖、纯静态的前端工具集合，面向日常开发和调试场景。每个工具都是独立的 HTML 页面，适合直接部署到 GitHub Pages 或任意静态托管平台。

## 在线访问

- JSON Parser: [https://905583906.github.io/tools/json.parser.html](https://905583906.github.io/tools/json.parser.html)
- Timestamp Converter: [https://905583906.github.io/tools/timestamp.converter.html](https://905583906.github.io/tools/timestamp.converter.html)
- RGB HEX Converter: [https://905583906.github.io/tools/rgb.hex.converter.html](https://905583906.github.io/tools/rgb.hex.converter.html)
- Code Diff: [https://905583906.github.io/tools/code.diff.html](https://905583906.github.io/tools/code.diff.html)

## 项目简介

这个仓库收集了一组浏览器小工具：

- `JSON Parser` 用于格式化和查看 JSON 数据
- `Timestamp Converter` 用于时间戳与日期时间互转
- `RGB HEX Converter` 用于颜色值转换
- `Code Diff` 用于代码片段双栏对比

项目不依赖构建工具，不需要后端服务，也不需要安装第三方依赖。

## 工具列表

| 工具 | 文件 | 在线链接 | 功能说明 |
| --- | --- | --- | --- |
| JSON Parser | `json.parser.html` | [打开](https://905583906.github.io/tools/json.parser.html) | 实时解析和格式化 JSON，内置默认示例，支持语法高亮、树形折叠、错误提示、深浅色切换、左右分栏拖拽。 |
| Timestamp Converter | `timestamp.converter.html` | [打开](https://905583906.github.io/tools/timestamp.converter.html) | 支持当前时间戳实时刷新、秒/毫秒切换、复制、时间戳与日期时间双向转换、时区选择、批量逐行转换。 |
| RGB HEX Converter | `rgb.hex.converter.html` | [打开](https://905583906.github.io/tools/rgb.hex.converter.html) | 支持 RGB 与 HEX 双向转换，兼容 `#RGB` 和 `#RRGGBB`，带输入校验和颜色预览。 |
| Code Diff | `code.diff.html` | [打开](https://905583906.github.io/tools/code.diff.html) | 双栏代码对比工具，支持行级高亮、行内高亮、滚动同步、深浅色切换和桌面端拖拽分栏。 |

## 特点

- 纯 HTML、CSS、JavaScript
- 无需构建流程，无需安装依赖
- 每个页面都可以单独访问和部署
- 适合 GitHub Pages、Nginx、Vercel 等静态托管环境
- 所有数据处理都在浏览器本地完成

## 本地运行

直接打开 `index.html` 或任意工具页面即可使用。

如果你希望在本地以更接近线上环境的方式访问，推荐启动一个静态文件服务：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000/
```

说明：

- 某些浏览器对剪贴板等能力有安全限制，使用 `http://localhost` 通常比 `file://` 更稳定。
- 所有工具都是独立页面，也可以只部署其中某一个文件。

## 项目结构

```text
.
├── index.html
├── json.parser.html
├── timestamp.converter.html
├── rgb.hex.converter.html
└── code.diff.html
```

## 适用场景

- 快速检查和格式化 JSON 数据
- 处理秒级或毫秒级时间戳与日期时间互转
- 进行 RGB 和 HEX 颜色值换算
- 对比代码片段、配置片段或文本差异
