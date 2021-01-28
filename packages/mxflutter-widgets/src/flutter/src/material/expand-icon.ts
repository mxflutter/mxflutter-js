//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ExpandIcon extends StatefulWidget$ {
  isExpanded: boolean;
  size: number;
  onPressed: any;
  padding: EdgeInsetsGeometry;
  color: Color;
  disabledColor: Color;
  expandedColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      isExpanded?: boolean;
      size?: number;
      onPressed?: any;
      padding?: EdgeInsetsGeometry;
      color?: Color;
      disabledColor?: Color;
      expandedColor?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.isExpanded = namedParameters.isExpanded;
    this.size = namedParameters.size;
    this.onPressed = namedParameters.onPressed;
    this.padding = namedParameters.padding;
    this.color = namedParameters.color;
    this.disabledColor = namedParameters.disabledColor;
    this.expandedColor = namedParameters.expandedColor;
    this.className = 'ExpandIcon';
  }
}
export { ExpandIcon };
class _ExpandIconState extends State$ {
  controller: AnimationController;
  iconTurns: Animation;
}
export { _ExpandIconState };
