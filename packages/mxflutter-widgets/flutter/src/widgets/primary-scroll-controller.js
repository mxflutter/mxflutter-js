"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryScrollController = void 0;
const framework_1 = require("./framework");
class PrimaryScrollController extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.child = namedParameters.child;
        this.className = 'PrimaryScrollController';
    }
    static none(namedParameters = {}) {
        var jsObj = new PrimaryScrollController();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
exports.PrimaryScrollController = PrimaryScrollController;
