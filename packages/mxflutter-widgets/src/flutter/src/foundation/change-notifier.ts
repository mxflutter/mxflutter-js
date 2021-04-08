// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MX Modified begin
import { MXLifecycleWidgetBase } from '@mxflutter/mxflutter-base';
// MX Modified end
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class Listenable extends MXLifecycleWidgetBase {
  static merge(listenables?: Array<any>) {
    var jsObj = new class MXListenable extends Listenable {}();
    jsObj['listenables'] = listenables;
    jsObj['constructorName'] = 'merge';
    return jsObj;
  }
}
export { Listenable };
abstract class ValueListenable extends Listenable {}
export { ValueListenable };
class ChangeNotifier extends MXLifecycleWidgetBase {
  listeners: any;
}
export { ChangeNotifier };
class _MergingListenable extends Listenable {
  children: Array<any>;
  public constructor(_children?: Array<any>) {
    super();
    this.children = _children;
    this.className = '_MergingListenable';
  }
}
export { _MergingListenable };
class ValueNotifier extends ChangeNotifier {
  value: any;
  public constructor(_value?: any) {
    super();
    this.value = _value;
    this.className = 'ValueNotifier';
  }
}
export { ValueNotifier };
