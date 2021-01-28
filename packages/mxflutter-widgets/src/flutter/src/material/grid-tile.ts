//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class GridTile extends StatelessWidget$ {
  header: MXWidget;
  footer: MXWidget;
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; header?: MXWidget; footer?: MXWidget; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.header = namedParameters.header;
    this.footer = namedParameters.footer;
    this.child = namedParameters.child;
    this.className = 'GridTile';
  }
}
export { GridTile };
