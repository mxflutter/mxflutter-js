// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ScrollController } from '../widgets/scroll-controller';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget, Widget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoPageScaffold extends StatefulWidget {
  navigationBar: ObstructingPreferredSizeWidget;
  child: MXWidget;
  backgroundColor: Color;
  resizeToAvoidBottomInset: boolean;
  public constructor(namedParameters: {key?: Key, navigationBar?: ObstructingPreferredSizeWidget, backgroundColor?: Color, resizeToAvoidBottomInset?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.navigationBar = namedParameters.navigationBar;
    this.backgroundColor = namedParameters.backgroundColor;
    this.resizeToAvoidBottomInset = namedParameters.resizeToAvoidBottomInset;
    this.child = namedParameters.child;
    this.className = 'CupertinoPageScaffold';
  }
}
export { CupertinoPageScaffold };
class _CupertinoPageScaffoldState extends State {
  primaryScrollController: ScrollController;
}
export { _CupertinoPageScaffoldState };
abstract class ObstructingPreferredSizeWidget extends MXDartClass {}
export { ObstructingPreferredSizeWidget };
