//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PointerEnterEvent, PointerExitEvent } from '../gestures/events';
import { Duration } from '../../../mx-dart-sdk';
import { MouseCursor } from '../rendering/mouse-cursor';
import { FocusNode, FocusHighlightMode } from './focus-manager';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { StatefulWidget$, Widget, State$, BuildContext$, InheritedElement, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Intent extends MXDartClass {
  static get doNothing() {
    var jsObj = new DoNothingIntent();
    jsObj['className'] = 'Intent';
    jsObj['constructorName'] = 'doNothing';
    return jsObj;
  }
}
export { Intent };
abstract class Action extends MXDartClass {
  listeners: any;
}
export { Action };
class ActionListener extends StatefulWidget$ {
  listener: any;
  action: Action;
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; listener?: any; action?: Action; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.listener = namedParameters.listener;
    this.action = namedParameters.action;
    this.child = namedParameters.child;
    this.className = 'ActionListener';
  }
}
export { ActionListener };
class _ActionListenerState extends State$ {}
export { _ActionListenerState };
abstract class ContextAction extends Action {}
export { ContextAction };
class CallbackAction extends Action {
  onInvoke: any;
  public constructor(namedParameters: { onInvoke?: any } = {}) {
    super();
    this.onInvoke = namedParameters.onInvoke;
    this.className = 'CallbackAction';
  }
}
export { CallbackAction };
class ActionDispatcher extends MXDartClass {}
export { ActionDispatcher };
class Actions extends StatefulWidget$ {
  dispatcher: ActionDispatcher;
  actions: Map<any, any>;
  child: MXWidget;
  public constructor(
    namedParameters: { key?: Key; dispatcher?: ActionDispatcher; actions?: Map<any, any>; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.dispatcher = namedParameters.dispatcher;
    this.actions = namedParameters.actions;
    this.child = namedParameters.child;
    this.className = 'Actions';
  }
}
export { Actions };
class _ActionsState extends State$ {
  listenedActions: Set<any>;
  rebuildKey: any;
}
export { _ActionsState };
class _ActionsMarker extends InheritedWidget {
  dispatcher: ActionDispatcher;
  actions: Map<any, any>;
  rebuildKey: any;
  public constructor(
    namedParameters: {
      dispatcher?: ActionDispatcher;
      actions?: Map<any, any>;
      rebuildKey?: any;
      key?: Key;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.dispatcher = namedParameters.dispatcher;
    this.actions = namedParameters.actions;
    this.rebuildKey = namedParameters.rebuildKey;
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = '_ActionsMarker';
  }
}
export { _ActionsMarker };
class FocusableActionDetector extends StatefulWidget$ {
  enabled: boolean;
  focusNode: FocusNode;
  autofocus: boolean;
  actions: Map<any, any>;
  shortcuts: Map<any, any>;
  onShowFocusHighlight: any;
  onShowHoverHighlight: any;
  onFocusChange: any;
  mouseCursor: MouseCursor;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      enabled?: boolean;
      focusNode?: FocusNode;
      autofocus?: boolean;
      shortcuts?: Map<any, any>;
      actions?: Map<any, any>;
      onShowFocusHighlight?: any;
      onShowHoverHighlight?: any;
      onFocusChange?: any;
      mouseCursor?: MouseCursor;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.enabled = namedParameters.enabled;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.shortcuts = namedParameters.shortcuts;
    this.actions = namedParameters.actions;
    this.onShowFocusHighlight = namedParameters.onShowFocusHighlight;
    this.onShowHoverHighlight = namedParameters.onShowHoverHighlight;
    this.onFocusChange = namedParameters.onFocusChange;
    this.mouseCursor = namedParameters.mouseCursor;
    this.child = namedParameters.child;
    this.className = 'FocusableActionDetector';
  }
}
export { FocusableActionDetector };
class _FocusableActionDetectorState extends State$ {
  canShowHighlight: boolean;
  hovering: boolean;
  focused: boolean;
}
export { _FocusableActionDetectorState };
class DoNothingIntent extends Intent {
  public constructor() {
    super();
    this.className = 'DoNothingIntent';
  }
}
export { DoNothingIntent };
class DoNothingAction extends Action {}
export { DoNothingAction };
class ActivateIntent extends Intent {}
export { ActivateIntent };
abstract class ActivateAction extends Action {}
export { ActivateAction };
class SelectIntent extends Intent {}
export { SelectIntent };
abstract class SelectAction extends Action {}
export { SelectAction };
class DismissIntent extends Intent {}
export { DismissIntent };
abstract class DismissAction extends Action {}
export { DismissAction };
