// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { BaseMouseTracker } from './mouse-tracking';
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
    var jsObj = new class MXMouseCursor extends MouseCursor {}();
    jsObj['className'] = 'MouseCursor';
    jsObj['constructorName'] = 'defer';
    return jsObj;
  }
  static get uncontrolled() {
    var jsObj = new class MXMouseCursor extends MouseCursor {}();
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
  static get forbidden() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'forbidden';
    return jsObj;
  }
  static get wait() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'wait';
    return jsObj;
  }
  static get progress() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'progress';
    return jsObj;
  }
  static get contextMenu() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'contextMenu';
    return jsObj;
  }
  static get help() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'help';
    return jsObj;
  }
  static get text() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'text';
    return jsObj;
  }
  static get verticalText() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'verticalText';
    return jsObj;
  }
  static get cell() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'cell';
    return jsObj;
  }
  static get precise() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'precise';
    return jsObj;
  }
  static get move() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'move';
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
  static get noDrop() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'noDrop';
    return jsObj;
  }
  static get alias() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'alias';
    return jsObj;
  }
  static get copy() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static get disappearing() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'disappearing';
    return jsObj;
  }
  static get allScroll() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'allScroll';
    return jsObj;
  }
  static get resizeLeftRight() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeLeftRight';
    return jsObj;
  }
  static get resizeUpDown() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeUpDown';
    return jsObj;
  }
  static get resizeUpLeftDownRight() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeUpLeftDownRight';
    return jsObj;
  }
  static get resizeUpRightDownLeft() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeUpRightDownLeft';
    return jsObj;
  }
  static get resizeUp() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeUp';
    return jsObj;
  }
  static get resizeDown() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeDown';
    return jsObj;
  }
  static get resizeLeft() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeLeft';
    return jsObj;
  }
  static get resizeRight() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeRight';
    return jsObj;
  }
  static get resizeUpLeft() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeUpLeft';
    return jsObj;
  }
  static get resizeUpRight() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeUpRight';
    return jsObj;
  }
  static get resizeDownLeft() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeDownLeft';
    return jsObj;
  }
  static get resizeDownRight() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeDownRight';
    return jsObj;
  }
  static get resizeColumn() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeColumn';
    return jsObj;
  }
  static get resizeRow() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'resizeRow';
    return jsObj;
  }
  static get zoomIn() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'zoomIn';
    return jsObj;
  }
  static get zoomOut() {
    var jsObj = new SystemMouseCursor();
    jsObj['className'] = 'SystemMouseCursors';
    jsObj['constructorName'] = 'zoomOut';
    return jsObj;
  }
}
export { SystemMouseCursors };
