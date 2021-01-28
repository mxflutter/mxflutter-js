//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Rect, TextDirection, Canvas } from '../../../mx-dart-sdk';
import { BorderRadiusGeometry, BorderRadius } from './border-radius';
import { OutlinedBorder, BorderSide, ShapeBorder } from './borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RoundedRectangleBorder extends OutlinedBorder {
  borderRadius: BorderRadiusGeometry;
  public constructor(namedParameters: { side?: BorderSide; borderRadius?: BorderRadiusGeometry } = {}) {
    super();
    this.side = namedParameters.side;
    this.borderRadius = namedParameters.borderRadius;
    this.className = 'RoundedRectangleBorder';
  }
}
export { RoundedRectangleBorder };
class _RoundedRectangleToCircleBorder extends OutlinedBorder {
  borderRadius: BorderRadiusGeometry;
  circleness: number;
  public constructor(
    namedParameters: { side?: BorderSide; borderRadius?: BorderRadiusGeometry; circleness?: number } = {},
  ) {
    super();
    this.side = namedParameters.side;
    this.borderRadius = namedParameters.borderRadius;
    this.circleness = namedParameters.circleness;
    this.className = '_RoundedRectangleToCircleBorder';
  }
}
export { _RoundedRectangleToCircleBorder };
