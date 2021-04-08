import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { AnimationController } from '../animation/animation-controller';
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { TickerProvider } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
declare class CupertinoSlider extends StatefulWidget {
    value: number;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    min: number;
    max: number;
    divisions: number;
    activeColor: Color;
    thumbColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        min?: number;
        max?: number;
        divisions?: number;
        activeColor?: Color;
        thumbColor?: Color;
    });
}
export { CupertinoSlider };
declare class _CupertinoSliderState extends State {
}
export { _CupertinoSliderState };
declare class _CupertinoSliderRenderObjectWidget extends LeafRenderObjectWidget {
    value: number;
    divisions: number;
    activeColor: Color;
    thumbColor: Color;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    vsync: TickerProvider;
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        divisions?: number;
        activeColor?: Color;
        thumbColor?: Color;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        vsync?: TickerProvider;
    });
}
export { _CupertinoSliderRenderObjectWidget };
declare class _RenderCupertinoSlider extends RenderConstrainedBox {
    value: number;
    divisions: number;
    activeColor: Color;
    thumbColor: Color;
    trackColor: Color;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    textDirection: TextDirection;
    position: AnimationController;
    drag: HorizontalDragGestureRecognizer;
    currentDragValue: number;
    constructor(namedParameters?: {
        value?: number;
        divisions?: number;
        activeColor?: Color;
        thumbColor?: Color;
        trackColor?: Color;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        vsync?: TickerProvider;
        textDirection?: TextDirection;
    });
}
export { _RenderCupertinoSlider };
