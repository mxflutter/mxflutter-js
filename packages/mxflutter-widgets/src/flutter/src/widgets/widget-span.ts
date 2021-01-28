//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Accumulator, InlineSpan } from '../painting/inline-span';
import { TextStyle } from '../painting/text-style';
import { PlaceholderAlignment, TextBaseline, ParagraphBuilder, TextPosition } from '../../../mx-dart-sdk';
import { Widget } from './framework';
import { PlaceholderSpan } from '../painting/placeholder-span';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class WidgetSpan extends PlaceholderSpan {
  child: MXWidget;
  public constructor(
    namedParameters: {
      child?: MXWidget;
      alignment?: PlaceholderAlignment;
      baseline?: TextBaseline;
      style?: TextStyle;
    } = {},
  ) {
    super();
    this.child = namedParameters.child;
    this.alignment = namedParameters.alignment;
    this.baseline = namedParameters.baseline;
    this.style = namedParameters.style;
    this.className = 'WidgetSpan';
  }
}
export { WidgetSpan };
