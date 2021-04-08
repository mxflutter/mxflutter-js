// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { OneSequenceGestureRecognizer } from '../gestures/recognizer';
import { PointerEvent } from '../gestures/events';
import { Size, PointerDeviceKind } from '../../../mx-dart-sdk';
import { AndroidViewController, UiKitViewController, PlatformViewController } from '../services/platform-views';
import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum PlatformViewHitTestBehavior {
  opaque = '{ "_name": "PlatformViewHitTestBehavior.opaque", "index": 0 }',
  translucent = '{ "_name": "PlatformViewHitTestBehavior.translucent", "index": 1 }',
  transparent = '{ "_name": "PlatformViewHitTestBehavior.transparent", "index": 2 }',
};

export { PlatformViewHitTestBehavior };
enum _PlatformViewState {
  uninitialized = '{ "_name": "_PlatformViewState.uninitialized", "index": 0 }',
  resizing = '{ "_name": "_PlatformViewState.resizing", "index": 1 }',
  ready = '{ "_name": "_PlatformViewState.ready", "index": 2 }',
};

export { _PlatformViewState };
class RenderAndroidView extends RenderBox {
  state: _PlatformViewState;
  viewController: AndroidViewController;
  currentAndroidViewSize: Size;
  public constructor(namedParameters: {viewController?: AndroidViewController, hitTestBehavior?: PlatformViewHitTestBehavior, gestureRecognizers?: Set<any>} = {}) {
    super();
    this.viewController = namedParameters.viewController;
    this['hitTestBehavior'] = namedParameters.hitTestBehavior;
    this['gestureRecognizers'] = namedParameters.gestureRecognizers;
    this.className = 'RenderAndroidView';
  }
}
export { RenderAndroidView };
class RenderUiKitView extends RenderBox {
  viewController: UiKitViewController;
  hitTestBehavior: PlatformViewHitTestBehavior;
  gestureRecognizer: _UiKitViewGestureRecognizer;
  lastPointerDownEvent: PointerEvent;
  public constructor(namedParameters: {viewController?: UiKitViewController, hitTestBehavior?: PlatformViewHitTestBehavior, gestureRecognizers?: Set<any>} = {}) {
    super();
    this.viewController = namedParameters.viewController;
    this.hitTestBehavior = namedParameters.hitTestBehavior;
    this['gestureRecognizers'] = namedParameters.gestureRecognizers;
    this.className = 'RenderUiKitView';
  }
}
export { RenderUiKitView };
class _UiKitViewGestureRecognizer extends OneSequenceGestureRecognizer {
  gestureRecognizerFactories: Set<any>;
  gestureRecognizers: Set<any>;
  controller: UiKitViewController;
  public constructor(controller?: UiKitViewController, gestureRecognizerFactories?: Set<any>, namedParameters: {kind?: PointerDeviceKind} = {}) {
    super();
    this.controller = controller;
    this.gestureRecognizerFactories = gestureRecognizerFactories;
    this['kind'] = namedParameters.kind;
    this.className = '_UiKitViewGestureRecognizer';
  }
}
export { _UiKitViewGestureRecognizer };
class _PlatformViewGestureRecognizer extends OneSequenceGestureRecognizer {
  handlePointerEvent: any;
  cachedEvents: Map<any, any>;
  forwardedPointers: Set<any>;
  gestureRecognizerFactories: Set<any>;
  gestureRecognizers: Set<any>;
  public constructor(handlePointerEvent?: any, gestureRecognizerFactories?: Set<any>, namedParameters: {kind?: PointerDeviceKind} = {}) {
    super();
    this.handlePointerEvent = handlePointerEvent;
    this.gestureRecognizerFactories = gestureRecognizerFactories;
    this['kind'] = namedParameters.kind;
    this.className = '_PlatformViewGestureRecognizer';
  }
}
export { _PlatformViewGestureRecognizer };
class PlatformViewRenderBox extends RenderBox {
  controller: PlatformViewController;
  public constructor(namedParameters: {controller?: PlatformViewController, hitTestBehavior?: PlatformViewHitTestBehavior, gestureRecognizers?: Set<any>} = {}) {
    super();
    this.controller = namedParameters.controller;
    this['hitTestBehavior'] = namedParameters.hitTestBehavior;
    this['gestureRecognizers'] = namedParameters.gestureRecognizers;
    this.className = 'PlatformViewRenderBox';
  }
}
export { PlatformViewRenderBox };
abstract class _PlatformViewGestureMixin extends RenderBox {
  hitTestBehavior: PlatformViewHitTestBehavior;
  handlePointerEvent: any;
  gestureRecognizer: _PlatformViewGestureRecognizer;
}
export { _PlatformViewGestureMixin };
