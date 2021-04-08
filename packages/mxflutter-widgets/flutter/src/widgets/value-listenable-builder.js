"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ValueListenableBuilderState = exports.ValueListenableBuilder = void 0;
const framework_1 = require("./framework");
class ValueListenableBuilder extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.valueListenable = namedParameters.valueListenable;
        this.builder = namedParameters.builder;
        this.child = namedParameters.child;
        this.className = 'ValueListenableBuilder';
    }
}
exports.ValueListenableBuilder = ValueListenableBuilder;
class _ValueListenableBuilderState extends framework_1.State {
}
exports._ValueListenableBuilderState = _ValueListenableBuilderState;
