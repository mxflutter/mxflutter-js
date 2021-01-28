import { Intent } from '../widgets/actions';
import { ThemeData } from './theme-data';
import { TargetPlatform } from '../foundation/platform';
import { TapGestureRecognizer } from '../gestures/tap';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TextPainter } from '../painting/text-painter';
import { Animation } from '../animation/animation';
import { RenderBox } from '../rendering/box';
import { SliderThemeData } from './slider-theme';
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from '../widgets/overlay';
import { LayerLink } from '../rendering/layer';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color, Size, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, GlobalKey, LeafRenderObjectWidget } from '../widgets/framework';
declare enum _SliderType {
    material = "{ \"_name\": \"_SliderType.material\", \"index\": 0 }",
    adaptive = "{ \"_name\": \"_SliderType.adaptive\", \"index\": 1 }"
}
export { _SliderType };
declare class Slider extends StatefulWidget$ {
    value: number;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    min: number;
    max: number;
    divisions: number;
    label: string;
    activeColor: Color;
    inactiveColor: Color;
    mouseCursor: MouseCursor;
    semanticFormatterCallback: any;
    focusNode: FocusNode;
    autofocus: boolean;
    sliderType: _SliderType;
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        min?: number;
        max?: number;
        divisions?: number;
        label?: string;
        activeColor?: Color;
        inactiveColor?: Color;
        mouseCursor?: MouseCursor;
        semanticFormatterCallback?: any;
        focusNode?: FocusNode;
        autofocus?: boolean;
    });
    static adaptive(namedParameters?: {
        key?: Key;
        value?: number;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        min?: number;
        max?: number;
        divisions?: number;
        label?: string;
        mouseCursor?: MouseCursor;
        activeColor?: Color;
        inactiveColor?: Color;
        semanticFormatterCallback?: any;
        focusNode?: FocusNode;
        autofocus?: boolean;
    }): Slider;
}
export { Slider };
declare class _SliderState extends State$ {
    overlayController: AnimationController;
    valueIndicatorController: AnimationController;
    enableController: AnimationController;
    positionController: AnimationController;
    interactionTimer: any;
    renderObjectKey: GlobalKey;
    shortcutMap: Map<any, any>;
    actionMap: Map<any, any>;
    paintValueIndicator: any;
    focused: boolean;
    hovering: boolean;
    layerLink: LayerLink;
    overlayEntry: OverlayEntry;
    static get enableAnimationDuration(): Duration;
    static get valueIndicatorAnimationDuration(): Duration;
}
export { _SliderState };
declare class _SliderRenderObjectWidget extends LeafRenderObjectWidget {
    value: number;
    divisions: number;
    label: string;
    sliderTheme: SliderThemeData;
    textScaleFactor: number;
    screenSize: Size;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    semanticFormatterCallback: any;
    state: _SliderState;
    hasFocus: boolean;
    hovering: boolean;
    constructor(namedParameters?: {
        key?: Key;
        value?: number;
        divisions?: number;
        label?: string;
        sliderTheme?: SliderThemeData;
        textScaleFactor?: number;
        screenSize?: Size;
        onChanged?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        state?: _SliderState;
        semanticFormatterCallback?: any;
        hasFocus?: boolean;
        hovering?: boolean;
    });
}
export { _SliderRenderObjectWidget };
declare class _RenderSlider extends RenderBox {
    state: _SliderState;
    overlayAnimation: Animation;
    valueIndicatorAnimation: Animation;
    enableAnimation: Animation;
    labelPainter: TextPainter;
    drag: HorizontalDragGestureRecognizer;
    tap: TapGestureRecognizer;
    active: boolean;
    currentDragValue: number;
    value: number;
    platform: TargetPlatform;
    semanticFormatterCallback: any;
    divisions: number;
    label: string;
    sliderTheme: SliderThemeData;
    theme: ThemeData;
    textScaleFactor: number;
    screenSize: Size;
    onChanged: any;
    onChangeStart: any;
    onChangeEnd: any;
    textDirection: TextDirection;
    hasFocus: boolean;
    hovering: boolean;
    constructor(namedParameters?: {
        value?: number;
        divisions?: number;
        label?: string;
        sliderTheme?: SliderThemeData;
        textScaleFactor?: number;
        screenSize?: Size;
        platform?: TargetPlatform;
        onChanged?: any;
        semanticFormatterCallback?: any;
        onChangeStart?: any;
        onChangeEnd?: any;
        state?: _SliderState;
        textDirection?: TextDirection;
        hasFocus?: boolean;
        hovering?: boolean;
    });
}
export { _RenderSlider };
declare class _AdjustSliderIntent extends Intent {
    type: _SliderAdjustmentType;
    constructor(namedParameters?: {
        type?: _SliderAdjustmentType;
    });
    static right(): _AdjustSliderIntent;
    static left(): _AdjustSliderIntent;
    static up(): _AdjustSliderIntent;
    static down(): _AdjustSliderIntent;
}
export { _AdjustSliderIntent };
declare enum _SliderAdjustmentType {
    right = "{ \"_name\": \"_SliderAdjustmentType.right\", \"index\": 0 }",
    left = "{ \"_name\": \"_SliderAdjustmentType.left\", \"index\": 1 }",
    up = "{ \"_name\": \"_SliderAdjustmentType.up\", \"index\": 2 }",
    down = "{ \"_name\": \"_SliderAdjustmentType.down\", \"index\": 3 }"
}
export { _SliderAdjustmentType };
declare class _ValueIndicatorRenderObjectWidget extends LeafRenderObjectWidget {
    state: _SliderState;
    constructor(namedParameters?: {
        state?: _SliderState;
    });
}
export { _ValueIndicatorRenderObjectWidget };
declare class _RenderValueIndicator extends RenderBox {
    valueIndicatorAnimation: Animation;
    state: _SliderState;
    constructor(namedParameters?: {
        state?: _SliderState;
    });
}
export { _RenderValueIndicator };
