// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { BorderRadiusGeometry } from './border-radius';
import { OutlinedBorder, BorderSide } from './borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ContinuousRectangleBorder extends OutlinedBorder {
  borderRadius: BorderRadiusGeometry;
  public constructor(namedParameters: {side?: BorderSide, borderRadius?: BorderRadiusGeometry} = {}) {
    super();
    this.side = namedParameters.side;
    this.borderRadius = namedParameters.borderRadius;
    this.className = 'ContinuousRectangleBorder';
  }
}
export { ContinuousRectangleBorder };
