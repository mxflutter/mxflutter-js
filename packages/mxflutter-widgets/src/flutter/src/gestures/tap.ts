//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { GestureDisposition } from './arena';
import { Matrix4 } from '../../../vector-math-64';
import { PointerDownEvent, PointerUpEvent, PointerEvent, PointerCancelEvent } from './events';
import { PrimaryPointerGestureRecognizer } from './recognizer';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TapDownDetails extends MXDartClass {
  globalPosition: Offset;
  kind: PointerDeviceKind;
  localPosition: Offset;
  public constructor(
    namedParameters: { globalPosition?: Offset; localPosition?: Offset; kind?: PointerDeviceKind } = {},
  ) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.kind = namedParameters.kind;
    this.className = 'TapDownDetails';
  }
}
export { TapDownDetails };
class TapUpDetails extends MXDartClass {
  globalPosition: Offset;
  localPosition: Offset;
  public constructor(namedParameters: { globalPosition?: Offset; localPosition?: Offset } = {}) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.className = 'TapUpDetails';
  }
}
export { TapUpDetails };
abstract class BaseTapGestureRecognizer extends PrimaryPointerGestureRecognizer {
  sentTapDown: boolean;
  wonArenaForPrimaryPointer: boolean;
  down: PointerDownEvent;
  up: PointerUpEvent;
}
export { BaseTapGestureRecognizer };
class TapGestureRecognizer extends BaseTapGestureRecognizer {
  onTapDown: any;
  onTapUp: any;
  onTap: any;
  onTapCancel: any;
  onSecondaryTap: any;
  onSecondaryTapDown: any;
  onSecondaryTapUp: any;
  onSecondaryTapCancel: any;
  public constructor(namedParameters: { debugOwner?: any } = {}) {
    super();
    this.debugOwner = namedParameters.debugOwner;
    this.className = 'TapGestureRecognizer';
  }
}
export { TapGestureRecognizer };
