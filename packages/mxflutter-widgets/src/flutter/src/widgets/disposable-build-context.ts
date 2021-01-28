//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DisposableBuildContext extends MXDartClass {
  state: any;
  public constructor(_state?: any) {
    super();
    this.state = _state;
    this.className = 'DisposableBuildContext';
  }
}
export { DisposableBuildContext };
