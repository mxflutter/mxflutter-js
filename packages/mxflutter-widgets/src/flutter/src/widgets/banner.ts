// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget, Widget } from './framework';
import { TextPainter } from '../painting/text-painter';
import { TextStyle } from '../painting/text-style';
import { TextDirection, Color, Paint } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum BannerLocation {
  topStart = '{ "_name": "BannerLocation.topStart", "index": 0 }',
  topEnd = '{ "_name": "BannerLocation.topEnd", "index": 1 }',
  bottomStart = '{ "_name": "BannerLocation.bottomStart", "index": 2 }',
  bottomEnd = '{ "_name": "BannerLocation.bottomEnd", "index": 3 }',
};

export { BannerLocation };
class BannerPainter extends CustomPainter {
  message: string;
  textDirection: TextDirection;
  location: BannerLocation;
  layoutDirection: TextDirection;
  color: Color;
  textStyle: TextStyle;
  prepared: boolean;
  textPainter: TextPainter;
  paintShadow: Paint;
  paintBanner: Paint;
  public constructor(namedParameters: {message?: string, textDirection?: TextDirection, location?: BannerLocation, layoutDirection?: TextDirection, color?: Color, textStyle?: TextStyle} = {}) {
    super();
    this.message = namedParameters.message;
    this.textDirection = namedParameters.textDirection;
    this.location = namedParameters.location;
    this.layoutDirection = namedParameters.layoutDirection;
    this.color = namedParameters.color;
    this.textStyle = namedParameters.textStyle;
    this.className = 'BannerPainter';
  }
}
export { BannerPainter };
class Banner extends StatelessWidget {
  child: MXWidget;
  message: string;
  textDirection: TextDirection;
  location: BannerLocation;
  layoutDirection: TextDirection;
  color: Color;
  textStyle: TextStyle;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, message?: string, textDirection?: TextDirection, location?: BannerLocation, layoutDirection?: TextDirection, color?: Color, textStyle?: TextStyle} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.message = namedParameters.message;
    this.textDirection = namedParameters.textDirection;
    this.location = namedParameters.location;
    this.layoutDirection = namedParameters.layoutDirection;
    this.color = namedParameters.color;
    this.textStyle = namedParameters.textStyle;
    this.className = 'Banner';
  }
}
export { Banner };
class CheckedModeBanner extends StatelessWidget {
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'CheckedModeBanner';
  }
}
export { CheckedModeBanner };
