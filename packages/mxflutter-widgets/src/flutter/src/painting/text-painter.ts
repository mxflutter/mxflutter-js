// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { StrutStyle } from './strut-style';
import { InlineSpan } from './inline-span';
import { Size, PlaceholderAlignment, TextBaseline, Offset, Paragraph, TextAlign, TextDirection, Locale, TextHeightBehavior, TextPosition, Rect } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PlaceholderDimensions extends MXDartClass {
  size: Size;
  alignment: PlaceholderAlignment;
  baselineOffset: number;
  baseline: TextBaseline;
  public constructor(namedParameters: {size?: Size, alignment?: PlaceholderAlignment, baseline?: TextBaseline, baselineOffset?: number} = {}) {
    super();
    this.size = namedParameters.size;
    this.alignment = namedParameters.alignment;
    this.baseline = namedParameters.baseline;
    this.baselineOffset = namedParameters.baselineOffset;
    this.className = 'PlaceholderDimensions';
  }
  static get empty() {
    var jsObj = new PlaceholderDimensions();
    jsObj['className'] = 'PlaceholderDimensions';
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
}
export { PlaceholderDimensions };
enum TextWidthBasis {
  parent = '{ "_name": "TextWidthBasis.parent", "index": 0 }',
  longestLine = '{ "_name": "TextWidthBasis.longestLine", "index": 1 }',
};

export { TextWidthBasis };
class _CaretMetrics extends MXDartClass {
  offset: Offset;
  fullHeight: number;
  public constructor(namedParameters: {offset?: Offset, fullHeight?: number} = {}) {
    super();
    this.offset = namedParameters.offset;
    this.fullHeight = namedParameters.fullHeight;
    this.className = '_CaretMetrics';
  }
}
export { _CaretMetrics };
class TextPainter extends MXDartClass {
  paragraph: Paragraph;
  needsLayout: boolean;
  text: InlineSpan;
  textAlign: TextAlign;
  textDirection: TextDirection;
  textScaleFactor: number;
  ellipsis: string;
  locale: Locale;
  maxLines: number;
  strutStyle: StrutStyle;
  textWidthBasis: TextWidthBasis;
  textHeightBehavior: TextHeightBehavior;
  layoutTemplate: Paragraph;
  inlinePlaceholderBoxes: Array<any>;
  inlinePlaceholderScales: Array<any>;
  placeholderDimensions: Array<any>;
  lastMinWidth: number;
  lastMaxWidth: number;
  caretMetrics: _CaretMetrics;
  previousCaretPosition: TextPosition;
  previousCaretPrototype: Rect;
  public constructor(namedParameters: {text?: InlineSpan, textAlign?: TextAlign, textDirection?: TextDirection, textScaleFactor?: number, maxLines?: number, ellipsis?: string, locale?: Locale, strutStyle?: StrutStyle, textWidthBasis?: TextWidthBasis, textHeightBehavior?: TextHeightBehavior} = {}) {
    super();
    this.text = namedParameters.text;
    this.textAlign = namedParameters.textAlign;
    this.textDirection = namedParameters.textDirection;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.maxLines = namedParameters.maxLines;
    this.ellipsis = namedParameters.ellipsis;
    this.locale = namedParameters.locale;
    this.strutStyle = namedParameters.strutStyle;
    this.textWidthBasis = namedParameters.textWidthBasis;
    this.textHeightBehavior = namedParameters.textHeightBehavior;
    this.className = 'TextPainter';
  }
}
export { TextPainter };
