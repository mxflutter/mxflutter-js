//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PointerDownEvent, PointerEvent } from './events';
import { PointerDeviceKind } from '../../../mx-dart-sdk';
import { OneSequenceGestureRecognizer } from './recognizer';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class EagerGestureRecognizer extends OneSequenceGestureRecognizer {
  public constructor(namedParameters: { kind?: PointerDeviceKind } = {}) {
    super();
    this['kind'] = namedParameters.kind;
    this.className = 'EagerGestureRecognizer';
  }
}
export { EagerGestureRecognizer };
