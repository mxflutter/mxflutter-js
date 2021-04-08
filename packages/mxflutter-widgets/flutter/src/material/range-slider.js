"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderValueIndicator = exports._ValueIndicatorRenderObjectWidget = exports._RenderRangeSlider = exports._RangeSliderRenderObjectWidget = exports._RangeSliderState = exports.RangeSlider = void 0;
const box_1 = require("../rendering/box");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const framework_1 = require("../widgets/framework");
class RangeSlider extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.values = namedParameters.values;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.min = namedParameters.min;
        this.max = namedParameters.max;
        this.divisions = namedParameters.divisions;
        this.labels = namedParameters.labels;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        this.className = 'RangeSlider';
    }
}
exports.RangeSlider = RangeSlider;
class _RangeSliderState extends framework_1.State {
    static get enableAnimationDuration() {
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = '_RangeSliderState';
        jsObj['constructorName'] = 'enableAnimationDuration';
        return jsObj;
    }
    static get valueIndicatorAnimationDuration() {
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = '_RangeSliderState';
        jsObj['constructorName'] = 'valueIndicatorAnimationDuration';
        return jsObj;
    }
}
exports._RangeSliderState = _RangeSliderState;
class _RangeSliderRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.values = namedParameters.values;
        this.divisions = namedParameters.divisions;
        this.labels = namedParameters.labels;
        this.sliderTheme = namedParameters.sliderTheme;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.screenSize = namedParameters.screenSize;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.state = namedParameters.state;
        this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        this.className = '_RangeSliderRenderObjectWidget';
    }
}
exports._RangeSliderRenderObjectWidget = _RangeSliderRenderObjectWidget;
class _RenderRangeSlider extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.values = namedParameters.values;
        this.divisions = namedParameters.divisions;
        this.labels = namedParameters.labels;
        this.sliderTheme = namedParameters.sliderTheme;
        this.theme = namedParameters.theme;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.screenSize = namedParameters.screenSize;
        this.platform = namedParameters.platform;
        this.onChanged = namedParameters.onChanged;
        this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.state = namedParameters.state;
        this.textDirection = namedParameters.textDirection;
        this.className = '_RenderRangeSlider';
    }
}
exports._RenderRangeSlider = _RenderRangeSlider;
class _ValueIndicatorRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_ValueIndicatorRenderObjectWidget';
    }
}
exports._ValueIndicatorRenderObjectWidget = _ValueIndicatorRenderObjectWidget;
class _RenderValueIndicator extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_RenderValueIndicator';
    }
}
exports._RenderValueIndicator = _RenderValueIndicator;
