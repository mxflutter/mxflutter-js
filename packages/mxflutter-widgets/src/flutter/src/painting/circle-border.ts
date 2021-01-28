//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Rect, TextDirection, Canvas } from '../../../mx-dart-sdk';
import { OutlinedBorder, BorderSide, ShapeBorder } from './borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CircleBorder extends OutlinedBorder {
  public constructor(namedParameters: { side?: BorderSide } = {}) {
    super();
    this['side'] = namedParameters.side;
    this.className = 'CircleBorder';
  }
}
export { CircleBorder };
