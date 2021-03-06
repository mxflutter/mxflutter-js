// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class WriteBuffer extends MXDartClass {
  buffer: any;
  eightBytes: any;
  eightBytesAsList: any;
}
export { WriteBuffer };
class ReadBuffer extends MXDartClass {
  data: any;
  position: number;
  public constructor(data?: any) {
    super();
    this.data = data;
    this.className = 'ReadBuffer';
  }
}
export { ReadBuffer };
