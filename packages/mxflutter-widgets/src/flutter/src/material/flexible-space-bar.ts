//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BoxConstraints } from '../rendering/box';
import { ThemeData } from './theme-data';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, Widget, State$, BuildContext$, InheritedWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum CollapseMode {
  parallax = '{ "_name": "CollapseMode.parallax", "index": 0 }',
  pin = '{ "_name": "CollapseMode.pin", "index": 1 }',
  none = '{ "_name": "CollapseMode.none", "index": 2 }',
}

export { CollapseMode };
enum StretchMode {
  zoomBackground = '{ "_name": "StretchMode.zoomBackground", "index": 0 }',
  blurBackground = '{ "_name": "StretchMode.blurBackground", "index": 1 }',
  fadeTitle = '{ "_name": "StretchMode.fadeTitle", "index": 2 }',
}

export { StretchMode };
class FlexibleSpaceBar extends StatefulWidget$ {
  title: MXWidget;
  background: MXWidget;
  centerTitle: boolean;
  collapseMode: CollapseMode;
  stretchModes: Array<any>;
  titlePadding: EdgeInsetsGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      title?: MXWidget;
      background?: MXWidget;
      centerTitle?: boolean;
      titlePadding?: EdgeInsetsGeometry;
      collapseMode?: CollapseMode;
      stretchModes?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.background = namedParameters.background;
    this.centerTitle = namedParameters.centerTitle;
    this.titlePadding = namedParameters.titlePadding;
    this.collapseMode = namedParameters.collapseMode;
    this.stretchModes = namedParameters.stretchModes;
    this.className = 'FlexibleSpaceBar';
  }
}
export { FlexibleSpaceBar };
class _FlexibleSpaceBarState extends State$ {}
export { _FlexibleSpaceBarState };
class FlexibleSpaceBarSettings extends InheritedWidget {
  toolbarOpacity: number;
  minExtent: number;
  maxExtent: number;
  currentExtent: number;
  public constructor(
    namedParameters: {
      key?: Key;
      toolbarOpacity?: number;
      minExtent?: number;
      maxExtent?: number;
      currentExtent?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.toolbarOpacity = namedParameters.toolbarOpacity;
    this.minExtent = namedParameters.minExtent;
    this.maxExtent = namedParameters.maxExtent;
    this.currentExtent = namedParameters.currentExtent;
    this.child = namedParameters.child;
    this.className = 'FlexibleSpaceBarSettings';
  }
}
export { FlexibleSpaceBarSettings };
