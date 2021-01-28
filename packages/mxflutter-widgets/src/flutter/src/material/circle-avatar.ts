//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { ImageProvider } from '../painting/image-provider';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CircleAvatar extends StatelessWidget$ {
  child: MXWidget;
  backgroundColor: Color;
  foregroundColor: Color;
  backgroundImage: ImageProvider;
  onBackgroundImageError: any;
  radius: number;
  minRadius: number;
  maxRadius: number;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      backgroundColor?: Color;
      backgroundImage?: ImageProvider;
      onBackgroundImageError?: any;
      foregroundColor?: Color;
      radius?: number;
      minRadius?: number;
      maxRadius?: number;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.backgroundColor = namedParameters.backgroundColor;
    this.backgroundImage = namedParameters.backgroundImage;
    this.onBackgroundImageError = namedParameters.onBackgroundImageError;
    this.foregroundColor = namedParameters.foregroundColor;
    this.radius = namedParameters.radius;
    this.minRadius = namedParameters.minRadius;
    this.maxRadius = namedParameters.maxRadius;
    this.className = 'CircleAvatar';
  }
}
export { CircleAvatar };
