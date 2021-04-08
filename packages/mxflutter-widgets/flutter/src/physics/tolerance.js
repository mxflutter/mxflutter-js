"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tolerance = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Tolerance extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.distance = namedParameters.distance;
        this.time = namedParameters.time;
        this.velocity = namedParameters.velocity;
        this.className = 'Tolerance';
    }
    static get defaultTolerance() {
        var jsObj = new Tolerance();
        jsObj['className'] = 'Tolerance';
        jsObj['constructorName'] = 'defaultTolerance';
        return jsObj;
    }
}
exports.Tolerance = Tolerance;
