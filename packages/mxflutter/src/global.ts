//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSFlutterApp } from './core/base-app';
import { MXJSBaseWidget } from './widget/widget';
import { runApp } from '@mxflutter/mxflutter-base';

interface PageModuleInfo {
  name: string;
  RootWidget: typeof MXJSBaseWidget;
}

/** *
 * JSCore/V8实例, 对应一个APP实例
 */
export class GlobalJSFlutterApp extends MXJSFlutterApp {
  private static instance: GlobalJSFlutterApp;

  public static runApp() {
    runApp(GlobalJSFlutterApp.getInstance());
  }

  public static getInstance(): GlobalJSFlutterApp {
    if (!GlobalJSFlutterApp.instance) {
      GlobalJSFlutterApp.instance = new GlobalJSFlutterApp();
    }
    return GlobalJSFlutterApp.instance;
  }

  private widgetPageModuleMap: Map<string, PageModuleInfo>;

  private constructor() {
    super('globalapp', '');
    this.widgetPageModuleMap = new Map();
  }

  public regist(moduleInfo: PageModuleInfo) {
    if (this.widgetPageModuleMap.has(moduleInfo.name)) {
      console.warn(`已存在同名模块[${moduleInfo.name}]`);
      return;
    }
    this.widgetPageModuleMap.set(moduleInfo.name, moduleInfo);
  }

  // 子类重写,当Flutter通过
  // MXJSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
  // 在这里根据bidID，widgetName 创建你自己的Widget
  public createJSWidgetWithName(widgetName, flutterPushParams, bizPath) {
    // TODO：这里处理需要挂载的业务版本，
    const ignoreLoadBundleJs = globalThis.MXJSAPI.ignoreLoadBundleJs ? globalThis.MXJSAPI.ignoreLoadBundleJs() : false;
    if (!ignoreLoadBundleJs) {
      const commonPath = `${widgetName}/bundle-${widgetName}.js`;
      let bundleFile = bizPath != null ? `./${bizPath}/` : `./`;
      bundleFile += commonPath;
      // Native 真实加载加载业务包
      globalThis.MXJSAPI.require(bundleFile);
    }
    if (!this.widgetPageModuleMap.has(widgetName)) {
      console.warn(`模块[${widgetName}]没有注册`);
      return null;
    }
    // 业务包加载完成后， 会把自已的入口widget注册进来
    const Widget = this.widgetPageModuleMap.get(widgetName)?.RootWidget as any;
    if (!Widget) {
      return null;
    }

    const widget = new Widget(widgetName);
    widget.flutterPushParams = flutterPushParams;
    return widget;
  }
}

globalThis.MXJSAPI.invokeNativeCall = (messageStr: string) => {
  GlobalJSFlutterApp.getInstance().nativeCall(messageStr);
};
