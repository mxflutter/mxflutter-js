// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget } from './framework';
import { Color } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _PlaceholderPainter extends CustomPainter {
  color: Color;
  strokeWidth: number;
  public constructor(namedParameters: {color?: Color, strokeWidth?: number} = {}) {
    super();
    this.color = namedParameters.color;
    this.strokeWidth = namedParameters.strokeWidth;
    this.className = '_PlaceholderPainter';
  }
}
export { _PlaceholderPainter };
class Placeholder extends StatelessWidget {
  color: Color;
  strokeWidth: number;
  fallbackWidth: number;
  fallbackHeight: number;
  public constructor(namedParameters: {key?: Key, color?: Color, strokeWidth?: number, fallbackWidth?: number, fallbackHeight?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.strokeWidth = namedParameters.strokeWidth;
    this.fallbackWidth = namedParameters.fallbackWidth;
    this.fallbackHeight = namedParameters.fallbackHeight;
    this.className = 'Placeholder';
  }
}
export { Placeholder };
