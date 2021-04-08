"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ModifierSidePair = exports.RawKeyboard = exports.RawKeyUpEvent = exports.RawKeyDownEvent = exports.RawKeyEvent = exports.RawKeyEventData = exports.ModifierKey = exports.KeyboardSide = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var KeyboardSide;
(function (KeyboardSide) {
    KeyboardSide["any"] = "{ \"_name\": \"KeyboardSide.any\", \"index\": 0 }";
    KeyboardSide["left"] = "{ \"_name\": \"KeyboardSide.left\", \"index\": 1 }";
    KeyboardSide["right"] = "{ \"_name\": \"KeyboardSide.right\", \"index\": 2 }";
    KeyboardSide["all"] = "{ \"_name\": \"KeyboardSide.all\", \"index\": 3 }";
})(KeyboardSide || (KeyboardSide = {}));
exports.KeyboardSide = KeyboardSide;
;
var ModifierKey;
(function (ModifierKey) {
    ModifierKey["controlModifier"] = "{ \"_name\": \"ModifierKey.controlModifier\", \"index\": 0 }";
    ModifierKey["shiftModifier"] = "{ \"_name\": \"ModifierKey.shiftModifier\", \"index\": 1 }";
    ModifierKey["altModifier"] = "{ \"_name\": \"ModifierKey.altModifier\", \"index\": 2 }";
    ModifierKey["metaModifier"] = "{ \"_name\": \"ModifierKey.metaModifier\", \"index\": 3 }";
    ModifierKey["capsLockModifier"] = "{ \"_name\": \"ModifierKey.capsLockModifier\", \"index\": 4 }";
    ModifierKey["numLockModifier"] = "{ \"_name\": \"ModifierKey.numLockModifier\", \"index\": 5 }";
    ModifierKey["scrollLockModifier"] = "{ \"_name\": \"ModifierKey.scrollLockModifier\", \"index\": 6 }";
    ModifierKey["functionModifier"] = "{ \"_name\": \"ModifierKey.functionModifier\", \"index\": 7 }";
    ModifierKey["symbolModifier"] = "{ \"_name\": \"ModifierKey.symbolModifier\", \"index\": 8 }";
})(ModifierKey || (ModifierKey = {}));
exports.ModifierKey = ModifierKey;
;
class RawKeyEventData extends mxflutter_base_1.MXDartClass {
}
exports.RawKeyEventData = RawKeyEventData;
class RawKeyEvent extends mxflutter_base_1.MXDartClass {
    static fromMessage(message) {
        var jsObj = new class MXRawKeyEvent extends RawKeyEvent {
        }();
        jsObj['message'] = message;
        jsObj['constructorName'] = 'fromMessage';
        return jsObj;
    }
}
exports.RawKeyEvent = RawKeyEvent;
class RawKeyDownEvent extends RawKeyEvent {
    constructor(namedParameters = {}) {
        super();
        this['data'] = namedParameters.data;
        this['character'] = namedParameters.character;
        this.className = 'RawKeyDownEvent';
    }
}
exports.RawKeyDownEvent = RawKeyDownEvent;
class RawKeyUpEvent extends RawKeyEvent {
    constructor(namedParameters = {}) {
        super();
        this['data'] = namedParameters.data;
        this['character'] = namedParameters.character;
        this.className = 'RawKeyUpEvent';
    }
}
exports.RawKeyUpEvent = RawKeyUpEvent;
class RawKeyboard extends mxflutter_base_1.MXDartClass {
}
exports.RawKeyboard = RawKeyboard;
class _ModifierSidePair extends mxflutter_base_1.MXDartClass {
    constructor(modifier, side) {
        super();
        this.modifier = modifier;
        this.side = side;
        this.className = '_ModifierSidePair';
    }
}
exports._ModifierSidePair = _ModifierSidePair;
