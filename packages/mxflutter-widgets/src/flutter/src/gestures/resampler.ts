// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Offset } from '../../../mx-dart-sdk';
import { PointerEvent } from './events';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PointerEventResampler extends MXDartClass {
  queuedEvents: any;
  last: PointerEvent;
  next: PointerEvent;
  position: Offset;
  isTracked: boolean;
  isDown: boolean;
  pointerIdentifier: number;
}
export { PointerEventResampler };
