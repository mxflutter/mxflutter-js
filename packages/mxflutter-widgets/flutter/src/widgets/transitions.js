"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedBuilder = exports.DefaultTextStyleTransition = exports.AlignTransition = exports.DecoratedBoxTransition = exports.RelativePositionedTransition = exports.PositionedTransition = exports.RelativeRectTween = exports.SliverFadeTransition = exports.FadeTransition = exports.SizeTransition = exports.RotationTransition = exports.ScaleTransition = exports.SlideTransition = exports._AnimatedState = exports.AnimatedWidget = void 0;
const tween_1 = require("../animation/tween");
const framework_1 = require("./framework");
class AnimatedWidget extends framework_1.StatefulWidget {
}
exports.AnimatedWidget = AnimatedWidget;
class _AnimatedState extends framework_1.State {
}
exports._AnimatedState = _AnimatedState;
class SlideTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['position'] = namedParameters.position;
        this.transformHitTests = namedParameters.transformHitTests;
        this.textDirection = namedParameters.textDirection;
        this.child = namedParameters.child;
        this.className = 'SlideTransition';
    }
}
exports.SlideTransition = SlideTransition;
class ScaleTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['scale'] = namedParameters.scale;
        this.alignment = namedParameters.alignment;
        this.child = namedParameters.child;
        this.className = 'ScaleTransition';
    }
}
exports.ScaleTransition = ScaleTransition;
class RotationTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['turns'] = namedParameters.turns;
        this.alignment = namedParameters.alignment;
        this.child = namedParameters.child;
        this.className = 'RotationTransition';
    }
}
exports.RotationTransition = RotationTransition;
class SizeTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axis = namedParameters.axis;
        this['sizeFactor'] = namedParameters.sizeFactor;
        this.axisAlignment = namedParameters.axisAlignment;
        this.child = namedParameters.child;
        this.className = 'SizeTransition';
    }
}
exports.SizeTransition = SizeTransition;
class FadeTransition extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this.child = namedParameters.child;
        this.className = 'FadeTransition';
    }
}
exports.FadeTransition = FadeTransition;
class SliverFadeTransition extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverFadeTransition';
    }
}
exports.SliverFadeTransition = SliverFadeTransition;
class RelativeRectTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'RelativeRectTween';
    }
}
exports.RelativeRectTween = RelativeRectTween;
class PositionedTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['rect'] = namedParameters.rect;
        this.child = namedParameters.child;
        this.className = 'PositionedTransition';
    }
}
exports.PositionedTransition = PositionedTransition;
class RelativePositionedTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['rect'] = namedParameters.rect;
        this.size = namedParameters.size;
        this.child = namedParameters.child;
        this.className = 'RelativePositionedTransition';
    }
}
exports.RelativePositionedTransition = RelativePositionedTransition;
class DecoratedBoxTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.position = namedParameters.position;
        this.child = namedParameters.child;
        this.className = 'DecoratedBoxTransition';
    }
}
exports.DecoratedBoxTransition = DecoratedBoxTransition;
class AlignTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['alignment'] = namedParameters.alignment;
        this.child = namedParameters.child;
        this.widthFactor = namedParameters.widthFactor;
        this.heightFactor = namedParameters.heightFactor;
        this.className = 'AlignTransition';
    }
}
exports.AlignTransition = AlignTransition;
class DefaultTextStyleTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['style'] = namedParameters.style;
        this.child = namedParameters.child;
        this.textAlign = namedParameters.textAlign;
        this.softWrap = namedParameters.softWrap;
        this.overflow = namedParameters.overflow;
        this.maxLines = namedParameters.maxLines;
        this.className = 'DefaultTextStyleTransition';
    }
}
exports.DefaultTextStyleTransition = DefaultTextStyleTransition;
class AnimatedBuilder extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['animation'] = namedParameters.animation;
        this.builder = namedParameters.builder;
        this.child = namedParameters.child;
        this.className = 'AnimatedBuilder';
        // MX Modified begin
        this['widget'] = namedParameters.widget;
        this.className = 'AnimatedBuilder';
        // MX Modified end
    }
}
exports.AnimatedBuilder = AnimatedBuilder;
