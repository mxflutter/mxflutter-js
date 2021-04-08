// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RenderRotatedBox extends RenderBox {
  quarterTurns: number;
  paintTransform: Matrix4;
  public constructor(namedParameters: {quarterTurns?: number, child?: RenderBox} = {}) {
    super();
    this.quarterTurns = namedParameters.quarterTurns;
    this['child'] = namedParameters.child;
    this.className = 'RenderRotatedBox';
  }
}
export { RenderRotatedBox };
