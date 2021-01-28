//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Decoration } from '../painting/decoration';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DrawerHeader extends StatelessWidget$ {
  decoration: Decoration;
  padding: EdgeInsetsGeometry;
  margin: EdgeInsetsGeometry;
  duration: Duration;
  curve: Curve;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      decoration?: Decoration;
      margin?: EdgeInsetsGeometry;
      padding?: EdgeInsetsGeometry;
      duration?: Duration;
      curve?: Curve;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.decoration = namedParameters.decoration;
    this.margin = namedParameters.margin;
    this.padding = namedParameters.padding;
    this.duration = namedParameters.duration;
    this.curve = namedParameters.curve;
    this.child = namedParameters.child;
    this.className = 'DrawerHeader';
  }
}
export { DrawerHeader };
