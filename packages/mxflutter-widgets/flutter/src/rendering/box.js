"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderBoxContainerDefaultsMixin = exports.RenderBox = exports._IntrinsicDimensionsCacheEntry = exports._IntrinsicDimension = exports.ContainerBoxParentData = exports.BoxParentData = exports.BoxHitTestEntry = exports.BoxHitTestResult = exports.BoxConstraints = exports._DebugSize = void 0;
const hit_test_1 = require("../gestures/hit-test");
const object_1 = require("./object");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _DebugSize extends mx_dart_sdk_1.Size {
    constructor(source, _owner, _canBeUsedByParent) {
        super();
        this['source'] = source;
        this.owner = _owner;
        this.canBeUsedByParent = _canBeUsedByParent;
        this.className = '_DebugSize';
    }
}
exports._DebugSize = _DebugSize;
class BoxConstraints extends object_1.Constraints {
    constructor(namedParameters = {}) {
        super();
        this.minWidth = namedParameters.minWidth;
        this.maxWidth = namedParameters.maxWidth;
        this.minHeight = namedParameters.minHeight;
        this.maxHeight = namedParameters.maxHeight;
        this.className = 'BoxConstraints';
    }
    static tight(size) {
        var jsObj = new BoxConstraints();
        jsObj['size'] = size;
        jsObj['constructorName'] = 'tight';
        return jsObj;
    }
    static tightFor(namedParameters = {}) {
        var jsObj = new BoxConstraints();
        jsObj['width'] = namedParameters.width;
        jsObj['height'] = namedParameters.height;
        jsObj['constructorName'] = 'tightFor';
        return jsObj;
    }
    static tightForFinite(namedParameters = {}) {
        var jsObj = new BoxConstraints();
        jsObj['width'] = namedParameters.width;
        jsObj['height'] = namedParameters.height;
        jsObj['constructorName'] = 'tightForFinite';
        return jsObj;
    }
    static loose(size) {
        var jsObj = new BoxConstraints();
        jsObj['size'] = size;
        jsObj['constructorName'] = 'loose';
        return jsObj;
    }
    static expand(namedParameters = {}) {
        var jsObj = new BoxConstraints();
        jsObj['width'] = namedParameters.width;
        jsObj['height'] = namedParameters.height;
        jsObj['constructorName'] = 'expand';
        return jsObj;
    }
}
exports.BoxConstraints = BoxConstraints;
class BoxHitTestResult extends hit_test_1.HitTestResult {
    static wrap(result) {
        var jsObj = new BoxHitTestResult();
        jsObj['result'] = result;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
exports.BoxHitTestResult = BoxHitTestResult;
class BoxHitTestEntry extends hit_test_1.HitTestEntry {
    constructor(target, localPosition) {
        super();
        this['mx_target'] = target;
        this.localPosition = localPosition;
        this.className = 'BoxHitTestEntry';
    }
}
exports.BoxHitTestEntry = BoxHitTestEntry;
class BoxParentData extends object_1.ParentData {
}
exports.BoxParentData = BoxParentData;
class ContainerBoxParentData extends BoxParentData {
}
exports.ContainerBoxParentData = ContainerBoxParentData;
var _IntrinsicDimension;
(function (_IntrinsicDimension) {
    _IntrinsicDimension["minWidth"] = "{ \"_name\": \"_IntrinsicDimension.minWidth\", \"index\": 0 }";
    _IntrinsicDimension["maxWidth"] = "{ \"_name\": \"_IntrinsicDimension.maxWidth\", \"index\": 1 }";
    _IntrinsicDimension["minHeight"] = "{ \"_name\": \"_IntrinsicDimension.minHeight\", \"index\": 2 }";
    _IntrinsicDimension["maxHeight"] = "{ \"_name\": \"_IntrinsicDimension.maxHeight\", \"index\": 3 }";
})(_IntrinsicDimension || (_IntrinsicDimension = {}));
exports._IntrinsicDimension = _IntrinsicDimension;
;
class _IntrinsicDimensionsCacheEntry extends mxflutter_base_1.MXDartClass {
    constructor(dimension, argument) {
        super();
        this.dimension = dimension;
        this.argument = argument;
        this.className = '_IntrinsicDimensionsCacheEntry';
    }
}
exports._IntrinsicDimensionsCacheEntry = _IntrinsicDimensionsCacheEntry;
class RenderBox extends object_1.RenderObject {
}
exports.RenderBox = RenderBox;
class RenderBoxContainerDefaultsMixin extends mxflutter_base_1.MXDartClass {
}
exports.RenderBoxContainerDefaultsMixin = RenderBoxContainerDefaultsMixin;
