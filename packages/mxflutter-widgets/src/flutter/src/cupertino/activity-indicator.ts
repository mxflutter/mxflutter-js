//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RRect, Color, Canvas, Size } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { CustomPainter } from '../rendering/custom-paint';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoActivityIndicator extends StatefulWidget$ {
  animating: boolean;
  radius: number;
  progress: number;
  public constructor(namedParameters: { key?: Key; animating?: boolean; radius?: number } = {}) {
    super();
    this.key = namedParameters.key;
    this.animating = namedParameters.animating;
    this.radius = namedParameters.radius;
    this.className = 'CupertinoActivityIndicator';
  }
  static partiallyRevealed(namedParameters: { key?: Key; radius?: number; progress?: number } = {}) {
    var jsObj = new CupertinoActivityIndicator();
    jsObj.key = namedParameters.key;
    jsObj.radius = namedParameters.radius;
    jsObj.progress = namedParameters.progress;
    jsObj['constructorName'] = 'partiallyRevealed';
    return jsObj;
  }
}
export { CupertinoActivityIndicator };
class _CupertinoActivityIndicatorState extends State$ {
  controller: AnimationController;
}
export { _CupertinoActivityIndicatorState };
class _CupertinoActivityIndicatorPainter extends CustomPainter {
  position: Animation;
  tickFundamentalRRect: RRect;
  activeColor: Color;
  radius: number;
  progress: number;
  public constructor(
    namedParameters: { position?: Animation; activeColor?: Color; radius?: number; progress?: number } = {},
  ) {
    super();
    this.position = namedParameters.position;
    this.activeColor = namedParameters.activeColor;
    this.radius = namedParameters.radius;
    this.progress = namedParameters.progress;
    this.className = '_CupertinoActivityIndicatorPainter';
  }
}
export { _CupertinoActivityIndicatorPainter };
