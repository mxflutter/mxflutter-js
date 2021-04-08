"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoTabBar = void 0;
const framework_1 = require("../widgets/framework");
class CupertinoTabBar extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.items = namedParameters.items;
        this.onTap = namedParameters.onTap;
        this.currentIndex = namedParameters.currentIndex;
        this.backgroundColor = namedParameters.backgroundColor;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.iconSize = namedParameters.iconSize;
        this.border = namedParameters.border;
        this.className = 'CupertinoTabBar';
    }
}
exports.CupertinoTabBar = CupertinoTabBar;
