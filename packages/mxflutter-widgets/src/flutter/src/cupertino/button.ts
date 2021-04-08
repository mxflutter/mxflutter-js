// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Tween } from '../animation/tween';
import { Key } from '../foundation/key';
import { BorderRadius } from '../painting/border-radius';
import { Color } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget, Widget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoButton extends StatefulWidget {
  child: MXWidget;
  padding: EdgeInsetsGeometry;
  color: Color;
  disabledColor: Color;
  onPressed: any;
  minSize: number;
  pressedOpacity: number;
  borderRadius: BorderRadius;
  filled: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, padding?: EdgeInsetsGeometry, color?: Color, disabledColor?: Color, minSize?: number, pressedOpacity?: number, borderRadius?: BorderRadius, onPressed?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.padding = namedParameters.padding;
    this.color = namedParameters.color;
    this.disabledColor = namedParameters.disabledColor;
    this.minSize = namedParameters.minSize;
    this.pressedOpacity = namedParameters.pressedOpacity;
    this.borderRadius = namedParameters.borderRadius;
    this.onPressed = namedParameters.onPressed;
    this.className = 'CupertinoButton';
  }
  static filled(namedParameters: {key?: Key, child?: MXWidget, padding?: EdgeInsetsGeometry, disabledColor?: Color, minSize?: number, pressedOpacity?: number, borderRadius?: BorderRadius, onPressed?: any} = {}) {
    var jsObj = new CupertinoButton();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj.padding = namedParameters.padding;
    jsObj.disabledColor = namedParameters.disabledColor;
    jsObj.minSize = namedParameters.minSize;
    jsObj.pressedOpacity = namedParameters.pressedOpacity;
    jsObj.borderRadius = namedParameters.borderRadius;
    jsObj.onPressed = namedParameters.onPressed;
    jsObj['constructorName'] = 'filled';
    return jsObj;
  }
}
export { CupertinoButton };
class _CupertinoButtonState extends State {
  opacityTween: Tween;
  animationController: AnimationController;
  opacityAnimation: Animation;
  buttonHeldDown: boolean;
  static get kFadeOutDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_CupertinoButtonState';
    jsObj['constructorName'] = 'kFadeOutDuration';
    return jsObj;
  }
  static get kFadeInDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_CupertinoButtonState';
    jsObj['constructorName'] = 'kFadeInDuration';
    return jsObj;
  }
}
export { _CupertinoButtonState };
