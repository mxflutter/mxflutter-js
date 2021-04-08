"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderOverflowBar = exports._OverflowBarParentData = exports.OverflowBar = exports.OverflowBarAlignment = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("./framework");
var OverflowBarAlignment;
(function (OverflowBarAlignment) {
    OverflowBarAlignment["start"] = "{ \"_name\": \"OverflowBarAlignment.start\", \"index\": 0 }";
    OverflowBarAlignment["end"] = "{ \"_name\": \"OverflowBarAlignment.end\", \"index\": 1 }";
    OverflowBarAlignment["center"] = "{ \"_name\": \"OverflowBarAlignment.center\", \"index\": 2 }";
})(OverflowBarAlignment || (OverflowBarAlignment = {}));
exports.OverflowBarAlignment = OverflowBarAlignment;
;
class OverflowBar extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.spacing = namedParameters.spacing;
        this.overflowSpacing = namedParameters.overflowSpacing;
        this.overflowAlignment = namedParameters.overflowAlignment;
        this.overflowDirection = namedParameters.overflowDirection;
        this.textDirection = namedParameters.textDirection;
        this.clipBehavior = namedParameters.clipBehavior;
        this.children = namedParameters.children;
        this.className = 'OverflowBar';
    }
}
exports.OverflowBar = OverflowBar;
class _OverflowBarParentData extends box_1.ContainerBoxParentData {
}
exports._OverflowBarParentData = _OverflowBarParentData;
class _RenderOverflowBar extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.spacing = namedParameters.spacing;
        this.overflowSpacing = namedParameters.overflowSpacing;
        this.overflowAlignment = namedParameters.overflowAlignment;
        this.overflowDirection = namedParameters.overflowDirection;
        this.textDirection = namedParameters.textDirection;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = '_RenderOverflowBar';
    }
}
exports._RenderOverflowBar = _RenderOverflowBar;
