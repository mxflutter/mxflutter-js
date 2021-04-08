// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderAligningShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { MaterialTapTargetSize } from './theme-data';
import { FocusNode } from '../widgets/focus-manager';
import { ShapeBorder } from '../painting/borders';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color, Clip, TextDirection } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DefaultHeroTag extends MXDartClass {}
export { _DefaultHeroTag };
class FloatingActionButton extends StatelessWidget {
  child: MXWidget;
  tooltip: string;
  foregroundColor: Color;
  backgroundColor: Color;
  focusColor: Color;
  hoverColor: Color;
  splashColor: Color;
  heroTag: any;
  onPressed: any;
  mouseCursor: MouseCursor;
  elevation: number;
  focusElevation: number;
  hoverElevation: number;
  highlightElevation: number;
  disabledElevation: number;
  mini: boolean;
  shape: ShapeBorder;
  clipBehavior: Clip;
  isExtended: boolean;
  focusNode: FocusNode;
  autofocus: boolean;
  materialTapTargetSize: MaterialTapTargetSize;
  sizeConstraints: BoxConstraints;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, tooltip?: string, foregroundColor?: Color, backgroundColor?: Color, focusColor?: Color, hoverColor?: Color, splashColor?: Color, heroTag?: any, elevation?: number, focusElevation?: number, hoverElevation?: number, highlightElevation?: number, disabledElevation?: number, onPressed?: any, mouseCursor?: MouseCursor, mini?: boolean, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, isExtended?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.tooltip = namedParameters.tooltip;
    this.foregroundColor = namedParameters.foregroundColor;
    this.backgroundColor = namedParameters.backgroundColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.splashColor = namedParameters.splashColor;
    this.heroTag = namedParameters.heroTag;
    this.elevation = namedParameters.elevation;
    this.focusElevation = namedParameters.focusElevation;
    this.hoverElevation = namedParameters.hoverElevation;
    this.highlightElevation = namedParameters.highlightElevation;
    this.disabledElevation = namedParameters.disabledElevation;
    this.onPressed = namedParameters.onPressed;
    this.mouseCursor = namedParameters.mouseCursor;
    this.mini = namedParameters.mini;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.isExtended = namedParameters.isExtended;
    this.className = 'FloatingActionButton';
  }
  static extended(namedParameters: {key?: Key, tooltip?: string, foregroundColor?: Color, backgroundColor?: Color, focusColor?: Color, hoverColor?: Color, heroTag?: any, elevation?: number, focusElevation?: number, hoverElevation?: number, splashColor?: Color, highlightElevation?: number, disabledElevation?: number, onPressed?: any, mouseCursor?: MouseCursor, shape?: ShapeBorder, isExtended?: boolean, materialTapTargetSize?: MaterialTapTargetSize, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, icon?: MXWidget, label?: MXWidget} = {}) {
    var jsObj = new FloatingActionButton();
    jsObj.key = namedParameters.key;
    jsObj.tooltip = namedParameters.tooltip;
    jsObj.foregroundColor = namedParameters.foregroundColor;
    jsObj.backgroundColor = namedParameters.backgroundColor;
    jsObj.focusColor = namedParameters.focusColor;
    jsObj.hoverColor = namedParameters.hoverColor;
    jsObj.heroTag = namedParameters.heroTag;
    jsObj.elevation = namedParameters.elevation;
    jsObj.focusElevation = namedParameters.focusElevation;
    jsObj.hoverElevation = namedParameters.hoverElevation;
    jsObj.splashColor = namedParameters.splashColor;
    jsObj.highlightElevation = namedParameters.highlightElevation;
    jsObj.disabledElevation = namedParameters.disabledElevation;
    jsObj.onPressed = namedParameters.onPressed;
    jsObj.mouseCursor = namedParameters.mouseCursor;
    jsObj.shape = namedParameters.shape;
    jsObj.isExtended = namedParameters.isExtended;
    jsObj.materialTapTargetSize = namedParameters.materialTapTargetSize;
    jsObj.clipBehavior = namedParameters.clipBehavior;
    jsObj.focusNode = namedParameters.focusNode;
    jsObj.autofocus = namedParameters.autofocus;
    jsObj['icon'] = namedParameters.icon;
    jsObj['label'] = namedParameters.label;
    jsObj['constructorName'] = 'extended';
    return jsObj;
  }
}
export { FloatingActionButton };
class _ChildOverflowBox extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: {key?: Key, child?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = '_ChildOverflowBox';
  }
}
export { _ChildOverflowBox };
class _RenderChildOverflowBox extends RenderAligningShiftedBox {
  public constructor(namedParameters: {child?: RenderBox, textDirection?: TextDirection} = {}) {
    super();
    this['child'] = namedParameters.child;
    this['textDirection'] = namedParameters.textDirection;
    this.className = '_RenderChildOverflowBox';
  }
}
export { _RenderChildOverflowBox };
