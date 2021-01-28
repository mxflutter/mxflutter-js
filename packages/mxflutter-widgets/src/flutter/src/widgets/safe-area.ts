//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { EdgeInsets } from '../painting/edge-insets';
import { StatelessWidget$, Widget, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SafeArea extends StatelessWidget$ {
  left: boolean;
  top: boolean;
  right: boolean;
  bottom: boolean;
  minimum: EdgeInsets;
  maintainBottomViewPadding: boolean;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      left?: boolean;
      top?: boolean;
      right?: boolean;
      bottom?: boolean;
      minimum?: EdgeInsets;
      maintainBottomViewPadding?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.left = namedParameters.left;
    this.top = namedParameters.top;
    this.right = namedParameters.right;
    this.bottom = namedParameters.bottom;
    this.minimum = namedParameters.minimum;
    this.maintainBottomViewPadding = namedParameters.maintainBottomViewPadding;
    this.child = namedParameters.child;
    this.className = 'SafeArea';
  }
}
export { SafeArea };
class SliverSafeArea extends StatelessWidget$ {
  left: boolean;
  top: boolean;
  right: boolean;
  bottom: boolean;
  minimum: EdgeInsets;
  sliver: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      left?: boolean;
      top?: boolean;
      right?: boolean;
      bottom?: boolean;
      minimum?: EdgeInsets;
      sliver?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.left = namedParameters.left;
    this.top = namedParameters.top;
    this.right = namedParameters.right;
    this.bottom = namedParameters.bottom;
    this.minimum = namedParameters.minimum;
    this.sliver = namedParameters.sliver;
    this.className = 'SliverSafeArea';
  }
}
export { SliverSafeArea };
