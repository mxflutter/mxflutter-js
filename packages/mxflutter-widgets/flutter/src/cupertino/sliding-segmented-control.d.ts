import { ContainerBoxParentData, RenderBox } from '../rendering/box';
import { LongPressGestureRecognizer } from '../gestures/long-press';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TapGestureRecognizer } from '../gestures/tap';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$, MultiChildRenderObjectWidget } from '../widgets/framework';
import { FontWeight, Color, Rect, Offset } from '../../../mx-dart-sdk';
import { Tween } from '../animation/tween';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _FontWeightTween extends Tween {
    constructor(namedParameters?: {
        begin?: FontWeight;
        end?: FontWeight;
    });
}
export { _FontWeightTween };
declare class CupertinoSlidingSegmentedControl extends StatefulWidget$ {
    children: Map<any, any>;
    groupValue: any;
    onValueChanged: any;
    backgroundColor: Color;
    thumbColor: Color;
    padding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        children?: Map<any, any>;
        onValueChanged?: any;
        groupValue?: any;
        thumbColor?: Color;
        padding?: EdgeInsetsGeometry;
        backgroundColor?: Color;
    });
}
export { CupertinoSlidingSegmentedControl };
declare class _SegmentedControlState extends State$ {
    highlightControllers: Map<any, any>;
    highlightTween: Tween;
    pressControllers: Map<any, any>;
    pressTween: Tween;
    keys: Array<any>;
    thumbController: AnimationController;
    separatorOpacityController: AnimationController;
    thumbScaleController: AnimationController;
    tap: TapGestureRecognizer;
    drag: HorizontalDragGestureRecognizer;
    longPress: LongPressGestureRecognizer;
    highlighted: any;
    pressed: any;
}
export { _SegmentedControlState };
declare class _SegmentedControlRenderWidget extends MultiChildRenderObjectWidget {
    selectedIndex: number;
    thumbColor: Color;
    state: _SegmentedControlState;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        selectedIndex?: number;
        thumbColor?: Color;
        state?: _SegmentedControlState;
    });
}
export { _SegmentedControlRenderWidget };
declare class _ChildAnimationManifest extends MXDartClass {
    opacity: number;
    opacityTween: Tween;
    separatorOpacity: number;
    separatorTween: Tween;
    constructor(namedParameters?: {
        opacity?: number;
        separatorOpacity?: number;
    });
}
export { _ChildAnimationManifest };
declare class _SegmentedControlContainerBoxParentData extends ContainerBoxParentData {
}
export { _SegmentedControlContainerBoxParentData };
declare class _RenderSegmentedControl extends RenderBox {
    state: _SegmentedControlState;
    childAnimations: Map<any, any>;
    currentThumbRect: Rect;
    currentThumbTween: Tween;
    thumbScaleTween: Tween;
    currentThumbScale: number;
    localDragOffset: Offset;
    startedOnSelectedSegment: boolean;
    needsThumbAnimationUpdate: boolean;
    highlightedIndex: number;
    pressedIndex: number;
    thumbColor: Color;
    constructor(namedParameters?: {
        selectedIndex?: number;
        thumbColor?: Color;
        state?: _SegmentedControlState;
    });
}
export { _RenderSegmentedControl };
