// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color, RRect } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { CustomPainter } from '../rendering/custom-paint';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum CupertinoActivityIndicatorIOSVersionStyle {
  iOS13 = '{ "_name": "CupertinoActivityIndicatorIOSVersionStyle.iOS13", "index": 0 }',
  iOS14 = '{ "_name": "CupertinoActivityIndicatorIOSVersionStyle.iOS14", "index": 1 }',
};

export { CupertinoActivityIndicatorIOSVersionStyle };
class CupertinoActivityIndicator extends StatefulWidget {
  animating: boolean;
  radius: number;
  progress: number;
  iOSVersionStyle: CupertinoActivityIndicatorIOSVersionStyle;
  public constructor(namedParameters: {key?: Key, animating?: boolean, radius?: number, iOSVersionStyle?: CupertinoActivityIndicatorIOSVersionStyle} = {}) {
    super();
    this.key = namedParameters.key;
    this.animating = namedParameters.animating;
    this.radius = namedParameters.radius;
    this.iOSVersionStyle = namedParameters.iOSVersionStyle;
    this.className = 'CupertinoActivityIndicator';
  }
  static partiallyRevealed(namedParameters: {key?: Key, radius?: number, progress?: number, iOSVersionStyle?: CupertinoActivityIndicatorIOSVersionStyle} = {}) {
    var jsObj = new CupertinoActivityIndicator();
    jsObj.key = namedParameters.key;
    jsObj.radius = namedParameters.radius;
    jsObj.progress = namedParameters.progress;
    jsObj.iOSVersionStyle = namedParameters.iOSVersionStyle;
    jsObj['constructorName'] = 'partiallyRevealed';
    return jsObj;
  }
}
export { CupertinoActivityIndicator };
class _CupertinoActivityIndicatorState extends State {
  controller: AnimationController;
}
export { _CupertinoActivityIndicatorState };
class _CupertinoActivityIndicatorPainter extends CustomPainter {
  position: Animation;
  activeColor: Color;
  radius: number;
  progress: number;
  alphaValues: Array<any>;
  tickFundamentalRRect: RRect;
  public constructor(namedParameters: {position?: Animation, activeColor?: Color, radius?: number, progress?: number, iOSVersionStyle?: CupertinoActivityIndicatorIOSVersionStyle} = {}) {
    super();
    this.position = namedParameters.position;
    this.activeColor = namedParameters.activeColor;
    this.radius = namedParameters.radius;
    this.progress = namedParameters.progress;
    this['iOSVersionStyle'] = namedParameters.iOSVersionStyle;
    this.className = '_CupertinoActivityIndicatorPainter';
  }
}
export { _CupertinoActivityIndicatorPainter };
