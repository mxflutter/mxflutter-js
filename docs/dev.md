# MXFlutter 前端开发指南
MXFlutter 目前以 JavaScript 作为执行运行时，以 TypeScript 作为业务源码的开发语言，相近于 react-native 等跨端开发，所以文档会介绍一下关于前端的一些框架、工具、语言 以及 MXFlutter 前端框架内的一些 容器类、精选类等。

## 环境准备

### node.js 、 npm
目前 node.js 作为大部分前端工具链的实现语言 开发前端项目基本都是需要安装的，安装最新稳定版即可。安装 [node.js](https://nodejs.org/) 同时也会为您安装 npm 程序，npm 目前作为前端统一的依赖管理工具也需要简单了解下。我们的 MXFlutter 前端项目也都使用 npm 来进行依赖管理。项目中的 `package.json` 就是作为依赖的声明文件，同时也支持了一些自定义脚本的声明等。

### IDE
目前的前端开发使用 VSCode、Webstorm 等 IDE 都是非常好的选择，在开发 MXFlutter 程序时，更推荐使用 [VSCode](https://code.visualstudio.com/) ,因为这也是 flutter 官方推荐的 IDE，不仅在前端，在 Flutter Dart 的开发上也非常方便。

使用 VSCode 可以安装 Flutter、Dart、ESLint、Prettier 等插件方便辅助开发。

## 关于 TypeScript
TypeScript 是 JavaScript 类型的超集，在 js 基础上增加类型静态检查的能力，因此也能够使代码模块有更好的 自动提示、代码补全 等功能，使用  TypeScript 可以做到类似 Dart 的开发体验。

TypeScript 的具体 API 可以参考 [TypeScript 文档](https://www.tslang.cn/docs/handbook/basic-types.html) 。

我们在开发业务代码时，会进行模块的拆分，文件的拆分，TypeScript 使用 [ES Module](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) 作为模块加载规范。

TypeScript 开发完成后会编译为 JavaScript 来执行，涉及到编译相关的配置在 `tsconfig.json` 中。例如 MXFlutter 为了支持 ios 9-10 js引擎的兼容性，就在配置文件中区分了不同的配置。

## 业务开发

### 框架模块

<img src="http://fcccdn.qq.com/infoop/a64334df94428716bb10f06510a0047a_1606901224041.25" width="500px;" />

上图是 MXFlutter 业务模板例子里引用的一些类。可以看到主要会从两个包来引入 分别是 `@mxflutter/mxflutter` 和 `@mxflutter/mxflutter-widgets`。

`@mxflutter/mxflutter`  主要是框架通用的容器类 通信方法 等。里面的 `MXJSStatelessWidget` 可以对应到 flutter 的 `StatelessWidget`，`MXJSStatefulWidget` 可以对应到 flutter 的 `StatefulWidget`，`MXJSWidgetState` 可以对应到 flutter 的 `WidgetState`，`MXJSBuildContext` 可以对应到 flutter 的 `BuildContext`。使用 API 相同。

`@mxflutter/mxflutter-widgets` 是对应 flutter 中的各种 widget，是 js 版本的镜像类。参数等信息和 flutter 相同。

这里 `@mxflutter/mxflutter-widgets` 包中的镜像类区分了几个模块，

```
animation.ts      gestures.ts       material.ts       mx-dart-sdk.ts    physics.ts        scheduler.ts      services.ts       widgets.ts
cupertino.ts      foundation.ts     index.ts          meta.ts           painting.ts       rendering.ts      semantics.ts      vector-math-64.ts
```
在我们模块引用中也会以 `from '@mxflutter/mxflutter-widgets/material'` 这种形式进行模块的区分。

在我们入口文件还会有这样一段代码，用于将我们编写的业务组件注册到框架内。这段代码需要保持在入口文件内。
```js
mxflutter.regist({
  name: 'mxflutter-pipeline-test',
  RootWidget: MyApp,
});
```

### 编译运行
我们编写的代码最终会编译打包为一个 js bundle 来进行真正的执行。我们项目模板中自带的 `npm run dev` 和 `npm run build` 等命令就会处理这个事情，会将源代码编译为一个 bundle 输出到脚本中指定的 `--out` 的目录中。

这里的编译功能使用的是我们依赖中的 `"@mxflutter/mxflutter-toolchain"` 这个包的生成的 `mxflutter命令` ，如果针对脚本参数、编译结果的问题，可以参考这个包对应的版本。
