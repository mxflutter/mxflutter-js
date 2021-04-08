"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoActivityIndicatorPainter = exports._CupertinoActivityIndicatorState = exports.CupertinoActivityIndicator = exports.CupertinoActivityIndicatorIOSVersionStyle = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const framework_1 = require("../widgets/framework");
var CupertinoActivityIndicatorIOSVersionStyle;
(function (CupertinoActivityIndicatorIOSVersionStyle) {
    CupertinoActivityIndicatorIOSVersionStyle["iOS13"] = "{ \"_name\": \"CupertinoActivityIndicatorIOSVersionStyle.iOS13\", \"index\": 0 }";
    CupertinoActivityIndicatorIOSVersionStyle["iOS14"] = "{ \"_name\": \"CupertinoActivityIndicatorIOSVersionStyle.iOS14\", \"index\": 1 }";
})(CupertinoActivityIndicatorIOSVersionStyle || (CupertinoActivityIndicatorIOSVersionStyle = {}));
exports.CupertinoActivityIndicatorIOSVersionStyle = CupertinoActivityIndicatorIOSVersionStyle;
;
class CupertinoActivityIndicator extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animating = namedParameters.animating;
        this.radius = namedParameters.radius;
        this.iOSVersionStyle = namedParameters.iOSVersionStyle;
        this.className = 'CupertinoActivityIndicator';
    }
    static partiallyRevealed(namedParameters = {}) {
        var jsObj = new CupertinoActivityIndicator();
        jsObj.key = namedParameters.key;
        jsObj.radius = namedParameters.radius;
        jsObj.progress = namedParameters.progress;
        jsObj.iOSVersionStyle = namedParameters.iOSVersionStyle;
        jsObj['constructorName'] = 'partiallyRevealed';
        return jsObj;
    }
}
exports.CupertinoActivityIndicator = CupertinoActivityIndicator;
class _CupertinoActivityIndicatorState extends framework_1.State {
}
exports._CupertinoActivityIndicatorState = _CupertinoActivityIndicatorState;
class _CupertinoActivityIndicatorPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.activeColor = namedParameters.activeColor;
        this.radius = namedParameters.radius;
        this.progress = namedParameters.progress;
        this['iOSVersionStyle'] = namedParameters.iOSVersionStyle;
        this.className = '_CupertinoActivityIndicatorPainter';
    }
}
exports._CupertinoActivityIndicatorPainter = _CupertinoActivityIndicatorPainter;
