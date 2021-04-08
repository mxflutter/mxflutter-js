"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = exports._LazyListIterator = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _LazyListIterator extends mxflutter_base_1.MXDartClass {
    constructor(_owner) {
        super();
        this.owner = _owner;
        this.className = '_LazyListIterator';
    }
}
exports._LazyListIterator = _LazyListIterator;
class Factory extends mxflutter_base_1.MXDartClass {
    constructor(mx_constructor) {
        super();
        this.mx_constructor = mx_constructor;
        this.className = 'Factory';
    }
}
exports.Factory = Factory;
