//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Intent } from '../widgets/actions';
import { RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
var _SliderType;
(function (_SliderType) {
    _SliderType["material"] = "{ \"_name\": \"_SliderType.material\", \"index\": 0 }";
    _SliderType["adaptive"] = "{ \"_name\": \"_SliderType.adaptive\", \"index\": 1 }";
})(_SliderType || (_SliderType = {}));
export { _SliderType };
class Slider extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.min = namedParameters.min;
        this.max = namedParameters.max;
        this.divisions = namedParameters.divisions;
        this.label = namedParameters.label;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.mouseCursor = namedParameters.mouseCursor;
        this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.className = 'Slider';
    }
    static adaptive(namedParameters = {}) {
        var jsObj = new Slider();
        jsObj.key = namedParameters.key;
        jsObj.value = namedParameters.value;
        jsObj.onChanged = namedParameters.onChanged;
        jsObj.onChangeStart = namedParameters.onChangeStart;
        jsObj.onChangeEnd = namedParameters.onChangeEnd;
        jsObj.min = namedParameters.min;
        jsObj.max = namedParameters.max;
        jsObj.divisions = namedParameters.divisions;
        jsObj.label = namedParameters.label;
        jsObj.mouseCursor = namedParameters.mouseCursor;
        jsObj.activeColor = namedParameters.activeColor;
        jsObj.inactiveColor = namedParameters.inactiveColor;
        jsObj.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        jsObj.focusNode = namedParameters.focusNode;
        jsObj.autofocus = namedParameters.autofocus;
        jsObj['constructorName'] = 'adaptive';
        return jsObj;
    }
}
export { Slider };
class _SliderState extends State$ {
    static get enableAnimationDuration() {
        var jsObj = new Duration();
        jsObj['className'] = '_SliderState';
        jsObj['constructorName'] = 'enableAnimationDuration';
        return jsObj;
    }
    static get valueIndicatorAnimationDuration() {
        var jsObj = new Duration();
        jsObj['className'] = '_SliderState';
        jsObj['constructorName'] = 'valueIndicatorAnimationDuration';
        return jsObj;
    }
}
export { _SliderState };
class _SliderRenderObjectWidget extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.divisions = namedParameters.divisions;
        this.label = namedParameters.label;
        this.sliderTheme = namedParameters.sliderTheme;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.screenSize = namedParameters.screenSize;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.state = namedParameters.state;
        this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.className = '_SliderRenderObjectWidget';
    }
}
export { _SliderRenderObjectWidget };
class _RenderSlider extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.divisions = namedParameters.divisions;
        this.label = namedParameters.label;
        this.sliderTheme = namedParameters.sliderTheme;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.screenSize = namedParameters.screenSize;
        this.platform = namedParameters.platform;
        this.onChanged = namedParameters.onChanged;
        this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.state = namedParameters.state;
        this.textDirection = namedParameters.textDirection;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.className = '_RenderSlider';
    }
}
export { _RenderSlider };
class _AdjustSliderIntent extends Intent {
    constructor(namedParameters = {}) {
        super();
        this.type = namedParameters.type;
        this.className = '_AdjustSliderIntent';
    }
    static right() {
        var jsObj = new _AdjustSliderIntent();
        jsObj['constructorName'] = 'right';
        return jsObj;
    }
    static left() {
        var jsObj = new _AdjustSliderIntent();
        jsObj['constructorName'] = 'left';
        return jsObj;
    }
    static up() {
        var jsObj = new _AdjustSliderIntent();
        jsObj['constructorName'] = 'up';
        return jsObj;
    }
    static down() {
        var jsObj = new _AdjustSliderIntent();
        jsObj['constructorName'] = 'down';
        return jsObj;
    }
}
export { _AdjustSliderIntent };
var _SliderAdjustmentType;
(function (_SliderAdjustmentType) {
    _SliderAdjustmentType["right"] = "{ \"_name\": \"_SliderAdjustmentType.right\", \"index\": 0 }";
    _SliderAdjustmentType["left"] = "{ \"_name\": \"_SliderAdjustmentType.left\", \"index\": 1 }";
    _SliderAdjustmentType["up"] = "{ \"_name\": \"_SliderAdjustmentType.up\", \"index\": 2 }";
    _SliderAdjustmentType["down"] = "{ \"_name\": \"_SliderAdjustmentType.down\", \"index\": 3 }";
})(_SliderAdjustmentType || (_SliderAdjustmentType = {}));
export { _SliderAdjustmentType };
class _ValueIndicatorRenderObjectWidget extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_ValueIndicatorRenderObjectWidget';
    }
}
export { _ValueIndicatorRenderObjectWidget };
class _RenderValueIndicator extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_RenderValueIndicator';
    }
}
export { _RenderValueIndicator };
