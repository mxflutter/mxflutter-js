//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BuildContext$ } from '../widgets/framework';
import { TextStyle } from '../painting/text-style';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { TabBarIndicatorSize } from './tabs';
import { Decoration } from '../painting/decoration';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TabBarTheme extends MXDartClass {
  indicator: Decoration;
  indicatorSize: TabBarIndicatorSize;
  labelColor: Color;
  labelPadding: EdgeInsetsGeometry;
  labelStyle: TextStyle;
  unselectedLabelColor: Color;
  unselectedLabelStyle: TextStyle;
  public constructor(
    namedParameters: {
      indicator?: Decoration;
      indicatorSize?: TabBarIndicatorSize;
      labelColor?: Color;
      labelPadding?: EdgeInsetsGeometry;
      labelStyle?: TextStyle;
      unselectedLabelColor?: Color;
      unselectedLabelStyle?: TextStyle;
    } = {},
  ) {
    super();
    this.indicator = namedParameters.indicator;
    this.indicatorSize = namedParameters.indicatorSize;
    this.labelColor = namedParameters.labelColor;
    this.labelPadding = namedParameters.labelPadding;
    this.labelStyle = namedParameters.labelStyle;
    this.unselectedLabelColor = namedParameters.unselectedLabelColor;
    this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
    this.className = 'TabBarTheme';
  }
}
export { TabBarTheme };
