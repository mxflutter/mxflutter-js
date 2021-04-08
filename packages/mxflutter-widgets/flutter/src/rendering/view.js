"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderView = exports.ViewConfiguration = void 0;
const object_1 = require("./object");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ViewConfiguration extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.size = namedParameters.size;
        this.devicePixelRatio = namedParameters.devicePixelRatio;
        this.className = 'ViewConfiguration';
    }
}
exports.ViewConfiguration = ViewConfiguration;
class RenderView extends object_1.RenderObject {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.configuration = namedParameters.configuration;
        this.window = namedParameters.window;
        this.className = 'RenderView';
    }
}
exports.RenderView = RenderView;
