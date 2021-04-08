// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextStyle } from './text-style';
import { GestureRecognizer } from '../gestures/recognizer';
import { InlineSpan } from './inline-span';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextSpan extends InlineSpan {
  text: string;
  children: Array<any>;
  recognizer: GestureRecognizer;
  semanticsLabel: string;
  public constructor(namedParameters: {text?: string, children?: Array<any>, style?: TextStyle, recognizer?: GestureRecognizer, semanticsLabel?: string} = {}) {
    super();
    this.text = namedParameters.text;
    this.children = namedParameters.children;
    this.style = namedParameters.style;
    this.recognizer = namedParameters.recognizer;
    this.semanticsLabel = namedParameters.semanticsLabel;
    this.className = 'TextSpan';
  }
}
export { TextSpan };
