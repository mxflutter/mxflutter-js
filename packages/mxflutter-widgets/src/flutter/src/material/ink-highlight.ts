//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { Duration } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { MaterialInkController } from './material';
import { AnimationController } from '../animation/animation-controller';
import { Animation, AnimationStatus } from '../animation/animation';
import { TextDirection, Color, Canvas, Rect, Paint } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { BoxShape } from '../painting/box-border';
import { InteractiveInkFeature } from './ink-well';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class InkHighlight extends InteractiveInkFeature {
  shape: BoxShape;
  radius: number;
  borderRadius: BorderRadius;
  customBorder: ShapeBorder;
  rectCallback: any;
  textDirection: TextDirection;
  alpha: Animation;
  alphaController: AnimationController;
  active: boolean;
  public constructor(
    namedParameters: {
      controller?: MaterialInkController;
      referenceBox?: RenderBox;
      color?: Color;
      textDirection?: TextDirection;
      shape?: BoxShape;
      radius?: number;
      borderRadius?: BorderRadius;
      customBorder?: ShapeBorder;
      rectCallback?: any;
      onRemoved?: any;
      fadeDuration?: Duration;
    } = {},
  ) {
    super();
    this['__mx_controller'] = namedParameters.controller;
    this.referenceBox = namedParameters.referenceBox;
    this.color = namedParameters.color;
    this.textDirection = namedParameters.textDirection;
    this.shape = namedParameters.shape;
    this.radius = namedParameters.radius;
    this.borderRadius = namedParameters.borderRadius;
    this.customBorder = namedParameters.customBorder;
    this.rectCallback = namedParameters.rectCallback;
    this.onRemoved = namedParameters.onRemoved;
    this['fadeDuration'] = namedParameters.fadeDuration;
    this.className = 'InkHighlight';
  }
}
export { InkHighlight };
