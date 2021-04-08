# js-dart mirror 模块，

1. js -> dart 对象映射，mirrorId机制管理
2. js -> dart 函数调用，通过mirrorId找到对应dart实例，调用其函数，支持返回值
3. dart -> js 事件相应，dart通过callbackId找到对应js实例，把事件调用到js
4. 为开发者提供暴露 dart 业务 api 给js代码用的工具接口



