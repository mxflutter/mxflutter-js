"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
const framework_1 = require("./framework");
class Spacer extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.flex = namedParameters.flex;
        this.className = 'Spacer';
    }
}
exports.Spacer = Spacer;
