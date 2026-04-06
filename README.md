# Tools

[简体中文](./README.zh-CN.md)

A zero-dependency collection of static front-end utilities for common development and debugging tasks. Every tool is a standalone HTML page and can be deployed directly to GitHub Pages or any static hosting platform.

## Live Demo

- JSON Parser: [https://905583906.github.io/tools/json.parser.html](https://905583906.github.io/tools/json.parser.html)
- Base64 Image Converter: [https://905583906.github.io/tools/base64.image.converter.html](https://905583906.github.io/tools/base64.image.converter.html)
- Image Compressor: [https://905583906.github.io/tools/image.compressor.html](https://905583906.github.io/tools/image.compressor.html)
- Timestamp Converter: [https://905583906.github.io/tools/timestamp.converter.html](https://905583906.github.io/tools/timestamp.converter.html)
- RGB HEX Converter: [https://905583906.github.io/tools/rgb.hex.converter.html](https://905583906.github.io/tools/rgb.hex.converter.html)
- Code Diff: [https://905583906.github.io/tools/code.diff.html](https://905583906.github.io/tools/code.diff.html)

## Overview

This repository contains a small toolbox of browser-based utilities:

- `JSON Parser` for formatting and inspecting JSON data
- `Base64 Image Converter` for converting image files and Base64 strings in both directions
- `Image Compressor` for reducing image size locally in the browser
- `Timestamp Converter` for converting timestamps and date-time values
- `RGB HEX Converter` for color value conversion
- `Code Diff` for side-by-side snippet comparison

There is no build step, no backend, and no external dependency required.

## Tools

| Tool | File | Live URL | Description |
| --- | --- | --- | --- |
| JSON Parser | `json.parser.html` | [Open](https://905583906.github.io/tools/json.parser.html) | Real-time JSON parsing and formatting with a built-in sample, syntax highlighting, collapsible tree view, error messages, theme switching, and resizable split panes. |
| Base64 Image Converter | `base64.image.converter.html` | [Open](https://905583906.github.io/tools/base64.image.converter.html) | Converts image files to Base64 and restores Base64 back to images, supports upload, drag and drop, paste, preview, theme switching, copy, download, and split-pane layout. |
| Image Compressor | `image.compressor.html` | [Open](https://905583906.github.io/tools/image.compressor.html) | Pure front-end image compressor with batch upload, target size, automatic quality reduction, optional resizing, format conversion, before/after comparison, and download-all support. |
| Timestamp Converter | `timestamp.converter.html` | [Open](https://905583906.github.io/tools/timestamp.converter.html) | Converts between timestamps and date-time values, supports second/millisecond units, timezone selection, current timestamp display, copy action, and batch conversion. |
| RGB HEX Converter | `rgb.hex.converter.html` | [Open](https://905583906.github.io/tools/rgb.hex.converter.html) | Converts RGB and HEX values in both directions, supports `#RGB` and `#RRGGBB`, validates input, and shows a live color preview. |
| Code Diff | `code.diff.html` | [Open](https://905583906.github.io/tools/code.diff.html) | Side-by-side code comparison with line-level and inline highlighting, synchronized scrolling, theme switching, and resizable panes on desktop. |

## Features

- Pure HTML, CSS, and JavaScript
- No build tooling or package installation required
- Each page can be opened or deployed independently
- Suitable for GitHub Pages and other static hosting platforms
- All processing happens locally in the browser

## Local Usage

Open `index.html` or any individual tool page directly in your browser.

For a setup closer to production, start a simple static file server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

Notes:

- Clipboard-related features may work more reliably on `http://localhost` than on `file://`.
- Since each page is standalone, you can also deploy only the specific tool you need.

## Project Structure

```text
.
├── index.html
├── json.parser.html
├── base64.image.converter.html
├── image.compressor.html
├── timestamp.converter.html
├── rgb.hex.converter.html
└── code.diff.html
```

## Typical Use Cases

- Validate and format JSON quickly
- Convert images to Base64 or restore images from Base64 strings
- Compress large images to a target size for uploads or static assets
- Convert between Unix timestamps and formatted date-time strings
- Convert RGB values to HEX and back
- Compare code snippets, config fragments, or plain text changes
