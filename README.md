该项目由是由 [Create React App](https://github.com/facebook/create-react-app) 创建的

create-react-app 创建的项目基于 Webpack + ES6 

如果您未拥有 `yarn`：

  1. 可参考文档 `https://yarn.bootcss.com/docs/install/#windows-stable` 安装 `yarn`
  2. 可使用 `npm`

## 启动:

  #### 方式一： `yarn`

    1. `yarn install` 安装依赖
    2. `yarn start`

  #### 方式二： `npm`

    1. `npm install` 安装依赖
    2. `npm start`

  您可以在浏览器 `http://localhost:3000` 中查看项目。

## 开发：

  #### 在开发之前您可能需要了解：

    - react [ 文档：https://react.docschina.org/docs/getting-started.html ]
    - ant [ 文档：https://ant.design/components/button-cn/ ]

  #### 项目结构：

    - /config 配置工具
    - /script 命令配置
    - /public 静态目录，存放 img 等资源
    - /src 核心代码
      - src/component 通用组件
      - src/pages 逻辑页面
      - src/scss
      - src/store 数据存储及更新
      - src/utils 工具函数
      - src/apiRequest 请求目录

## 规范：

  #### commit 规范

    例: `type:(scope) Message`

    type:
      - feature: 新功能 (feature)
      - fix: 修补 bug
      - docs: 文档 (documentation)
      - style: 格式 (不影响代码运行的变动)
      - refactor: 重构 (即不是新增功能，也不是修改 bug 的代码变动)
      - test: 增加测试
      - chore： 构建过程或辅助工具的变动

    scope: commit 改动的范围，可省略
    Message: commit 改动信息，首字母大写，结尾不带符号，尽量简洁明了

    例: `feat:(nav) Add navigation in header`

  #### css 规范

    css 采用 `BEM` 命名格式:

      `BlockElementModifier` 是块（block）、元素（element）、修饰符（modifier），这三个部分使用 `__` 与 `--` 连接

      例: .block__element--modifier {}

      - block 代表了更高级别的抽象或组件
      - block__element 代表 block 的后代，用于形成一个完整的 block 的整体
      - block--modifier代表 block 的不同状态或不同版本

      例: .app-header__nav--target

    css 属性的书写一般有个顺序，依次为：

      1. position
      2. display
      3. height, width
      4. top, left, right... [也可根据个人习惯写在 position 后面]
      5. margin, padding
      6. 其它外观类样式
      7. cursor

  #### 代码规范

    - 一个文件一般不要超过 500 行，特殊情况除外
    - 每个文件末尾增加一行空行
    - 去掉冗余的注释和未使用的变量及函数
    - 项目启动后，根据 console 控制台的 eslint 警告修改以规范代码
    - ...

## 部署：

  `yarn build` 或 `npm run build`

  在部署之前，请运行该命令。

  build 会优化构建以获得最佳性能，例如文件会被压缩，文件名包括哈希值等。

  应用程序会打包到 `build` 文件夹，将之部署到服务器即可。
