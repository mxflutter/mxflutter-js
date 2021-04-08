// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextOverflow } from '../rendering/paragraph';
import { DecorationPosition } from '../rendering/proxy-box';
import { RelativeRect } from '../rendering/stack';
import { Tween } from '../animation/tween';
import { Axis } from '../painting/basic-types';
import { Alignment } from '../painting/alignment';
import { Animation } from '../animation/animation';
import { Key } from '../foundation/key';
import { TextDirection, Size, TextAlign } from '../../../mx-dart-sdk';
import { Listenable } from '../foundation/change-notifier';
import { StatefulWidget, State, Widget, SingleChildRenderObjectWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class AnimatedWidget extends StatefulWidget {
  listenable: Listenable;
}
export { AnimatedWidget };
class _AnimatedState extends State {}
export { _AnimatedState };
class SlideTransition extends AnimatedWidget {
  textDirection: TextDirection;
  transformHitTests: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, position?: Animation, transformHitTests?: boolean, textDirection?: TextDirection, child?: MXWidget} = {}) {
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
  alignment: Alignment;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, scale?: Animation, alignment?: Alignment, child?: MXWidget} = {}) {
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
  alignment: Alignment;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, turns?: Animation, alignment?: Alignment, child?: MXWidget} = {}) {
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
  axis: Axis;
  axisAlignment: number;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, axis?: Axis, sizeFactor?: Animation, axisAlignment?: number, child?: MXWidget} = {}) {
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
  opacity: Animation;
  alwaysIncludeSemantics: boolean;
  public constructor(namedParameters: {key?: Key, opacity?: Animation, alwaysIncludeSemantics?: boolean, child?: MXWidget} = {}) {
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
  opacity: Animation;
  alwaysIncludeSemantics: boolean;
  public constructor(namedParameters: {key?: Key, opacity?: Animation, alwaysIncludeSemantics?: boolean, sliver?: MXWidget} = {}) {
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
  public constructor(namedParameters: {begin?: RelativeRect, end?: RelativeRect} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'RelativeRectTween';
  }
}
export { RelativeRectTween };
class PositionedTransition extends AnimatedWidget {
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, rect?: Animation, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this['rect'] = namedParameters.rect;
    this.child = namedParameters.child;
    this.className = 'PositionedTransition';
  }
}
export { PositionedTransition };
class RelativePositionedTransition extends AnimatedWidget {
  size: Size;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, rect?: Animation, size?: Size, child?: MXWidget} = {}) {
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
  decoration: Animation;
  position: DecorationPosition;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, decoration?: Animation, position?: DecorationPosition, child?: MXWidget} = {}) {
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
  widthFactor: number;
  heightFactor: number;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, alignment?: Animation, child?: MXWidget, widthFactor?: number, heightFactor?: number} = {}) {
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
  textAlign: TextAlign;
  softWrap: boolean;
  overflow: TextOverflow;
  maxLines: number;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, style?: Animation, child?: MXWidget, textAlign?: TextAlign, softWrap?: boolean, overflow?: TextOverflow, maxLines?: number} = {}) {
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
  builder: any;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, animation?: Listenable, builder?: any, child?: MXWidget, widget?: Widget} = {}) {
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
