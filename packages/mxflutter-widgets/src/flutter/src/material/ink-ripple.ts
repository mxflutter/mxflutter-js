//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { AnimationController } from '../animation/animation-controller';
import { Animation, AnimationStatus } from '../animation/animation';
import { ShapeBorder } from '../painting/borders';
import { BorderRadius } from '../painting/border-radius';
import { Offset, Color, TextDirection, Canvas } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { MaterialInkController } from './material';
import { InteractiveInkFeatureFactory, InteractiveInkFeature } from './ink-well';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _InkRippleFactory extends InteractiveInkFeatureFactory {}
export { _InkRippleFactory };
class InkRipple extends InteractiveInkFeature {
  position: Offset;
  borderRadius: BorderRadius;
  customBorder: ShapeBorder;
  targetRadius: number;
  clipCallback: any;
  textDirection: TextDirection;
  radius: Animation;
  radiusController: AnimationController;
  fadeIn: Animation;
  fadeInController: AnimationController;
  fadeOut: Animation;
  fadeOutController: AnimationController;
  public constructor(
    namedParameters: {
      controller?: MaterialInkController;
      referenceBox?: RenderBox;
      position?: Offset;
      color?: Color;
      textDirection?: TextDirection;
      containedInkWell?: boolean;
      rectCallback?: any;
      borderRadius?: BorderRadius;
      customBorder?: ShapeBorder;
      radius?: number;
      onRemoved?: any;
    } = {},
  ) {
    super();
    this['__mx_controller'] = namedParameters.controller;
    this.referenceBox = namedParameters.referenceBox;
    this.position = namedParameters.position;
    this.color = namedParameters.color;
    this.textDirection = namedParameters.textDirection;
    this['containedInkWell'] = namedParameters.containedInkWell;
    this['rectCallback'] = namedParameters.rectCallback;
    this.borderRadius = namedParameters.borderRadius;
    this.customBorder = namedParameters.customBorder;
    this['__mx_radius'] = namedParameters.radius;
    this.onRemoved = namedParameters.onRemoved;
    this.className = 'InkRipple';
  }
  static get splashFactory() {
    var jsObj = new (class MXInteractiveInkFeatureFactory extends InteractiveInkFeatureFactory {})();
    jsObj['className'] = 'InkRipple';
    jsObj['constructorName'] = 'splashFactory';
    return jsObj;
  }
}
export { InkRipple };
