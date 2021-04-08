"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderCupertinoSwitch = exports._CupertinoSwitchRenderObjectWidget = exports._CupertinoSwitchState = exports.CupertinoSwitch = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("../widgets/framework");
class CupertinoSwitch extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.onChanged = namedParameters.onChanged;
        this.activeColor = namedParameters.activeColor;
        this.trackColor = namedParameters.trackColor;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = 'CupertinoSwitch';
    }
}
exports.CupertinoSwitch = CupertinoSwitch;
class _CupertinoSwitchState extends framework_1.State {
}
exports._CupertinoSwitchState = _CupertinoSwitchState;
class _CupertinoSwitchRenderObjectWidget extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.activeColor = namedParameters.activeColor;
        this.trackColor = namedParameters.trackColor;
        this.onChanged = namedParameters.onChanged;
        this.textDirection = namedParameters.textDirection;
        this.state = namedParameters.state;
        this.className = '_CupertinoSwitchRenderObjectWidget';
    }
}
exports._CupertinoSwitchRenderObjectWidget = _CupertinoSwitchRenderObjectWidget;
class _RenderCupertinoSwitch extends proxy_box_1.RenderConstrainedBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.activeColor = namedParameters.activeColor;
        this.trackColor = namedParameters.trackColor;
        this.onChanged = namedParameters.onChanged;
        this.textDirection = namedParameters.textDirection;
        this.state = namedParameters.state;
        this.className = '_RenderCupertinoSwitch';
    }
}
exports._RenderCupertinoSwitch = _RenderCupertinoSwitch;
