"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._MixedEdgeInsets = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.EdgeInsetsGeometry = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class EdgeInsetsGeometry extends mxflutter_base_1.MXDartClass {
    static get infinity() {
        var jsObj = new class MXEdgeInsetsGeometry extends EdgeInsetsGeometry {
        }();
        jsObj['className'] = 'EdgeInsetsGeometry';
        jsObj['constructorName'] = 'infinity';
        return jsObj;
    }
}
exports.EdgeInsetsGeometry = EdgeInsetsGeometry;
class EdgeInsets extends EdgeInsetsGeometry {
    static get zero() {
        var jsObj = new EdgeInsets();
        jsObj['className'] = 'EdgeInsets';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromLTRB(left, top, right, bottom) {
        var jsObj = new EdgeInsets();
        jsObj.left = left;
        jsObj.top = top;
        jsObj.right = right;
        jsObj.bottom = bottom;
        jsObj['constructorName'] = 'fromLTRB';
        return jsObj;
    }
    static all(value) {
        var jsObj = new EdgeInsets();
        jsObj['value'] = value;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static only(namedParameters = {}) {
        var jsObj = new EdgeInsets();
        jsObj.left = namedParameters.left;
        jsObj.top = namedParameters.top;
        jsObj.right = namedParameters.right;
        jsObj.bottom = namedParameters.bottom;
        jsObj['constructorName'] = 'only';
        return jsObj;
    }
    static symmetric(namedParameters = {}) {
        var jsObj = new EdgeInsets();
        jsObj['vertical'] = namedParameters.vertical;
        jsObj['horizontal'] = namedParameters.horizontal;
        jsObj['constructorName'] = 'symmetric';
        return jsObj;
    }
    static fromWindowPadding(padding, devicePixelRatio) {
        var jsObj = new EdgeInsets();
        jsObj['padding'] = padding;
        jsObj['devicePixelRatio'] = devicePixelRatio;
        jsObj['constructorName'] = 'fromWindowPadding';
        return jsObj;
    }
    // MX modified begin
    static fromJson(mapObj) {
        if (mapObj === null || mapObj === undefined) {
            return null;
        }
        const obj = new EdgeInsets();
        for (const p in mapObj) {
            if (mapObj.hasOwnProperty(p)) {
                let v = mapObj[p];
                obj[p] = v;
            }
        }
        return obj;
    }
}
exports.EdgeInsets = EdgeInsets;
class EdgeInsetsDirectional extends EdgeInsetsGeometry {
    static get zero() {
        var jsObj = new EdgeInsetsDirectional();
        jsObj['className'] = 'EdgeInsetsDirectional';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromSTEB(start, top, end, bottom) {
        var jsObj = new EdgeInsetsDirectional();
        jsObj.start = start;
        jsObj.top = top;
        jsObj.end = end;
        jsObj.bottom = bottom;
        jsObj['constructorName'] = 'fromSTEB';
        return jsObj;
    }
    static only(namedParameters = {}) {
        var jsObj = new EdgeInsetsDirectional();
        jsObj.start = namedParameters.start;
        jsObj.top = namedParameters.top;
        jsObj.end = namedParameters.end;
        jsObj.bottom = namedParameters.bottom;
        jsObj['constructorName'] = 'only';
        return jsObj;
    }
}
exports.EdgeInsetsDirectional = EdgeInsetsDirectional;
class _MixedEdgeInsets extends EdgeInsetsGeometry {
    static fromLRSETB(_left, _right, _start, _end, _top, _bottom) {
        var jsObj = new _MixedEdgeInsets();
        jsObj.left = _left;
        jsObj.right = _right;
        jsObj.start = _start;
        jsObj.end = _end;
        jsObj.top = _top;
        jsObj.bottom = _bottom;
        jsObj['constructorName'] = 'fromLRSETB';
        return jsObj;
    }
}
exports._MixedEdgeInsets = _MixedEdgeInsets;
