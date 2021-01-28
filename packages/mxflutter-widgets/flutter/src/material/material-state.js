//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
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
export { MaterialState };
class MaterialStateColor extends Color {
}
export { MaterialStateColor };
class _MaterialStateColor extends MaterialStateColor {
    constructor(_resolve) {
        super();
        this.resolve = _resolve;
        this.className = '_MaterialStateColor';
    }
}
export { _MaterialStateColor };
class MaterialStateMouseCursor extends MouseCursor {
    static get clickable() {
        var jsObj = new (class MXMaterialStateMouseCursor extends MaterialStateMouseCursor {
        })();
        jsObj['className'] = 'MaterialStateMouseCursor';
        jsObj['constructorName'] = 'clickable';
        return jsObj;
    }
    static get textable() {
        var jsObj = new (class MXMaterialStateMouseCursor extends MaterialStateMouseCursor {
        })();
        jsObj['className'] = 'MaterialStateMouseCursor';
        jsObj['constructorName'] = 'textable';
        return jsObj;
    }
}
export { MaterialStateMouseCursor };
class _EnabledAndDisabledMouseCursor extends MaterialStateMouseCursor {
    constructor(namedParameters = {}) {
        super();
        this.enabledCursor = namedParameters.enabledCursor;
        this.disabledCursor = namedParameters.disabledCursor;
        this.name = namedParameters.name;
        this.className = '_EnabledAndDisabledMouseCursor';
    }
}
export { _EnabledAndDisabledMouseCursor };
class MaterialStateProperty extends MXDartClass {
}
export { MaterialStateProperty };
class _MaterialStatePropertyWith extends MXDartClass {
    constructor(_resolve) {
        super();
        this.resolve = _resolve;
        this.className = '_MaterialStatePropertyWith';
    }
}
export { _MaterialStatePropertyWith };
class _MaterialStatePropertyAll extends MXDartClass {
    constructor(value) {
        super();
        this.value = value;
        this.className = '_MaterialStatePropertyAll';
    }
}
export { _MaterialStatePropertyAll };
