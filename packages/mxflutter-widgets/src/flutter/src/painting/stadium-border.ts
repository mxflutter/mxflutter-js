//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BorderRadius } from './border-radius';
import { Rect, TextDirection, Canvas } from '../../../mx-dart-sdk';
import { OutlinedBorder, BorderSide, ShapeBorder } from './borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class StadiumBorder extends OutlinedBorder {
  public constructor(namedParameters: { side?: BorderSide } = {}) {
    super();
    this['side'] = namedParameters.side;
    this.className = 'StadiumBorder';
  }
}
export { StadiumBorder };
class _StadiumToCircleBorder extends OutlinedBorder {
  circleness: number;
  public constructor(namedParameters: { side?: BorderSide; circleness?: number } = {}) {
    super();
    this.side = namedParameters.side;
    this.circleness = namedParameters.circleness;
    this.className = '_StadiumToCircleBorder';
  }
}
export { _StadiumToCircleBorder };
class _StadiumToRoundedRectangleBorder extends OutlinedBorder {
  borderRadius: BorderRadius;
  rectness: number;
  public constructor(namedParameters: { side?: BorderSide; borderRadius?: BorderRadius; rectness?: number } = {}) {
    super();
    this.side = namedParameters.side;
    this.borderRadius = namedParameters.borderRadius;
    this.rectness = namedParameters.rectness;
    this.className = '_StadiumToRoundedRectangleBorder';
  }
}
export { _StadiumToRoundedRectangleBorder };
