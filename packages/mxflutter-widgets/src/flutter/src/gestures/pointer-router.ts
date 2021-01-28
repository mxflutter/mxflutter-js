//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PointerEvent } from './events';
import { Matrix4 } from '../../../vector-math-64';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PointerRouter extends MXDartClass {
  routeMap: Map<any, any>;
  globalRoutes: Map<any, any>;
}
export { PointerRouter };
