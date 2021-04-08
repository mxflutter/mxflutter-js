"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InheritedModelElement = exports.InheritedModel = void 0;
const framework_1 = require("./framework");
class InheritedModel extends framework_1.InheritedWidget {
}
exports.InheritedModel = InheritedModel;
class InheritedModelElement extends framework_1.InheritedElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'InheritedModelElement';
    }
}
exports.InheritedModelElement = InheritedModelElement;
