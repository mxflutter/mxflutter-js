//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass } from './base-type';
import { MXJSLog } from '../log';

class MXMirror {
  private static instance: MXMirror | null = null;
  public static getInstance(): MXMirror {
    if (!this.instance) {
      this.instance = new MXMirror();
    }
    return this.instance;
  }

  private mirrorIdFeed: number;
  private mirrorObjMap: Map<string, MXDartClass>;

  private callbackIdFeed: number;
  private callbackId2fun: Map<string, Function>;

  private funcName2fun: Map<string, Function>;

  public constructor() {
    this.mirrorIdFeed = 0;
    this.mirrorObjMap = new Map();

    this.callbackIdFeed = 0;
    this.callbackId2fun = new Map();

    this.funcName2fun = new Map();
  }

  // Object 逻辑
  public addMirrorObject(obj: MXDartClass) {
    this.mirrorIdFeed = this.mirrorIdFeed + 1;
    obj.mirrorID = `${this.mirrorIdFeed}`;

    this.mirrorObjMap.set(obj.mirrorID, obj);
    return obj.mirrorID;
  }

  public getMirrorObject(mirrorId: string) {
    return this.mirrorObjMap.get(mirrorId);
  }

  public removeMirrorObject(obj: MXDartClass) {
    this.mirrorObjMap.delete(obj.mirrorID);
  }

  public removeMirrorObjectWithID(mirrorId: string) {
    this.mirrorObjMap.delete(mirrorId);
  }

  public removeMirrorObjectWithIDList(mirrorIdList: []) {
    mirrorIdList.forEach((mirrorId) => {
      this.mirrorObjMap.delete(mirrorId);
    });
  }

  // Method 逻辑 JS->Flutter
  public generateCallbackId(): string {
    this.callbackIdFeed = this.callbackIdFeed + 1;
    return `${this.callbackIdFeed}`;
  }

  public addCallback(callback: Function): string {
    const callbackId = this.generateCallbackId();
    this.callbackId2fun.set(callbackId, callback);
    return callbackId;
  }

  public invokeCallback(mirrorID: string, funcName: string, callbackID: string, args: any): any {
    // 如果有mirrorObj和funcName，则通过调用mirrorObj的funcName方法
    const mirrorObj = this.getMirrorObject(mirrorID);
    if (mirrorObj !== null && funcName !== null) {
      return mirrorObj![funcName](args);
    }

    const callback = this.findCallback(callbackID);
    if (callback) {
      return callback(args);
    }

    //
    MXJSLog.error(`MXJSCallbackMgr::invokeCallback error: callback is undefined :${callback}`);
  }

  public findCallback(callbackId: string) {
    return this.callbackId2fun.get(callbackId);
  }

  public canInvoke(callbackId: string) {
    return this.callbackId2fun.has(callbackId);
  }

  public removeCallback(callbackId: string) {
    this.callbackId2fun.delete(callbackId);
  }

  // Flutter->JS
  public flutterCallInvokeJSMirrorObjMethod(mirrorMethodCall: {
    mirrorID: string;
    funcName: string;
    callbackID: string;
    args: any;
  }) {
    const { mirrorID, funcName, callbackID, args } = mirrorMethodCall;
    this.invokeCallback(mirrorID, funcName, callbackID, args);
  }

  // 通过funcName注册方法
  public registerFunctionWithFuncName(funcName: string, callback: Function): void {
    this.funcName2fun.set(funcName, callback);
  }

  // 查找funcName的注册方法
  public findFunctionWithFuncName(funcName: string): Function | undefined {
    return this.funcName2fun.get(funcName);
  }

  // 移除funcName注册方法
  public removeFunctionWithFuncName(funcName: string): void {
    this.funcName2fun.delete(funcName);
  }

  // Flutter->JS，调用注册在funcName2fun里的方法
  public flutterCallFuncNameMethod(mirrorMethodCall: { funcName: string; args: any }) {
    const { funcName, args } = mirrorMethodCall;
    const func = this.findFunctionWithFuncName(funcName);
    if (func) {
      return func(args);
    }
    MXJSLog.error(`MXMirror::flutterCallRegisterFuncNameMethod error: func is undefined :${mirrorMethodCall}`);
  }

  // 重置mirror数据
  public resetData() {
    this.mirrorIdFeed = 0;
    this.mirrorObjMap.clear();

    this.callbackIdFeed = 0;
    this.callbackId2fun.clear();

    this.funcName2fun.clear();
  }
}

export { MXMirror };
