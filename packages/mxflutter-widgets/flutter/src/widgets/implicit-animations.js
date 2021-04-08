"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimatedPhysicalModelState = exports.AnimatedPhysicalModel = exports._AnimatedDefaultTextStyleState = exports.AnimatedDefaultTextStyle = exports._SliverAnimatedOpacityState = exports.SliverAnimatedOpacity = exports._AnimatedOpacityState = exports.AnimatedOpacity = exports._AnimatedPositionedDirectionalState = exports.AnimatedPositionedDirectional = exports._AnimatedPositionedState = exports.AnimatedPositioned = exports._AnimatedAlignState = exports.AnimatedAlign = exports._AnimatedPaddingState = exports.AnimatedPadding = exports._AnimatedContainerState = exports.AnimatedContainer = exports.AnimatedWidgetBaseState = exports.ImplicitlyAnimatedWidgetState = exports.ImplicitlyAnimatedWidget = exports.TextStyleTween = exports.Matrix4Tween = exports.BorderTween = exports.BorderRadiusTween = exports.EdgeInsetsGeometryTween = exports.EdgeInsetsTween = exports.DecorationTween = exports.BoxConstraintsTween = void 0;
const framework_1 = require("./framework");
const tween_1 = require("../animation/tween");
class BoxConstraintsTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'BoxConstraintsTween';
    }
}
exports.BoxConstraintsTween = BoxConstraintsTween;
class DecorationTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'DecorationTween';
    }
    // MX modified begin
    // MXFlutter特殊逻辑
    animate(controller) {
        this['controller'] = controller;
        return this;
    }
}
exports.DecorationTween = DecorationTween;
class EdgeInsetsTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'EdgeInsetsTween';
    }
}
exports.EdgeInsetsTween = EdgeInsetsTween;
class EdgeInsetsGeometryTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'EdgeInsetsGeometryTween';
    }
}
exports.EdgeInsetsGeometryTween = EdgeInsetsGeometryTween;
class BorderRadiusTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'BorderRadiusTween';
    }
}
exports.BorderRadiusTween = BorderRadiusTween;
class BorderTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'BorderTween';
    }
}
exports.BorderTween = BorderTween;
class Matrix4Tween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'Matrix4Tween';
    }
}
exports.Matrix4Tween = Matrix4Tween;
class TextStyleTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'TextStyleTween';
    }
}
exports.TextStyleTween = TextStyleTween;
class ImplicitlyAnimatedWidget extends framework_1.StatefulWidget {
}
exports.ImplicitlyAnimatedWidget = ImplicitlyAnimatedWidget;
class ImplicitlyAnimatedWidgetState extends framework_1.State {
}
exports.ImplicitlyAnimatedWidgetState = ImplicitlyAnimatedWidgetState;
class AnimatedWidgetBaseState extends ImplicitlyAnimatedWidgetState {
}
exports.AnimatedWidgetBaseState = AnimatedWidgetBaseState;
class AnimatedContainer extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.padding = namedParameters.padding;
        this['color'] = namedParameters.color;
        this.decoration = namedParameters.decoration;
        this.foregroundDecoration = namedParameters.foregroundDecoration;
        this['width'] = namedParameters.width;
        this['height'] = namedParameters.height;
        this.constraints = namedParameters.constraints;
        this.margin = namedParameters.margin;
        this.transform = namedParameters.transform;
        this.child = namedParameters.child;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedContainer';
    }
}
exports.AnimatedContainer = AnimatedContainer;
class _AnimatedContainerState extends AnimatedWidgetBaseState {
}
exports._AnimatedContainerState = _AnimatedContainerState;
class AnimatedPadding extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this.child = namedParameters.child;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedPadding';
    }
}
exports.AnimatedPadding = AnimatedPadding;
class _AnimatedPaddingState extends AnimatedWidgetBaseState {
}
exports._AnimatedPaddingState = _AnimatedPaddingState;
class AnimatedAlign extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.child = namedParameters.child;
        this.heightFactor = namedParameters.heightFactor;
        this.widthFactor = namedParameters.widthFactor;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedAlign';
    }
}
exports.AnimatedAlign = AnimatedAlign;
class _AnimatedAlignState extends AnimatedWidgetBaseState {
}
exports._AnimatedAlignState = _AnimatedAlignState;
class AnimatedPositioned extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.left = namedParameters.left;
        this.top = namedParameters.top;
        this.right = namedParameters.right;
        this.bottom = namedParameters.bottom;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedPositioned';
    }
    static fromRect(namedParameters = {}) {
        var jsObj = new AnimatedPositioned();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj['rect'] = namedParameters.rect;
        jsObj.curve = namedParameters.curve;
        jsObj.duration = namedParameters.duration;
        jsObj.onEnd = namedParameters.onEnd;
        jsObj['constructorName'] = 'fromRect';
        return jsObj;
    }
}
exports.AnimatedPositioned = AnimatedPositioned;
class _AnimatedPositionedState extends AnimatedWidgetBaseState {
}
exports._AnimatedPositionedState = _AnimatedPositionedState;
class AnimatedPositionedDirectional extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.start = namedParameters.start;
        this.top = namedParameters.top;
        this.end = namedParameters.end;
        this.bottom = namedParameters.bottom;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedPositionedDirectional';
    }
}
exports.AnimatedPositionedDirectional = AnimatedPositionedDirectional;
class _AnimatedPositionedDirectionalState extends AnimatedWidgetBaseState {
}
exports._AnimatedPositionedDirectionalState = _AnimatedPositionedDirectionalState;
class AnimatedOpacity extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.opacity = namedParameters.opacity;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this.className = 'AnimatedOpacity';
    }
}
exports.AnimatedOpacity = AnimatedOpacity;
class _AnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
}
exports._AnimatedOpacityState = _AnimatedOpacityState;
class SliverAnimatedOpacity extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.sliver = namedParameters.sliver;
        this.opacity = namedParameters.opacity;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this.className = 'SliverAnimatedOpacity';
    }
}
exports.SliverAnimatedOpacity = SliverAnimatedOpacity;
class _SliverAnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
}
exports._SliverAnimatedOpacityState = _SliverAnimatedOpacityState;
class AnimatedDefaultTextStyle extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.style = namedParameters.style;
        this.textAlign = namedParameters.textAlign;
        this.softWrap = namedParameters.softWrap;
        this.overflow = namedParameters.overflow;
        this.maxLines = namedParameters.maxLines;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedDefaultTextStyle';
    }
}
exports.AnimatedDefaultTextStyle = AnimatedDefaultTextStyle;
class _AnimatedDefaultTextStyleState extends AnimatedWidgetBaseState {
}
exports._AnimatedDefaultTextStyleState = _AnimatedDefaultTextStyleState;
class AnimatedPhysicalModel extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.borderRadius = namedParameters.borderRadius;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.animateColor = namedParameters.animateColor;
        this.shadowColor = namedParameters.shadowColor;
        this.animateShadowColor = namedParameters.animateShadowColor;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedPhysicalModel';
    }
}
exports.AnimatedPhysicalModel = AnimatedPhysicalModel;
class _AnimatedPhysicalModelState extends AnimatedWidgetBaseState {
}
exports._AnimatedPhysicalModelState = _AnimatedPhysicalModelState;
