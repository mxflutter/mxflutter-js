//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MaterialBannerThemeData extends MXDartClass {
  backgroundColor: Color;
  contentTextStyle: TextStyle;
  padding: EdgeInsetsGeometry;
  leadingPadding: EdgeInsetsGeometry;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      contentTextStyle?: TextStyle;
      padding?: EdgeInsetsGeometry;
      leadingPadding?: EdgeInsetsGeometry;
    } = {},
  ) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.contentTextStyle = namedParameters.contentTextStyle;
    this.padding = namedParameters.padding;
    this.leadingPadding = namedParameters.leadingPadding;
    this.className = 'MaterialBannerThemeData';
  }
}
export { MaterialBannerThemeData };
class MaterialBannerTheme extends InheritedTheme {
  data: MaterialBannerThemeData;
  public constructor(namedParameters: { key?: Key; data?: MaterialBannerThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'MaterialBannerTheme';
  }
}
export { MaterialBannerTheme };
