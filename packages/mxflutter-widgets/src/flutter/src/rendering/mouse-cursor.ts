//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticLevel, DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BaseMouseTracker, MouseTrackerUpdateDetails, MouseTrackerAnnotation } from './mouse-tracking';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class MouseTrackerCursorMixin extends BaseMouseTracker {
  lastSession: Map<any, any>;
}
export { MouseTrackerCursorMixin };
abstract class MouseCursorSession extends MXDartClass {
  cursor: MouseCursor;
  device: number;
}
export { MouseCursorSession };
abstract class MouseCursor extends MXDartClass {
  static get defer() {
    var jsObj = new (class MXMouseCursor extends MouseCursor {})();
    jsObj['className'] = 'MouseCursor';
    jsObj['constructorName'] = 'defer';
    return jsObj;
  }
  static get uncontrolled() {
    var jsObj = new (class MXMouseCursor extends MouseCursor {})();
    jsObj['className'] = 'MouseCursor';
    jsObj['constructorName'] = 'uncontrolled';
    return jsObj;
  }
}
export { MouseCursor };
class _DeferringMouseCursor extends MouseCursor {}
export { _DeferringMouseCursor };
class _NoopMouseCursorSession extends MouseCursorSession {
  public constructor(cursor?: _NoopMouseCursor, device?: number) {
    super();
    this['cursor'] = cursor;
    this['device'] = device;
    this.className = '_NoopMouseCursorSession';
  }
}
export { _NoopMouseCursorSession };
class _NoopMouseCursor extends MouseCursor {}
export { _NoopMouseCursor };
class _SystemMouseCursorSession extends MouseCursorSession {
  public constructor(cursor?: SystemMouseCursor, device?: number) {
    super();
    this['cursor'] = cursor;
    this['device'] = device;
    this.className = '_SystemMouseCursorSession';
  }
}
export { _SystemMouseCursorSession };
class SystemMouseCursor extends MouseCursor {
  kind: string;
}
export { SystemMouseCursor };
class SystemMouseCursors extends MXDartClass {
  static get none() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'none';
    return jsObj;
  }
  static get basic() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'basic';
    return jsObj;
  }
  static get click() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'click';
    return jsObj;
  }
  static get text() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'text';
    return jsObj;
  }
  static get forbidden() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'forbidden';
    return jsObj;
  }
  static get grab() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'grab';
    return jsObj;
  }
  static get grabbing() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'grabbing';
    return jsObj;
  }
  static get horizontalDoubleArrow() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'horizontalDoubleArrow';
    return jsObj;
  }
  static get verticalDoubleArrow() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'verticalDoubleArrow';
    return jsObj;
  }
}
export { SystemMouseCursors };
