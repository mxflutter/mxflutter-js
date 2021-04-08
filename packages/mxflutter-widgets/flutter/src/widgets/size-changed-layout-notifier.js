"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSizeChangedWithCallback = exports.SizeChangedLayoutNotifier = exports.SizeChangedLayoutNotification = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
const notification_listener_1 = require("./notification-listener");
class SizeChangedLayoutNotification extends notification_listener_1.LayoutChangedNotification {
}
exports.SizeChangedLayoutNotification = SizeChangedLayoutNotification;
class SizeChangedLayoutNotifier extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'SizeChangedLayoutNotifier';
    }
}
exports.SizeChangedLayoutNotifier = SizeChangedLayoutNotifier;
class _RenderSizeChangedWithCallback extends proxy_box_1.RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.onLayoutChangedCallback = namedParameters.onLayoutChangedCallback;
        this.className = '_RenderSizeChangedWithCallback';
    }
}
exports._RenderSizeChangedWithCallback = _RenderSizeChangedWithCallback;
