//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _LazyListIterator extends MXDartClass {
  owner: any;
  index: number;
  public constructor(_owner?: any) {
    super();
    this.owner = _owner;
    this.className = '_LazyListIterator';
  }
}
export { _LazyListIterator };
class Factory extends MXDartClass {
  __mx_constructor: any;
  public constructor(__mx_constructor?: any) {
    super();
    this.__mx_constructor = __mx_constructor;
    this.className = 'Factory';
  }
}
export { Factory };
