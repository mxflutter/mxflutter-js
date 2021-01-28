//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RawKeyEventData } from './raw-keyboard';
class RawKeyEventDataWeb extends RawKeyEventData {
    constructor(namedParameters = {}) {
        super();
        this.code = namedParameters.code;
        this.key = namedParameters.key;
        this.metaState = namedParameters.metaState;
        this.className = 'RawKeyEventDataWeb';
    }
    static get modifierNone() {
        return 0;
    }
    static get modifierShift() {
        return 1;
    }
    static get modifierAlt() {
        return 2;
    }
    static get modifierControl() {
        return 4;
    }
    static get modifierMeta() {
        return 8;
    }
    static get modifierNumLock() {
        return 16;
    }
    static get modifierCapsLock() {
        return 32;
    }
    static get modifierScrollLock() {
        return 64;
    }
}
export { RawKeyEventDataWeb };
