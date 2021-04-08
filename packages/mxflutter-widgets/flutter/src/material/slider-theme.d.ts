import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class SliderTheme extends InheritedTheme {
    data: SliderThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: SliderThemeData;
        child?: MXWidget;
    });
}
export { SliderTheme };
declare enum ShowValueIndicator {
    onlyForDiscrete = "{ \"_name\": \"ShowValueIndicator.onlyForDiscrete\", \"index\": 0 }",
    onlyForContinuous = "{ \"_name\": \"ShowValueIndicator.onlyForContinuous\", \"index\": 1 }",
    always = "{ \"_name\": \"ShowValueIndicator.always\", \"index\": 2 }",
    never = "{ \"_name\": \"ShowValueIndicator.never\", \"index\": 3 }"
}
export { ShowValueIndicator };
declare enum Thumb {
    start = "{ \"_name\": \"Thumb.start\", \"index\": 0 }",
    end = "{ \"_name\": \"Thumb.end\", \"index\": 1 }"
}
export { Thumb };
declare class SliderThemeData extends MXDartClass {
    trackHeight: number;
    activeTrackColor: Color;
    inactiveTrackColor: Color;
    disabledActiveTrackColor: Color;
    disabledInactiveTrackColor: Color;
    activeTickMarkColor: Color;
    inactiveTickMarkColor: Color;
    disabledActiveTickMarkColor: Color;
    disabledInactiveTickMarkColor: Color;
    thumbColor: Color;
    overlappingShapeStrokeColor: Color;
    disabledThumbColor: Color;
    overlayColor: Color;
    valueIndicatorColor: Color;
    overlayShape: SliderComponentShape;
    tickMarkShape: SliderTickMarkShape;
    thumbShape: SliderComponentShape;
    trackShape: SliderTrackShape;
    valueIndicatorShape: SliderComponentShape;
    rangeTickMarkShape: RangeSliderTickMarkShape;
    rangeThumbShape: RangeSliderThumbShape;
    rangeTrackShape: RangeSliderTrackShape;
    rangeValueIndicatorShape: RangeSliderValueIndicatorShape;
    showValueIndicator: ShowValueIndicator;
    valueIndicatorTextStyle: TextStyle;
    minThumbSeparation: number;
    thumbSelector: any;
    constructor(namedParameters?: {
        trackHeight?: number;
        activeTrackColor?: Color;
        inactiveTrackColor?: Color;
        disabledActiveTrackColor?: Color;
        disabledInactiveTrackColor?: Color;
        activeTickMarkColor?: Color;
        inactiveTickMarkColor?: Color;
        disabledActiveTickMarkColor?: Color;
        disabledInactiveTickMarkColor?: Color;
        thumbColor?: Color;
        overlappingShapeStrokeColor?: Color;
        disabledThumbColor?: Color;
        overlayColor?: Color;
        valueIndicatorColor?: Color;
        overlayShape?: SliderComponentShape;
        tickMarkShape?: SliderTickMarkShape;
        thumbShape?: SliderComponentShape;
        trackShape?: SliderTrackShape;
        valueIndicatorShape?: SliderComponentShape;
        rangeTickMarkShape?: RangeSliderTickMarkShape;
        rangeThumbShape?: RangeSliderThumbShape;
        rangeTrackShape?: RangeSliderTrackShape;
        rangeValueIndicatorShape?: RangeSliderValueIndicatorShape;
        showValueIndicator?: ShowValueIndicator;
        valueIndicatorTextStyle?: TextStyle;
        minThumbSeparation?: number;
        thumbSelector?: any;
    });
    static fromPrimaryColors(namedParameters?: {
        primaryColor?: Color;
        primaryColorDark?: Color;
        primaryColorLight?: Color;
        valueIndicatorTextStyle?: TextStyle;
    }): SliderThemeData;
}
export { SliderThemeData };
declare abstract class SliderComponentShape extends MXDartClass {
}
export { SliderComponentShape };
declare abstract class SliderTickMarkShape extends MXDartClass {
}
export { SliderTickMarkShape };
declare abstract class SliderTrackShape extends MXDartClass {
}
export { SliderTrackShape };
declare abstract class RangeSliderThumbShape extends MXDartClass {
}
export { RangeSliderThumbShape };
declare abstract class RangeSliderValueIndicatorShape extends MXDartClass {
}
export { RangeSliderValueIndicatorShape };
declare abstract class RangeSliderTickMarkShape extends MXDartClass {
}
export { RangeSliderTickMarkShape };
declare abstract class RangeSliderTrackShape extends MXDartClass {
}
export { RangeSliderTrackShape };
declare abstract class BaseSliderTrackShape extends MXDartClass {
}
export { BaseSliderTrackShape };
declare class RectangularSliderTrackShape extends SliderTrackShape {
    disabledThumbGapWidth: number;
    constructor(namedParameters?: {
        disabledThumbGapWidth?: number;
    });
}
export { RectangularSliderTrackShape };
declare class RoundedRectSliderTrackShape extends SliderTrackShape {
}
export { RoundedRectSliderTrackShape };
declare class RectangularRangeSliderTrackShape extends RangeSliderTrackShape {
}
export { RectangularRangeSliderTrackShape };
declare class RoundedRectRangeSliderTrackShape extends RangeSliderTrackShape {
}
export { RoundedRectRangeSliderTrackShape };
declare class RoundSliderTickMarkShape extends SliderTickMarkShape {
    tickMarkRadius: number;
    constructor(namedParameters?: {
        tickMarkRadius?: number;
    });
}
export { RoundSliderTickMarkShape };
declare class RoundRangeSliderTickMarkShape extends RangeSliderTickMarkShape {
    tickMarkRadius: number;
    constructor(namedParameters?: {
        tickMarkRadius?: number;
    });
}
export { RoundRangeSliderTickMarkShape };
declare class _EmptySliderTickMarkShape extends SliderTickMarkShape {
}
export { _EmptySliderTickMarkShape };
declare class _EmptySliderComponentShape extends SliderComponentShape {
}
export { _EmptySliderComponentShape };
declare class RoundSliderThumbShape extends SliderComponentShape {
    enabledThumbRadius: number;
    disabledThumbRadius: number;
    elevation: number;
    pressedElevation: number;
    constructor(namedParameters?: {
        enabledThumbRadius?: number;
        disabledThumbRadius?: number;
        elevation?: number;
        pressedElevation?: number;
    });
}
export { RoundSliderThumbShape };
declare class RoundRangeSliderThumbShape extends RangeSliderThumbShape {
    enabledThumbRadius: number;
    disabledThumbRadius: number;
    elevation: number;
    pressedElevation: number;
    constructor(namedParameters?: {
        enabledThumbRadius?: number;
        disabledThumbRadius?: number;
        elevation?: number;
        pressedElevation?: number;
    });
}
export { RoundRangeSliderThumbShape };
declare class RoundSliderOverlayShape extends SliderComponentShape {
    overlayRadius: number;
    constructor(namedParameters?: {
        overlayRadius?: number;
    });
}
export { RoundSliderOverlayShape };
declare class RectangularSliderValueIndicatorShape extends SliderComponentShape {
}
export { RectangularSliderValueIndicatorShape };
declare class RectangularRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {
}
export { RectangularRangeSliderValueIndicatorShape };
declare class _RectangularSliderValueIndicatorPathPainter extends MXDartClass {
}
export { _RectangularSliderValueIndicatorPathPainter };
declare class PaddleSliderValueIndicatorShape extends SliderComponentShape {
}
export { PaddleSliderValueIndicatorShape };
declare class PaddleRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {
}
export { PaddleRangeSliderValueIndicatorShape };
declare class _PaddleSliderValueIndicatorPathPainter extends MXDartClass {
}
export { _PaddleSliderValueIndicatorPathPainter };
declare class RangeValues extends MXDartClass {
    start: number;
    end: number;
    constructor(start?: number, end?: number);
}
export { RangeValues };
declare class RangeLabels extends MXDartClass {
    start: string;
    end: string;
    constructor(start?: string, end?: string);
}
export { RangeLabels };
