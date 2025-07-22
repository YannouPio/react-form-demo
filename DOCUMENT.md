# 项目开发文档

## 概述

这是一个使用 React 构建的多步骤表单应用程序。它旨在提供一个清晰、可重用和可扩展的表单结构，适用于需要将复杂表单分解为多个逻辑步骤的场景。

## 技术栈

*   **React**: 用于构建用户界面的核心库。
*   **React Hook Form**: 用于处理表单状态管理和验证，提供了高性能和易于使用的 API。
*   **Vite**: 用于项目开发和构建的现代前端工具。

## 项目结构

```
react-form-demo/
├── src/
│   ├── components/
│   │   ├── FormStep.jsx         # 可重用的单个表单步骤组件
│   │   ├── MultiStepForm.jsx    # 多步骤表单的核心逻辑和状态管理
│   │   ├── Step1Content.jsx     # 第1步的表单内容
│   │   ├── Step2Content.jsx     # 第2步的表单内容
│   │   └── Step3Content.jsx     # 第3步的表单内容
│   ├── App.jsx                  # 应用程序的主组件
│   ├── index.css                # 全局样式
│   └── main.jsx                 # 应用程序的入口点
├── index.html                   # 主 HTML 文件
└── package.json                 # 项目依赖和脚本
```

## 核心组件

### `MultiStepForm.jsx`

这是应用程序的核心组件，负责：

*   管理当前活动的表单步骤。
*   跟踪已完成的步骤。
*   使用 `react-hook-form` 处理整个表单的验证和数据提交。
*   定义表单的每个步骤（标题、字段、内容组件）。
*   处理“下一步”和“上一步”的导航逻辑。

### `FormStep.jsx`

这是一个可重用的 UI 组件，用于显示单个步骤。它接收以下 props：

*   `title`: 步骤的标题。
*   `stepNumber`: 步骤编号。
*   `isActive`: 当前步骤是否处于活动状态。
*   `isCompleted`: 当前步骤是否已完成。
*   `onHeaderClick`: 点击步骤标题时的回调函数。
*   `children`: 步骤的内容。

### `Step1Content.jsx`, `Step2Content.jsx`, `Step3Content.jsx`

这些组件分别定义了每个表单步骤的具体输入字段。它们接收 `register` 和 `errors` 对象作为 props，这些都由 `react-hook-form` 提供，用于将输入字段注册到表单并显示验证错误。

## 工作流

1.  **应用程序入口**: `main.jsx` 将 `App` 组件渲染到 DOM 中。
2.  **主应用组件**: `App.jsx` 渲染 `MultiStepForm` 组件。
3.  **多步骤表单**:
    *   `MultiStepForm` 初始化时，默认显示第一个步骤。
    *   用户在当前步骤中填写信息。`react-hook-form` 会根据定义的规则进行实时验证。
    *   当用户点击“下一步”时，会触发对当前步骤字段的验证。
    *   如果验证通过，`MultiStepForm` 会将当前步骤标记为“已完成”，并切换到下一个步骤。
    *   用户可以通过点击步骤标题在已完成的步骤之间导航。
    *   当所有步骤都完成后，可以触发表单的最终提交逻辑。

## 如何运行项目

1.  **安装依赖**:
    ```bash
    pnpm install
    ```

2.  **启动开发服务器**:
    ```bash
    pnpm run dev
    ```

3.  在浏览器中打开 `http://localhost:5173` (或指定的端口)。


