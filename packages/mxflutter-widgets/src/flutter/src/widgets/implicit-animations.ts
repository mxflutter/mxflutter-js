// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextWidthBasis } from '../painting/text-painter';
import { TextOverflow } from '../rendering/paragraph';
import { AlignmentGeometryTween } from '../rendering/tweens';
import { Color, Rect, TextAlign, TextHeightBehavior, Clip } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { AlignmentGeometry } from '../painting/alignment';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { StatefulWidget, State, Widget } from './framework';
import { TextStyle } from '../painting/text-style';
import { Matrix4 } from '../../../vector-math-64';
import { Border, BoxShape } from '../painting/box-border';
import { BorderRadius } from '../painting/border-radius';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { Decoration } from '../painting/decoration';
import { BoxConstraints } from '../rendering/box';
import { Tween, ColorTween } from '../animation/tween';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BoxConstraintsTween extends Tween {
  public constructor(namedParameters: {begin?: BoxConstraints, end?: BoxConstraints} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'BoxConstraintsTween';
  }
}
export { BoxConstraintsTween };
class DecorationTween extends Tween {
  public constructor(namedParameters: {begin?: Decoration, end?: Decoration} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'DecorationTween';
  }
  // MX modified begin
  // MXFlutter特殊逻辑
  public animate(controller: AnimationController) {
    this['controller'] = controller;
    return this;
  }
  // MX modified end
}
export { DecorationTween };
class EdgeInsetsTween extends Tween {
  public constructor(namedParameters: {begin?: EdgeInsets, end?: EdgeInsets} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'EdgeInsetsTween';
  }
}
export { EdgeInsetsTween };
class EdgeInsetsGeometryTween extends Tween {
  public constructor(namedParameters: {begin?: EdgeInsetsGeometry, end?: EdgeInsetsGeometry} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'EdgeInsetsGeometryTween';
  }
}
export { EdgeInsetsGeometryTween };
class BorderRadiusTween extends Tween {
  public constructor(namedParameters: {begin?: BorderRadius, end?: BorderRadius} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'BorderRadiusTween';
  }
}
export { BorderRadiusTween };
class BorderTween extends Tween {
  public constructor(namedParameters: {begin?: Border, end?: Border} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'BorderTween';
  }
}
export { BorderTween };
class Matrix4Tween extends Tween {
  public constructor(namedParameters: {begin?: Matrix4, end?: Matrix4} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'Matrix4Tween';
  }
}
export { Matrix4Tween };
class TextStyleTween extends Tween {
  public constructor(namedParameters: {begin?: TextStyle, end?: TextStyle} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'TextStyleTween';
  }
}
export { TextStyleTween };
abstract class ImplicitlyAnimatedWidget extends StatefulWidget {
  curve: Curve;
  duration: Duration;
  onEnd: any;
}
export { ImplicitlyAnimatedWidget };
abstract class ImplicitlyAnimatedWidgetState extends State {
  controller: AnimationController;
  animation: Animation;
}
export { ImplicitlyAnimatedWidgetState };
abstract class AnimatedWidgetBaseState extends ImplicitlyAnimatedWidgetState {}
export { AnimatedWidgetBaseState };
class AnimatedContainer extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  alignment: AlignmentGeometry;
  padding: EdgeInsetsGeometry;
  decoration: Decoration;
  foregroundDecoration: Decoration;
  constraints: BoxConstraints;
  margin: EdgeInsetsGeometry;
  transform: Matrix4;
  public constructor(namedParameters: {key?: Key, alignment?: AlignmentGeometry, padding?: EdgeInsetsGeometry, color?: Color, decoration?: Decoration, foregroundDecoration?: Decoration, width?: number, height?: number, constraints?: BoxConstraints, margin?: EdgeInsetsGeometry, transform?: Matrix4, child?: MXWidget, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.padding = namedParameters.padding;
    this['color'] = namedParameters.color;
    this.decoration = namedParameters.decoration;
    this.foregroundDecoration = namedParameters.foregroundDecoration;
    this['width'] = namedParameters.width;
    this['height'] = namedParameters.height;
    this.constraints = namedParameters.constraints;
    this.margin = namedParameters.margin;
    this.transform = namedParameters.transform;
    this.child = namedParameters.child;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedContainer';
  }
}
export { AnimatedContainer };
class _AnimatedContainerState extends AnimatedWidgetBaseState {
  alignment: AlignmentGeometryTween;
  padding: EdgeInsetsGeometryTween;
  decoration: DecorationTween;
  foregroundDecoration: DecorationTween;
  constraints: BoxConstraintsTween;
  margin: EdgeInsetsGeometryTween;
  transform: Matrix4Tween;
}
export { _AnimatedContainerState };
class AnimatedPadding extends ImplicitlyAnimatedWidget {
  padding: EdgeInsetsGeometry;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, padding?: EdgeInsetsGeometry, child?: MXWidget, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.padding = namedParameters.padding;
    this.child = namedParameters.child;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedPadding';
  }
}
export { AnimatedPadding };
class _AnimatedPaddingState extends AnimatedWidgetBaseState {
  padding: EdgeInsetsGeometryTween;
}
export { _AnimatedPaddingState };
class AnimatedAlign extends ImplicitlyAnimatedWidget {
  alignment: AlignmentGeometry;
  child: MXWidget;
  heightFactor: number;
  widthFactor: number;
  public constructor(namedParameters: {key?: Key, alignment?: AlignmentGeometry, child?: MXWidget, heightFactor?: number, widthFactor?: number, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.child = namedParameters.child;
    this.heightFactor = namedParameters.heightFactor;
    this.widthFactor = namedParameters.widthFactor;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedAlign';
  }
}
export { AnimatedAlign };
class _AnimatedAlignState extends AnimatedWidgetBaseState {
  alignment: AlignmentGeometryTween;
  heightFactorTween: Tween;
  widthFactorTween: Tween;
}
export { _AnimatedAlignState };
class AnimatedPositioned extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, left?: number, top?: number, right?: number, bottom?: number, width?: number, height?: number, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.left = namedParameters.left;
    this.top = namedParameters.top;
    this.right = namedParameters.right;
    this.bottom = namedParameters.bottom;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedPositioned';
  }
  static fromRect(namedParameters: {key?: Key, child?: MXWidget, rect?: Rect, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    var jsObj = new AnimatedPositioned();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj['rect'] = namedParameters.rect;
    jsObj.curve = namedParameters.curve;
    jsObj.duration = namedParameters.duration;
    jsObj.onEnd = namedParameters.onEnd;
    jsObj['constructorName'] = 'fromRect';
    return jsObj;
  }
}
export { AnimatedPositioned };
class _AnimatedPositionedState extends AnimatedWidgetBaseState {
  left: Tween;
  top: Tween;
  right: Tween;
  bottom: Tween;
  width: Tween;
  height: Tween;
}
export { _AnimatedPositionedState };
class AnimatedPositionedDirectional extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  start: number;
  top: number;
  end: number;
  bottom: number;
  width: number;
  height: number;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, start?: number, top?: number, end?: number, bottom?: number, width?: number, height?: number, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.start = namedParameters.start;
    this.top = namedParameters.top;
    this.end = namedParameters.end;
    this.bottom = namedParameters.bottom;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedPositionedDirectional';
  }
}
export { AnimatedPositionedDirectional };
class _AnimatedPositionedDirectionalState extends AnimatedWidgetBaseState {
  start: Tween;
  top: Tween;
  end: Tween;
  bottom: Tween;
  width: Tween;
  height: Tween;
}
export { _AnimatedPositionedDirectionalState };
class AnimatedOpacity extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  opacity: number;
  alwaysIncludeSemantics: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, opacity?: number, curve?: Curve, duration?: Duration, onEnd?: any, alwaysIncludeSemantics?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.opacity = namedParameters.opacity;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
    this.className = 'AnimatedOpacity';
  }
}
export { AnimatedOpacity };
class _AnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
  opacity: Tween;
  opacityAnimation: Animation;
}
export { _AnimatedOpacityState };
class SliverAnimatedOpacity extends ImplicitlyAnimatedWidget {
  sliver: MXWidget;
  opacity: number;
  alwaysIncludeSemantics: boolean;
  public constructor(namedParameters: {key?: Key, sliver?: MXWidget, opacity?: number, curve?: Curve, duration?: Duration, onEnd?: any, alwaysIncludeSemantics?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.sliver = namedParameters.sliver;
    this.opacity = namedParameters.opacity;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
    this.className = 'SliverAnimatedOpacity';
  }
}
export { SliverAnimatedOpacity };
class _SliverAnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
  opacity: Tween;
  opacityAnimation: Animation;
}
export { _SliverAnimatedOpacityState };
class AnimatedDefaultTextStyle extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  style: TextStyle;
  textAlign: TextAlign;
  softWrap: boolean;
  overflow: TextOverflow;
  maxLines: number;
  textWidthBasis: TextWidthBasis;
  textHeightBehavior: TextHeightBehavior;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, style?: TextStyle, textAlign?: TextAlign, softWrap?: boolean, overflow?: TextOverflow, maxLines?: number, textWidthBasis?: TextWidthBasis, textHeightBehavior?: TextHeightBehavior, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.style = namedParameters.style;
    this.textAlign = namedParameters.textAlign;
    this.softWrap = namedParameters.softWrap;
    this.overflow = namedParameters.overflow;
    this.maxLines = namedParameters.maxLines;
    this.textWidthBasis = namedParameters.textWidthBasis;
    this.textHeightBehavior = namedParameters.textHeightBehavior;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedDefaultTextStyle';
  }
}
export { AnimatedDefaultTextStyle };
class _AnimatedDefaultTextStyleState extends AnimatedWidgetBaseState {
  style: TextStyleTween;
}
export { _AnimatedDefaultTextStyleState };
class AnimatedPhysicalModel extends ImplicitlyAnimatedWidget {
  child: MXWidget;
  shape: BoxShape;
  clipBehavior: Clip;
  borderRadius: BorderRadius;
  elevation: number;
  color: Color;
  animateColor: boolean;
  shadowColor: Color;
  animateShadowColor: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, shape?: BoxShape, clipBehavior?: Clip, borderRadius?: BorderRadius, elevation?: number, color?: Color, animateColor?: boolean, shadowColor?: Color, animateShadowColor?: boolean, curve?: Curve, duration?: Duration, onEnd?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.borderRadius = namedParameters.borderRadius;
    this.elevation = namedParameters.elevation;
    this.color = namedParameters.color;
    this.animateColor = namedParameters.animateColor;
    this.shadowColor = namedParameters.shadowColor;
    this.animateShadowColor = namedParameters.animateShadowColor;
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.onEnd = namedParameters.onEnd;
    this.className = 'AnimatedPhysicalModel';
  }
}
export { AnimatedPhysicalModel };
class _AnimatedPhysicalModelState extends AnimatedWidgetBaseState {
  borderRadius: BorderRadiusTween;
  elevation: Tween;
  color: ColorTween;
  shadowColor: ColorTween;
}
export { _AnimatedPhysicalModelState };
