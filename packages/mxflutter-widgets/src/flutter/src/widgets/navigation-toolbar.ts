//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextDirection, Size } from '../../../mx-dart-sdk';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { Key } from '../foundation/key';
import { StatelessWidget$, Widget, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class NavigationToolbar extends StatelessWidget$ {
  leading: MXWidget;
  middle: MXWidget;
  trailing: MXWidget;
  centerMiddle: boolean;
  middleSpacing: number;
  public constructor(
    namedParameters: {
      key?: Key;
      leading?: MXWidget;
      middle?: MXWidget;
      trailing?: MXWidget;
      centerMiddle?: boolean;
      middleSpacing?: number;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.middle = namedParameters.middle;
    this.trailing = namedParameters.trailing;
    this.centerMiddle = namedParameters.centerMiddle;
    this.middleSpacing = namedParameters.middleSpacing;
    this.className = 'NavigationToolbar';
  }
  static get kMiddleSpacing() {
    return 16.0;
  }
}
export { NavigationToolbar };
enum _ToolbarSlot {
  leading = '{ "_name": "_ToolbarSlot.leading", "index": 0 }',
  middle = '{ "_name": "_ToolbarSlot.middle", "index": 1 }',
  trailing = '{ "_name": "_ToolbarSlot.trailing", "index": 2 }',
}

export { _ToolbarSlot };
class _ToolbarLayout extends MultiChildLayoutDelegate {
  centerMiddle: boolean;
  middleSpacing: number;
  textDirection: TextDirection;
  public constructor(
    namedParameters: { centerMiddle?: boolean; middleSpacing?: number; textDirection?: TextDirection } = {},
  ) {
    super();
    this.centerMiddle = namedParameters.centerMiddle;
    this.middleSpacing = namedParameters.middleSpacing;
    this.textDirection = namedParameters.textDirection;
    this.className = '_ToolbarLayout';
  }
}
export { _ToolbarLayout };
