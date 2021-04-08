"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveRegionEvent = exports.TapSemanticEvent = exports.LongPressSemanticsEvent = exports.TooltipSemanticsEvent = exports.AnnounceSemanticsEvent = exports.SemanticsEvent = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SemanticsEvent extends mxflutter_base_1.MXDartClass {
}
exports.SemanticsEvent = SemanticsEvent;
class AnnounceSemanticsEvent extends SemanticsEvent {
    constructor(message, textDirection) {
        super();
        this.message = message;
        this.textDirection = textDirection;
        this.className = 'AnnounceSemanticsEvent';
    }
}
exports.AnnounceSemanticsEvent = AnnounceSemanticsEvent;
class TooltipSemanticsEvent extends SemanticsEvent {
    constructor(message) {
        super();
        this.message = message;
        this.className = 'TooltipSemanticsEvent';
    }
}
exports.TooltipSemanticsEvent = TooltipSemanticsEvent;
class LongPressSemanticsEvent extends SemanticsEvent {
}
exports.LongPressSemanticsEvent = LongPressSemanticsEvent;
class TapSemanticEvent extends SemanticsEvent {
}
exports.TapSemanticEvent = TapSemanticEvent;
class UpdateLiveRegionEvent extends SemanticsEvent {
}
exports.UpdateLiveRegionEvent = UpdateLiveRegionEvent;
