"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticKeepAliveClientMixin = exports.KeepAliveHandle = exports.KeepAliveNotification = exports._AutomaticKeepAliveState = exports.AutomaticKeepAlive = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const notification_listener_1 = require("./notification-listener");
const framework_1 = require("./framework");
class AutomaticKeepAlive extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'AutomaticKeepAlive';
    }
}
exports.AutomaticKeepAlive = AutomaticKeepAlive;
class _AutomaticKeepAliveState extends framework_1.State {
}
exports._AutomaticKeepAliveState = _AutomaticKeepAliveState;
class KeepAliveNotification extends notification_listener_1.Notification {
    constructor(handle) {
        super();
        this.handle = handle;
        this.className = 'KeepAliveNotification';
    }
}
exports.KeepAliveNotification = KeepAliveNotification;
class KeepAliveHandle extends change_notifier_1.ChangeNotifier {
}
exports.KeepAliveHandle = KeepAliveHandle;
class AutomaticKeepAliveClientMixin extends framework_1.State {
}
exports.AutomaticKeepAliveClientMixin = AutomaticKeepAliveClientMixin;
