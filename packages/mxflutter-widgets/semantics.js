"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveRegionEvent = exports.TapSemanticEvent = exports.LongPressSemanticsEvent = exports.TooltipSemanticsEvent = exports.AnnounceSemanticsEvent = exports.SemanticsEvent = exports.SemanticsService = exports.SemanticsAction = exports.OrdinalSortKey = exports.SemanticsSortKey = exports.DebugSemanticsDumpOrder = exports.SemanticsConfiguration = exports.SemanticsOwner = exports.SemanticsNode = exports.SemanticsProperties = exports.SemanticsHintOverrides = exports.SemanticsData = exports.CustomSemanticsAction = exports.SemanticsTag = exports.AccessibilityFeatures = exports.SemanticsBinding = void 0;
const semantics_event_1 = require("./flutter/src/semantics/semantics-event");
Object.defineProperty(exports, "SemanticsEvent", { enumerable: true, get: function () { return semantics_event_1.SemanticsEvent; } });
Object.defineProperty(exports, "AnnounceSemanticsEvent", { enumerable: true, get: function () { return semantics_event_1.AnnounceSemanticsEvent; } });
Object.defineProperty(exports, "TooltipSemanticsEvent", { enumerable: true, get: function () { return semantics_event_1.TooltipSemanticsEvent; } });
Object.defineProperty(exports, "LongPressSemanticsEvent", { enumerable: true, get: function () { return semantics_event_1.LongPressSemanticsEvent; } });
Object.defineProperty(exports, "TapSemanticEvent", { enumerable: true, get: function () { return semantics_event_1.TapSemanticEvent; } });
Object.defineProperty(exports, "UpdateLiveRegionEvent", { enumerable: true, get: function () { return semantics_event_1.UpdateLiveRegionEvent; } });
const semantics_service_1 = require("./flutter/src/semantics/semantics-service");
Object.defineProperty(exports, "SemanticsService", { enumerable: true, get: function () { return semantics_service_1.SemanticsService; } });
const semantics_1 = require("./flutter/src/semantics/semantics");
Object.defineProperty(exports, "SemanticsTag", { enumerable: true, get: function () { return semantics_1.SemanticsTag; } });
Object.defineProperty(exports, "CustomSemanticsAction", { enumerable: true, get: function () { return semantics_1.CustomSemanticsAction; } });
Object.defineProperty(exports, "SemanticsData", { enumerable: true, get: function () { return semantics_1.SemanticsData; } });
Object.defineProperty(exports, "SemanticsHintOverrides", { enumerable: true, get: function () { return semantics_1.SemanticsHintOverrides; } });
Object.defineProperty(exports, "SemanticsProperties", { enumerable: true, get: function () { return semantics_1.SemanticsProperties; } });
Object.defineProperty(exports, "SemanticsNode", { enumerable: true, get: function () { return semantics_1.SemanticsNode; } });
Object.defineProperty(exports, "SemanticsOwner", { enumerable: true, get: function () { return semantics_1.SemanticsOwner; } });
Object.defineProperty(exports, "SemanticsConfiguration", { enumerable: true, get: function () { return semantics_1.SemanticsConfiguration; } });
Object.defineProperty(exports, "DebugSemanticsDumpOrder", { enumerable: true, get: function () { return semantics_1.DebugSemanticsDumpOrder; } });
Object.defineProperty(exports, "SemanticsSortKey", { enumerable: true, get: function () { return semantics_1.SemanticsSortKey; } });
Object.defineProperty(exports, "OrdinalSortKey", { enumerable: true, get: function () { return semantics_1.OrdinalSortKey; } });
const mx_dart_sdk_1 = require("./mx-dart-sdk");
Object.defineProperty(exports, "AccessibilityFeatures", { enumerable: true, get: function () { return mx_dart_sdk_1.AccessibilityFeatures; } });
Object.defineProperty(exports, "SemanticsAction", { enumerable: true, get: function () { return mx_dart_sdk_1.SemanticsAction; } });
const binding_1 = require("./flutter/src/semantics/binding");
Object.defineProperty(exports, "SemanticsBinding", { enumerable: true, get: function () { return binding_1.SemanticsBinding; } });
