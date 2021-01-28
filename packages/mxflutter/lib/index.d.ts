import * as FlutterWidgets from '@mxflutter/mxflutter-widgets';
declare const Flutter: typeof FlutterWidgets;
export { Flutter };
import { bridgeMXNativeJSFlutterApp, invokeFlutterCommonChannel, invokeFlutterFFIPort, invokeMirrorObjMethod, invokeMirrorObjMethodSync, createMirrorObj, releaseMirrorObj, MXJSLog, MXMirror, MXDartClass, MXLifecycleDartClass, MXMirrorObjMethodCall, MXKReleaseMode, MXKProfileMode, MXKDebugMode, MXMirrorWidget, MXLifecycleWidgetBase, MXBaseKey } from '@mxflutter/mxflutter-base';
import { GlobalJSFlutterApp } from './global';
export { bridgeMXNativeJSFlutterApp, invokeFlutterCommonChannel, invokeFlutterFFIPort, invokeMirrorObjMethod, invokeMirrorObjMethodSync, createMirrorObj, releaseMirrorObj, MXJSLog, MXMirror, MXDartClass, MXLifecycleDartClass, MXMirrorObjMethodCall, MXKReleaseMode, MXKProfileMode, MXKDebugMode, MXMirrorWidget, MXLifecycleWidgetBase, MXBaseKey, };
import { MXJSBaseWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSStatelessWidget, MXJSLazyStatefulWapperWidget, MXJSPageWidget } from './widget/widget';
import { MXJSBuildContext } from './element/element';
export { MXJSFlutterApp } from './core/base-app';
declare const StatefulWidget: typeof MXJSStatefulWidget;
declare const State: typeof MXJSWidgetState;
declare const StatelessWidget: typeof MXJSStatelessWidget;
declare const BuildContext: typeof MXJSBuildContext;
export { StatefulWidget, State, StatelessWidget, BuildContext, MXJSStatefulWidget, MXJSWidgetState, MXJSStatelessWidget, MXJSBuildContext, MXJSBaseWidget, MXJSLazyStatefulWapperWidget, MXJSPageWidget, };
export { MXSingleTickerMixinWidget, MXSingleTickerMixinWidgetState, MXTickerMixinWidget, MXTickerMixinWidgetState, MXKeepAliveMixinWidget, MXKeepAliveMixinWidgetState, MXSingleTickerAndKeepAliveMixinWidget, MXSingleTickerAndKeepAliveMixinWidgetState, MXTickerAndKeepAliveMixinWidget, MXTickerAndKeepAliveMixinWidgetState, } from './widget/mixin';
export { WidgetsBinding, WidgetsFlutterBinding } from './widget/widgets-binding';
export { WidgetsBindingObserver } from './widget/widgets-binding-observer';
export { GlobalJSFlutterApp };
export { MXJSProfile } from './widget/profile';
declare const _default: GlobalJSFlutterApp;
/**
 * 全局唯一APP实例
 */
export default _default;
