//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { InheritedWidget, InheritedElement } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class InheritedNotifier extends InheritedWidget {
  notifier: any;
}
export { InheritedNotifier };
class _InheritedNotifierElement extends InheritedElement {
  dirty: boolean;
  public constructor(widget?: InheritedNotifier) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_InheritedNotifierElement';
  }
}
export { _InheritedNotifierElement };
