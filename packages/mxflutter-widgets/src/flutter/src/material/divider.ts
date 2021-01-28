//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Divider extends StatelessWidget$ {
  height: number;
  thickness: number;
  indent: number;
  endIndent: number;
  color: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      height?: number;
      thickness?: number;
      indent?: number;
      endIndent?: number;
      color?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.height = namedParameters.height;
    this.thickness = namedParameters.thickness;
    this.indent = namedParameters.indent;
    this.endIndent = namedParameters.endIndent;
    this.color = namedParameters.color;
    this.className = 'Divider';
  }
}
export { Divider };
class VerticalDivider extends StatelessWidget$ {
  width: number;
  thickness: number;
  indent: number;
  endIndent: number;
  color: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      width?: number;
      thickness?: number;
      indent?: number;
      endIndent?: number;
      color?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.width = namedParameters.width;
    this.thickness = namedParameters.thickness;
    this.indent = namedParameters.indent;
    this.endIndent = namedParameters.endIndent;
    this.color = namedParameters.color;
    this.className = 'VerticalDivider';
  }
}
export { VerticalDivider };
