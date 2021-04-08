// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { FlutterLogoStyle } from '../painting/flutter-logo';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FlutterLogo extends StatelessWidget {
  size: number;
  textColor: Color;
  style: FlutterLogoStyle;
  duration: Duration;
  curve: Curve;
  public constructor(namedParameters: {key?: Key, size?: number, textColor?: Color, style?: FlutterLogoStyle, duration?: Duration, curve?: Curve} = {}) {
    super();
    this.key = namedParameters.key;
    this.size = namedParameters.size;
    this.textColor = namedParameters.textColor;
    this.style = namedParameters.style;
    this.duration = namedParameters.duration;
    this.curve = namedParameters.curve;
    this.className = 'FlutterLogo';
  }
}
export { FlutterLogo };
