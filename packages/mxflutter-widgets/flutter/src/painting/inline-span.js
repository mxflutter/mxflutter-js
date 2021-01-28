//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { DiagnosticableTree } from '../foundation/diagnostics';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Accumulator extends MXDartClass {
    constructor(_value) {
        super();
        this.value = _value;
        this.className = 'Accumulator';
    }
}
export { Accumulator };
class InlineSpanSemanticsInformation extends MXDartClass {
    constructor(text, namedParameters = {}) {
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
class InlineSpan extends DiagnosticableTree {
}
export { InlineSpan };
