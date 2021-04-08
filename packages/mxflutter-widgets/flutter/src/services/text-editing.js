"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextSelection = void 0;
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
class TextSelection extends mx_dart_sdk_1.TextRange {
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
exports.TextSelection = TextSelection;
