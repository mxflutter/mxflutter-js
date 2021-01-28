//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { HitTestResult, HitTestEntry } from '../gestures/hit-test';
import { Constraints, ParentData, RenderObject } from './object';
import { Size } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _DebugSize extends Size {
    constructor(source, _owner, _canBeUsedByParent) {
        super();
        this['source'] = source;
        this.owner = _owner;
        this.canBeUsedByParent = _canBeUsedByParent;
        this.className = '_DebugSize';
    }
}
export { _DebugSize };
class BoxConstraints extends Constraints {
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
export { BoxConstraints };
class BoxHitTestResult extends HitTestResult {
    static wrap(result) {
        var jsObj = new BoxHitTestResult();
        jsObj['result'] = result;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
export { BoxHitTestResult };
class BoxHitTestEntry extends HitTestEntry {
    constructor(target, localPosition) {
        super();
        this['__mx_target'] = target;
        this.localPosition = localPosition;
        this.className = 'BoxHitTestEntry';
    }
}
export { BoxHitTestEntry };
class BoxParentData extends ParentData {
}
export { BoxParentData };
class ContainerBoxParentData extends BoxParentData {
}
export { ContainerBoxParentData };
var _IntrinsicDimension;
(function (_IntrinsicDimension) {
    _IntrinsicDimension["minWidth"] = "{ \"_name\": \"_IntrinsicDimension.minWidth\", \"index\": 0 }";
    _IntrinsicDimension["maxWidth"] = "{ \"_name\": \"_IntrinsicDimension.maxWidth\", \"index\": 1 }";
    _IntrinsicDimension["minHeight"] = "{ \"_name\": \"_IntrinsicDimension.minHeight\", \"index\": 2 }";
    _IntrinsicDimension["maxHeight"] = "{ \"_name\": \"_IntrinsicDimension.maxHeight\", \"index\": 3 }";
})(_IntrinsicDimension || (_IntrinsicDimension = {}));
export { _IntrinsicDimension };
class _IntrinsicDimensionsCacheEntry extends MXDartClass {
    constructor(dimension, argument) {
        super();
        this.dimension = dimension;
        this.argument = argument;
        this.className = '_IntrinsicDimensionsCacheEntry';
    }
}
export { _IntrinsicDimensionsCacheEntry };
class RenderBox extends RenderObject {
}
export { RenderBox };
class RenderBoxContainerDefaultsMixin extends MXDartClass {
}
export { RenderBoxContainerDefaultsMixin };
