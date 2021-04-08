// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TileMode } from '../../../mx-dart-sdk';
import { AlignmentGeometry } from './alignment';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _ColorsAndStops extends MXDartClass {
  colors: Array<any>;
  stops: Array<any>;
  public constructor(colors?: Array<any>, stops?: Array<any>) {
    super();
    this.colors = colors;
    this.stops = stops;
    this.className = '_ColorsAndStops';
  }
}
export { _ColorsAndStops };
abstract class GradientTransform extends MXDartClass {}
export { GradientTransform };
class GradientRotation extends GradientTransform {
  radians: number;
  public constructor(radians?: number) {
    super();
    this.radians = radians;
    this.className = 'GradientRotation';
  }
}
export { GradientRotation };
abstract class Gradient extends MXDartClass {
  colors: Array<any>;
  stops: Array<any>;
  transform: GradientTransform;
}
export { Gradient };
class LinearGradient extends Gradient {
  begin: AlignmentGeometry;
  end: AlignmentGeometry;
  tileMode: TileMode;
  public constructor(namedParameters: {begin?: AlignmentGeometry, end?: AlignmentGeometry, colors?: Array<any>, stops?: Array<any>, tileMode?: TileMode, transform?: GradientTransform} = {}) {
    super();
    this.begin = namedParameters.begin;
    this.end = namedParameters.end;
    this.colors = namedParameters.colors;
    this.stops = namedParameters.stops;
    this.tileMode = namedParameters.tileMode;
    this.transform = namedParameters.transform;
    this.className = 'LinearGradient';
  }
}
export { LinearGradient };
class RadialGradient extends Gradient {
  center: AlignmentGeometry;
  radius: number;
  tileMode: TileMode;
  focal: AlignmentGeometry;
  focalRadius: number;
  public constructor(namedParameters: {center?: AlignmentGeometry, radius?: number, colors?: Array<any>, stops?: Array<any>, tileMode?: TileMode, focal?: AlignmentGeometry, focalRadius?: number, transform?: GradientTransform} = {}) {
    super();
    this.center = namedParameters.center;
    this.radius = namedParameters.radius;
    this.colors = namedParameters.colors;
    this.stops = namedParameters.stops;
    this.tileMode = namedParameters.tileMode;
    this.focal = namedParameters.focal;
    this.focalRadius = namedParameters.focalRadius;
    this.transform = namedParameters.transform;
    this.className = 'RadialGradient';
  }
}
export { RadialGradient };
class SweepGradient extends Gradient {
  center: AlignmentGeometry;
  startAngle: number;
  endAngle: number;
  tileMode: TileMode;
  public constructor(namedParameters: {center?: AlignmentGeometry, startAngle?: number, endAngle?: number, colors?: Array<any>, stops?: Array<any>, tileMode?: TileMode, transform?: GradientTransform} = {}) {
    super();
    this.center = namedParameters.center;
    this.startAngle = namedParameters.startAngle;
    this.endAngle = namedParameters.endAngle;
    this.colors = namedParameters.colors;
    this.stops = namedParameters.stops;
    this.tileMode = namedParameters.tileMode;
    this.transform = namedParameters.transform;
    this.className = 'SweepGradient';
  }
}
export { SweepGradient };
