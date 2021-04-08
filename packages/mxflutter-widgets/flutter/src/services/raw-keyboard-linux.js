"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtkKeyHelper = exports.GLFWKeyHelper = exports.KeyHelper = exports.RawKeyEventDataLinux = void 0;
const raw_keyboard_1 = require("./raw-keyboard");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RawKeyEventDataLinux extends raw_keyboard_1.RawKeyEventData {
    constructor(namedParameters = {}) {
        super();
        this.keyHelper = namedParameters.keyHelper;
        this.unicodeScalarValues = namedParameters.unicodeScalarValues;
        this.scanCode = namedParameters.scanCode;
        this.keyCode = namedParameters.keyCode;
        this.modifiers = namedParameters.modifiers;
        this.isDown = namedParameters.isDown;
        this.className = 'RawKeyEventDataLinux';
    }
}
exports.RawKeyEventDataLinux = RawKeyEventDataLinux;
class KeyHelper extends mxflutter_base_1.MXDartClass {
    constructor(toolkit) {
        super();
        this['toolkit'] = toolkit;
        this.className = 'KeyHelper';
    }
}
exports.KeyHelper = KeyHelper;
class GLFWKeyHelper extends mxflutter_base_1.MXDartClass {
    static get modifierCapsLock() {
        return 16;
    }
    static get modifierShift() {
        return 1;
    }
    static get modifierControl() {
        return 2;
    }
    static get modifierAlt() {
        return 4;
    }
    static get modifierMeta() {
        return 8;
    }
    static get modifierNumericPad() {
        return 32;
    }
}
exports.GLFWKeyHelper = GLFWKeyHelper;
class GtkKeyHelper extends mxflutter_base_1.MXDartClass {
    static get modifierShift() {
        return 1;
    }
    static get modifierCapsLock() {
        return 2;
    }
    static get modifierControl() {
        return 4;
    }
    static get modifierMod1() {
        return 8;
    }
    static get modifierMod2() {
        return 16;
    }
    static get modifierMeta() {
        return 268435456;
    }
}
exports.GtkKeyHelper = GtkKeyHelper;
