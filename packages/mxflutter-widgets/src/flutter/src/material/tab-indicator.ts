// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { BorderSide } from '../painting/borders';
import { Decoration, BoxPainter } from '../painting/decoration';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class UnderlineTabIndicator extends Decoration {
  borderSide: BorderSide;
  insets: EdgeInsetsGeometry;
  public constructor(namedParameters: {borderSide?: BorderSide, insets?: EdgeInsetsGeometry} = {}) {
    super();
    this.borderSide = namedParameters.borderSide;
    this.insets = namedParameters.insets;
    this.className = 'UnderlineTabIndicator';
  }
}
export { UnderlineTabIndicator };
class _UnderlinePainter extends BoxPainter {
  decoration: UnderlineTabIndicator;
  public constructor(decoration?: UnderlineTabIndicator, onChanged?: any) {
    super();
    this.decoration = decoration;
    this.onChanged = onChanged;
    this.className = '_UnderlinePainter';
  }
}
export { _UnderlinePainter };
