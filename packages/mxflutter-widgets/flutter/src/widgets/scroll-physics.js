"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeverScrollableScrollPhysics = exports.AlwaysScrollableScrollPhysics = exports.ClampingScrollPhysics = exports.BouncingScrollPhysics = exports.RangeMaintainingScrollPhysics = exports.ScrollPhysics = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ScrollPhysics extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.parent = namedParameters.parent;
        this.className = 'ScrollPhysics';
    }
}
exports.ScrollPhysics = ScrollPhysics;
class RangeMaintainingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'RangeMaintainingScrollPhysics';
    }
}
exports.RangeMaintainingScrollPhysics = RangeMaintainingScrollPhysics;
class BouncingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'BouncingScrollPhysics';
    }
}
exports.BouncingScrollPhysics = BouncingScrollPhysics;
class ClampingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'ClampingScrollPhysics';
    }
}
exports.ClampingScrollPhysics = ClampingScrollPhysics;
class AlwaysScrollableScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'AlwaysScrollableScrollPhysics';
    }
}
exports.AlwaysScrollableScrollPhysics = AlwaysScrollableScrollPhysics;
class NeverScrollableScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'NeverScrollableScrollPhysics';
    }
}
exports.NeverScrollableScrollPhysics = NeverScrollableScrollPhysics;
