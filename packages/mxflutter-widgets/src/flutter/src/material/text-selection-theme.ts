// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextSelectionThemeData extends MXDartClass {
  cursorColor: Color;
  selectionColor: Color;
  selectionHandleColor: Color;
  public constructor(namedParameters: {cursorColor?: Color, selectionColor?: Color, selectionHandleColor?: Color} = {}) {
    super();
    this.cursorColor = namedParameters.cursorColor;
    this.selectionColor = namedParameters.selectionColor;
    this.selectionHandleColor = namedParameters.selectionHandleColor;
    this.className = 'TextSelectionThemeData';
  }
}
export { TextSelectionThemeData };
class TextSelectionTheme extends InheritedTheme {
  data: TextSelectionThemeData;
  public constructor(namedParameters: {key?: Key, data?: TextSelectionThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'TextSelectionTheme';
  }
}
export { TextSelectionTheme };
