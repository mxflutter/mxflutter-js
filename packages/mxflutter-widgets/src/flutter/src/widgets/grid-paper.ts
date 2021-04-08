// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { StatelessWidget, Widget } from './framework';
import { Color } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _GridPaperPainter extends CustomPainter {
  color: Color;
  interval: number;
  divisions: number;
  subdivisions: number;
  public constructor(namedParameters: {color?: Color, interval?: number, divisions?: number, subdivisions?: number} = {}) {
    super();
    this.color = namedParameters.color;
    this.interval = namedParameters.interval;
    this.divisions = namedParameters.divisions;
    this.subdivisions = namedParameters.subdivisions;
    this.className = '_GridPaperPainter';
  }
}
export { _GridPaperPainter };
class GridPaper extends StatelessWidget {
  color: Color;
  interval: number;
  divisions: number;
  subdivisions: number;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, color?: Color, interval?: number, divisions?: number, subdivisions?: number, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.interval = namedParameters.interval;
    this.divisions = namedParameters.divisions;
    this.subdivisions = namedParameters.subdivisions;
    this.child = namedParameters.child;
    this.className = 'GridPaper';
  }
}
export { GridPaper };
