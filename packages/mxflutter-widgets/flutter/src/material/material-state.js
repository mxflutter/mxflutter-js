"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._MaterialStatePropertyAll = exports._MaterialStatePropertyWith = exports.MaterialStateProperty = exports._EnabledAndDisabledMouseCursor = exports.MaterialStateMouseCursor = exports._MaterialStateColor = exports.MaterialStateColor = exports.MaterialState = void 0;
const mouse_cursor_1 = require("../rendering/mouse-cursor");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var MaterialState;
(function (MaterialState) {
    MaterialState["hovered"] = "{ \"_name\": \"MaterialState.hovered\", \"index\": 0 }";
    MaterialState["focused"] = "{ \"_name\": \"MaterialState.focused\", \"index\": 1 }";
    MaterialState["pressed"] = "{ \"_name\": \"MaterialState.pressed\", \"index\": 2 }";
    MaterialState["dragged"] = "{ \"_name\": \"MaterialState.dragged\", \"index\": 3 }";
    MaterialState["selected"] = "{ \"_name\": \"MaterialState.selected\", \"index\": 4 }";
    MaterialState["disabled"] = "{ \"_name\": \"MaterialState.disabled\", \"index\": 5 }";
    MaterialState["error"] = "{ \"_name\": \"MaterialState.error\", \"index\": 6 }";
})(MaterialState || (MaterialState = {}));
exports.MaterialState = MaterialState;
;
class MaterialStateColor extends mx_dart_sdk_1.Color {
}
exports.MaterialStateColor = MaterialStateColor;
class _MaterialStateColor extends MaterialStateColor {
    constructor(_resolve) {
        super();
        this.resolve = _resolve;
        this.className = '_MaterialStateColor';
    }
}
exports._MaterialStateColor = _MaterialStateColor;
class MaterialStateMouseCursor extends mouse_cursor_1.MouseCursor {
    static get clickable() {
        var jsObj = new class MXMaterialStateMouseCursor extends MaterialStateMouseCursor {
        }();
        jsObj['className'] = 'MaterialStateMouseCursor';
        jsObj['constructorName'] = 'clickable';
        return jsObj;
    }
    static get textable() {
        var jsObj = new class MXMaterialStateMouseCursor extends MaterialStateMouseCursor {
        }();
        jsObj['className'] = 'MaterialStateMouseCursor';
        jsObj['constructorName'] = 'textable';
        return jsObj;
    }
}
exports.MaterialStateMouseCursor = MaterialStateMouseCursor;
class _EnabledAndDisabledMouseCursor extends MaterialStateMouseCursor {
    constructor(namedParameters = {}) {
        super();
        this.enabledCursor = namedParameters.enabledCursor;
        this.disabledCursor = namedParameters.disabledCursor;
        this.name = namedParameters.name;
        this.className = '_EnabledAndDisabledMouseCursor';
    }
}
exports._EnabledAndDisabledMouseCursor = _EnabledAndDisabledMouseCursor;
class MaterialStateProperty extends mxflutter_base_1.MXDartClass {
}
exports.MaterialStateProperty = MaterialStateProperty;
class _MaterialStatePropertyWith extends mxflutter_base_1.MXDartClass {
    constructor(_resolve) {
        super();
        this.resolve = _resolve;
        this.className = '_MaterialStatePropertyWith';
    }
}
exports._MaterialStatePropertyWith = _MaterialStatePropertyWith;
class _MaterialStatePropertyAll extends mxflutter_base_1.MXDartClass {
    constructor(value) {
        super();
        this.value = value;
        this.className = '_MaterialStatePropertyAll';
    }
}
exports._MaterialStatePropertyAll = _MaterialStatePropertyAll;
