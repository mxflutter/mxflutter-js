"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeLabels = exports.RangeValues = exports._PaddleSliderValueIndicatorPathPainter = exports.PaddleRangeSliderValueIndicatorShape = exports.PaddleSliderValueIndicatorShape = exports._RectangularSliderValueIndicatorPathPainter = exports.RectangularRangeSliderValueIndicatorShape = exports.RectangularSliderValueIndicatorShape = exports.RoundSliderOverlayShape = exports.RoundRangeSliderThumbShape = exports.RoundSliderThumbShape = exports._EmptySliderComponentShape = exports._EmptySliderTickMarkShape = exports.RoundRangeSliderTickMarkShape = exports.RoundSliderTickMarkShape = exports.RoundedRectRangeSliderTrackShape = exports.RectangularRangeSliderTrackShape = exports.RoundedRectSliderTrackShape = exports.RectangularSliderTrackShape = exports.BaseSliderTrackShape = exports.RangeSliderTrackShape = exports.RangeSliderTickMarkShape = exports.RangeSliderValueIndicatorShape = exports.RangeSliderThumbShape = exports.SliderTrackShape = exports.SliderTickMarkShape = exports.SliderComponentShape = exports.SliderThemeData = exports.Thumb = exports.ShowValueIndicator = exports.SliderTheme = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SliderTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'SliderTheme';
    }
}
exports.SliderTheme = SliderTheme;
var ShowValueIndicator;
(function (ShowValueIndicator) {
    ShowValueIndicator["onlyForDiscrete"] = "{ \"_name\": \"ShowValueIndicator.onlyForDiscrete\", \"index\": 0 }";
    ShowValueIndicator["onlyForContinuous"] = "{ \"_name\": \"ShowValueIndicator.onlyForContinuous\", \"index\": 1 }";
    ShowValueIndicator["always"] = "{ \"_name\": \"ShowValueIndicator.always\", \"index\": 2 }";
    ShowValueIndicator["never"] = "{ \"_name\": \"ShowValueIndicator.never\", \"index\": 3 }";
})(ShowValueIndicator || (ShowValueIndicator = {}));
exports.ShowValueIndicator = ShowValueIndicator;
;
var Thumb;
(function (Thumb) {
    Thumb["start"] = "{ \"_name\": \"Thumb.start\", \"index\": 0 }";
    Thumb["end"] = "{ \"_name\": \"Thumb.end\", \"index\": 1 }";
})(Thumb || (Thumb = {}));
exports.Thumb = Thumb;
;
class SliderThemeData extends mxflutter_base_1.MXDartClass {
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
exports.SliderThemeData = SliderThemeData;
class SliderComponentShape extends mxflutter_base_1.MXDartClass {
}
exports.SliderComponentShape = SliderComponentShape;
class SliderTickMarkShape extends mxflutter_base_1.MXDartClass {
}
exports.SliderTickMarkShape = SliderTickMarkShape;
class SliderTrackShape extends mxflutter_base_1.MXDartClass {
}
exports.SliderTrackShape = SliderTrackShape;
class RangeSliderThumbShape extends mxflutter_base_1.MXDartClass {
}
exports.RangeSliderThumbShape = RangeSliderThumbShape;
class RangeSliderValueIndicatorShape extends mxflutter_base_1.MXDartClass {
}
exports.RangeSliderValueIndicatorShape = RangeSliderValueIndicatorShape;
class RangeSliderTickMarkShape extends mxflutter_base_1.MXDartClass {
}
exports.RangeSliderTickMarkShape = RangeSliderTickMarkShape;
class RangeSliderTrackShape extends mxflutter_base_1.MXDartClass {
}
exports.RangeSliderTrackShape = RangeSliderTrackShape;
class BaseSliderTrackShape extends mxflutter_base_1.MXDartClass {
}
exports.BaseSliderTrackShape = BaseSliderTrackShape;
class RectangularSliderTrackShape extends SliderTrackShape {
    constructor(namedParameters = {}) {
        super();
        this.disabledThumbGapWidth = namedParameters.disabledThumbGapWidth;
        this.className = 'RectangularSliderTrackShape';
    }
}
exports.RectangularSliderTrackShape = RectangularSliderTrackShape;
class RoundedRectSliderTrackShape extends SliderTrackShape {
}
exports.RoundedRectSliderTrackShape = RoundedRectSliderTrackShape;
class RectangularRangeSliderTrackShape extends RangeSliderTrackShape {
}
exports.RectangularRangeSliderTrackShape = RectangularRangeSliderTrackShape;
class RoundedRectRangeSliderTrackShape extends RangeSliderTrackShape {
}
exports.RoundedRectRangeSliderTrackShape = RoundedRectRangeSliderTrackShape;
class RoundSliderTickMarkShape extends SliderTickMarkShape {
    constructor(namedParameters = {}) {
        super();
        this.tickMarkRadius = namedParameters.tickMarkRadius;
        this.className = 'RoundSliderTickMarkShape';
    }
}
exports.RoundSliderTickMarkShape = RoundSliderTickMarkShape;
class RoundRangeSliderTickMarkShape extends RangeSliderTickMarkShape {
    constructor(namedParameters = {}) {
        super();
        this.tickMarkRadius = namedParameters.tickMarkRadius;
        this.className = 'RoundRangeSliderTickMarkShape';
    }
}
exports.RoundRangeSliderTickMarkShape = RoundRangeSliderTickMarkShape;
class _EmptySliderTickMarkShape extends SliderTickMarkShape {
}
exports._EmptySliderTickMarkShape = _EmptySliderTickMarkShape;
class _EmptySliderComponentShape extends SliderComponentShape {
}
exports._EmptySliderComponentShape = _EmptySliderComponentShape;
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
exports.RoundSliderThumbShape = RoundSliderThumbShape;
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
exports.RoundRangeSliderThumbShape = RoundRangeSliderThumbShape;
class RoundSliderOverlayShape extends SliderComponentShape {
    constructor(namedParameters = {}) {
        super();
        this.overlayRadius = namedParameters.overlayRadius;
        this.className = 'RoundSliderOverlayShape';
    }
}
exports.RoundSliderOverlayShape = RoundSliderOverlayShape;
class RectangularSliderValueIndicatorShape extends SliderComponentShape {
}
exports.RectangularSliderValueIndicatorShape = RectangularSliderValueIndicatorShape;
class RectangularRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {
}
exports.RectangularRangeSliderValueIndicatorShape = RectangularRangeSliderValueIndicatorShape;
class _RectangularSliderValueIndicatorPathPainter extends mxflutter_base_1.MXDartClass {
}
exports._RectangularSliderValueIndicatorPathPainter = _RectangularSliderValueIndicatorPathPainter;
class PaddleSliderValueIndicatorShape extends SliderComponentShape {
}
exports.PaddleSliderValueIndicatorShape = PaddleSliderValueIndicatorShape;
class PaddleRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {
}
exports.PaddleRangeSliderValueIndicatorShape = PaddleRangeSliderValueIndicatorShape;
class _PaddleSliderValueIndicatorPathPainter extends mxflutter_base_1.MXDartClass {
}
exports._PaddleSliderValueIndicatorPathPainter = _PaddleSliderValueIndicatorPathPainter;
class RangeValues extends mxflutter_base_1.MXDartClass {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
        this.className = 'RangeValues';
    }
}
exports.RangeValues = RangeValues;
class RangeLabels extends mxflutter_base_1.MXDartClass {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
        this.className = 'RangeLabels';
    }
}
exports.RangeLabels = RangeLabels;
