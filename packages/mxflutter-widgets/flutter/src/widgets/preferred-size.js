"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferredSize = exports.PreferredSizeWidget = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class PreferredSizeWidget extends mxflutter_base_1.MXDartClass {
}
exports.PreferredSizeWidget = PreferredSizeWidget;
class PreferredSize extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.preferredSize = namedParameters.preferredSize;
        this.className = 'PreferredSize';
    }
}
exports.PreferredSize = PreferredSize;
