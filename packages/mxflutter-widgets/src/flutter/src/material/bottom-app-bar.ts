// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { CustomClipper } from '../rendering/proxy-box';
import { ValueListenable } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { NotchedShape } from '../painting/notched-shapes';
import { Color, Clip } from '../../../mx-dart-sdk';
import { StatefulWidget, Widget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BottomAppBar extends StatefulWidget {
  child: MXWidget;
  color: Color;
  elevation: number;
  shape: NotchedShape;
  clipBehavior: Clip;
  notchMargin: number;
  public constructor(namedParameters: {key?: Key, color?: Color, elevation?: number, shape?: NotchedShape, clipBehavior?: Clip, notchMargin?: number, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.notchMargin = namedParameters.notchMargin;
    this.child = namedParameters.child;
    this.className = 'BottomAppBar';
  }
}
export { BottomAppBar };
class _BottomAppBarState extends State {
  geometryListenable: ValueListenable;
}
export { _BottomAppBarState };
class _BottomAppBarClipper extends CustomClipper {
  geometry: ValueListenable;
  shape: NotchedShape;
  notchMargin: number;
  public constructor(namedParameters: {geometry?: ValueListenable, shape?: NotchedShape, notchMargin?: number} = {}) {
    super();
    this.geometry = namedParameters.geometry;
    this.shape = namedParameters.shape;
    this.notchMargin = namedParameters.notchMargin;
    this.className = '_BottomAppBarClipper';
  }
}
export { _BottomAppBarClipper };
