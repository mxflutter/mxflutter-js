"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTestResult = exports._OffsetTransformPart = exports._MatrixTransformPart = exports._TransformPart = exports.HitTestEntry = exports.HitTestTarget = exports.HitTestDispatcher = exports.HitTestable = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class HitTestable extends mxflutter_base_1.MXDartClass {
}
exports.HitTestable = HitTestable;
class HitTestDispatcher extends mxflutter_base_1.MXDartClass {
}
exports.HitTestDispatcher = HitTestDispatcher;
class HitTestTarget extends mxflutter_base_1.MXDartClass {
}
exports.HitTestTarget = HitTestTarget;
class HitTestEntry extends mxflutter_base_1.MXDartClass {
    constructor(target) {
        super();
        this.target = target;
        this.className = 'HitTestEntry';
    }
}
exports.HitTestEntry = HitTestEntry;
class _TransformPart extends mxflutter_base_1.MXDartClass {
}
exports._TransformPart = _TransformPart;
class _MatrixTransformPart extends _TransformPart {
    constructor(matrix) {
        super();
        this.matrix = matrix;
        this.className = '_MatrixTransformPart';
    }
}
exports._MatrixTransformPart = _MatrixTransformPart;
class _OffsetTransformPart extends _TransformPart {
    constructor(offset) {
        super();
        this.offset = offset;
        this.className = '_OffsetTransformPart';
    }
}
exports._OffsetTransformPart = _OffsetTransformPart;
class HitTestResult extends mxflutter_base_1.MXDartClass {
    static wrap(result) {
        var jsObj = new HitTestResult();
        jsObj['result'] = result;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
exports.HitTestResult = HitTestResult;
