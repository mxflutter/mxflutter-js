//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import * as FlutterWidgets from '@mxflutter/mxflutter-widgets';
// Flutter 属性 导出 widgets 包内容
const Flutter = FlutterWidgets;
export { Flutter };

import {
  bridgeMXNativeJSFlutterApp,
  invokeFlutterCommonChannel,
  invokeFlutterFFIPort,
  invokeMirrorObjMethod,
  invokeMirrorObjMethodSync,
  createMirrorObj,
  releaseMirrorObj,
  MXJSLog,
  MXMirror,
  MXDartClass,
  MXLifecycleDartClass,
  MXMirrorObjMethodCall,
  MXKReleaseMode,
  MXKProfileMode,
  MXKDebugMode,
  MXMirrorWidget,
  MXLifecycleWidgetBase,
  MXBaseKey,
} from '@mxflutter/mxflutter-base';
import { GlobalJSFlutterApp } from './global';

export {
  bridgeMXNativeJSFlutterApp,
  invokeFlutterCommonChannel,
  invokeFlutterFFIPort,
  invokeMirrorObjMethod,
  invokeMirrorObjMethodSync,
  createMirrorObj,
  releaseMirrorObj,
  MXJSLog,
  MXMirror,
  MXDartClass,
  MXLifecycleDartClass,
  MXMirrorObjMethodCall,
  MXKReleaseMode,
  MXKProfileMode,
  MXKDebugMode,
  MXMirrorWidget,
  MXLifecycleWidgetBase,
  MXBaseKey,
};

import {
  MXJSBaseWidget,
  MXJSStatefulWidget,
  MXJSWidgetState,
  MXJSStatelessWidget,
  MXJSLazyStatefulWapperWidget,
  MXJSPageWidget,
} from './widget/widget';
import { MXJSBuildContext } from './element/element';
export { MXJSFlutterApp } from './core/base-app';

// 增加部分原名导出
const StatefulWidget = MXJSStatefulWidget;
const State = MXJSWidgetState;
const StatelessWidget = MXJSStatelessWidget;
const BuildContext = MXJSBuildContext;

export {
  StatefulWidget,
  State,
  StatelessWidget,
  BuildContext,
  MXJSStatefulWidget,
  MXJSWidgetState,
  MXJSStatelessWidget,
  MXJSBuildContext,
  MXJSBaseWidget,
  MXJSLazyStatefulWapperWidget,
  MXJSPageWidget,
};

export {
  MXSingleTickerMixinWidget,
  MXSingleTickerMixinWidgetState,
  MXTickerMixinWidget,
  MXTickerMixinWidgetState,
  MXKeepAliveMixinWidget,
  MXKeepAliveMixinWidgetState,
  MXSingleTickerAndKeepAliveMixinWidget,
  MXSingleTickerAndKeepAliveMixinWidgetState,
  MXTickerAndKeepAliveMixinWidget,
  MXTickerAndKeepAliveMixinWidgetState,
} from './widget/mixin';

export { WidgetsBinding, WidgetsFlutterBinding } from './widget/widgets-binding';
export { WidgetsBindingObserver } from './widget/widgets-binding-observer';

export { GlobalJSFlutterApp };

export { MXJSProfile } from './widget/profile';

/**
 * 全局唯一APP实例
 */
export default GlobalJSFlutterApp.getInstance();