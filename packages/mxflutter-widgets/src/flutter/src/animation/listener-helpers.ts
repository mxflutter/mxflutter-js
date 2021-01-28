//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { AnimationStatus } from './animation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class AnimationLazyListenerMixin extends MXDartClass {
  listenerCounter: number;
}
export { AnimationLazyListenerMixin };
abstract class AnimationEagerListenerMixin extends MXDartClass {}
export { AnimationEagerListenerMixin };
abstract class AnimationLocalListenersMixin extends MXDartClass {
  listeners: any;
}
export { AnimationLocalListenersMixin };
abstract class AnimationLocalStatusListenersMixin extends MXDartClass {
  statusListeners: any;
}
export { AnimationLocalStatusListenersMixin };
