"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxShadow = void 0;
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
class BoxShadow extends mx_dart_sdk_1.Shadow {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.offset = namedParameters.offset;
        this.blurRadius = namedParameters.blurRadius;
        this.spreadRadius = namedParameters.spreadRadius;
        this.className = 'BoxShadow';
    }
}
exports.BoxShadow = BoxShadow;
