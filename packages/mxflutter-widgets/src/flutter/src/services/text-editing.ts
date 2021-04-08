// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextRange, TextAffinity, TextPosition } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextSelection extends TextRange {
  baseOffset: number;
  extentOffset: number;
  affinity: TextAffinity;
  isDirectional: boolean;
  public constructor(namedParameters: {baseOffset?: number, extentOffset?: number, affinity?: TextAffinity, isDirectional?: boolean} = {}) {
    super();
    this.baseOffset = namedParameters.baseOffset;
    this.extentOffset = namedParameters.extentOffset;
    this.affinity = namedParameters.affinity;
    this.isDirectional = namedParameters.isDirectional;
    this.className = 'TextSelection';
  }
    // MX modified begin
  // static collapsed(namedParameters: {offset?: number, affinity?: TextAffinity} = {}) {
  //   var jsObj = new TextSelection();
  //   jsObj['offset'] = namedParameters.offset;
  //   jsObj.affinity = namedParameters.affinity;
  //   jsObj['constructorName'] = 'collapsed';
  //   return jsObj;
  // }
  // MX modified end

  static fromPosition(position?: TextPosition) {
    var jsObj = new TextSelection();
    jsObj['position'] = position;
    jsObj['constructorName'] = 'fromPosition';
    return jsObj;
  }
}
export { TextSelection };
