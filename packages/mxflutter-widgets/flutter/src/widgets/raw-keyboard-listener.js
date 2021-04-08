"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RawKeyboardListenerState = exports.RawKeyboardListener = void 0;
const framework_1 = require("./framework");
class RawKeyboardListener extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.includeSemantics = namedParameters.includeSemantics;
        this.onKey = namedParameters.onKey;
        this.child = namedParameters.child;
        this.className = 'RawKeyboardListener';
    }
}
exports.RawKeyboardListener = RawKeyboardListener;
class _RawKeyboardListenerState extends framework_1.State {
}
exports._RawKeyboardListenerState = _RawKeyboardListenerState;
