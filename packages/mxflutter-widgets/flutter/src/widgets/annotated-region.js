"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotatedRegion = void 0;
const framework_1 = require("./framework");
class AnnotatedRegion extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.value = namedParameters.value;
        this.sized = namedParameters.sized;
        this.className = 'AnnotatedRegion';
    }
}
exports.AnnotatedRegion = AnnotatedRegion;
