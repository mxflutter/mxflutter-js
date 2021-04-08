"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.mxMirrorClassNameKey = exports.MXMirrorObjMethodCall = exports.MXLifecycleDartClass = exports.MXLifecycleDartClassBase = exports.MXDartClass = void 0;
const mirror_1 = require("./mirror");
const bridge_1 = require("../bridge");
// 字段Key值与Flutter库 Mirror 模块的解析规则一致
const mxMirrorWidgetIDKey = 'widgetID';
const mxMirrorMirrorIDKey = 'mirrorID';
const mxMirrorClassNameKey = 'className';
exports.mxMirrorClassNameKey = mxMirrorClassNameKey;
const mxMirrorFuncNameKey = 'funcName';
const mxMirrorArgsKey = 'args';
// TODO rename
class MXMirrorObjMethodCall {
    constructor({ widgetID, mirrorID, className, funcName, args, } = {}) {
        this.widgetID = widgetID;
        this.mirrorID = mirrorID;
        this.className = className;
        this.funcName = funcName;
        this.args = args;
    }
    toJsonMap() {
        return {
            mxMirrorWidgetIDKey: this.widgetID,
            mxMirrorMirrorIDKey: this.mirrorID,
            mxMirrorClassNameKey: this.className,
            mxMirrorFuncNameKey: this.funcName,
            mxMirrorArgsKey: this.args,
        };
    }
}
exports.MXMirrorObjMethodCall = MXMirrorObjMethodCall;
// mirror dart class
// 不需要保持生命周期，js->dart 生成后使用一次
class MXDartClass {
    constructor() {
        this.className = this.constructor.name;
    }
}
exports.MXDartClass = MXDartClass;
// 提供创建flutter侧镜像对象，调用函数的工具接口
class MXLifecycleDartClassBase extends MXDartClass {
    createMirrorObj(newMirrorObjCall) {
        this.fillInvokeMethodArgs(newMirrorObjCall);
        bridge_1.createMirrorObj(newMirrorObjCall);
    }
    /// 调用Flutter侧MirrorObj方法。Native调用Flutter方法，通过channel实现
    invokeMirrorObjMethod(methodArgs, callback) {
        this.fillInvokeMethodArgs(methodArgs);
        bridge_1.invokeMirrorObjMethod(methodArgs, callback);
    }
    invokeMirrorObjMethodAsyc(methodArgs) {
        return new Promise((resolve) => {
            this.invokeMirrorObjMethod(methodArgs, (value) => {
                resolve(value);
            });
        });
    }
    /// 同步调用Flutter侧MirrorObj方法。Native调用Flutter方法，通过ffi的Port实现
    invokeMirrorObjMethodSync(methodArgs) {
        this.fillInvokeMethodArgs(methodArgs);
        return bridge_1.invokeMirrorObjMethodSync(methodArgs);
    }
    addCallback(callback) {
        return mirror_1.MXMirror.getInstance().addCallback(callback);
    }
    removeCallback(callbackID) {
        return mirror_1.MXMirror.getInstance().removeCallback(callbackID);
    }
    // 释放dart侧对象
    release() {
        // TODO: invoke flutter release obj
        mirror_1.MXMirror.getInstance().removeMirrorObject(this);
        bridge_1.releaseMirrorObj(new MXMirrorObjMethodCall({ mirrorID: this.mirrorID }));
    }
    fillInvokeMethodArgs(args) {
        if (!args.mirrorID) {
            args.mirrorID = this.mirrorID;
        }
        if (!args.className) {
            args.className = this.constructor.name;
        }
    }
}
exports.MXLifecycleDartClassBase = MXLifecycleDartClassBase;
// mirror dart class
// 需要保持生命周期，通过mirrorID对应js实例和dart实例，函数相互调用
// 在构造函数中，传递创建Dart对象的参数
// 不在Widget build体系中，独立使用的镜像对象，继承此类。在Widget build体系中的，需继承于MXLifecycleWidgetBase
// 用法参照 WidgetsBinding
class MXLifecycleDartClass extends MXLifecycleDartClassBase {
    constructor(newDartMirrorObjCall) {
        super();
        // 添加至mirror模块
        mirror_1.MXMirror.getInstance().addMirrorObject(this);
        // 通知flutter侧创建mirrorObj
        this.createMirrorObj(newDartMirrorObjCall);
    }
}
exports.MXLifecycleDartClass = MXLifecycleDartClass;
