"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoButtonState = exports.CupertinoButton = void 0;
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const framework_1 = require("../widgets/framework");
class CupertinoButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.padding = namedParameters.padding;
        this.color = namedParameters.color;
        this.disabledColor = namedParameters.disabledColor;
        this.minSize = namedParameters.minSize;
        this.pressedOpacity = namedParameters.pressedOpacity;
        this.borderRadius = namedParameters.borderRadius;
        this.onPressed = namedParameters.onPressed;
        this.className = 'CupertinoButton';
    }
    static filled(namedParameters = {}) {
        var jsObj = new CupertinoButton();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj.padding = namedParameters.padding;
        jsObj.disabledColor = namedParameters.disabledColor;
        jsObj.minSize = namedParameters.minSize;
        jsObj.pressedOpacity = namedParameters.pressedOpacity;
        jsObj.borderRadius = namedParameters.borderRadius;
        jsObj.onPressed = namedParameters.onPressed;
        jsObj['constructorName'] = 'filled';
        return jsObj;
    }
}
exports.CupertinoButton = CupertinoButton;
class _CupertinoButtonState extends framework_1.State {
    static get kFadeOutDuration() {
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = '_CupertinoButtonState';
        jsObj['constructorName'] = 'kFadeOutDuration';
        return jsObj;
    }
    static get kFadeInDuration() {
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = '_CupertinoButtonState';
        jsObj['constructorName'] = 'kFadeInDuration';
        return jsObj;
    }
}
exports._CupertinoButtonState = _CupertinoButtonState;
