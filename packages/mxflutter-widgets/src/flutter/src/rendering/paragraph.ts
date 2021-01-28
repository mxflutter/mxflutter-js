//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { SemanticsConfiguration, SemanticsNode } from '../semantics/semantics';
import { TextSelection } from '../services/text-editing';
import { PaintingContext } from './object';
import { PointerEvent } from '../gestures/events';
import { StrutStyle } from '../painting/strut-style';
import { InlineSpan, InlineSpanSemanticsInformation } from '../painting/inline-span';
import {
  Shader,
  TextAlign,
  TextDirection,
  Locale,
  TextHeightBehavior,
  TextBaseline,
  Offset,
  TextPosition,
  Rect,
} from '../../../mx-dart-sdk';
import { TextPainter, TextWidthBasis } from '../painting/text-painter';
import { ContainerBoxParentData, RenderBox, BoxHitTestResult, BoxHitTestEntry, BoxConstraints } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum TextOverflow {
  clip = '{ "_name": "TextOverflow.clip", "index": 0 }',
  fade = '{ "_name": "TextOverflow.fade", "index": 1 }',
  ellipsis = '{ "_name": "TextOverflow.ellipsis", "index": 2 }',
  visible = '{ "_name": "TextOverflow.visible", "index": 3 }',
}

export { TextOverflow };
class TextParentData extends ContainerBoxParentData {
  scale: number;
}
export { TextParentData };
class RenderParagraph extends RenderBox {
  textPainter: TextPainter;
  placeholderSpans: Array<any>;
  softWrap: boolean;
  overflow: TextOverflow;
  applyTextScaleFactorToWidgetSpan: boolean;
  needsClipping: boolean;
  overflowShader: Shader;
  placeholderDimensions: Array<any>;
  semanticsInfo: Array<any>;
  cachedChildNodes: any;
  public constructor(
    text?: InlineSpan,
    namedParameters: {
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      softWrap?: boolean;
      overflow?: TextOverflow;
      textScaleFactor?: number;
      maxLines?: number;
      locale?: Locale;
      strutStyle?: StrutStyle;
      textWidthBasis?: TextWidthBasis;
      textHeightBehavior?: TextHeightBehavior;
      applyTextScaleFactorToWidgetSpan?: boolean;
      children?: Array<any>;
    } = {},
  ) {
    super();
    this['text'] = text;
    this['textAlign'] = namedParameters.textAlign;
    this['textDirection'] = namedParameters.textDirection;
    this.softWrap = namedParameters.softWrap;
    this.overflow = namedParameters.overflow;
    this['textScaleFactor'] = namedParameters.textScaleFactor;
    this['maxLines'] = namedParameters.maxLines;
    this['locale'] = namedParameters.locale;
    this['strutStyle'] = namedParameters.strutStyle;
    this['textWidthBasis'] = namedParameters.textWidthBasis;
    this['textHeightBehavior'] = namedParameters.textHeightBehavior;
    this.applyTextScaleFactorToWidgetSpan = namedParameters.applyTextScaleFactorToWidgetSpan;
    this['children'] = namedParameters.children;
    this.className = 'RenderParagraph';
  }
}
export { RenderParagraph };
