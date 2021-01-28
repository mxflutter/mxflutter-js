//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ModalRoute } from './routes';
import { Key } from '../foundation/key';
import { StatefulWidget$, Widget, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class WillPopScope extends StatefulWidget$ {
  child: MXWidget;
  onWillPop: any;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; onWillPop?: any } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.onWillPop = namedParameters.onWillPop;
    this.className = 'WillPopScope';
  }
}
export { WillPopScope };
class _WillPopScopeState extends State$ {
  route: ModalRoute;
}
export { _WillPopScopeState };
