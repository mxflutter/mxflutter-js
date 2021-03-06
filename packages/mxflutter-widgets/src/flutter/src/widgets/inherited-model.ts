// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { InheritedWidget, InheritedElement } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class InheritedModel extends InheritedWidget {}
export { InheritedModel };
class InheritedModelElement extends InheritedElement {
  public constructor(widget?: InheritedModel) {
    super();
    this['widget'] = widget;
    this.className = 'InheritedModelElement';
  }
}
export { InheritedModelElement };
