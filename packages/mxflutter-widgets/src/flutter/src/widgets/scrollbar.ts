// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { AxisDirection } from '../painting/basic-types';
import { ScrollMetrics } from './scroll-metrics';
import { EdgeInsets } from '../painting/edge-insets';
import { Animation } from '../animation/animation';
import { Color, TextDirection, Radius, Rect } from '../../../mx-dart-sdk';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ScrollbarPainter extends ChangeNotifier {
  color: Color;
  textDirection: TextDirection;
  thickness: number;
  fadeoutOpacityAnimation: Animation;
  mainAxisMargin: number;
  crossAxisMargin: number;
  radius: Radius;
  padding: EdgeInsets;
  minLength: number;
  minOverscrollLength: number;
  lastMetrics: ScrollMetrics;
  lastAxisDirection: AxisDirection;
  thumbRect: Rect;
  public constructor(namedParameters: {color?: Color, textDirection?: TextDirection, thickness?: number, fadeoutOpacityAnimation?: Animation, padding?: EdgeInsets, mainAxisMargin?: number, crossAxisMargin?: number, radius?: Radius, minLength?: number, minOverscrollLength?: number} = {}) {
    super();
    this.color = namedParameters.color;
    this.textDirection = namedParameters.textDirection;
    this.thickness = namedParameters.thickness;
    this.fadeoutOpacityAnimation = namedParameters.fadeoutOpacityAnimation;
    this.padding = namedParameters.padding;
    this.mainAxisMargin = namedParameters.mainAxisMargin;
    this.crossAxisMargin = namedParameters.crossAxisMargin;
    this.radius = namedParameters.radius;
    this.minLength = namedParameters.minLength;
    this.minOverscrollLength = namedParameters.minOverscrollLength;
    this.className = 'ScrollbarPainter';
  }
}
export { ScrollbarPainter };
