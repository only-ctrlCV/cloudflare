---
sidebar_position: 1
---

# 定位

本网址专注于OSI层级：应用层 **SEMI SECS/GEM 协议的解读及延申**主要针对 SEMI E5/E30/E37协议.

## SEMI E5 (SECS-II)
核心功能：

- 定义设备与主机之间交换的消息格式和数据项（如报警报告S5,F1、配方传输S7,F5等）。
- 通过Stream和Function结构（如S1,F13表示通信建立请求）实现语义化交互。

解决的问题：

- 协议无关性：仅规定消息内容，不依赖底层传输方式（可通过SECS-I或HSMS传输）。
- 标准化语义：统一设备状态、报警、工艺数据的表达方式，解决不同厂商设备间的语言兼容性问题。

### 示例演示

- [SECS-II](http://www.hume.com/secs/) 消息格式演示:
  - 资料完善优先级低

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
