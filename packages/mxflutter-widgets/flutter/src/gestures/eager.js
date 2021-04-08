"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EagerGestureRecognizer = void 0;
const recognizer_1 = require("./recognizer");
class EagerGestureRecognizer extends recognizer_1.OneSequenceGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['kind'] = namedParameters.kind;
        this.className = 'EagerGestureRecognizer';
    }
}
exports.EagerGestureRecognizer = EagerGestureRecognizer;
