//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Notification } from './notification-listener';
import { ChangeNotifier } from '../foundation/change-notifier';
import { StatefulWidget$, State$ } from './framework';
class AutomaticKeepAlive extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'AutomaticKeepAlive';
    }
}
export { AutomaticKeepAlive };
class _AutomaticKeepAliveState extends State$ {
}
export { _AutomaticKeepAliveState };
class KeepAliveNotification extends Notification {
    constructor(handle) {
        super();
        this.handle = handle;
        this.className = 'KeepAliveNotification';
    }
}
export { KeepAliveNotification };
class KeepAliveHandle extends ChangeNotifier {
}
export { KeepAliveHandle };
class AutomaticKeepAliveClientMixin extends State$ {
}
export { AutomaticKeepAliveClientMixin };
