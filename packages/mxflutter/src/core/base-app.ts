//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSLog, MXKDebugMode } from '@mxflutter/mxflutter-base';
import { MXJSBuildOwner } from './build-owner';
import { MXJSRootMgrElement, MXJSElement } from '../element/element';
import { MXJSBaseWidget } from '../widget/widget';
import { WidgetsFlutterBinding } from '../widget/widgets-binding';

/**
 * MXJSFlutterApp 用于开发者的JS代码和Flutter MXUIEngine的交互
 * 开发者需要继承MXJSFlutterApp，重载createJSWidgetWithName函数，根据WidgetName创建框架需要的Widget
 */
export abstract class MXJSFlutterApp {
  public widgetsBinding: WidgetsFlutterBinding;
  public name: string;
  public initialRoute: string;

  public constructor(name: string, initialRoute: string) {
    this.name = name;
    this.initialRoute = initialRoute;

    // 初始化WidgetsBinding
    this.initWidgetsBinding();
  }

  public nativeCall(args) {
    if (this.widgetsBinding == null) {
      var result = this.initWidgetsBinding();
      if (result === false) {
        return null;
      }
    }
    return this.widgetsBinding.nativeCall(args);
  }

  private initWidgetsBinding() {
    // 如果是native侧预加载了js引擎，flutterAppEngine此时尚未创建，所以不能创建WidgetsBinding，等后续用使用再初始化
    var isFlutterAppEngineSetup = globalThis.MXJSAPI.isFlutterAppEngineSetup;
    if (isFlutterAppEngineSetup !== true) {
      return false;
    }

    // 初始化WidgetsBinding
    this.widgetsBinding = WidgetsFlutterBinding.ensureInitialized();
    this.widgetsBinding.jsFlutterApp = this;
    return true;
  }

  /**
   * 子类需要重载
   * 当Flutter通过MXJSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);
   * push页面时，在这里根据widgetName 创建你自己的Widget
   * @param widgetName
   * @param flutterPushParams
   */
  abstract createJSWidgetWithName(widgetName: string, flutterPushParams: Object): MXJSBaseWidget;
}
