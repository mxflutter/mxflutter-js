"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._PageBasedMaterialPageRoute = exports.MaterialPage = exports.MaterialRouteTransitionMixin = exports.MaterialPageRoute = void 0;
const navigator_1 = require("../widgets/navigator");
const pages_1 = require("../widgets/pages");
class MaterialPageRoute extends pages_1.PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.settings = namedParameters.settings;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.className = 'MaterialPageRoute';
        // MX Modified begin
        this['child'] = null;
        // MX Modified end
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this.builder) {
            this['child'] = this.builder(buildContext);
            delete this.builder;
        }
    }
}
exports.MaterialPageRoute = MaterialPageRoute;
class MaterialRouteTransitionMixin extends pages_1.PageRoute {
}
exports.MaterialRouteTransitionMixin = MaterialRouteTransitionMixin;
class MaterialPage extends navigator_1.Page {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.key = namedParameters.key;
        this.name = namedParameters.name;
        this.mx_arguments = namedParameters.mx_arguments;
        this.className = 'MaterialPage';
    }
}
exports.MaterialPage = MaterialPage;
class _PageBasedMaterialPageRoute extends pages_1.PageRoute {
    constructor(namedParameters = {}) {
        super();
        this['page'] = namedParameters.page;
        this.className = '_PageBasedMaterialPageRoute';
    }
}
exports._PageBasedMaterialPageRoute = _PageBasedMaterialPageRoute;
