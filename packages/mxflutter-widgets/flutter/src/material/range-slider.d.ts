import { SemanticsNode } from '../semantics/semantics';
import { ThemeData } from './theme-data';
import { TargetPlatform } from '../foundation/platform';
import { TapGestureRecognizer } from '../gestures/tap';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TextPainter } from '../painting/text-painter';
import { Animation } from '../animation/animation';
import { RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from '../widgets/overlay';
import { LayerLink } from '../rendering/layer';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Color, Size, TextDirection } from '../../../mx-dart-sdk';
import { RangeValues, RangeLabels, SliderThemeData, Thumb } from './slider-theme';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
declare class RangeSlider extends StatefulWidget {
    values: RangeValues;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    min: number;
    max: number;
    divisions: number;
    labels: RangeLabels;
    activeColor: Color;
    inactiveColor: Color;
    semanticFormatterCallback: any;
    constructor(namedParameters?: {
        key?: Key;
        values?: RangeValues;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        min?: number;
        max?: number;
        divisions?: number;
        labels?: RangeLabels;
        activeColor?: Color;
        inactiveColor?: Color;
        semanticFormatterCallback?: any;
    });
}
export { RangeSlider };
declare class _RangeSliderState extends State {
    overlayController: AnimationController;
    valueIndicatorController: AnimationController;
    enableController: AnimationController;
    startPositionController: AnimationController;
    endPositionController: AnimationController;
    interactionTimer: any;
    paintTopValueIndicator: any;
    paintBottomValueIndicator: any;
    layerLink: LayerLink;
    overlayEntry: OverlayEntry;
    static get enableAnimationDuration(): Duration;
    static get valueIndicatorAnimationDuration(): Duration;
}
export { _RangeSliderState };
declare class _RangeSliderRenderObjectWidget extends LeafRenderObjectWidget {
    values: RangeValues;
    divisions: number;
    labels: RangeLabels;
    sliderTheme: SliderThemeData;
    textScaleFactor: number;
    screenSize: Size;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    semanticFormatterCallback: any;
    state: _RangeSliderState;
    constructor(namedParameters?: {
        key?: Key;
        values?: RangeValues;
        divisions?: number;
        labels?: RangeLabels;
        sliderTheme?: SliderThemeData;
        textScaleFactor?: number;
        screenSize?: Size;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        state?: _RangeSliderState;
        semanticFormatterCallback?: any;
    });
}
export { _RangeSliderRenderObjectWidget };
declare class _RenderRangeSlider extends RenderBox {
    lastThumbSelection: Thumb;
    state: _RangeSliderState;
    overlayAnimation: Animation;
    valueIndicatorAnimation: Animation;
    enableAnimation: Animation;
    startLabelPainter: TextPainter;
    endLabelPainter: TextPainter;
    drag: HorizontalDragGestureRecognizer;
    tap: TapGestureRecognizer;
    active: boolean;
    newValues: RangeValues;
    values: RangeValues;
    platform: TargetPlatform;
    semanticFormatterCallback: any;
    divisions: number;
    labels: RangeLabels;
    sliderTheme: SliderThemeData;
    theme: ThemeData;
    textScaleFactor: number;
    screenSize: Size;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    textDirection: TextDirection;
    startSemanticsNode: SemanticsNode;
    endSemanticsNode: SemanticsNode;
    constructor(namedParameters?: {
        values?: RangeValues;
        divisions?: number;
        labels?: RangeLabels;
        sliderTheme?: SliderThemeData;
        theme?: ThemeData;
        textScaleFactor?: number;
        screenSize?: Size;
        platform?: TargetPlatform;
        onChanged?: any;
        semanticFormatterCallback?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        state?: _RangeSliderState;
        textDirection?: TextDirection;
    });
}
export { _RenderRangeSlider };
declare class _ValueIndicatorRenderObjectWidget extends LeafRenderObjectWidget {
    state: _RangeSliderState;
    constructor(namedParameters?: {
        state?: _RangeSliderState;
    });
}
export { _ValueIndicatorRenderObjectWidget };
declare class _RenderValueIndicator extends RenderBox {
    valueIndicatorAnimation: Animation;
    state: _RangeSliderState;
    constructor(namedParameters?: {
        state?: _RangeSliderState;
    });
}
export { _RenderValueIndicator };
