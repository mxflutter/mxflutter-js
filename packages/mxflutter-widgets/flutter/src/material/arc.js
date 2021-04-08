"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRectCenterArcTween = exports.MaterialRectArcTween = exports._Diagonal = exports._CornerId = exports.MaterialPointArcTween = void 0;
const tween_1 = require("../animation/tween");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MaterialPointArcTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['mx_begin'] = namedParameters.begin;
        this['mx_end'] = namedParameters.end;
        this.className = 'MaterialPointArcTween';
    }
}
exports.MaterialPointArcTween = MaterialPointArcTween;
var _CornerId;
(function (_CornerId) {
    _CornerId["topLeft"] = "{ \"_name\": \"_CornerId.topLeft\", \"index\": 0 }";
    _CornerId["topRight"] = "{ \"_name\": \"_CornerId.topRight\", \"index\": 1 }";
    _CornerId["bottomLeft"] = "{ \"_name\": \"_CornerId.bottomLeft\", \"index\": 2 }";
    _CornerId["bottomRight"] = "{ \"_name\": \"_CornerId.bottomRight\", \"index\": 3 }";
})(_CornerId || (_CornerId = {}));
exports._CornerId = _CornerId;
;
class _Diagonal extends mxflutter_base_1.MXDartClass {
    constructor(beginId, endId) {
        super();
        this.beginId = beginId;
        this.endId = endId;
        this.className = '_Diagonal';
    }
}
exports._Diagonal = _Diagonal;
class MaterialRectArcTween extends tween_1.RectTween {
    constructor(namedParameters = {}) {
        super();
        this['mx_begin'] = namedParameters.begin;
        this['mx_end'] = namedParameters.end;
        this.className = 'MaterialRectArcTween';
    }
}
exports.MaterialRectArcTween = MaterialRectArcTween;
class MaterialRectCenterArcTween extends tween_1.RectTween {
    constructor(namedParameters = {}) {
        super();
        this['mx_begin'] = namedParameters.begin;
        this['mx_end'] = namedParameters.end;
        this.className = 'MaterialRectCenterArcTween';
    }
}
exports.MaterialRectCenterArcTween = MaterialRectCenterArcTween;
