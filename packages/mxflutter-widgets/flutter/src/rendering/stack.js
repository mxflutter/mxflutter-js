//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class RelativeRect extends MXDartClass {
    static get fill() {
        var jsObj = new RelativeRect();
        jsObj['className'] = 'RelativeRect';
        jsObj['constructorName'] = 'fill';
        return jsObj;
    }
    static fromSize(rect, container) {
        var jsObj = new RelativeRect();
        jsObj['rect'] = rect;
        jsObj['container'] = container;
        jsObj['constructorName'] = 'fromSize';
        return jsObj;
    }
    static fromRect(rect, container) {
        var jsObj = new RelativeRect();
        jsObj['rect'] = rect;
        jsObj['container'] = container;
        jsObj['constructorName'] = 'fromRect';
        return jsObj;
    }
    static fromLTRB(left, top, right, bottom) {
        var jsObj = new RelativeRect();
        jsObj.left = left;
        jsObj.top = top;
        jsObj.right = right;
        jsObj.bottom = bottom;
        jsObj['constructorName'] = 'fromLTRB';
        return jsObj;
    }
}
export { RelativeRect };
class StackParentData extends ContainerBoxParentData {
}
export { StackParentData };
var StackFit;
(function (StackFit) {
    StackFit["loose"] = "{ \"_name\": \"StackFit.loose\", \"index\": 0 }";
    StackFit["expand"] = "{ \"_name\": \"StackFit.expand\", \"index\": 1 }";
    StackFit["passthrough"] = "{ \"_name\": \"StackFit.passthrough\", \"index\": 2 }";
})(StackFit || (StackFit = {}));
export { StackFit };
var Overflow;
(function (Overflow) {
    Overflow["visible"] = "{ \"_name\": \"Overflow.visible\", \"index\": 0 }";
    Overflow["clip"] = "{ \"_name\": \"Overflow.clip\", \"index\": 1 }";
})(Overflow || (Overflow = {}));
export { Overflow };
class RenderStack extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.fit = namedParameters.fit;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderStack';
    }
}
export { RenderStack };
class RenderIndexedStack extends RenderStack {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.index = namedParameters.index;
        this.className = 'RenderIndexedStack';
    }
}
export { RenderIndexedStack };
