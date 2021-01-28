//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXJSLog } from '../log';
class MXMirror {
    constructor() {
        this.mirrorIdFeed = 0;
        this.mirrorObjMap = new Map();
        this.callbackIdFeed = 0;
        this.callbackId2fun = new Map();
        this.funcName2fun = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new MXMirror();
        }
        return this.instance;
    }
    // Object 逻辑
    addMirrorObject(obj) {
        this.mirrorIdFeed = this.mirrorIdFeed + 1;
        obj.mirrorID = `${this.mirrorIdFeed}`;
        this.mirrorObjMap.set(obj.mirrorID, obj);
        return obj.mirrorID;
    }
    getMirrorObject(mirrorId) {
        return this.mirrorObjMap.get(mirrorId);
    }
    removeMirrorObject(obj) {
        this.mirrorObjMap.delete(obj.mirrorID);
    }
    removeMirrorObjectWithID(mirrorId) {
        this.mirrorObjMap.delete(mirrorId);
    }
    removeMirrorObjectWithIDList(mirrorIdList) {
        mirrorIdList.forEach((mirrorId) => {
            this.mirrorObjMap.delete(mirrorId);
        });
    }
    // Method 逻辑 JS->Flutter
    generateCallbackId() {
        this.callbackIdFeed = this.callbackIdFeed + 1;
        return `${this.callbackIdFeed}`;
    }
    addCallback(callback) {
        const callbackId = this.generateCallbackId();
        this.callbackId2fun.set(callbackId, callback);
        return callbackId;
    }
    invokeCallback(mirrorID, funcName, callbackID, args) {
        // 如果有mirrorObj和funcName，则通过调用mirrorObj的funcName方法
        const mirrorObj = this.getMirrorObject(mirrorID);
        if (mirrorObj !== null && funcName !== null) {
            return mirrorObj[funcName](args);
        }
        const callback = this.findCallback(callbackID);
        if (callback) {
            return callback(args);
        }
        //
        MXJSLog.error(`MXJSCallbackMgr::invokeCallback error: callback is undefined :${callback}`);
    }
    findCallback(callbackId) {
        return this.callbackId2fun.get(callbackId);
    }
    canInvoke(callbackId) {
        return this.callbackId2fun.has(callbackId);
    }
    removeCallback(callbackId) {
        this.callbackId2fun.delete(callbackId);
    }
    // Flutter->JS
    flutterCallInvokeJSMirrorObjMethod(mirrorMethodCall) {
        const { mirrorID, funcName, callbackID, args } = mirrorMethodCall;
        this.invokeCallback(mirrorID, funcName, callbackID, args);
    }
    // 通过funcName注册方法
    registerFunctionWithFuncName(funcName, callback) {
        this.funcName2fun.set(funcName, callback);
    }
    // 查找funcName的注册方法
    findFunctionWithFuncName(funcName) {
        return this.funcName2fun.get(funcName);
    }
    // 移除funcName注册方法
    removeFunctionWithFuncName(funcName) {
        this.funcName2fun.delete(funcName);
    }
    // Flutter->JS，调用注册在funcName2fun里的方法
    flutterCallFuncNameMethod(mirrorMethodCall) {
        const { funcName, args } = mirrorMethodCall;
        const func = this.findFunctionWithFuncName(funcName);
        if (func) {
            return func(args);
        }
        MXJSLog.error(`MXMirror::flutterCallRegisterFuncNameMethod error: func is undefined :${mirrorMethodCall}`);
    }
    // 重置mirror数据
    resetData() {
        this.mirrorIdFeed = 0;
        this.mirrorObjMap.clear();
        this.callbackIdFeed = 0;
        this.callbackId2fun.clear();
        this.funcName2fun.clear();
    }
}
MXMirror.instance = null;
export { MXMirror };
