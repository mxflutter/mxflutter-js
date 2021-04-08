//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXMirror } from './mirror';
import {
  createMirrorObj as bridgeCreateMirrorObj,
  invokeMirrorObjMethod as bridgeInvokeMirrorObjMethod,
  invokeMirrorObjMethodSync as bridgeInvokeMirrorObjMethodSync,
  releaseMirrorObj as bridgeReleaseMirrorObj,
} from '../bridge';

// 字段Key值与Flutter库 Mirror 模块的解析规则一致
const mxMirrorWidgetIDKey = 'widgetID';
const mxMirrorMirrorIDKey = 'mirrorID';
const mxMirrorClassNameKey = 'className';
const mxMirrorFuncNameKey = 'funcName';
const mxMirrorArgsKey = 'args';

// TODO rename
class MXMirrorObjMethodCall {
  public widgetID?: string;
  public mirrorID?: string;
  public className?: string;
  public funcName?: string;
  public args: any;

  public constructor({
    widgetID,
    mirrorID,
    className,
    funcName,
    args,
  }: { widgetID?: string; mirrorID?: string; className?: string; funcName?: string; args?: any } = {}) {
    this.widgetID = widgetID;
    this.mirrorID = mirrorID;
    this.className = className;
    this.funcName = funcName;
    this.args = args;
  }

  public toJsonMap(): any {
    return {
      mxMirrorWidgetIDKey: this.widgetID,
      mxMirrorMirrorIDKey: this.mirrorID,
      mxMirrorClassNameKey: this.className,
      mxMirrorFuncNameKey: this.funcName,
      mxMirrorArgsKey: this.args,
    };
  }
}

// mirror dart class
// 不需要保持生命周期，js->dart 生成后使用一次
class MXDartClass {
  public className: string;
  public mirrorID: string;
  public constructor() {
    this.className = this.constructor.name;
  }
}

// 提供创建flutter侧镜像对象，调用函数的工具接口
class MXLifecycleDartClassBase extends MXDartClass {
  public createMirrorObj(newMirrorObjCall: MXMirrorObjMethodCall) {
    this.fillInvokeMethodArgs(newMirrorObjCall);
    bridgeCreateMirrorObj(newMirrorObjCall);
  }

  /// 调用Flutter侧MirrorObj方法。Native调用Flutter方法，通过channel实现
  public invokeMirrorObjMethod(methodArgs: MXMirrorObjMethodCall, callback?: any) {
    this.fillInvokeMethodArgs(methodArgs);
    bridgeInvokeMirrorObjMethod(methodArgs, callback);
  }

  public invokeMirrorObjMethodAsyc(methodArgs: MXMirrorObjMethodCall) {
    return new Promise((resolve) => {
      this.invokeMirrorObjMethod(methodArgs, (value) => {
        resolve(value);
      });
    });
  }

  /// 同步调用Flutter侧MirrorObj方法。Native调用Flutter方法，通过ffi的Port实现
  public invokeMirrorObjMethodSync(methodArgs: MXMirrorObjMethodCall) {
    this.fillInvokeMethodArgs(methodArgs);
    return bridgeInvokeMirrorObjMethodSync(methodArgs);
  }

  public addCallback(callback: Function): string {
    return MXMirror.getInstance().addCallback(callback);
  }

  public removeCallback(callbackID: string) {
    return MXMirror.getInstance().removeCallback(callbackID);
  }

  // 释放dart侧对象
  public release() {
    // TODO: invoke flutter release obj
    MXMirror.getInstance().removeMirrorObject(this);
    bridgeReleaseMirrorObj(new MXMirrorObjMethodCall({ mirrorID: this.mirrorID }));
  }

  public fillInvokeMethodArgs(args: MXMirrorObjMethodCall) {
    if (!args.mirrorID) {
      args.mirrorID = this.mirrorID;
    }

    if (!args.className) {
      args.className = this.constructor.name;
    }
  }
}

// mirror dart class
// 需要保持生命周期，通过mirrorID对应js实例和dart实例，函数相互调用
// 在构造函数中，传递创建Dart对象的参数
// 不在Widget build体系中，独立使用的镜像对象，继承此类。在Widget build体系中的，需继承于MXLifecycleWidgetBase
// 用法参照 WidgetsBinding
abstract class MXLifecycleDartClass extends MXLifecycleDartClassBase {
  public constructor(newDartMirrorObjCall: MXMirrorObjMethodCall) {
    super();
    // 添加至mirror模块
    MXMirror.getInstance().addMirrorObject(this);

    // 通知flutter侧创建mirrorObj
    this.createMirrorObj(newDartMirrorObjCall);
  }
}

export { MXDartClass, MXLifecycleDartClassBase, MXLifecycleDartClass, MXMirrorObjMethodCall, mxMirrorClassNameKey };
