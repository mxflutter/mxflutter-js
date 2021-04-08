"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxisDirection = exports.VerticalDirection = exports.Axis = exports.RenderComparison = void 0;
var RenderComparison;
(function (RenderComparison) {
    RenderComparison["identical"] = "{ \"_name\": \"RenderComparison.identical\", \"index\": 0 }";
    RenderComparison["metadata"] = "{ \"_name\": \"RenderComparison.metadata\", \"index\": 1 }";
    RenderComparison["paint"] = "{ \"_name\": \"RenderComparison.paint\", \"index\": 2 }";
    RenderComparison["layout"] = "{ \"_name\": \"RenderComparison.layout\", \"index\": 3 }";
})(RenderComparison || (RenderComparison = {}));
exports.RenderComparison = RenderComparison;
;
var Axis;
(function (Axis) {
    Axis["horizontal"] = "{ \"_name\": \"Axis.horizontal\", \"index\": 0 }";
    Axis["vertical"] = "{ \"_name\": \"Axis.vertical\", \"index\": 1 }";
})(Axis || (Axis = {}));
exports.Axis = Axis;
;
var VerticalDirection;
(function (VerticalDirection) {
    VerticalDirection["up"] = "{ \"_name\": \"VerticalDirection.up\", \"index\": 0 }";
    VerticalDirection["down"] = "{ \"_name\": \"VerticalDirection.down\", \"index\": 1 }";
})(VerticalDirection || (VerticalDirection = {}));
exports.VerticalDirection = VerticalDirection;
;
var AxisDirection;
(function (AxisDirection) {
    AxisDirection["up"] = "{ \"_name\": \"AxisDirection.up\", \"index\": 0 }";
    AxisDirection["right"] = "{ \"_name\": \"AxisDirection.right\", \"index\": 1 }";
    AxisDirection["down"] = "{ \"_name\": \"AxisDirection.down\", \"index\": 2 }";
    AxisDirection["left"] = "{ \"_name\": \"AxisDirection.left\", \"index\": 3 }";
})(AxisDirection || (AxisDirection = {}));
exports.AxisDirection = AxisDirection;
;
