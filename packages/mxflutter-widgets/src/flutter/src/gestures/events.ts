//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Matrix4 } from '../../../vector-math-64';
import { PointerDeviceKind, Offset } from '../../../mx-dart-sdk';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class PointerEvent extends MXDartClass {
  embedderId: number;
  timeStamp: Duration;
  pointer: number;
  kind: PointerDeviceKind;
  device: number;
  position: Offset;
  localPosition: Offset;
  delta: Offset;
  localDelta: Offset;
  buttons: number;
  down: boolean;
  obscured: boolean;
  pressure: number;
  pressureMin: number;
  pressureMax: number;
  distance: number;
  distanceMax: number;
  size: number;
  radiusMajor: number;
  radiusMinor: number;
  radiusMin: number;
  radiusMax: number;
  orientation: number;
  tilt: number;
  platformData: number;
  synthesized: boolean;
  transform: Matrix4;
  original: PointerEvent;
}
export { PointerEvent };
class PointerAddedEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      obscured?: boolean;
      pressureMin?: number;
      pressureMax?: number;
      distance?: number;
      distanceMax?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      transform?: Matrix4;
      original?: PointerAddedEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['obscured'] = namedParameters.obscured;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distance'] = namedParameters.distance;
    this['distanceMax'] = namedParameters.distanceMax;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerAddedEvent';
  }
}
export { PointerAddedEvent };
class PointerRemovedEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      obscured?: boolean;
      pressureMin?: number;
      pressureMax?: number;
      distanceMax?: number;
      radiusMin?: number;
      radiusMax?: number;
      transform?: Matrix4;
      original?: PointerRemovedEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['obscured'] = namedParameters.obscured;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distanceMax'] = namedParameters.distanceMax;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerRemovedEvent';
  }
}
export { PointerRemovedEvent };
class PointerHoverEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      delta?: Offset;
      localDelta?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressureMin?: number;
      pressureMax?: number;
      distance?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      synthesized?: boolean;
      transform?: Matrix4;
      original?: PointerHoverEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['delta'] = namedParameters.delta;
    this['localDelta'] = namedParameters.localDelta;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distance'] = namedParameters.distance;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['synthesized'] = namedParameters.synthesized;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerHoverEvent';
  }
}
export { PointerHoverEvent };
class PointerEnterEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      delta?: Offset;
      localDelta?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressureMin?: number;
      pressureMax?: number;
      distance?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      down?: boolean;
      synthesized?: boolean;
      transform?: Matrix4;
      original?: PointerEnterEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['delta'] = namedParameters.delta;
    this['localDelta'] = namedParameters.localDelta;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distance'] = namedParameters.distance;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['down'] = namedParameters.down;
    this['synthesized'] = namedParameters.synthesized;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerEnterEvent';
  }
  static fromHoverEvent(event?: PointerHoverEvent) {
    var jsObj = new PointerEnterEvent();
    jsObj['event'] = event;
    jsObj['constructorName'] = 'fromHoverEvent';
    return jsObj;
  }
  static fromMouseEvent(event?: PointerEvent) {
    var jsObj = new PointerEnterEvent();
    jsObj['event'] = event;
    jsObj['constructorName'] = 'fromMouseEvent';
    return jsObj;
  }
}
export { PointerEnterEvent };
class PointerExitEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      delta?: Offset;
      localDelta?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressureMin?: number;
      pressureMax?: number;
      distance?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      down?: boolean;
      synthesized?: boolean;
      transform?: Matrix4;
      original?: PointerExitEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['delta'] = namedParameters.delta;
    this['localDelta'] = namedParameters.localDelta;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distance'] = namedParameters.distance;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['down'] = namedParameters.down;
    this['synthesized'] = namedParameters.synthesized;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerExitEvent';
  }
  static fromHoverEvent(event?: PointerHoverEvent) {
    var jsObj = new PointerExitEvent();
    jsObj['event'] = event;
    jsObj['constructorName'] = 'fromHoverEvent';
    return jsObj;
  }
  static fromMouseEvent(event?: PointerEvent) {
    var jsObj = new PointerExitEvent();
    jsObj['event'] = event;
    jsObj['constructorName'] = 'fromMouseEvent';
    return jsObj;
  }
}
export { PointerExitEvent };
class PointerDownEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      pointer?: number;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressure?: number;
      pressureMin?: number;
      pressureMax?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      transform?: Matrix4;
      original?: PointerDownEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['pointer'] = namedParameters.pointer;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressure'] = namedParameters.pressure;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerDownEvent';
  }
}
export { PointerDownEvent };
class PointerMoveEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      pointer?: number;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      delta?: Offset;
      localDelta?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressure?: number;
      pressureMin?: number;
      pressureMax?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      platformData?: number;
      synthesized?: boolean;
      transform?: Matrix4;
      original?: PointerMoveEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['pointer'] = namedParameters.pointer;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['delta'] = namedParameters.delta;
    this['localDelta'] = namedParameters.localDelta;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressure'] = namedParameters.pressure;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['platformData'] = namedParameters.platformData;
    this['synthesized'] = namedParameters.synthesized;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerMoveEvent';
  }
}
export { PointerMoveEvent };
class PointerUpEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      pointer?: number;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressure?: number;
      pressureMin?: number;
      pressureMax?: number;
      distance?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      transform?: Matrix4;
      original?: PointerUpEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['pointer'] = namedParameters.pointer;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressure'] = namedParameters.pressure;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distance'] = namedParameters.distance;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerUpEvent';
  }
}
export { PointerUpEvent };
abstract class PointerSignalEvent extends PointerEvent {}
export { PointerSignalEvent };
class PointerScrollEvent extends PointerSignalEvent {
  scrollDelta: Offset;
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      scrollDelta?: Offset;
      transform?: Matrix4;
      original?: PointerScrollEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this.timeStamp = namedParameters.timeStamp;
    this.kind = namedParameters.kind;
    this.device = namedParameters.device;
    this.position = namedParameters.position;
    this.localPosition = namedParameters.localPosition;
    this.scrollDelta = namedParameters.scrollDelta;
    this.transform = namedParameters.transform;
    this['__mx_original'] = namedParameters.original;
    this.embedderId = namedParameters.embedderId;
    this.className = 'PointerScrollEvent';
  }
}
export { PointerScrollEvent };
class PointerCancelEvent extends PointerEvent {
  public constructor(
    namedParameters: {
      timeStamp?: Duration;
      pointer?: number;
      kind?: PointerDeviceKind;
      device?: number;
      position?: Offset;
      localPosition?: Offset;
      buttons?: number;
      obscured?: boolean;
      pressureMin?: number;
      pressureMax?: number;
      distance?: number;
      distanceMax?: number;
      size?: number;
      radiusMajor?: number;
      radiusMinor?: number;
      radiusMin?: number;
      radiusMax?: number;
      orientation?: number;
      tilt?: number;
      transform?: Matrix4;
      original?: PointerCancelEvent;
      embedderId?: number;
    } = {},
  ) {
    super();
    this['timeStamp'] = namedParameters.timeStamp;
    this['pointer'] = namedParameters.pointer;
    this['kind'] = namedParameters.kind;
    this['device'] = namedParameters.device;
    this['position'] = namedParameters.position;
    this['localPosition'] = namedParameters.localPosition;
    this['buttons'] = namedParameters.buttons;
    this['obscured'] = namedParameters.obscured;
    this['pressureMin'] = namedParameters.pressureMin;
    this['pressureMax'] = namedParameters.pressureMax;
    this['distance'] = namedParameters.distance;
    this['distanceMax'] = namedParameters.distanceMax;
    this['size'] = namedParameters.size;
    this['radiusMajor'] = namedParameters.radiusMajor;
    this['radiusMinor'] = namedParameters.radiusMinor;
    this['radiusMin'] = namedParameters.radiusMin;
    this['radiusMax'] = namedParameters.radiusMax;
    this['orientation'] = namedParameters.orientation;
    this['tilt'] = namedParameters.tilt;
    this['transform'] = namedParameters.transform;
    this['original'] = namedParameters.original;
    this['embedderId'] = namedParameters.embedderId;
    this.className = 'PointerCancelEvent';
  }
}
export { PointerCancelEvent };
