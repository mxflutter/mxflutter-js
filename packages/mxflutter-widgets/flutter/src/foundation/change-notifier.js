//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXLifecycleWidgetBase } from '@mxflutter/mxflutter-base';
class Listenable extends MXLifecycleWidgetBase {
    static merge(listenables) {
        var jsObj = new (class MXListenable extends Listenable {
        })();
        jsObj['listenables'] = listenables;
        jsObj['constructorName'] = 'merge';
        return jsObj;
    }
}
export { Listenable };
class ValueListenable extends Listenable {
}
export { ValueListenable };
class ChangeNotifier extends MXLifecycleWidgetBase {
}
export { ChangeNotifier };
class _MergingListenable extends Listenable {
    constructor(_children) {
        super();
        this.children = _children;
        this.className = '_MergingListenable';
    }
}
export { _MergingListenable };
class ValueNotifier extends ChangeNotifier {
    constructor(_value) {
        super();
        this.value = _value;
        this.className = 'ValueNotifier';
    }
}
export { ValueNotifier };
