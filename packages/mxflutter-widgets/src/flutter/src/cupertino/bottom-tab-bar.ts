// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Border } from '../painting/box-border';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoTabBar extends StatelessWidget {
  items: Array<any>;
  onTap: any;
  currentIndex: number;
  backgroundColor: Color;
  activeColor: Color;
  inactiveColor: Color;
  iconSize: number;
  border: Border;
  public constructor(namedParameters: {key?: Key, items?: Array<any>, onTap?: any, currentIndex?: number, backgroundColor?: Color, activeColor?: Color, inactiveColor?: Color, iconSize?: number, border?: Border} = {}) {
    super();
    this.key = namedParameters.key;
    this.items = namedParameters.items;
    this.onTap = namedParameters.onTap;
    this.currentIndex = namedParameters.currentIndex;
    this.backgroundColor = namedParameters.backgroundColor;
    this.activeColor = namedParameters.activeColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.iconSize = namedParameters.iconSize;
    this.border = namedParameters.border;
    this.className = 'CupertinoTabBar';
  }
}
export { CupertinoTabBar };
