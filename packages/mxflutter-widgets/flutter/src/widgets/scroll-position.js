"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPosition = exports.ScrollPositionAlignmentPolicy = void 0;
const viewport_offset_1 = require("../rendering/viewport-offset");
var ScrollPositionAlignmentPolicy;
(function (ScrollPositionAlignmentPolicy) {
    ScrollPositionAlignmentPolicy["explicit"] = "{ \"_name\": \"ScrollPositionAlignmentPolicy.explicit\", \"index\": 0 }";
    ScrollPositionAlignmentPolicy["keepVisibleAtEnd"] = "{ \"_name\": \"ScrollPositionAlignmentPolicy.keepVisibleAtEnd\", \"index\": 1 }";
    ScrollPositionAlignmentPolicy["keepVisibleAtStart"] = "{ \"_name\": \"ScrollPositionAlignmentPolicy.keepVisibleAtStart\", \"index\": 2 }";
})(ScrollPositionAlignmentPolicy || (ScrollPositionAlignmentPolicy = {}));
exports.ScrollPositionAlignmentPolicy = ScrollPositionAlignmentPolicy;
;
class ScrollPosition extends viewport_offset_1.ViewportOffset {
}
exports.ScrollPosition = ScrollPosition;
