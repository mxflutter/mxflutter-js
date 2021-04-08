"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ShapeBorderPainter = exports._ShapeBorderPaint = exports._MaterialInteriorState = exports._MaterialInterior = exports.ShapeBorderTween = exports.InkFeature = exports._InkFeatures = exports._RenderInkFeatures = exports._MaterialState = exports.Material = exports.MaterialInkController = exports.MaterialType = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const implicit_animations_1 = require("../widgets/implicit-animations");
const tween_1 = require("../animation/tween");
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var MaterialType;
(function (MaterialType) {
    MaterialType["canvas"] = "{ \"_name\": \"MaterialType.canvas\", \"index\": 0 }";
    MaterialType["card"] = "{ \"_name\": \"MaterialType.card\", \"index\": 1 }";
    MaterialType["circle"] = "{ \"_name\": \"MaterialType.circle\", \"index\": 2 }";
    MaterialType["button"] = "{ \"_name\": \"MaterialType.button\", \"index\": 3 }";
    MaterialType["transparency"] = "{ \"_name\": \"MaterialType.transparency\", \"index\": 4 }";
})(MaterialType || (MaterialType = {}));
exports.MaterialType = MaterialType;
;
class MaterialInkController extends mxflutter_base_1.MXDartClass {
}
exports.MaterialInkController = MaterialInkController;
class Material extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.type = namedParameters.type;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.textStyle = namedParameters.textStyle;
        this.borderRadius = namedParameters.borderRadius;
        this.shape = namedParameters.shape;
        this.borderOnForeground = namedParameters.borderOnForeground;
        this.clipBehavior = namedParameters.clipBehavior;
        this.animationDuration = namedParameters.animationDuration;
        this.child = namedParameters.child;
        this.className = 'Material';
    }
    static get defaultSplashRadius() {
        return 35.0;
    }
}
exports.Material = Material;
class _MaterialState extends framework_1.State {
}
exports._MaterialState = _MaterialState;
class _RenderInkFeatures extends proxy_box_1.RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.absorbHitTest = namedParameters.absorbHitTest;
        this.color = namedParameters.color;
        this.className = '_RenderInkFeatures';
    }
}
exports._RenderInkFeatures = _RenderInkFeatures;
class _InkFeatures extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.absorbHitTest = namedParameters.absorbHitTest;
        this.child = namedParameters.child;
        this.className = '_InkFeatures';
    }
}
exports._InkFeatures = _InkFeatures;
class InkFeature extends mxflutter_base_1.MXDartClass {
}
exports.InkFeature = InkFeature;
class ShapeBorderTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'ShapeBorderTween';
    }
}
exports.ShapeBorderTween = ShapeBorderTween;
class _MaterialInterior extends implicit_animations_1.ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.shape = namedParameters.shape;
        this.borderOnForeground = namedParameters.borderOnForeground;
        this.clipBehavior = namedParameters.clipBehavior;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.className = '_MaterialInterior';
    }
}
exports._MaterialInterior = _MaterialInterior;
class _MaterialInteriorState extends implicit_animations_1.AnimatedWidgetBaseState {
}
exports._MaterialInteriorState = _MaterialInteriorState;
class _ShapeBorderPaint extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.shape = namedParameters.shape;
        this.borderOnForeground = namedParameters.borderOnForeground;
        this.className = '_ShapeBorderPaint';
    }
}
exports._ShapeBorderPaint = _ShapeBorderPaint;
class _ShapeBorderPainter extends custom_paint_1.CustomPainter {
    constructor(border, textDirection) {
        super();
        this.border = border;
        this.textDirection = textDirection;
        this.className = '_ShapeBorderPainter';
    }
}
exports._ShapeBorderPainter = _ShapeBorderPainter;
