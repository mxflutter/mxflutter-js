//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Velocity } from './velocity-tracker';
import { Duration } from '../../../mx-dart-sdk';
import { Offset } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DragDownDetails extends MXDartClass {
  globalPosition: Offset;
  localPosition: Offset;
  public constructor(namedParameters: { globalPosition?: Offset; localPosition?: Offset } = {}) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.className = 'DragDownDetails';
  }
}
export { DragDownDetails };
class DragStartDetails extends MXDartClass {
  sourceTimeStamp: Duration;
  globalPosition: Offset;
  localPosition: Offset;
  public constructor(
    namedParameters: { sourceTimeStamp?: Duration; globalPosition?: Offset; localPosition?: Offset } = {},
  ) {
    super();
    this.sourceTimeStamp = namedParameters.sourceTimeStamp;
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.className = 'DragStartDetails';
  }
}
export { DragStartDetails };
class DragUpdateDetails extends MXDartClass {
  sourceTimeStamp: Duration;
  delta: Offset;
  primaryDelta: number;
  globalPosition: Offset;
  localPosition: Offset;
  public constructor(
    namedParameters: {
      sourceTimeStamp?: Duration;
      delta?: Offset;
      primaryDelta?: number;
      globalPosition?: Offset;
      localPosition?: Offset;
    } = {},
  ) {
    super();
    this.sourceTimeStamp = namedParameters.sourceTimeStamp;
    this.delta = namedParameters.delta;
    this.primaryDelta = namedParameters.primaryDelta;
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.className = 'DragUpdateDetails';
  }
}
export { DragUpdateDetails };
class DragEndDetails extends MXDartClass {
  velocity: Velocity;
  primaryVelocity: number;
  public constructor(namedParameters: { velocity?: Velocity; primaryVelocity?: number } = {}) {
    super();
    this.velocity = namedParameters.velocity;
    this.primaryVelocity = namedParameters.primaryVelocity;
    this.className = 'DragEndDetails';
  }
}
export { DragEndDetails };
