"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRouteBuilder = exports.PageRoute = void 0;
const routes_1 = require("./routes");
class PageRoute extends routes_1.ModalRoute {
}
exports.PageRoute = PageRoute;
class PageRouteBuilder extends PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.settings = namedParameters.settings;
        this.pageBuilder = namedParameters.pageBuilder;
        this.transitionsBuilder = namedParameters.transitionsBuilder;
        this.transitionDuration = namedParameters.transitionDuration;
        this.reverseTransitionDuration = namedParameters.reverseTransitionDuration;
        this.opaque = namedParameters.opaque;
        this.barrierDismissible = namedParameters.barrierDismissible;
        this.barrierColor = namedParameters.barrierColor;
        this.barrierLabel = namedParameters.barrierLabel;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.className = 'PageRouteBuilder';
    }
}
exports.PageRouteBuilder = PageRouteBuilder;
