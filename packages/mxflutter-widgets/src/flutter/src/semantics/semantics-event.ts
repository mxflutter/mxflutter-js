//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextDirection } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class SemanticsEvent extends MXDartClass {
  type: string;
}
export { SemanticsEvent };
class AnnounceSemanticsEvent extends SemanticsEvent {
  message: string;
  textDirection: TextDirection;
  public constructor(message?: string, textDirection?: TextDirection) {
    super();
    this.message = message;
    this.textDirection = textDirection;
    this.className = 'AnnounceSemanticsEvent';
  }
}
export { AnnounceSemanticsEvent };
class TooltipSemanticsEvent extends SemanticsEvent {
  message: string;
  public constructor(message?: string) {
    super();
    this.message = message;
    this.className = 'TooltipSemanticsEvent';
  }
}
export { TooltipSemanticsEvent };
class LongPressSemanticsEvent extends SemanticsEvent {}
export { LongPressSemanticsEvent };
class TapSemanticEvent extends SemanticsEvent {}
export { TapSemanticEvent };
class UpdateLiveRegionEvent extends SemanticsEvent {}
export { UpdateLiveRegionEvent };
