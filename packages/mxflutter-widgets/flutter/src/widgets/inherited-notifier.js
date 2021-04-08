"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._InheritedNotifierElement = exports.InheritedNotifier = void 0;
const framework_1 = require("./framework");
class InheritedNotifier extends framework_1.InheritedWidget {
}
exports.InheritedNotifier = InheritedNotifier;
class _InheritedNotifierElement extends framework_1.InheritedElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_InheritedNotifierElement';
    }
}
exports._InheritedNotifierElement = _InheritedNotifierElement;
