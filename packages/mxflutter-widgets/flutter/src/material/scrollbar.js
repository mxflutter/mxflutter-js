"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ScrollbarState = exports.Scrollbar = void 0;
const framework_1 = require("../widgets/framework");
class Scrollbar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.controller = namedParameters.controller;
        this.isAlwaysShown = namedParameters.isAlwaysShown;
        this.thickness = namedParameters.thickness;
        this.radius = namedParameters.radius;
        this.className = 'Scrollbar';
    }
}
exports.Scrollbar = Scrollbar;
class _ScrollbarState extends framework_1.State {
}
exports._ScrollbarState = _ScrollbarState;
