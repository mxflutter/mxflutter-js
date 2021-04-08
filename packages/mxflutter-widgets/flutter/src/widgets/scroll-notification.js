"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScrollNotification = exports.ScrollEndNotification = exports.OverscrollNotification = exports.ScrollUpdateNotification = exports.ScrollStartNotification = exports.ScrollNotification = exports.ViewportNotificationMixin = void 0;
const notification_listener_1 = require("./notification-listener");
class ViewportNotificationMixin extends notification_listener_1.Notification {
}
exports.ViewportNotificationMixin = ViewportNotificationMixin;
class ScrollNotification extends notification_listener_1.LayoutChangedNotification {
}
exports.ScrollNotification = ScrollNotification;
class ScrollStartNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.dragDetails = namedParameters.dragDetails;
        this.className = 'ScrollStartNotification';
    }
}
exports.ScrollStartNotification = ScrollStartNotification;
class ScrollUpdateNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.dragDetails = namedParameters.dragDetails;
        this.scrollDelta = namedParameters.scrollDelta;
        this.className = 'ScrollUpdateNotification';
    }
}
exports.ScrollUpdateNotification = ScrollUpdateNotification;
class OverscrollNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.dragDetails = namedParameters.dragDetails;
        this.overscroll = namedParameters.overscroll;
        this.velocity = namedParameters.velocity;
        this.className = 'OverscrollNotification';
    }
}
exports.OverscrollNotification = OverscrollNotification;
class ScrollEndNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.dragDetails = namedParameters.dragDetails;
        this.className = 'ScrollEndNotification';
    }
}
exports.ScrollEndNotification = ScrollEndNotification;
class UserScrollNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.direction = namedParameters.direction;
        this.className = 'UserScrollNotification';
    }
}
exports.UserScrollNotification = UserScrollNotification;
