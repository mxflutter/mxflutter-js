// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MessageCodec } from './message-codec';
import { TextDirection, Size } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PlatformViewsRegistry extends MXDartClass {
  nextPlatformViewId: number;
}
export { PlatformViewsRegistry };
class PlatformViewsService extends MXDartClass {
  focusCallbacks: Map<any, any>;
}
export { PlatformViewsService };
class AndroidPointerProperties extends MXDartClass {
  id: number;
  toolType: number;
  public constructor(namedParameters: {id?: number, toolType?: number} = {}) {
    super();
    this.id = namedParameters.id;
    this.toolType = namedParameters.toolType;
    this.className = 'AndroidPointerProperties';
  }
  static get kToolTypeUnknown() {
    return 0;
  }
  static get kToolTypeFinger() {
    return 1;
  }
  static get kToolTypeStylus() {
    return 2;
  }
  static get kToolTypeMouse() {
    return 3;
  }
  static get kToolTypeEraser() {
    return 4;
  }
}
export { AndroidPointerProperties };
class AndroidPointerCoords extends MXDartClass {
  orientation: number;
  pressure: number;
  size: number;
  toolMajor: number;
  toolMinor: number;
  touchMajor: number;
  touchMinor: number;
  x: number;
  y: number;
  public constructor(namedParameters: {orientation?: number, pressure?: number, size?: number, toolMajor?: number, toolMinor?: number, touchMajor?: number, touchMinor?: number, x?: number, y?: number} = {}) {
    super();
    this.orientation = namedParameters.orientation;
    this.pressure = namedParameters.pressure;
    this.size = namedParameters.size;
    this.toolMajor = namedParameters.toolMajor;
    this.toolMinor = namedParameters.toolMinor;
    this.touchMajor = namedParameters.touchMajor;
    this.touchMinor = namedParameters.touchMinor;
    this.x = namedParameters.x;
    this.y = namedParameters.y;
    this.className = 'AndroidPointerCoords';
  }
}
export { AndroidPointerCoords };
class AndroidMotionEvent extends MXDartClass {
  downTime: number;
  eventTime: number;
  action: number;
  pointerCount: number;
  pointerProperties: Array<any>;
  pointerCoords: Array<any>;
  metaState: number;
  buttonState: number;
  xPrecision: number;
  yPrecision: number;
  deviceId: number;
  edgeFlags: number;
  source: number;
  flags: number;
  motionEventId: number;
  public constructor(namedParameters: {downTime?: number, eventTime?: number, action?: number, pointerCount?: number, pointerProperties?: Array<any>, pointerCoords?: Array<any>, metaState?: number, buttonState?: number, xPrecision?: number, yPrecision?: number, deviceId?: number, edgeFlags?: number, source?: number, flags?: number, motionEventId?: number} = {}) {
    super();
    this.downTime = namedParameters.downTime;
    this.eventTime = namedParameters.eventTime;
    this.action = namedParameters.action;
    this.pointerCount = namedParameters.pointerCount;
    this.pointerProperties = namedParameters.pointerProperties;
    this.pointerCoords = namedParameters.pointerCoords;
    this.metaState = namedParameters.metaState;
    this.buttonState = namedParameters.buttonState;
    this.xPrecision = namedParameters.xPrecision;
    this.yPrecision = namedParameters.yPrecision;
    this.deviceId = namedParameters.deviceId;
    this.edgeFlags = namedParameters.edgeFlags;
    this.source = namedParameters.source;
    this.flags = namedParameters.flags;
    this.motionEventId = namedParameters.motionEventId;
    this.className = 'AndroidMotionEvent';
  }
}
export { AndroidMotionEvent };
enum _AndroidViewState {
  waitingForSize = '{ "_name": "_AndroidViewState.waitingForSize", "index": 0 }',
  creating = '{ "_name": "_AndroidViewState.creating", "index": 1 }',
  created = '{ "_name": "_AndroidViewState.created", "index": 2 }',
  disposed = '{ "_name": "_AndroidViewState.disposed", "index": 3 }',
};

export { _AndroidViewState };
class _AndroidMotionEventConverter extends MXDartClass {
  pointerPositions: Map<any, any>;
  pointerProperties: Map<any, any>;
  usedAndroidPointerIds: Set<any>;
  pointTransformer: any;
  downTimeMillis: number;
}
export { _AndroidMotionEventConverter };
abstract class PlatformViewController extends MXDartClass {}
export { PlatformViewController };
abstract class AndroidViewController extends PlatformViewController {
  viewId: number;
  viewType: string;
  motionEventConverter: _AndroidMotionEventConverter;
  layoutDirection: TextDirection;
  state: _AndroidViewState;
  creationParams: any;
  creationParamsCodec: MessageCodec;
  platformViewCreatedCallbacks: Array<any>;
  static get kActionDown() {
    return 0;
  }
  static get kActionUp() {
    return 1;
  }
  static get kActionMove() {
    return 2;
  }
  static get kActionCancel() {
    return 3;
  }
  static get kActionPointerDown() {
    return 5;
  }
  static get kActionPointerUp() {
    return 6;
  }
  static get kAndroidLayoutDirectionLtr() {
    return 0;
  }
  static get kAndroidLayoutDirectionRtl() {
    return 1;
  }
}
export { AndroidViewController };
class SurfaceAndroidViewController extends AndroidViewController {}
export { SurfaceAndroidViewController };
class TextureAndroidViewController extends AndroidViewController {
  textureId: number;
  size: Size;
}
export { TextureAndroidViewController };
class UiKitViewController extends MXDartClass {
  id: number;
  debugDisposed: boolean;
  layoutDirection: TextDirection;
}
export { UiKitViewController };
