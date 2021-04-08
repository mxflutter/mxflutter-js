"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderCustomPaint = exports.CustomPainterSemantics = exports.CustomPainter = void 0;
const proxy_box_1 = require("./proxy-box");
const change_notifier_1 = require("../foundation/change-notifier");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class CustomPainter extends change_notifier_1.Listenable {
}
exports.CustomPainter = CustomPainter;
class CustomPainterSemantics extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.rect = namedParameters.rect;
        this.properties = namedParameters.properties;
        this.transform = namedParameters.transform;
        this.tags = namedParameters.tags;
        this.className = 'CustomPainterSemantics';
    }
}
exports.CustomPainterSemantics = CustomPainterSemantics;
class RenderCustomPaint extends proxy_box_1.RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.painter = namedParameters.painter;
        this.foregroundPainter = namedParameters.foregroundPainter;
        this.preferredSize = namedParameters.preferredSize;
        this.isComplex = namedParameters.isComplex;
        this.willChange = namedParameters.willChange;
        this['child'] = namedParameters.child;
        this.className = 'RenderCustomPaint';
    }
}
exports.RenderCustomPaint = RenderCustomPaint;
