"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderLayoutBuilder = exports.LayoutBuilder = exports.RenderConstrainedLayoutBuilder = exports._LayoutBuilderElement = exports.ConstrainedLayoutBuilder = void 0;
const box_1 = require("../rendering/box");
const object_1 = require("../rendering/object");
const framework_1 = require("./framework");
class ConstrainedLayoutBuilder extends framework_1.RenderObjectWidget {
}
exports.ConstrainedLayoutBuilder = ConstrainedLayoutBuilder;
class _LayoutBuilderElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_LayoutBuilderElement';
    }
}
exports._LayoutBuilderElement = _LayoutBuilderElement;
class RenderConstrainedLayoutBuilder extends object_1.RenderObjectWithChildMixin {
}
exports.RenderConstrainedLayoutBuilder = RenderConstrainedLayoutBuilder;
class LayoutBuilder extends ConstrainedLayoutBuilder {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['builder'] = namedParameters.builder;
        this.className = 'LayoutBuilder';
    }
}
exports.LayoutBuilder = LayoutBuilder;
class _RenderLayoutBuilder extends box_1.RenderBox {
}
exports._RenderLayoutBuilder = _RenderLayoutBuilder;
