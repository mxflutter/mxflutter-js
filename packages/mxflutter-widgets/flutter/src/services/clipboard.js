"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clipboard = exports.ClipboardData = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ClipboardData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.text = namedParameters.text;
        this.className = 'ClipboardData';
    }
}
exports.ClipboardData = ClipboardData;
class Clipboard extends mxflutter_base_1.MXDartClass {
    static get kTextPlain() {
        return 'text/plain';
    }
}
exports.Clipboard = Clipboard;
