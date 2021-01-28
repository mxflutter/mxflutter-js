//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
import { Tween } from '../animation/tween';
class BoxConstraintsTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'BoxConstraintsTween';
    }
}
export { BoxConstraintsTween };
class DecorationTween extends Tween {
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
export { DecorationTween };
class EdgeInsetsTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'EdgeInsetsTween';
    }
}
export { EdgeInsetsTween };
class EdgeInsetsGeometryTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'EdgeInsetsGeometryTween';
    }
}
export { EdgeInsetsGeometryTween };
class BorderRadiusTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'BorderRadiusTween';
    }
}
export { BorderRadiusTween };
class BorderTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'BorderTween';
    }
}
export { BorderTween };
class Matrix4Tween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'Matrix4Tween';
    }
}
export { Matrix4Tween };
class TextStyleTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'TextStyleTween';
    }
}
export { TextStyleTween };
class ImplicitlyAnimatedWidget extends StatefulWidget$ {
}
export { ImplicitlyAnimatedWidget };
class ImplicitlyAnimatedWidgetState extends State$ {
}
export { ImplicitlyAnimatedWidgetState };
class AnimatedWidgetBaseState extends ImplicitlyAnimatedWidgetState {
}
export { AnimatedWidgetBaseState };
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
export { AnimatedContainer };
class _AnimatedContainerState extends AnimatedWidgetBaseState {
}
export { _AnimatedContainerState };
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
export { AnimatedPadding };
class _AnimatedPaddingState extends AnimatedWidgetBaseState {
}
export { _AnimatedPaddingState };
class AnimatedAlign extends ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.child = namedParameters.child;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.onEnd = namedParameters.onEnd;
        this.className = 'AnimatedAlign';
    }
}
export { AnimatedAlign };
class _AnimatedAlignState extends AnimatedWidgetBaseState {
}
export { _AnimatedAlignState };
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
export { AnimatedPositioned };
class _AnimatedPositionedState extends AnimatedWidgetBaseState {
}
export { _AnimatedPositionedState };
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
export { AnimatedPositionedDirectional };
class _AnimatedPositionedDirectionalState extends AnimatedWidgetBaseState {
}
export { _AnimatedPositionedDirectionalState };
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
export { AnimatedOpacity };
class _AnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
}
export { _AnimatedOpacityState };
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
export { SliverAnimatedOpacity };
class _SliverAnimatedOpacityState extends ImplicitlyAnimatedWidgetState {
}
export { _SliverAnimatedOpacityState };
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
export { AnimatedDefaultTextStyle };
class _AnimatedDefaultTextStyleState extends AnimatedWidgetBaseState {
}
export { _AnimatedDefaultTextStyleState };
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
export { AnimatedPhysicalModel };
class _AnimatedPhysicalModelState extends AnimatedWidgetBaseState {
}
export { _AnimatedPhysicalModelState };
