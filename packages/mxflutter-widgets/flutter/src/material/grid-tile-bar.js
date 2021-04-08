"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridTileBar = void 0;
const framework_1 = require("../widgets/framework");
class GridTileBar extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.backgroundColor = namedParameters.backgroundColor;
        this.leading = namedParameters.leading;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.trailing = namedParameters.trailing;
        this.className = 'GridTileBar';
    }
}
exports.GridTileBar = GridTileBar;
