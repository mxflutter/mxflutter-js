"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObstructingPreferredSizeWidget = exports._CupertinoPageScaffoldState = exports.CupertinoPageScaffold = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class CupertinoPageScaffold extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.navigationBar = namedParameters.navigationBar;
        this.backgroundColor = namedParameters.backgroundColor;
        this.resizeToAvoidBottomInset = namedParameters.resizeToAvoidBottomInset;
        this.child = namedParameters.child;
        this.className = 'CupertinoPageScaffold';
    }
}
exports.CupertinoPageScaffold = CupertinoPageScaffold;
class _CupertinoPageScaffoldState extends framework_1.State {
}
exports._CupertinoPageScaffoldState = _CupertinoPageScaffoldState;
class ObstructingPreferredSizeWidget extends mxflutter_base_1.MXDartClass {
}
exports.ObstructingPreferredSizeWidget = ObstructingPreferredSizeWidget;
