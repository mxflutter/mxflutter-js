"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalDivider = exports.Divider = void 0;
const framework_1 = require("../widgets/framework");
class Divider extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.height = namedParameters.height;
        this.thickness = namedParameters.thickness;
        this.indent = namedParameters.indent;
        this.endIndent = namedParameters.endIndent;
        this.color = namedParameters.color;
        this.className = 'Divider';
    }
}
exports.Divider = Divider;
class VerticalDivider extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.width = namedParameters.width;
        this.thickness = namedParameters.thickness;
        this.indent = namedParameters.indent;
        this.endIndent = namedParameters.endIndent;
        this.color = namedParameters.color;
        this.className = 'VerticalDivider';
    }
}
exports.VerticalDivider = VerticalDivider;
