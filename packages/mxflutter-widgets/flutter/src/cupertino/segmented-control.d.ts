import { ContainerBoxParentData, RenderBox } from '../rendering/box';
import { ColorTween } from '../animation/tween';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, RRect, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, MultiChildRenderObjectWidget } from '../widgets/framework';
declare class CupertinoSegmentedControl extends StatefulWidget {
    children: Map<any, any>;
    groupValue: any;
    onValueChanged: any;
    unselectedColor: Color;
    selectedColor: Color;
    borderColor: Color;
    pressedColor: Color;
    padding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        children?: Map<any, any>;
        onValueChanged?: any;
        groupValue?: any;
        unselectedColor?: Color;
        selectedColor?: Color;
        borderColor?: Color;
        pressedColor?: Color;
        padding?: EdgeInsetsGeometry;
    });
}
export { CupertinoSegmentedControl };
declare class _SegmentedControlState extends State {
    pressedKey: any;
    selectionControllers: Array<any>;
    childTweens: Array<any>;
    forwardBackgroundColorTween: ColorTween;
    reverseBackgroundColorTween: ColorTween;
    textColorTween: ColorTween;
    selectedColor: Color;
    unselectedColor: Color;
    borderColor: Color;
    pressedColor: Color;
}
export { _SegmentedControlState };
declare class _SegmentedControlRenderWidget extends MultiChildRenderObjectWidget {
    selectedIndex: number;
    pressedIndex: number;
    backgroundColors: Array<any>;
    borderColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        selectedIndex?: number;
        pressedIndex?: number;
        backgroundColors?: Array<any>;
        borderColor?: Color;
    });
}
export { _SegmentedControlRenderWidget };
declare class _SegmentedControlContainerBoxParentData extends ContainerBoxParentData {
    surroundingRect: RRect;
}
export { _SegmentedControlContainerBoxParentData };
declare class _RenderSegmentedControl extends RenderBox {
    selectedIndex: number;
    pressedIndex: number;
    textDirection: TextDirection;
    backgroundColors: Array<any>;
    borderColor: Color;
    constructor(namedParameters?: {
        selectedIndex?: number;
        pressedIndex?: number;
        textDirection?: TextDirection;
        backgroundColors?: Array<any>;
        borderColor?: Color;
    });
}
export { _RenderSegmentedControl };
