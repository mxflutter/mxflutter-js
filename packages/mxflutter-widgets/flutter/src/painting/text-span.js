//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InlineSpan } from './inline-span';
class TextSpan extends InlineSpan {
    constructor(namedParameters = {}) {
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
