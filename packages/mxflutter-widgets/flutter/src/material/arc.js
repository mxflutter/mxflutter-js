//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Tween, RectTween } from '../animation/tween';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class MaterialPointArcTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['__mx_begin'] = namedParameters.begin;
        this['__mx_end'] = namedParameters.end;
        this.className = 'MaterialPointArcTween';
    }
}
export { MaterialPointArcTween };
var _CornerId;
(function (_CornerId) {
    _CornerId["topLeft"] = "{ \"_name\": \"_CornerId.topLeft\", \"index\": 0 }";
    _CornerId["topRight"] = "{ \"_name\": \"_CornerId.topRight\", \"index\": 1 }";
    _CornerId["bottomLeft"] = "{ \"_name\": \"_CornerId.bottomLeft\", \"index\": 2 }";
    _CornerId["bottomRight"] = "{ \"_name\": \"_CornerId.bottomRight\", \"index\": 3 }";
})(_CornerId || (_CornerId = {}));
export { _CornerId };
class _Diagonal extends MXDartClass {
    constructor(beginId, endId) {
        super();
        this.beginId = beginId;
        this.endId = endId;
        this.className = '_Diagonal';
    }
}
export { _Diagonal };
class MaterialRectArcTween extends RectTween {
    constructor(namedParameters = {}) {
        super();
        this['__mx_begin'] = namedParameters.begin;
        this['__mx_end'] = namedParameters.end;
        this.className = 'MaterialRectArcTween';
    }
}
export { MaterialRectArcTween };
class MaterialRectCenterArcTween extends RectTween {
    constructor(namedParameters = {}) {
        super();
        this['__mx_begin'] = namedParameters.begin;
        this['__mx_end'] = namedParameters.end;
        this.className = 'MaterialRectCenterArcTween';
    }
}
export { MaterialRectCenterArcTween };
