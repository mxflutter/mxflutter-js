//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Tolerance extends MXDartClass {
  distance: number;
  time: number;
  velocity: number;
  public constructor(namedParameters: { distance?: number; time?: number; velocity?: number } = {}) {
    super();
    this.distance = namedParameters.distance;
    this.time = namedParameters.time;
    this.velocity = namedParameters.velocity;
    this.className = 'Tolerance';
  }
  static get defaultTolerance() {
    var jsObj = new Tolerance();
    jsObj['className'] = 'Tolerance';
    jsObj['constructorName'] = 'defaultTolerance';
    return jsObj;
  }
}
export { Tolerance };
