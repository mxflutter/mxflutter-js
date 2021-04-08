// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Listenable, ChangeNotifier } from '../foundation/change-notifier';
import { Notification } from './notification-listener';
import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AutomaticKeepAlive extends StatefulWidget {
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'AutomaticKeepAlive';
  }
}
export { AutomaticKeepAlive };
class _AutomaticKeepAliveState extends State {
  handles: Map<any, any>;
  child: MXWidget;
  keepingAlive: boolean;
}
export { _AutomaticKeepAliveState };
class KeepAliveNotification extends Notification {
  handle: Listenable;
  public constructor(handle?: Listenable) {
    super();
    this.handle = handle;
    this.className = 'KeepAliveNotification';
  }
}
export { KeepAliveNotification };
class KeepAliveHandle extends ChangeNotifier {}
export { KeepAliveHandle };
abstract class AutomaticKeepAliveClientMixin extends State {
  keepAliveHandle: KeepAliveHandle;
}
export { AutomaticKeepAliveClientMixin };
