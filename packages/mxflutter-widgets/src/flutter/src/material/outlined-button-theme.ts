// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { ButtonStyle } from './button-style';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class OutlinedButtonThemeData extends MXDartClass {
  style: ButtonStyle;
  public constructor(namedParameters: {style?: ButtonStyle} = {}) {
    super();
    this.style = namedParameters.style;
    this.className = 'OutlinedButtonThemeData';
  }
}
export { OutlinedButtonThemeData };
class OutlinedButtonTheme extends InheritedTheme {
  data: OutlinedButtonThemeData;
  public constructor(namedParameters: {key?: Key, data?: OutlinedButtonThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'OutlinedButtonTheme';
  }
}
export { OutlinedButtonTheme };
