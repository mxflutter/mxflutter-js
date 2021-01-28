//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { ScrollController } from './scroll-controller';
import { InheritedWidget, Widget, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PrimaryScrollController extends InheritedWidget {
  controller: ScrollController;
  public constructor(namedParameters: { key?: Key; controller?: ScrollController; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.child = namedParameters.child;
    this.className = 'PrimaryScrollController';
  }
  static none(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    var jsObj = new PrimaryScrollController();
    jsObj.key = namedParameters.key;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'none';
    return jsObj;
  }
}
export { PrimaryScrollController };
