//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextPosition } from '../../../mx-dart-sdk';
import { TextStyle } from './text-style';
import { DiagnosticableTree, DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { GestureRecognizer } from '../gestures/recognizer';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Accumulator extends MXDartClass {
  value: number;
  public constructor(_value?: number) {
    super();
    this.value = _value;
    this.className = 'Accumulator';
  }
}
export { Accumulator };
class InlineSpanSemanticsInformation extends MXDartClass {
  text: string;
  semanticsLabel: string;
  recognizer: GestureRecognizer;
  isPlaceholder: boolean;
  requiresOwnNode: boolean;
  public constructor(
    text?: string,
    namedParameters: { isPlaceholder?: boolean; semanticsLabel?: string; recognizer?: GestureRecognizer } = {},
  ) {
    super();
    this.text = text;
    this.isPlaceholder = namedParameters.isPlaceholder;
    this.semanticsLabel = namedParameters.semanticsLabel;
    this.recognizer = namedParameters.recognizer;
    this.className = 'InlineSpanSemanticsInformation';
  }
  static get placeholder() {
    var jsObj = new InlineSpanSemanticsInformation();
    jsObj['className'] = 'InlineSpanSemanticsInformation';
    jsObj['constructorName'] = 'placeholder';
    return jsObj;
  }
}
export { InlineSpanSemanticsInformation };
abstract class InlineSpan extends DiagnosticableTree {
  style: TextStyle;
}
export { InlineSpan };
