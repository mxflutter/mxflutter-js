//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Tween } from '../animation/tween';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget } from './framework';
class AnimatedWidget extends StatefulWidget$ {
}
export { AnimatedWidget };
class _AnimatedState extends State$ {
}
export { _AnimatedState };
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
export { SlideTransition };
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
export { ScaleTransition };
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
export { RotationTransition };
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
export { SizeTransition };
class FadeTransition extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this.child = namedParameters.child;
        this.className = 'FadeTransition';
    }
}
export { FadeTransition };
class SliverFadeTransition extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverFadeTransition';
    }
}
export { SliverFadeTransition };
class RelativeRectTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'RelativeRectTween';
    }
}
export { RelativeRectTween };
class PositionedTransition extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['rect'] = namedParameters.rect;
        this.child = namedParameters.child;
        this.className = 'PositionedTransition';
    }
}
export { PositionedTransition };
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
export { RelativePositionedTransition };
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
export { DecoratedBoxTransition };
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
export { AlignTransition };
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
export { DefaultTextStyleTransition };
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
export { AnimatedBuilder };
