//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RawKeyEventData } from './raw-keyboard';
class RawKeyEventDataMacOs extends RawKeyEventData {
    constructor(namedParameters = {}) {
        super();
        this.characters = namedParameters.characters;
        this.charactersIgnoringModifiers = namedParameters.charactersIgnoringModifiers;
        this.keyCode = namedParameters.keyCode;
        this.modifiers = namedParameters.modifiers;
        this.className = 'RawKeyEventDataMacOs';
    }
    static get modifierCapsLock() {
        return 65536;
    }
    static get modifierShift() {
        return 131072;
    }
    static get modifierLeftShift() {
        return 2;
    }
    static get modifierRightShift() {
        return 4;
    }
    static get modifierControl() {
        return 262144;
    }
    static get modifierLeftControl() {
        return 1;
    }
    static get modifierRightControl() {
        return 8192;
    }
    static get modifierOption() {
        return 524288;
    }
    static get modifierLeftOption() {
        return 32;
    }
    static get modifierRightOption() {
        return 64;
    }
    static get modifierCommand() {
        return 1048576;
    }
    static get modifierLeftCommand() {
        return 8;
    }
    static get modifierRightCommand() {
        return 16;
    }
    static get modifierNumericPad() {
        return 2097152;
    }
    static get modifierHelp() {
        return 4194304;
    }
    static get modifierFunction() {
        return 8388608;
    }
    static get deviceIndependentMask() {
        return 4294901760;
    }
}
export { RawKeyEventDataMacOs };
