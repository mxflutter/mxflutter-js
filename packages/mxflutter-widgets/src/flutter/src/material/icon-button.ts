// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { BoxConstraints } from '../rendering/box';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color } from '../../../mx-dart-sdk';
import { AlignmentGeometry } from '../painting/alignment';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { VisualDensity } from './theme-data';
import { StatelessWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class IconButton extends StatelessWidget {
  iconSize: number;
  visualDensity: VisualDensity;
  padding: EdgeInsetsGeometry;
  alignment: AlignmentGeometry;
  splashRadius: number;
  icon: MXWidget;
  focusColor: Color;
  hoverColor: Color;
  color: Color;
  splashColor: Color;
  highlightColor: Color;
  disabledColor: Color;
  onPressed: any;
  mouseCursor: MouseCursor;
  focusNode: FocusNode;
  autofocus: boolean;
  tooltip: string;
  enableFeedback: boolean;
  constraints: BoxConstraints;
  public constructor(namedParameters: {key?: Key, iconSize?: number, visualDensity?: VisualDensity, padding?: EdgeInsetsGeometry, alignment?: AlignmentGeometry, splashRadius?: number, icon?: MXWidget, color?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, disabledColor?: Color, onPressed?: any, mouseCursor?: MouseCursor, focusNode?: FocusNode, autofocus?: boolean, tooltip?: string, enableFeedback?: boolean, constraints?: BoxConstraints} = {}) {
    super();
    this.key = namedParameters.key;
    this.iconSize = namedParameters.iconSize;
    this.visualDensity = namedParameters.visualDensity;
    this.padding = namedParameters.padding;
    this.alignment = namedParameters.alignment;
    this.splashRadius = namedParameters.splashRadius;
    this.icon = namedParameters.icon;
    this.color = namedParameters.color;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.splashColor = namedParameters.splashColor;
    this.disabledColor = namedParameters.disabledColor;
    this.onPressed = namedParameters.onPressed;
    this.mouseCursor = namedParameters.mouseCursor;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.tooltip = namedParameters.tooltip;
    this.enableFeedback = namedParameters.enableFeedback;
    this.constraints = namedParameters.constraints;
    this.className = 'IconButton';
  }
}
export { IconButton };
