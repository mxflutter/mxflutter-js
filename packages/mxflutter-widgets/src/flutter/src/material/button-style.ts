// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { MaterialStateProperty } from './material-state';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ButtonStyle extends MXDartClass {
  textStyle: MaterialStateProperty;
  backgroundColor: MaterialStateProperty;
  foregroundColor: MaterialStateProperty;
  overlayColor: MaterialStateProperty;
  shadowColor: MaterialStateProperty;
  elevation: MaterialStateProperty;
  padding: MaterialStateProperty;
  minimumSize: MaterialStateProperty;
  side: MaterialStateProperty;
  shape: MaterialStateProperty;
  mouseCursor: MaterialStateProperty;
  visualDensity: VisualDensity;
  tapTargetSize: MaterialTapTargetSize;
  animationDuration: Duration;
  enableFeedback: boolean;
  public constructor(namedParameters: {textStyle?: MaterialStateProperty, backgroundColor?: MaterialStateProperty, foregroundColor?: MaterialStateProperty, overlayColor?: MaterialStateProperty, shadowColor?: MaterialStateProperty, elevation?: MaterialStateProperty, padding?: MaterialStateProperty, minimumSize?: MaterialStateProperty, side?: MaterialStateProperty, shape?: MaterialStateProperty, mouseCursor?: MaterialStateProperty, visualDensity?: VisualDensity, tapTargetSize?: MaterialTapTargetSize, animationDuration?: Duration, enableFeedback?: boolean} = {}) {
    super();
    this.textStyle = namedParameters.textStyle;
    this.backgroundColor = namedParameters.backgroundColor;
    this.foregroundColor = namedParameters.foregroundColor;
    this.overlayColor = namedParameters.overlayColor;
    this.shadowColor = namedParameters.shadowColor;
    this.elevation = namedParameters.elevation;
    this.padding = namedParameters.padding;
    this.minimumSize = namedParameters.minimumSize;
    this.side = namedParameters.side;
    this.shape = namedParameters.shape;
    this.mouseCursor = namedParameters.mouseCursor;
    this.visualDensity = namedParameters.visualDensity;
    this.tapTargetSize = namedParameters.tapTargetSize;
    this.animationDuration = namedParameters.animationDuration;
    this.enableFeedback = namedParameters.enableFeedback;
    this.className = 'ButtonStyle';
  }
}
export { ButtonStyle };
class _LerpProperties extends MXDartClass {
  a: MaterialStateProperty;
  b: MaterialStateProperty;
  t: number;
  lerpFunction: any;
  public constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number, lerpFunction?: any) {
    super();
    this.a = a;
    this.b = b;
    this.t = t;
    this.lerpFunction = lerpFunction;
    this.className = '_LerpProperties';
  }
}
export { _LerpProperties };
class _LerpSides extends MXDartClass {
  a: MaterialStateProperty;
  b: MaterialStateProperty;
  t: number;
  public constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number) {
    super();
    this.a = a;
    this.b = b;
    this.t = t;
    this.className = '_LerpSides';
  }
}
export { _LerpSides };
class _LerpShapes extends MXDartClass {
  a: MaterialStateProperty;
  b: MaterialStateProperty;
  t: number;
  public constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number) {
    super();
    this.a = a;
    this.b = b;
    this.t = t;
    this.className = '_LerpShapes';
  }
}
export { _LerpShapes };
