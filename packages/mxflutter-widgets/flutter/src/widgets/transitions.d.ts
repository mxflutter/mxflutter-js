import { TextOverflow } from '../rendering/paragraph';
import { RelativeRect } from '../rendering/stack';
import { Tween } from '../animation/tween';
import { DecorationPosition } from '../rendering/proxy-box';
import { Axis } from '../painting/basic-types';
import { Alignment } from '../painting/alignment';
import { Animation } from '../animation/animation';
import { Key } from '../foundation/key';
import { TextDirection, Size, TextAlign } from '../../../mx-dart-sdk';
import { Listenable } from '../foundation/change-notifier';
import { StatefulWidget$, State$, Widget, SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class AnimatedWidget extends StatefulWidget$ {
    listenable: Listenable;
}
export { AnimatedWidget };
declare class _AnimatedState extends State$ {
}
export { _AnimatedState };
declare class SlideTransition extends AnimatedWidget {
    textDirection: TextDirection;
    transformHitTests: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        position?: Animation;
        transformHitTests?: boolean;
        textDirection?: TextDirection;
        child?: MXWidget;
    });
}
export { SlideTransition };
declare class ScaleTransition extends AnimatedWidget {
    alignment: Alignment;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        scale?: Animation;
        alignment?: Alignment;
        child?: MXWidget;
    });
}
export { ScaleTransition };
declare class RotationTransition extends AnimatedWidget {
    alignment: Alignment;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        turns?: Animation;
        alignment?: Alignment;
        child?: MXWidget;
    });
}
export { RotationTransition };
declare class SizeTransition extends AnimatedWidget {
    axis: Axis;
    axisAlignment: number;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        axis?: Axis;
        sizeFactor?: Animation;
        axisAlignment?: number;
        child?: MXWidget;
    });
}
export { SizeTransition };
declare class FadeTransition extends SingleChildRenderObjectWidget {
    opacity: Animation;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        opacity?: Animation;
        alwaysIncludeSemantics?: boolean;
        child?: MXWidget;
    });
}
export { FadeTransition };
declare class SliverFadeTransition extends SingleChildRenderObjectWidget {
    opacity: Animation;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        opacity?: Animation;
        alwaysIncludeSemantics?: boolean;
        sliver?: MXWidget;
    });
}
export { SliverFadeTransition };
declare class RelativeRectTween extends Tween {
    constructor(namedParameters?: {
        begin?: RelativeRect;
        end?: RelativeRect;
    });
}
export { RelativeRectTween };
declare class PositionedTransition extends AnimatedWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        rect?: Animation;
        child?: MXWidget;
    });
}
export { PositionedTransition };
declare class RelativePositionedTransition extends AnimatedWidget {
    size: Size;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        rect?: Animation;
        size?: Size;
        child?: MXWidget;
    });
}
export { RelativePositionedTransition };
declare class DecoratedBoxTransition extends AnimatedWidget {
    decoration: Animation;
    position: DecorationPosition;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        decoration?: Animation;
        position?: DecorationPosition;
        child?: MXWidget;
    });
}
export { DecoratedBoxTransition };
declare class AlignTransition extends AnimatedWidget {
    widthFactor: number;
    heightFactor: number;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: Animation;
        child?: MXWidget;
        widthFactor?: number;
        heightFactor?: number;
    });
}
export { AlignTransition };
declare class DefaultTextStyleTransition extends AnimatedWidget {
    textAlign: TextAlign;
    softWrap: boolean;
    overflow: TextOverflow;
    maxLines: number;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        style?: Animation;
        child?: MXWidget;
        textAlign?: TextAlign;
        softWrap?: boolean;
        overflow?: TextOverflow;
        maxLines?: number;
    });
}
export { DefaultTextStyleTransition };
declare class AnimatedBuilder extends AnimatedWidget {
    builder: any;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Listenable;
        builder?: any;
        child?: MXWidget;
        widget?: Widget;
    });
}
export { AnimatedBuilder };
