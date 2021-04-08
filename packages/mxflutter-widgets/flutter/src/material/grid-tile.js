"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridTile = void 0;
const framework_1 = require("../widgets/framework");
class GridTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.header = namedParameters.header;
        this.footer = namedParameters.footer;
        this.child = namedParameters.child;
        this.className = 'GridTile';
    }
}
exports.GridTile = GridTile;
