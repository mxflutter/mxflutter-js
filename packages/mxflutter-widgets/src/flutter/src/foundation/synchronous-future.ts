//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SynchronousFuture extends MXDartClass {
  value: any;
  public constructor(_value?: any) {
    super();
    this.value = _value;
    this.className = 'SynchronousFuture';
  }
}
export { SynchronousFuture };
