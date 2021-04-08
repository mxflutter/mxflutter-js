// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { BorderRadius } from '../painting/border-radius';
import { ShapeBorder, BorderSide } from '../painting/borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class InputBorder extends ShapeBorder {
  borderSide: BorderSide;
  static get none() {
    var jsObj = new class MXInputBorder extends InputBorder {}();
    jsObj['className'] = 'InputBorder';
    jsObj['constructorName'] = 'none';
    return jsObj;
  }
}
export { InputBorder };
class _NoInputBorder extends InputBorder {}
export { _NoInputBorder };
class UnderlineInputBorder extends InputBorder {
  borderRadius: BorderRadius;
  public constructor(namedParameters: {borderSide?: BorderSide, borderRadius?: BorderRadius} = {}) {
    super();
    this.borderSide = namedParameters.borderSide;
    this.borderRadius = namedParameters.borderRadius;
    this.className = 'UnderlineInputBorder';
  }
}
export { UnderlineInputBorder };
class OutlineInputBorder extends InputBorder {
  gapPadding: number;
  borderRadius: BorderRadius;
  public constructor(namedParameters: {borderSide?: BorderSide, borderRadius?: BorderRadius, gapPadding?: number} = {}) {
    super();
    this.borderSide = namedParameters.borderSide;
    this.borderRadius = namedParameters.borderRadius;
    this.gapPadding = namedParameters.gapPadding;
    this.className = 'OutlineInputBorder';
  }
}
export { OutlineInputBorder };
