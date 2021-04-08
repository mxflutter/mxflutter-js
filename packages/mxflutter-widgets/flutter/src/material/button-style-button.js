"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderInputPadding = exports._InputPadding = exports._MouseCursor = exports._ButtonStyleState = exports.ButtonStyleButton = void 0;
const shifted_box_1 = require("../rendering/shifted-box");
const material_state_1 = require("./material-state");
const framework_1 = require("../widgets/framework");
class ButtonStyleButton extends framework_1.StatefulWidget {
}
exports.ButtonStyleButton = ButtonStyleButton;
class _ButtonStyleState extends framework_1.State {
}
exports._ButtonStyleState = _ButtonStyleState;
class _MouseCursor extends material_state_1.MaterialStateMouseCursor {
    constructor(resolveCallback) {
        super();
        this.resolveCallback = resolveCallback;
        this.className = '_MouseCursor';
    }
}
exports._MouseCursor = _MouseCursor;
class _InputPadding extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.minSize = namedParameters.minSize;
        this.className = '_InputPadding';
    }
}
exports._InputPadding = _InputPadding;
class _RenderInputPadding extends shifted_box_1.RenderShiftedBox {
    constructor(_minSize, child) {
        super();
        this.minSize = _minSize;
        this['child'] = child;
        this.className = '_RenderInputPadding';
    }
}
exports._RenderInputPadding = _RenderInputPadding;
