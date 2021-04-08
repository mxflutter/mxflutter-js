"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._BottomAppBarClipper = exports._BottomAppBarState = exports.BottomAppBar = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("../widgets/framework");
class BottomAppBar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.notchMargin = namedParameters.notchMargin;
        this.child = namedParameters.child;
        this.className = 'BottomAppBar';
    }
}
exports.BottomAppBar = BottomAppBar;
class _BottomAppBarState extends framework_1.State {
}
exports._BottomAppBarState = _BottomAppBarState;
class _BottomAppBarClipper extends proxy_box_1.CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.geometry = namedParameters.geometry;
        this.shape = namedParameters.shape;
        this.notchMargin = namedParameters.notchMargin;
        this.className = '_BottomAppBarClipper';
    }
}
exports._BottomAppBarClipper = _BottomAppBarClipper;
