"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXJSProfile = exports.GlobalJSFlutterApp = exports.WidgetsBindingObserver = exports.WidgetsFlutterBinding = exports.WidgetsBinding = exports.MXTickerAndKeepAliveMixinWidgetState = exports.MXTickerAndKeepAliveMixinWidget = exports.MXSingleTickerAndKeepAliveMixinWidgetState = exports.MXSingleTickerAndKeepAliveMixinWidget = exports.MXKeepAliveMixinWidgetState = exports.MXKeepAliveMixinWidget = exports.MXTickerMixinWidgetState = exports.MXTickerMixinWidget = exports.MXSingleTickerMixinWidgetState = exports.MXSingleTickerMixinWidget = exports.MXJSPageWidget = exports.MXJSLazyStatefulWapperWidget = exports.MXJSBaseWidget = exports.MXJSBuildContext = exports.MXJSStatelessWidget = exports.MXJSWidgetState = exports.MXJSStatefulWidget = exports.BuildContext = exports.StatelessWidget = exports.State = exports.StatefulWidget = exports.MXJSFlutterApp = exports.MXBaseKey = exports.MXLifecycleWidgetBase = exports.MXMirrorWidget = exports.MXKDebugMode = exports.MXKProfileMode = exports.MXKReleaseMode = exports.MXMirrorObjMethodCall = exports.MXLifecycleDartClass = exports.MXDartClass = exports.MXMirror = exports.MXJSLog = exports.releaseMirrorObj = exports.createMirrorObj = exports.invokeMirrorObjMethodSync = exports.invokeMirrorObjMethod = exports.invokeFlutterFFIPort = exports.invokeFlutterCommonChannel = exports.bridgeMXNativeJSFlutterApp = exports.Flutter = void 0;
const FlutterWidgets = __importStar(require("@mxflutter/mxflutter-widgets"));
// Flutter 属性 导出 widgets 包内容
const Flutter = FlutterWidgets;
exports.Flutter = Flutter;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
Object.defineProperty(exports, "bridgeMXNativeJSFlutterApp", { enumerable: true, get: function () { return mxflutter_base_1.bridgeMXNativeJSFlutterApp; } });
Object.defineProperty(exports, "invokeFlutterCommonChannel", { enumerable: true, get: function () { return mxflutter_base_1.invokeFlutterCommonChannel; } });
Object.defineProperty(exports, "invokeFlutterFFIPort", { enumerable: true, get: function () { return mxflutter_base_1.invokeFlutterFFIPort; } });
Object.defineProperty(exports, "invokeMirrorObjMethod", { enumerable: true, get: function () { return mxflutter_base_1.invokeMirrorObjMethod; } });
Object.defineProperty(exports, "invokeMirrorObjMethodSync", { enumerable: true, get: function () { return mxflutter_base_1.invokeMirrorObjMethodSync; } });
Object.defineProperty(exports, "createMirrorObj", { enumerable: true, get: function () { return mxflutter_base_1.createMirrorObj; } });
Object.defineProperty(exports, "releaseMirrorObj", { enumerable: true, get: function () { return mxflutter_base_1.releaseMirrorObj; } });
Object.defineProperty(exports, "MXJSLog", { enumerable: true, get: function () { return mxflutter_base_1.MXJSLog; } });
Object.defineProperty(exports, "MXMirror", { enumerable: true, get: function () { return mxflutter_base_1.MXMirror; } });
Object.defineProperty(exports, "MXDartClass", { enumerable: true, get: function () { return mxflutter_base_1.MXDartClass; } });
Object.defineProperty(exports, "MXLifecycleDartClass", { enumerable: true, get: function () { return mxflutter_base_1.MXLifecycleDartClass; } });
Object.defineProperty(exports, "MXMirrorObjMethodCall", { enumerable: true, get: function () { return mxflutter_base_1.MXMirrorObjMethodCall; } });
Object.defineProperty(exports, "MXKReleaseMode", { enumerable: true, get: function () { return mxflutter_base_1.MXKReleaseMode; } });
Object.defineProperty(exports, "MXKProfileMode", { enumerable: true, get: function () { return mxflutter_base_1.MXKProfileMode; } });
Object.defineProperty(exports, "MXKDebugMode", { enumerable: true, get: function () { return mxflutter_base_1.MXKDebugMode; } });
Object.defineProperty(exports, "MXMirrorWidget", { enumerable: true, get: function () { return mxflutter_base_1.MXMirrorWidget; } });
Object.defineProperty(exports, "MXLifecycleWidgetBase", { enumerable: true, get: function () { return mxflutter_base_1.MXLifecycleWidgetBase; } });
Object.defineProperty(exports, "MXBaseKey", { enumerable: true, get: function () { return mxflutter_base_1.MXBaseKey; } });
const global_1 = require("./global");
Object.defineProperty(exports, "GlobalJSFlutterApp", { enumerable: true, get: function () { return global_1.GlobalJSFlutterApp; } });
const widget_1 = require("./widget/widget");
Object.defineProperty(exports, "MXJSBaseWidget", { enumerable: true, get: function () { return widget_1.MXJSBaseWidget; } });
Object.defineProperty(exports, "MXJSStatefulWidget", { enumerable: true, get: function () { return widget_1.MXJSStatefulWidget; } });
Object.defineProperty(exports, "MXJSWidgetState", { enumerable: true, get: function () { return widget_1.MXJSWidgetState; } });
Object.defineProperty(exports, "MXJSStatelessWidget", { enumerable: true, get: function () { return widget_1.MXJSStatelessWidget; } });
Object.defineProperty(exports, "MXJSLazyStatefulWapperWidget", { enumerable: true, get: function () { return widget_1.MXJSLazyStatefulWapperWidget; } });
Object.defineProperty(exports, "MXJSPageWidget", { enumerable: true, get: function () { return widget_1.MXJSPageWidget; } });
const element_1 = require("./element/element");
Object.defineProperty(exports, "MXJSBuildContext", { enumerable: true, get: function () { return element_1.MXJSBuildContext; } });
var base_app_1 = require("./core/base-app");
Object.defineProperty(exports, "MXJSFlutterApp", { enumerable: true, get: function () { return base_app_1.MXJSFlutterApp; } });
// 增加部分原名导出
const StatefulWidget = widget_1.MXJSStatefulWidget;
exports.StatefulWidget = StatefulWidget;
const State = widget_1.MXJSWidgetState;
exports.State = State;
const StatelessWidget = widget_1.MXJSStatelessWidget;
exports.StatelessWidget = StatelessWidget;
const BuildContext = element_1.MXJSBuildContext;
exports.BuildContext = BuildContext;
var mixin_1 = require("./widget/mixin");
Object.defineProperty(exports, "MXSingleTickerMixinWidget", { enumerable: true, get: function () { return mixin_1.MXSingleTickerMixinWidget; } });
Object.defineProperty(exports, "MXSingleTickerMixinWidgetState", { enumerable: true, get: function () { return mixin_1.MXSingleTickerMixinWidgetState; } });
Object.defineProperty(exports, "MXTickerMixinWidget", { enumerable: true, get: function () { return mixin_1.MXTickerMixinWidget; } });
Object.defineProperty(exports, "MXTickerMixinWidgetState", { enumerable: true, get: function () { return mixin_1.MXTickerMixinWidgetState; } });
Object.defineProperty(exports, "MXKeepAliveMixinWidget", { enumerable: true, get: function () { return mixin_1.MXKeepAliveMixinWidget; } });
Object.defineProperty(exports, "MXKeepAliveMixinWidgetState", { enumerable: true, get: function () { return mixin_1.MXKeepAliveMixinWidgetState; } });
Object.defineProperty(exports, "MXSingleTickerAndKeepAliveMixinWidget", { enumerable: true, get: function () { return mixin_1.MXSingleTickerAndKeepAliveMixinWidget; } });
Object.defineProperty(exports, "MXSingleTickerAndKeepAliveMixinWidgetState", { enumerable: true, get: function () { return mixin_1.MXSingleTickerAndKeepAliveMixinWidgetState; } });
Object.defineProperty(exports, "MXTickerAndKeepAliveMixinWidget", { enumerable: true, get: function () { return mixin_1.MXTickerAndKeepAliveMixinWidget; } });
Object.defineProperty(exports, "MXTickerAndKeepAliveMixinWidgetState", { enumerable: true, get: function () { return mixin_1.MXTickerAndKeepAliveMixinWidgetState; } });
var widgets_binding_1 = require("./widget/widgets-binding");
Object.defineProperty(exports, "WidgetsBinding", { enumerable: true, get: function () { return widgets_binding_1.WidgetsBinding; } });
Object.defineProperty(exports, "WidgetsFlutterBinding", { enumerable: true, get: function () { return widgets_binding_1.WidgetsFlutterBinding; } });
var widgets_binding_observer_1 = require("./widget/widgets-binding-observer");
Object.defineProperty(exports, "WidgetsBindingObserver", { enumerable: true, get: function () { return widgets_binding_observer_1.WidgetsBindingObserver; } });
var profile_1 = require("./widget/profile");
Object.defineProperty(exports, "MXJSProfile", { enumerable: true, get: function () { return profile_1.MXJSProfile; } });
/**
 * 全局唯一APP实例
 */
exports.default = global_1.GlobalJSFlutterApp.getInstance();
