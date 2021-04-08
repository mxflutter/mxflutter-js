"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationBarItem = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class BottomNavigationBarItem extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.icon = namedParameters.icon;
        this.title = namedParameters.title;
        this.label = namedParameters.label;
        this.activeIcon = namedParameters.activeIcon;
        this.backgroundColor = namedParameters.backgroundColor;
        this.className = 'BottomNavigationBarItem';
    }
}
exports.BottomNavigationBarItem = BottomNavigationBarItem;
