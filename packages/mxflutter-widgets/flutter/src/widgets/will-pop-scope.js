"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._WillPopScopeState = exports.WillPopScope = void 0;
const framework_1 = require("./framework");
class WillPopScope extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onWillPop = namedParameters.onWillPop;
        this.className = 'WillPopScope';
    }
}
exports.WillPopScope = WillPopScope;
class _WillPopScopeState extends framework_1.State {
}
exports._WillPopScopeState = _WillPopScopeState;
