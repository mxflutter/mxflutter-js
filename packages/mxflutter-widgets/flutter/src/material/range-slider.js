//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
class RangeSlider extends StatefulWidget$ {
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
export { RangeSlider };
class _RangeSliderState extends State$ {
    static get enableAnimationDuration() {
        var jsObj = new Duration();
        jsObj['className'] = '_RangeSliderState';
        jsObj['constructorName'] = 'enableAnimationDuration';
        return jsObj;
    }
    static get valueIndicatorAnimationDuration() {
        var jsObj = new Duration();
        jsObj['className'] = '_RangeSliderState';
        jsObj['constructorName'] = 'valueIndicatorAnimationDuration';
        return jsObj;
    }
}
export { _RangeSliderState };
class _RangeSliderRenderObjectWidget extends LeafRenderObjectWidget {
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
export { _RangeSliderRenderObjectWidget };
class _RenderRangeSlider extends RenderBox {
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
export { _RenderRangeSlider };
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
