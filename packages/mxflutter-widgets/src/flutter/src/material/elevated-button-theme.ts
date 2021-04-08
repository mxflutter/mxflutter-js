// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { ButtonStyle } from './button-style';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ElevatedButtonThemeData extends MXDartClass {
  style: ButtonStyle;
  public constructor(namedParameters: {style?: ButtonStyle} = {}) {
    super();
    this.style = namedParameters.style;
    this.className = 'ElevatedButtonThemeData';
  }
}
export { ElevatedButtonThemeData };
class ElevatedButtonTheme extends InheritedTheme {
  data: ElevatedButtonThemeData;
  public constructor(namedParameters: {key?: Key, data?: ElevatedButtonThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'ElevatedButtonTheme';
  }
}
export { ElevatedButtonTheme };
