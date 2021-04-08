"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlutterLogo = void 0;
const framework_1 = require("../widgets/framework");
class FlutterLogo extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.textColor = namedParameters.textColor;
        this.style = namedParameters.style;
        this.duration = namedParameters.duration;
        this.curve = namedParameters.curve;
        this.className = 'FlutterLogo';
    }
}
exports.FlutterLogo = FlutterLogo;
