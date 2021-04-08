// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { InheritedWidget, Widget } from '../widgets/framework';
import { TextStyle } from '../painting/text-style';
import { MaterialStateProperty } from './material-state';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DataTableThemeData extends MXDartClass {
  dataRowColor: MaterialStateProperty;
  dataRowHeight: number;
  dataTextStyle: TextStyle;
  headingRowColor: MaterialStateProperty;
  headingRowHeight: number;
  headingTextStyle: TextStyle;
  horizontalMargin: number;
  columnSpacing: number;
  dividerThickness: number;
  public constructor(namedParameters: {dataRowColor?: MaterialStateProperty, dataRowHeight?: number, dataTextStyle?: TextStyle, headingRowColor?: MaterialStateProperty, headingRowHeight?: number, headingTextStyle?: TextStyle, horizontalMargin?: number, columnSpacing?: number, dividerThickness?: number} = {}) {
    super();
    this.dataRowColor = namedParameters.dataRowColor;
    this.dataRowHeight = namedParameters.dataRowHeight;
    this.dataTextStyle = namedParameters.dataTextStyle;
    this.headingRowColor = namedParameters.headingRowColor;
    this.headingRowHeight = namedParameters.headingRowHeight;
    this.headingTextStyle = namedParameters.headingTextStyle;
    this.horizontalMargin = namedParameters.horizontalMargin;
    this.columnSpacing = namedParameters.columnSpacing;
    this.dividerThickness = namedParameters.dividerThickness;
    this.className = 'DataTableThemeData';
  }
}
export { DataTableThemeData };
class _LerpProperties extends MXDartClass {
  a: MaterialStateProperty;
  b: MaterialStateProperty;
  t: number;
  lerpFunction: any;
  public constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number, lerpFunction?: any) {
    super();
    this.a = a;
    this.b = b;
    this.t = t;
    this.lerpFunction = lerpFunction;
    this.className = '_LerpProperties';
  }
}
export { _LerpProperties };
class DataTableTheme extends InheritedWidget {
  data: DataTableThemeData;
  public constructor(namedParameters: {key?: Key, data?: DataTableThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'DataTableTheme';
  }
}
export { DataTableTheme };
