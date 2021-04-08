"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXJSFlutterApp = void 0;
const widgets_binding_1 = require("../widget/widgets-binding");
/**
 * MXJSFlutterApp 用于开发者的JS代码和Flutter MXUIEngine的交互
 * 开发者需要继承MXJSFlutterApp，重载createJSWidgetWithName函数，根据WidgetName创建框架需要的Widget
 */
class MXJSFlutterApp {
    constructor(name, initialRoute) {
        this.name = name;
        this.initialRoute = initialRoute;
        // 初始化WidgetsBinding
        this.initWidgetsBinding();
    }
    nativeCall(argsStr) {
        //  MXJSC-Support：v0.9.0 参数改为json String
        let args = JSON.parse(argsStr);
        if (this.widgetsBinding == null) {
            var result = this.initWidgetsBinding();
            if (result === false) {
                return null;
            }
        }
        return this.widgetsBinding.nativeCall(args);
    }
    initWidgetsBinding() {
        // 如果是native侧预加载了js引擎，flutterAppEngine此时尚未创建，所以不能创建WidgetsBinding，等后续用使用再初始化
        var isFlutterAppEngineSetup = globalThis.MXJSAPI.isFlutterAppEngineSetup;
        if (isFlutterAppEngineSetup !== true) {
            return false;
        }
        // 初始化WidgetsBinding
        this.widgetsBinding = widgets_binding_1.WidgetsFlutterBinding.ensureInitialized();
        this.widgetsBinding.jsFlutterApp = this;
        return true;
    }
}
exports.MXJSFlutterApp = MXJSFlutterApp;
