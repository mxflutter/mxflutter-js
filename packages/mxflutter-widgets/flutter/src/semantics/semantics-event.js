//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SemanticsEvent extends MXDartClass {
}
export { SemanticsEvent };
class AnnounceSemanticsEvent extends SemanticsEvent {
    constructor(message, textDirection) {
        super();
        this.message = message;
        this.textDirection = textDirection;
        this.className = 'AnnounceSemanticsEvent';
    }
}
export { AnnounceSemanticsEvent };
class TooltipSemanticsEvent extends SemanticsEvent {
    constructor(message) {
        super();
        this.message = message;
        this.className = 'TooltipSemanticsEvent';
    }
}
export { TooltipSemanticsEvent };
class LongPressSemanticsEvent extends SemanticsEvent {
}
export { LongPressSemanticsEvent };
class TapSemanticEvent extends SemanticsEvent {
}
export { TapSemanticEvent };
class UpdateLiveRegionEvent extends SemanticsEvent {
}
export { UpdateLiveRegionEvent };
