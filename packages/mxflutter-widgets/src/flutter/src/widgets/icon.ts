//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { IconData } from './icon-data';
import { StatelessWidget$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Icon extends StatelessWidget$ {
  icon: IconData;
  size: number;
  color: Color;
  semanticLabel: string;
  textDirection: TextDirection;
  public constructor(
    icon?: IconData,
    namedParameters: {
      key?: Key;
      size?: number;
      color?: Color;
      semanticLabel?: string;
      textDirection?: TextDirection;
    } = {},
  ) {
    super();
    this.icon = icon;
    this.key = namedParameters.key;
    this.size = namedParameters.size;
    this.color = namedParameters.color;
    this.semanticLabel = namedParameters.semanticLabel;
    this.textDirection = namedParameters.textDirection;
    this.className = 'Icon';
  }
}
export { Icon };
