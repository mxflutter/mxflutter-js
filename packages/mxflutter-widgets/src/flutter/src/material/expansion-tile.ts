//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ColorTween } from '../animation/tween';
import { Key } from '../foundation/key';
import { CrossAxisAlignment } from '../rendering/flex';
import { Alignment } from '../painting/alignment';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget$, Widget, State$, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ExpansionTile extends StatefulWidget$ {
  leading: MXWidget;
  title: MXWidget;
  subtitle: MXWidget;
  onExpansionChanged: any;
  children: Array<any>;
  backgroundColor: Color;
  trailing: MXWidget;
  initiallyExpanded: boolean;
  maintainState: boolean;
  tilePadding: EdgeInsetsGeometry;
  expandedAlignment: Alignment;
  expandedCrossAxisAlignment: CrossAxisAlignment;
  childrenPadding: EdgeInsetsGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      leading?: MXWidget;
      title?: MXWidget;
      subtitle?: MXWidget;
      backgroundColor?: Color;
      onExpansionChanged?: any;
      children?: Array<any>;
      trailing?: MXWidget;
      initiallyExpanded?: boolean;
      maintainState?: boolean;
      tilePadding?: EdgeInsetsGeometry;
      expandedCrossAxisAlignment?: CrossAxisAlignment;
      expandedAlignment?: Alignment;
      childrenPadding?: EdgeInsetsGeometry;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.backgroundColor = namedParameters.backgroundColor;
    this.onExpansionChanged = namedParameters.onExpansionChanged;
    this.children = namedParameters.children;
    this.trailing = namedParameters.trailing;
    this.initiallyExpanded = namedParameters.initiallyExpanded;
    this.maintainState = namedParameters.maintainState;
    this.tilePadding = namedParameters.tilePadding;
    this.expandedCrossAxisAlignment = namedParameters.expandedCrossAxisAlignment;
    this.expandedAlignment = namedParameters.expandedAlignment;
    this.childrenPadding = namedParameters.childrenPadding;
    this.className = 'ExpansionTile';
  }
}
export { ExpansionTile };
class _ExpansionTileState extends State$ {
  borderColorTween: ColorTween;
  headerColorTween: ColorTween;
  iconColorTween: ColorTween;
  backgroundColorTween: ColorTween;
  controller: AnimationController;
  iconTurns: Animation;
  heightFactor: Animation;
  borderColor: Animation;
  headerColor: Animation;
  iconColor: Animation;
  backgroundColor: Animation;
  isExpanded: boolean;
}
export { _ExpansionTileState };
