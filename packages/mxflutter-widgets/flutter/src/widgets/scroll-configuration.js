"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollConfiguration = exports.ScrollBehavior = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ScrollBehavior extends mxflutter_base_1.MXDartClass {
}
exports.ScrollBehavior = ScrollBehavior;
class ScrollConfiguration extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.behavior = namedParameters.behavior;
        this.child = namedParameters.child;
        this.className = 'ScrollConfiguration';
    }
}
exports.ScrollConfiguration = ScrollConfiguration;
