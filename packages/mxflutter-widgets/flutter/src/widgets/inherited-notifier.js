//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget, InheritedElement } from './framework';
class InheritedNotifier extends InheritedWidget {
}
export { InheritedNotifier };
class _InheritedNotifierElement extends InheritedElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_InheritedNotifierElement';
    }
}
export { _InheritedNotifierElement };
