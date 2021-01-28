//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TapDownDetails, TapUpDetails } from '../gestures/tap';
import { Key } from '../foundation/key';
import { IconData } from '../widgets/icon-data';
import { StatefulWidget$, Widget, State$, GlobalKey, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoContextMenuAction extends StatefulWidget$ {
  child: MXWidget;
  isDefaultAction: boolean;
  isDestructiveAction: boolean;
  onPressed: any;
  trailingIcon: IconData;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      isDefaultAction?: boolean;
      isDestructiveAction?: boolean;
      onPressed?: any;
      trailingIcon?: IconData;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.isDefaultAction = namedParameters.isDefaultAction;
    this.isDestructiveAction = namedParameters.isDestructiveAction;
    this.onPressed = namedParameters.onPressed;
    this.trailingIcon = namedParameters.trailingIcon;
    this.className = 'CupertinoContextMenuAction';
  }
}
export { CupertinoContextMenuAction };
class _CupertinoContextMenuActionState extends State$ {
  globalKey: GlobalKey;
  isPressed: boolean;
}
export { _CupertinoContextMenuActionState };
