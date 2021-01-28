//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class BitField extends MXDartClass {
  public constructor(length?: number) {
    super();
    this['length'] = length;
    this.className = 'BitField';
  }
  static filled(length?: number, value?: boolean) {
    var jsObj = new (class MXBitField extends BitField {})();
    jsObj['length'] = length;
    jsObj['value'] = value;
    jsObj['constructorName'] = 'filled';
    return jsObj;
  }
}
export { BitField };
