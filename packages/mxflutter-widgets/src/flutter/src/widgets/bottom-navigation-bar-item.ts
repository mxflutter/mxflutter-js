//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BottomNavigationBarItem extends MXDartClass {
  icon: MXWidget;
  activeIcon: MXWidget;
  title: MXWidget;
  backgroundColor: Color;
  public constructor(
    namedParameters: { icon?: MXWidget; title?: MXWidget; activeIcon?: MXWidget; backgroundColor?: Color } = {},
  ) {
    super();
    this.icon = namedParameters.icon;
    this.title = namedParameters.title;
    this.activeIcon = namedParameters.activeIcon;
    this.backgroundColor = namedParameters.backgroundColor;
    this.className = 'BottomNavigationBarItem';
  }
}
export { BottomNavigationBarItem };
