//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Notification, LayoutChangedNotification } from './notification-listener';
class ViewportNotificationMixin extends Notification {
}
export { ViewportNotificationMixin };
class ScrollNotification extends LayoutChangedNotification {
}
export { ScrollNotification };
class ScrollStartNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.dragDetails = namedParameters.dragDetails;
        this.className = 'ScrollStartNotification';
    }
}
export { ScrollStartNotification };
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
export { ScrollUpdateNotification };
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
export { OverscrollNotification };
class ScrollEndNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.dragDetails = namedParameters.dragDetails;
        this.className = 'ScrollEndNotification';
    }
}
export { ScrollEndNotification };
class UserScrollNotification extends ScrollNotification {
    constructor(namedParameters = {}) {
        super();
        this.metrics = namedParameters.metrics;
        this.context = namedParameters.context;
        this.direction = namedParameters.direction;
        this.className = 'UserScrollNotification';
    }
}
export { UserScrollNotification };
