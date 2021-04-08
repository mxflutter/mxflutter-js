"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DecorationClipper = exports.Container = exports.DecoratedBox = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
class DecoratedBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.position = namedParameters.position;
        this.child = namedParameters.child;
        this.className = 'DecoratedBox';
    }
}
exports.DecoratedBox = DecoratedBox;
class Container extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.padding = namedParameters.padding;
        this.color = namedParameters.color;
        this.decoration = namedParameters.decoration;
        this.foregroundDecoration = namedParameters.foregroundDecoration;
        this['width'] = namedParameters.width;
        this['height'] = namedParameters.height;
        this.constraints = namedParameters.constraints;
        this.margin = namedParameters.margin;
        this.transform = namedParameters.transform;
        this.child = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'Container';
    }
}
exports.Container = Container;
class _DecorationClipper extends proxy_box_1.CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.textDirection = namedParameters.textDirection;
        this.decoration = namedParameters.decoration;
        this.className = '_DecorationClipper';
    }
}
exports._DecorationClipper = _DecorationClipper;
