//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animation, AnimationStatus } from '../animation/animation';
import { StatefulWidget$, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class StatusTransitionWidget extends StatefulWidget$ {
  animation: Animation;
}
export { StatusTransitionWidget };
class _StatusTransitionState extends State$ {}
export { _StatusTransitionState };
