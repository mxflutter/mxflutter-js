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
import { StatefulWidget, State } from './framework';
import { TextStyle } from '../painting/text-style';
import { Matrix4 } from '../../../vector-math-64';
import { Border, BoxShape } from '../painting/box-border';
import { BorderRadius } from '../painting/border-radius';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { Decoration } from '../painting/decoration';
import { BoxConstraints } from '../rendering/box';
import { Tween, ColorTween } from '../animation/tween';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class BoxConstraintsTween extends Tween {
    constructor(namedParameters?: {
        begin?: BoxConstraints;
        end?: BoxConstraints;
    });
}
export { BoxConstraintsTween };
declare class DecorationTween extends Tween {
    constructor(namedParameters?: {
        begin?: Decoration;
        end?: Decoration;
    });
    animate(controller: AnimationController): this;
}
export { DecorationTween };
declare class EdgeInsetsTween extends Tween {
    constructor(namedParameters?: {
        begin?: EdgeInsets;
        end?: EdgeInsets;
    });
}
export { EdgeInsetsTween };
declare class EdgeInsetsGeometryTween extends Tween {
    constructor(namedParameters?: {
        begin?: EdgeInsetsGeometry;
        end?: EdgeInsetsGeometry;
    });
}
export { EdgeInsetsGeometryTween };
declare class BorderRadiusTween extends Tween {
    constructor(namedParameters?: {
        begin?: BorderRadius;
        end?: BorderRadius;
    });
}
export { BorderRadiusTween };
declare class BorderTween extends Tween {
    constructor(namedParameters?: {
        begin?: Border;
        end?: Border;
    });
}
export { BorderTween };
declare class Matrix4Tween extends Tween {
    constructor(namedParameters?: {
        begin?: Matrix4;
        end?: Matrix4;
    });
}
export { Matrix4Tween };
declare class TextStyleTween extends Tween {
    constructor(namedParameters?: {
        begin?: TextStyle;
        end?: TextStyle;
    });
}
export { TextStyleTween };
declare abstract class ImplicitlyAnimatedWidget extends StatefulWidget {
    curve: Curve;
    duration: Duration;
    onEnd: any;
}
export { ImplicitlyAnimatedWidget };
declare abstract class ImplicitlyAnimatedWidgetState extends State {
    controller: AnimationController;
    animation: Animation;
}
export { ImplicitlyAnimatedWidgetState };
declare abstract class AnimatedWidgetBaseState extends ImplicitlyAnimatedWidgetState {
}
export { AnimatedWidgetBaseState };
declare class AnimatedContainer extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    alignment: AlignmentGeometry;
    padding: EdgeInsetsGeometry;
    decoration: Decoration;
    foregroundDecoration: Decoration;
    constraints: BoxConstraints;
    margin: EdgeInsetsGeometry;
    transform: Matrix4;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        padding?: EdgeInsetsGeometry;
        color?: Color;
        decoration?: Decoration;
        foregroundDecoration?: Decoration;
        width?: number;
        height?: number;
        constraints?: BoxConstraints;
        margin?: EdgeInsetsGeometry;
        transform?: Matrix4;
        child?: MXWidget;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
}
export { AnimatedContainer };
declare class _AnimatedContainerState extends AnimatedWidgetBaseState {
    alignment: AlignmentGeometryTween;
    padding: EdgeInsetsGeometryTween;
    decoration: DecorationTween;
    foregroundDecoration: DecorationTween;
    constraints: BoxConstraintsTween;
    margin: EdgeInsetsGeometryTween;
    transform: Matrix4Tween;
}
export { _AnimatedContainerState };
declare class AnimatedPadding extends ImplicitlyAnimatedWidget {
    padding: EdgeInsetsGeometry;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        padding?: EdgeInsetsGeometry;
        child?: MXWidget;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
}
export { AnimatedPadding };
declare class _AnimatedPaddingState extends AnimatedWidgetBaseState {
    padding: EdgeInsetsGeometryTween;
}
export { _AnimatedPaddingState };
declare class AnimatedAlign extends ImplicitlyAnimatedWidget {
    alignment: AlignmentGeometry;
    child: MXWidget;
    heightFactor: number;
    widthFactor: number;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        child?: MXWidget;
        heightFactor?: number;
        widthFactor?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
}
export { AnimatedAlign };
declare class _AnimatedAlignState extends AnimatedWidgetBaseState {
    alignment: AlignmentGeometryTween;
    heightFactorTween: Tween;
    widthFactorTween: Tween;
}
export { _AnimatedAlignState };
declare class AnimatedPositioned extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
        width?: number;
        height?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
    static fromRect(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        rect?: Rect;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    }): AnimatedPositioned;
}
export { AnimatedPositioned };
declare class _AnimatedPositionedState extends AnimatedWidgetBaseState {
    left: Tween;
    top: Tween;
    right: Tween;
    bottom: Tween;
    width: Tween;
    height: Tween;
}
export { _AnimatedPositionedState };
declare class AnimatedPositionedDirectional extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    start: number;
    top: number;
    end: number;
    bottom: number;
    width: number;
    height: number;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
        width?: number;
        height?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
}
export { AnimatedPositionedDirectional };
declare class _AnimatedPositionedDirectionalState extends AnimatedWidgetBaseState {
    start: Tween;
    top: Tween;
    end: Tween;
    bottom: Tween;
    width: Tween;
    height: Tween;
}
export { _AnimatedPositionedDirectionalState };
declare class AnimatedOpacity extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    opacity: number;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        opacity?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
        alwaysIncludeSemantics?: boolean;
    });
}
export { AnimatedOpacity };
declare class _AnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
    opacity: Tween;
    opacityAnimation: Animation;
}
export { _AnimatedOpacityState };
declare class SliverAnimatedOpacity extends ImplicitlyAnimatedWidget {
    sliver: MXWidget;
    opacity: number;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        sliver?: MXWidget;
        opacity?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
        alwaysIncludeSemantics?: boolean;
    });
}
export { SliverAnimatedOpacity };
declare class _SliverAnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
    opacity: Tween;
    opacityAnimation: Animation;
}
export { _SliverAnimatedOpacityState };
declare class AnimatedDefaultTextStyle extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    style: TextStyle;
    textAlign: TextAlign;
    softWrap: boolean;
    overflow: TextOverflow;
    maxLines: number;
    textWidthBasis: TextWidthBasis;
    textHeightBehavior: TextHeightBehavior;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        style?: TextStyle;
        textAlign?: TextAlign;
        softWrap?: boolean;
        overflow?: TextOverflow;
        maxLines?: number;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
}
export { AnimatedDefaultTextStyle };
declare class _AnimatedDefaultTextStyleState extends AnimatedWidgetBaseState {
    style: TextStyleTween;
}
export { _AnimatedDefaultTextStyleState };
declare class AnimatedPhysicalModel extends ImplicitlyAnimatedWidget {
    child: MXWidget;
    shape: BoxShape;
    clipBehavior: Clip;
    borderRadius: BorderRadius;
    elevation: number;
    color: Color;
    animateColor: boolean;
    shadowColor: Color;
    animateShadowColor: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        shape?: BoxShape;
        clipBehavior?: Clip;
        borderRadius?: BorderRadius;
        elevation?: number;
        color?: Color;
        animateColor?: boolean;
        shadowColor?: Color;
        animateShadowColor?: boolean;
        curve?: Curve;
        duration?: Duration;
        onEnd?: any;
    });
}
export { AnimatedPhysicalModel };
declare class _AnimatedPhysicalModelState extends AnimatedWidgetBaseState {
    borderRadius: BorderRadiusTween;
    elevation: Tween;
    color: ColorTween;
    shadowColor: ColorTween;
}
export { _AnimatedPhysicalModelState };
