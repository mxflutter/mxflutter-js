//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { PointerRouter } from '../gestures/pointer-router';
import { ChangeNotifier } from '../foundation/change-notifier';
import { PointerEvent } from '../gestures/events';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { MouseCursor } from './mouse-cursor';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MouseTrackerAnnotation extends MXDartClass {
  onEnter: any;
  onHover: any;
  onExit: any;
  cursor: MouseCursor;
  public constructor(namedParameters: { onEnter?: any; onHover?: any; onExit?: any; cursor?: MouseCursor } = {}) {
    super();
    this.onEnter = namedParameters.onEnter;
    this.onHover = namedParameters.onHover;
    this.onExit = namedParameters.onExit;
    this.cursor = namedParameters.cursor;
    this.className = 'MouseTrackerAnnotation';
  }
}
export { MouseTrackerAnnotation };
class _MouseState extends MXDartClass {
  annotations: any;
  latestEvent: PointerEvent;
  public constructor(namedParameters: { initialEvent?: PointerEvent } = {}) {
    super();
    this['initialEvent'] = namedParameters.initialEvent;
    this.className = '_MouseState';
  }
}
export { _MouseState };
class MouseTrackerUpdateDetails extends MXDartClass {
  lastAnnotations: any;
  nextAnnotations: any;
  previousEvent: PointerEvent;
  triggeringEvent: PointerEvent;
  static byNewFrame(
    namedParameters: { lastAnnotations?: any; nextAnnotations?: any; previousEvent?: PointerEvent } = {},
  ) {
    var jsObj = new MouseTrackerUpdateDetails();
    jsObj.lastAnnotations = namedParameters.lastAnnotations;
    jsObj.nextAnnotations = namedParameters.nextAnnotations;
    jsObj.previousEvent = namedParameters.previousEvent;
    jsObj['constructorName'] = 'byNewFrame';
    return jsObj;
  }
  static byPointerEvent(
    namedParameters: {
      lastAnnotations?: any;
      nextAnnotations?: any;
      previousEvent?: PointerEvent;
      triggeringEvent?: PointerEvent;
    } = {},
  ) {
    var jsObj = new MouseTrackerUpdateDetails();
    jsObj.lastAnnotations = namedParameters.lastAnnotations;
    jsObj.nextAnnotations = namedParameters.nextAnnotations;
    jsObj.previousEvent = namedParameters.previousEvent;
    jsObj.triggeringEvent = namedParameters.triggeringEvent;
    jsObj['constructorName'] = 'byPointerEvent';
    return jsObj;
  }
}
export { MouseTrackerUpdateDetails };
class BaseMouseTracker extends ChangeNotifier {
  annotationFinder: any;
  router: PointerRouter;
  hasScheduledPostFrameCheck: boolean;
  mouseStates: Map<any, any>;
  debugDuringDeviceUpdate: boolean;
  public constructor(_router?: PointerRouter, annotationFinder?: any) {
    super();
    this.router = _router;
    this.annotationFinder = annotationFinder;
    this.className = 'BaseMouseTracker';
  }
}
export { BaseMouseTracker };
abstract class _MouseTrackerEventMixin extends BaseMouseTracker {}
export { _MouseTrackerEventMixin };
class MouseTracker extends BaseMouseTracker {
  public constructor(router?: PointerRouter, annotationFinder?: any) {
    super();
    this['router'] = router;
    this['annotationFinder'] = annotationFinder;
    this.className = 'MouseTracker';
  }
}
export { MouseTracker };
