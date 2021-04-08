// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { InheritedWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum CupertinoUserInterfaceLevelData {
  base = '{ "_name": "CupertinoUserInterfaceLevelData.base", "index": 0 }',
  elevated = '{ "_name": "CupertinoUserInterfaceLevelData.elevated", "index": 1 }',
};

export { CupertinoUserInterfaceLevelData };
class CupertinoUserInterfaceLevel extends InheritedWidget {
  data: CupertinoUserInterfaceLevelData;
  public constructor(namedParameters: {key?: Key, data?: CupertinoUserInterfaceLevelData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'CupertinoUserInterfaceLevel';
  }
}
export { CupertinoUserInterfaceLevel };
