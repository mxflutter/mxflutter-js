// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Shadow, Color, Offset } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BoxShadow extends Shadow {
  spreadRadius: number;
  public constructor(namedParameters: {color?: Color, offset?: Offset, blurRadius?: number, spreadRadius?: number} = {}) {
    super();
    this.color = namedParameters.color;
    this.offset = namedParameters.offset;
    this.blurRadius = namedParameters.blurRadius;
    this.spreadRadius = namedParameters.spreadRadius;
    this.className = 'BoxShadow';
  }
}
export { BoxShadow };
