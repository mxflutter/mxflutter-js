//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SliderTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'SliderTheme';
    }
}
export { SliderTheme };
var ShowValueIndicator;
(function (ShowValueIndicator) {
    ShowValueIndicator["onlyForDiscrete"] = "{ \"_name\": \"ShowValueIndicator.onlyForDiscrete\", \"index\": 0 }";
    ShowValueIndicator["onlyForContinuous"] = "{ \"_name\": \"ShowValueIndicator.onlyForContinuous\", \"index\": 1 }";
    ShowValueIndicator["always"] = "{ \"_name\": \"ShowValueIndicator.always\", \"index\": 2 }";
    ShowValueIndicator["never"] = "{ \"_name\": \"ShowValueIndicator.never\", \"index\": 3 }";
})(ShowValueIndicator || (ShowValueIndicator = {}));
export { ShowValueIndicator };
var Thumb;
(function (Thumb) {
    Thumb["start"] = "{ \"_name\": \"Thumb.start\", \"index\": 0 }";
    Thumb["end"] = "{ \"_name\": \"Thumb.end\", \"index\": 1 }";
})(Thumb || (Thumb = {}));
export { Thumb };
class SliderThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.trackHeight = namedParameters.trackHeight;
        this.activeTrackColor = namedParameters.activeTrackColor;
        this.inactiveTrackColor = namedParameters.inactiveTrackColor;
        this.disabledActiveTrackColor = namedParameters.disabledActiveTrackColor;
        this.disabledInactiveTrackColor = namedParameters.disabledInactiveTrackColor;
        this.activeTickMarkColor = namedParameters.activeTickMarkColor;
        this.inactiveTickMarkColor = namedParameters.inactiveTickMarkColor;
        this.disabledActiveTickMarkColor = namedParameters.disabledActiveTickMarkColor;
        this.disabledInactiveTickMarkColor = namedParameters.disabledInactiveTickMarkColor;
        this.thumbColor = namedParameters.thumbColor;
        this.overlappingShapeStrokeColor = namedParameters.overlappingShapeStrokeColor;
        this.disabledThumbColor = namedParameters.disabledThumbColor;
        this.overlayColor = namedParameters.overlayColor;
        this.valueIndicatorColor = namedParameters.valueIndicatorColor;
        this.overlayShape = namedParameters.overlayShape;
        this.tickMarkShape = namedParameters.tickMarkShape;
        this.thumbShape = namedParameters.thumbShape;
        this.trackShape = namedParameters.trackShape;
        this.valueIndicatorShape = namedParameters.valueIndicatorShape;
        this.rangeTickMarkShape = namedParameters.rangeTickMarkShape;
        this.rangeThumbShape = namedParameters.rangeThumbShape;
        this.rangeTrackShape = namedParameters.rangeTrackShape;
        this.rangeValueIndicatorShape = namedParameters.rangeValueIndicatorShape;
        this.showValueIndicator = namedParameters.showValueIndicator;
        this.valueIndicatorTextStyle = namedParameters.valueIndicatorTextStyle;
        this.minThumbSeparation = namedParameters.minThumbSeparation;
        this.thumbSelector = namedParameters.thumbSelector;
        this.className = 'SliderThemeData';
    }
    static fromPrimaryColors(namedParameters = {}) {
        var jsObj = new SliderThemeData();
        jsObj['primaryColor'] = namedParameters.primaryColor;
        jsObj['primaryColorDark'] = namedParameters.primaryColorDark;
        jsObj['primaryColorLight'] = namedParameters.primaryColorLight;
        jsObj.valueIndicatorTextStyle = namedParameters.valueIndicatorTextStyle;
        jsObj['constructorName'] = 'fromPrimaryColors';
        return jsObj;
    }
}
export { SliderThemeData };
class SliderComponentShape extends MXDartClass {
}
export { SliderComponentShape };
class SliderTickMarkShape extends MXDartClass {
}
export { SliderTickMarkShape };
class SliderTrackShape extends MXDartClass {
}
export { SliderTrackShape };
class RangeSliderThumbShape extends MXDartClass {
}
export { RangeSliderThumbShape };
class RangeSliderValueIndicatorShape extends MXDartClass {
}
export { RangeSliderValueIndicatorShape };
class RangeSliderTickMarkShape extends MXDartClass {
}
export { RangeSliderTickMarkShape };
class RangeSliderTrackShape extends MXDartClass {
}
export { RangeSliderTrackShape };
class BaseSliderTrackShape extends MXDartClass {
}
export { BaseSliderTrackShape };
class RectangularSliderTrackShape extends SliderTrackShape {
    constructor(namedParameters = {}) {
        super();
        this.disabledThumbGapWidth = namedParameters.disabledThumbGapWidth;
        this.className = 'RectangularSliderTrackShape';
    }
}
export { RectangularSliderTrackShape };
class RoundedRectSliderTrackShape extends SliderTrackShape {
}
export { RoundedRectSliderTrackShape };
class RectangularRangeSliderTrackShape extends RangeSliderTrackShape {
}
export { RectangularRangeSliderTrackShape };
class RoundedRectRangeSliderTrackShape extends RangeSliderTrackShape {
}
export { RoundedRectRangeSliderTrackShape };
class RoundSliderTickMarkShape extends SliderTickMarkShape {
    constructor(namedParameters = {}) {
        super();
        this.tickMarkRadius = namedParameters.tickMarkRadius;
        this.className = 'RoundSliderTickMarkShape';
    }
}
export { RoundSliderTickMarkShape };
class RoundRangeSliderTickMarkShape extends RangeSliderTickMarkShape {
    constructor(namedParameters = {}) {
        super();
        this.tickMarkRadius = namedParameters.tickMarkRadius;
        this.className = 'RoundRangeSliderTickMarkShape';
    }
}
export { RoundRangeSliderTickMarkShape };
class _EmptySliderTickMarkShape extends SliderTickMarkShape {
}
export { _EmptySliderTickMarkShape };
class _EmptySliderComponentShape extends SliderComponentShape {
}
export { _EmptySliderComponentShape };
class RoundSliderThumbShape extends SliderComponentShape {
    constructor(namedParameters = {}) {
        super();
        this.enabledThumbRadius = namedParameters.enabledThumbRadius;
        this.disabledThumbRadius = namedParameters.disabledThumbRadius;
        this.elevation = namedParameters.elevation;
        this.pressedElevation = namedParameters.pressedElevation;
        this.className = 'RoundSliderThumbShape';
    }
}
export { RoundSliderThumbShape };
class RoundRangeSliderThumbShape extends RangeSliderThumbShape {
    constructor(namedParameters = {}) {
        super();
        this.enabledThumbRadius = namedParameters.enabledThumbRadius;
        this.disabledThumbRadius = namedParameters.disabledThumbRadius;
        this.elevation = namedParameters.elevation;
        this.pressedElevation = namedParameters.pressedElevation;
        this.className = 'RoundRangeSliderThumbShape';
    }
}
export { RoundRangeSliderThumbShape };
class RoundSliderOverlayShape extends SliderComponentShape {
    constructor(namedParameters = {}) {
        super();
        this.overlayRadius = namedParameters.overlayRadius;
        this.className = 'RoundSliderOverlayShape';
    }
}
export { RoundSliderOverlayShape };
class RectangularSliderValueIndicatorShape extends SliderComponentShape {
}
export { RectangularSliderValueIndicatorShape };
class RectangularRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {
}
export { RectangularRangeSliderValueIndicatorShape };
class _RectangularSliderValueIndicatorPathPainter extends MXDartClass {
}
export { _RectangularSliderValueIndicatorPathPainter };
class PaddleSliderValueIndicatorShape extends SliderComponentShape {
}
export { PaddleSliderValueIndicatorShape };
class PaddleRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {
}
export { PaddleRangeSliderValueIndicatorShape };
class _PaddleSliderValueIndicatorPathPainter extends MXDartClass {
}
export { _PaddleSliderValueIndicatorPathPainter };
class RangeValues extends MXDartClass {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
        this.className = 'RangeValues';
    }
}
export { RangeValues };
class RangeLabels extends MXDartClass {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
        this.className = 'RangeLabels';
    }
}
export { RangeLabels };
