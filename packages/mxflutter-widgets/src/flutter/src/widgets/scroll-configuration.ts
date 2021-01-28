//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { AxisDirection } from '../painting/basic-types';
import { BuildContext$, Widget, InheritedWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ScrollBehavior extends MXDartClass {}
export { ScrollBehavior };
class ScrollConfiguration extends InheritedWidget {
  behavior: ScrollBehavior;
  public constructor(namedParameters: { key?: Key; behavior?: ScrollBehavior; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.behavior = namedParameters.behavior;
    this.child = namedParameters.child;
    this.className = 'ScrollConfiguration';
  }
}
export { ScrollConfiguration };
