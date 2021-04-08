"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconData = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class IconData extends mxflutter_base_1.MXDartClass {
    constructor(codePoint, namedParameters = {}) {
        super();
        this.codePoint = codePoint;
        this.fontFamily = namedParameters.fontFamily;
        this.fontPackage = namedParameters.fontPackage;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.className = 'IconData';
    }
}
exports.IconData = IconData;
