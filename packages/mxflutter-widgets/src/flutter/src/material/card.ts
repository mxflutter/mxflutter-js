// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ShapeBorder } from '../painting/borders';
import { Color, Clip } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Card extends StatelessWidget {
  color: Color;
  shadowColor: Color;
  elevation: number;
  shape: ShapeBorder;
  borderOnForeground: boolean;
  clipBehavior: Clip;
  margin: EdgeInsetsGeometry;
  semanticContainer: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, color?: Color, shadowColor?: Color, elevation?: number, shape?: ShapeBorder, borderOnForeground?: boolean, margin?: EdgeInsetsGeometry, clipBehavior?: Clip, child?: MXWidget, semanticContainer?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.shadowColor = namedParameters.shadowColor;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.borderOnForeground = namedParameters.borderOnForeground;
    this.margin = namedParameters.margin;
    this.clipBehavior = namedParameters.clipBehavior;
    this.child = namedParameters.child;
    this.semanticContainer = namedParameters.semanticContainer;
    this.className = 'Card';
  }
}
export { Card };
