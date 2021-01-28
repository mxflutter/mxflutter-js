//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Widget, BuildContext$ } from './framework';
import { Key } from '../foundation/key';
import { IconThemeData } from './icon-theme-data';
import { InheritedTheme } from './inherited-theme';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class IconTheme extends InheritedTheme {
  data: IconThemeData;
  public constructor(namedParameters: { key?: Key; data?: IconThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'IconTheme';
  }
  // MX modified begin
  public static of(context) :IconThemeData{
    let widgetOfData = context.dependOnInheritedWidget('IconTheme', (jsonMap: any) => {
      return IconThemeData.fromJson(jsonMap);
    });
    return widgetOfData;
  }
  // MX modified end
}
export { IconTheme };
