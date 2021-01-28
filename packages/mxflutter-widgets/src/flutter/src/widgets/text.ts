//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { StrutStyle } from '../painting/strut-style';
import { InlineSpan } from '../painting/inline-span';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Widget, BuildContext$, StatelessWidget$ } from './framework';
import { Key } from '../foundation/key';
import { TextWidthBasis } from '../painting/text-painter';
import { TextOverflow } from '../rendering/paragraph';
import { TextAlign, TextHeightBehavior, TextDirection, Locale } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { InheritedTheme } from './inherited-theme';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DefaultTextStyle extends InheritedTheme {
  style: TextStyle;
  textAlign: TextAlign;
  softWrap: boolean;
  overflow: TextOverflow;
  maxLines: number;
  textWidthBasis: TextWidthBasis;
  textHeightBehavior: TextHeightBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      style?: TextStyle;
      textAlign?: TextAlign;
      softWrap?: boolean;
      overflow?: TextOverflow;
      maxLines?: number;
      textWidthBasis?: TextWidthBasis;
      textHeightBehavior?: TextHeightBehavior;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.style = namedParameters.style;
    this.textAlign = namedParameters.textAlign;
    this.softWrap = namedParameters.softWrap;
    this.overflow = namedParameters.overflow;
    this.maxLines = namedParameters.maxLines;
    this.textWidthBasis = namedParameters.textWidthBasis;
    this.textHeightBehavior = namedParameters.textHeightBehavior;
    this.child = namedParameters.child;
    this.className = 'DefaultTextStyle';
  }
  static fallback(namedParameters: { key?: Key } = {}) {
    var jsObj = new DefaultTextStyle();
    jsObj.key = namedParameters.key;
    jsObj['constructorName'] = 'fallback';
    return jsObj;
  }
}
export { DefaultTextStyle };
class DefaultTextHeightBehavior extends InheritedTheme {
  textHeightBehavior: TextHeightBehavior;
  public constructor(namedParameters: { key?: Key; textHeightBehavior?: TextHeightBehavior; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.textHeightBehavior = namedParameters.textHeightBehavior;
    this.child = namedParameters.child;
    this.className = 'DefaultTextHeightBehavior';
  }
}
export { DefaultTextHeightBehavior };
class Text extends StatelessWidget$ {
  data: string;
  textSpan: InlineSpan;
  style: TextStyle;
  strutStyle: StrutStyle;
  textAlign: TextAlign;
  textDirection: TextDirection;
  locale: Locale;
  softWrap: boolean;
  overflow: TextOverflow;
  textScaleFactor: number;
  maxLines: number;
  semanticsLabel: string;
  textWidthBasis: TextWidthBasis;
  textHeightBehavior: TextHeightBehavior;
  applyTextScaleFactorToWidgetSpan: boolean;
  public constructor(
    data?: string,
    namedParameters: {
      key?: Key;
      style?: TextStyle;
      strutStyle?: StrutStyle;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      locale?: Locale;
      softWrap?: boolean;
      overflow?: TextOverflow;
      textScaleFactor?: number;
      maxLines?: number;
      semanticsLabel?: string;
      textWidthBasis?: TextWidthBasis;
      textHeightBehavior?: TextHeightBehavior;
    } = {},
  ) {
    super();
    this.data = data;
    this.key = namedParameters.key;
    this.style = namedParameters.style;
    this.strutStyle = namedParameters.strutStyle;
    this.textAlign = namedParameters.textAlign;
    this.textDirection = namedParameters.textDirection;
    this.locale = namedParameters.locale;
    this.softWrap = namedParameters.softWrap;
    this.overflow = namedParameters.overflow;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.maxLines = namedParameters.maxLines;
    this.semanticsLabel = namedParameters.semanticsLabel;
    this.textWidthBasis = namedParameters.textWidthBasis;
    this.textHeightBehavior = namedParameters.textHeightBehavior;
    this.className = 'Text';
  }
  static rich(
    textSpan?: InlineSpan,
    namedParameters: {
      key?: Key;
      style?: TextStyle;
      strutStyle?: StrutStyle;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      locale?: Locale;
      softWrap?: boolean;
      overflow?: TextOverflow;
      textScaleFactor?: number;
      maxLines?: number;
      semanticsLabel?: string;
      textWidthBasis?: TextWidthBasis;
      textHeightBehavior?: TextHeightBehavior;
      applyTextScaleFactorToWidgetSpan?: boolean;
    } = {},
  ) {
    var jsObj = new Text();
    jsObj.textSpan = textSpan;
    jsObj.key = namedParameters.key;
    jsObj.style = namedParameters.style;
    jsObj.strutStyle = namedParameters.strutStyle;
    jsObj.textAlign = namedParameters.textAlign;
    jsObj.textDirection = namedParameters.textDirection;
    jsObj.locale = namedParameters.locale;
    jsObj.softWrap = namedParameters.softWrap;
    jsObj.overflow = namedParameters.overflow;
    jsObj.textScaleFactor = namedParameters.textScaleFactor;
    jsObj.maxLines = namedParameters.maxLines;
    jsObj.semanticsLabel = namedParameters.semanticsLabel;
    jsObj.textWidthBasis = namedParameters.textWidthBasis;
    jsObj.textHeightBehavior = namedParameters.textHeightBehavior;
    jsObj.applyTextScaleFactorToWidgetSpan = namedParameters.applyTextScaleFactorToWidgetSpan;
    jsObj['constructorName'] = 'rich';
    return jsObj;
  }
}
export { Text };
