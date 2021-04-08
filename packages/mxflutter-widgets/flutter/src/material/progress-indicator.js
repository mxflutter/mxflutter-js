"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RefreshProgressIndicatorState = exports.RefreshProgressIndicator = exports._RefreshProgressIndicatorPainter = exports._CircularProgressIndicatorState = exports.CircularProgressIndicator = exports._CircularProgressIndicatorPainter = exports._LinearProgressIndicatorState = exports.LinearProgressIndicator = exports._LinearProgressIndicatorPainter = exports.ProgressIndicator = void 0;
const curves_1 = require("../animation/curves");
const custom_paint_1 = require("../rendering/custom-paint");
const framework_1 = require("../widgets/framework");
class ProgressIndicator extends framework_1.StatefulWidget {
}
exports.ProgressIndicator = ProgressIndicator;
class _LinearProgressIndicatorPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.value = namedParameters.value;
        this.animationValue = namedParameters.animationValue;
        this.textDirection = namedParameters.textDirection;
        this.className = '_LinearProgressIndicatorPainter';
    }
    static get line1Head() {
        var jsObj = new class MXCurve extends curves_1.Curve {
        }();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line1Head';
        return jsObj;
    }
    static get line1Tail() {
        var jsObj = new class MXCurve extends curves_1.Curve {
        }();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line1Tail';
        return jsObj;
    }
    static get line2Head() {
        var jsObj = new class MXCurve extends curves_1.Curve {
        }();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line2Head';
        return jsObj;
    }
    static get line2Tail() {
        var jsObj = new class MXCurve extends curves_1.Curve {
        }();
        jsObj['className'] = '_LinearProgressIndicatorPainter';
        jsObj['constructorName'] = 'line2Tail';
        return jsObj;
    }
}
exports._LinearProgressIndicatorPainter = _LinearProgressIndicatorPainter;
class LinearProgressIndicator extends ProgressIndicator {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.minHeight = namedParameters.minHeight;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.semanticsValue = namedParameters.semanticsValue;
        this.className = 'LinearProgressIndicator';
    }
}
exports.LinearProgressIndicator = LinearProgressIndicator;
class _LinearProgressIndicatorState extends framework_1.State {
}
exports._LinearProgressIndicatorState = _LinearProgressIndicatorState;
class _CircularProgressIndicatorPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.value = namedParameters.value;
        this.headValue = namedParameters.headValue;
        this.tailValue = namedParameters.tailValue;
        this.offsetValue = namedParameters.offsetValue;
        this.rotationValue = namedParameters.rotationValue;
        this.strokeWidth = namedParameters.strokeWidth;
        this.className = '_CircularProgressIndicatorPainter';
    }
}
exports._CircularProgressIndicatorPainter = _CircularProgressIndicatorPainter;
class CircularProgressIndicator extends ProgressIndicator {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.backgroundColor = namedParameters.backgroundColor;
        this.valueColor = namedParameters.valueColor;
        this.strokeWidth = namedParameters.strokeWidth;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.semanticsValue = namedParameters.semanticsValue;
        this.className = 'CircularProgressIndicator';
    }
}
exports.CircularProgressIndicator = CircularProgressIndicator;
class _CircularProgressIndicatorState extends framework_1.State {
}
exports._CircularProgressIndicatorState = _CircularProgressIndicatorState;
class _RefreshProgressIndicatorPainter extends _CircularProgressIndicatorPainter {
    constructor(namedParameters = {}) {
        super();
        this.valueColor = namedParameters.valueColor;
        this.value = namedParameters.value;
        this.headValue = namedParameters.headValue;
        this.tailValue = namedParameters.tailValue;
        this.offsetValue = namedParameters.offsetValue;
        this.rotationValue = namedParameters.rotationValue;
        this.strokeWidth = namedParameters.strokeWidth;
        this.arrowheadScale = namedParameters.arrowheadScale;
        this.className = '_RefreshProgressIndicatorPainter';
    }
}
exports._RefreshProgressIndicatorPainter = _RefreshProgressIndicatorPainter;
class RefreshProgressIndicator extends CircularProgressIndicator {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['value'] = namedParameters.value;
        this['backgroundColor'] = namedParameters.backgroundColor;
        this['valueColor'] = namedParameters.valueColor;
        this['strokeWidth'] = namedParameters.strokeWidth;
        this['semanticsLabel'] = namedParameters.semanticsLabel;
        this['semanticsValue'] = namedParameters.semanticsValue;
        this.className = 'RefreshProgressIndicator';
    }
}
exports.RefreshProgressIndicator = RefreshProgressIndicator;
class _RefreshProgressIndicatorState extends _CircularProgressIndicatorState {
}
exports._RefreshProgressIndicatorState = _RefreshProgressIndicatorState;
