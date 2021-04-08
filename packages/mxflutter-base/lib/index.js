"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXBuildProfileInfo = exports.MXLifecycleWidgetBase = exports.MXMirrorWidget = exports.MXBaseKey = exports.MXWidget = exports.releaseMirrorObj = exports.createMirrorObj = exports.invokeMirrorObjMethodSync = exports.invokeMirrorObjMethod = exports.invokeFlutterFFIPort = exports.invokeFlutterCommonChannel = exports.bridgeMXNativeJSFlutterApp = exports.runApp = exports.MXKDebugMode = exports.MXKProfileMode = exports.MXKReleaseMode = exports.mxMirrorClassNameKey = exports.MXMirrorObjMethodCall = exports.MXLifecycleDartClass = exports.MXLifecycleDartClassBase = exports.MXDartClass = exports.MXMirror = exports.MXJSLog = void 0;
var log_1 = require("./log");
Object.defineProperty(exports, "MXJSLog", { enumerable: true, get: function () { return log_1.MXJSLog; } });
var mirror_1 = require("./mirror/mirror");
Object.defineProperty(exports, "MXMirror", { enumerable: true, get: function () { return mirror_1.MXMirror; } });
var base_type_1 = require("./mirror/base-type");
Object.defineProperty(exports, "MXDartClass", { enumerable: true, get: function () { return base_type_1.MXDartClass; } });
Object.defineProperty(exports, "MXLifecycleDartClassBase", { enumerable: true, get: function () { return base_type_1.MXLifecycleDartClassBase; } });
Object.defineProperty(exports, "MXLifecycleDartClass", { enumerable: true, get: function () { return base_type_1.MXLifecycleDartClass; } });
Object.defineProperty(exports, "MXMirrorObjMethodCall", { enumerable: true, get: function () { return base_type_1.MXMirrorObjMethodCall; } });
Object.defineProperty(exports, "mxMirrorClassNameKey", { enumerable: true, get: function () { return base_type_1.mxMirrorClassNameKey; } });
var flutter_environment_1 = require("./platform/flutter-environment");
Object.defineProperty(exports, "MXKReleaseMode", { enumerable: true, get: function () { return flutter_environment_1.MXKReleaseMode; } });
Object.defineProperty(exports, "MXKProfileMode", { enumerable: true, get: function () { return flutter_environment_1.MXKProfileMode; } });
Object.defineProperty(exports, "MXKDebugMode", { enumerable: true, get: function () { return flutter_environment_1.MXKDebugMode; } });
var bridge_1 = require("./bridge");
Object.defineProperty(exports, "runApp", { enumerable: true, get: function () { return bridge_1.runApp; } });
Object.defineProperty(exports, "bridgeMXNativeJSFlutterApp", { enumerable: true, get: function () { return bridge_1.bridgeMXNativeJSFlutterApp; } });
Object.defineProperty(exports, "invokeFlutterCommonChannel", { enumerable: true, get: function () { return bridge_1.invokeFlutterCommonChannel; } });
Object.defineProperty(exports, "invokeFlutterFFIPort", { enumerable: true, get: function () { return bridge_1.invokeFlutterFFIPort; } });
Object.defineProperty(exports, "invokeMirrorObjMethod", { enumerable: true, get: function () { return bridge_1.invokeMirrorObjMethod; } });
Object.defineProperty(exports, "invokeMirrorObjMethodSync", { enumerable: true, get: function () { return bridge_1.invokeMirrorObjMethodSync; } });
Object.defineProperty(exports, "createMirrorObj", { enumerable: true, get: function () { return bridge_1.createMirrorObj; } });
Object.defineProperty(exports, "releaseMirrorObj", { enumerable: true, get: function () { return bridge_1.releaseMirrorObj; } });
var base_type_2 = require("./widget/base-type");
Object.defineProperty(exports, "MXWidget", { enumerable: true, get: function () { return base_type_2.MXWidget; } });
Object.defineProperty(exports, "MXBaseKey", { enumerable: true, get: function () { return base_type_2.MXBaseKey; } });
Object.defineProperty(exports, "MXMirrorWidget", { enumerable: true, get: function () { return base_type_2.MXMirrorWidget; } });
Object.defineProperty(exports, "MXLifecycleWidgetBase", { enumerable: true, get: function () { return base_type_2.MXLifecycleWidgetBase; } });
Object.defineProperty(exports, "MXBuildProfileInfo", { enumerable: true, get: function () { return base_type_2.MXBuildProfileInfo; } });
