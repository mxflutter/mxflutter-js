"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderCupertinoSlider = exports._CupertinoSliderRenderObjectWidget = exports._CupertinoSliderState = exports.CupertinoSlider = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("../widgets/framework");
class CupertinoSlider extends framework_1.StatefulWidget {
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
        this.activeColor = namedParameters.activeColor;
        this.thumbColor = namedParameters.thumbColor;
        this.className = 'CupertinoSlider';
    }
}
exports.CupertinoSlider = CupertinoSlider;
class _CupertinoSliderState extends framework_1.State {
}
exports._CupertinoSliderState = _CupertinoSliderState;
class _CupertinoSliderRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.divisions = namedParameters.divisions;
        this.activeColor = namedParameters.activeColor;
        this.thumbColor = namedParameters.thumbColor;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.className = '_CupertinoSliderRenderObjectWidget';
    }
}
exports._CupertinoSliderRenderObjectWidget = _CupertinoSliderRenderObjectWidget;
class _RenderCupertinoSlider extends proxy_box_1.RenderConstrainedBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.divisions = namedParameters.divisions;
        this.activeColor = namedParameters.activeColor;
        this.thumbColor = namedParameters.thumbColor;
        this.trackColor = namedParameters.trackColor;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.textDirection = namedParameters.textDirection;
        this.className = '_RenderCupertinoSlider';
    }
}
exports._RenderCupertinoSlider = _RenderCupertinoSlider;
