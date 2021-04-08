"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CaptureAll = exports.InheritedTheme = void 0;
const framework_1 = require("./framework");
class InheritedTheme extends framework_1.InheritedWidget {
}
exports.InheritedTheme = InheritedTheme;
class _CaptureAll extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.themes = namedParameters.themes;
        this.child = namedParameters.child;
        this.className = '_CaptureAll';
    }
}
exports._CaptureAll = _CaptureAll;
