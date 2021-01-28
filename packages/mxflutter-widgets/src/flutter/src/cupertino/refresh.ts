//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { Offset } from '../../../mx-dart-sdk';
import { PaintingContext, RenderObject } from '../rendering/object';
import { RenderBox, BoxConstraints } from '../rendering/box';
import { RenderSliver } from '../rendering/sliver';
import { Key } from '../foundation/key';
import { SingleChildRenderObjectWidget, Widget, BuildContext$, StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _CupertinoSliverRefresh extends SingleChildRenderObjectWidget {
  refreshIndicatorLayoutExtent: number;
  hasLayoutExtent: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      refreshIndicatorLayoutExtent?: number;
      hasLayoutExtent?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.refreshIndicatorLayoutExtent = namedParameters.refreshIndicatorLayoutExtent;
    this.hasLayoutExtent = namedParameters.hasLayoutExtent;
    this.child = namedParameters.child;
    this.className = '_CupertinoSliverRefresh';
  }
}
export { _CupertinoSliverRefresh };
class _RenderCupertinoSliverRefresh extends RenderSliver {
  refreshIndicatorExtent: number;
  hasLayoutExtent: boolean;
  layoutExtentOffsetCompensation: number;
  public constructor(
    namedParameters: { refreshIndicatorExtent?: number; hasLayoutExtent?: boolean; child?: RenderBox } = {},
  ) {
    super();
    this.refreshIndicatorExtent = namedParameters.refreshIndicatorExtent;
    this.hasLayoutExtent = namedParameters.hasLayoutExtent;
    this['child'] = namedParameters.child;
    this.className = '_RenderCupertinoSliverRefresh';
  }
}
export { _RenderCupertinoSliverRefresh };
enum RefreshIndicatorMode {
  inactive = '{ "_name": "RefreshIndicatorMode.inactive", "index": 0 }',
  drag = '{ "_name": "RefreshIndicatorMode.drag", "index": 1 }',
  armed = '{ "_name": "RefreshIndicatorMode.armed", "index": 2 }',
  refresh = '{ "_name": "RefreshIndicatorMode.refresh", "index": 3 }',
  done = '{ "_name": "RefreshIndicatorMode.done", "index": 4 }',
}

export { RefreshIndicatorMode };
class CupertinoSliverRefreshControl extends StatefulWidget$ {
  refreshTriggerPullDistance: number;
  refreshIndicatorExtent: number;
  builder: any;
  onRefresh: any;
  public constructor(
    namedParameters: {
      key?: Key;
      refreshTriggerPullDistance?: number;
      refreshIndicatorExtent?: number;
      builder?: any;
      onRefresh?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.refreshTriggerPullDistance = namedParameters.refreshTriggerPullDistance;
    this.refreshIndicatorExtent = namedParameters.refreshIndicatorExtent;
    this.builder = namedParameters.builder;
    this.onRefresh = namedParameters.onRefresh;
    this.className = 'CupertinoSliverRefreshControl';
  }
}
export { CupertinoSliverRefreshControl };
class _CupertinoSliverRefreshControlState extends State$ {
  refreshState: RefreshIndicatorMode;
  refreshTask: any;
  latestIndicatorBoxExtent: number;
  hasSliverLayoutExtent: boolean;
}
export { _CupertinoSliverRefreshControlState };
