//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { TextRange } from '../../../mx-dart-sdk';
class TextSelection extends TextRange {
    constructor(namedParameters = {}) {
        super();
        this.baseOffset = namedParameters.baseOffset;
        this.extentOffset = namedParameters.extentOffset;
        this.affinity = namedParameters.affinity;
        this.isDirectional = namedParameters.isDirectional;
        this.className = 'TextSelection';
    }
    // MX modified begin
    // static collapsed(namedParameters: {offset?: number, affinity?: TextAffinity} = {}) {
    //   var jsObj = new TextSelection();
    //   jsObj['offset'] = namedParameters.offset;
    //   jsObj.affinity = namedParameters.affinity;
    //   jsObj['constructorName'] = 'collapsed';
    //   return jsObj;
    // }
    // MX modified end
    static fromPosition(position) {
        var jsObj = new TextSelection();
        jsObj['position'] = position;
        jsObj['constructorName'] = 'fromPosition';
        return jsObj;
    }
}
export { TextSelection };
