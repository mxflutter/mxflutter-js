//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ViewportOffset } from '../rendering/viewport-offset';
var ScrollPositionAlignmentPolicy;
(function (ScrollPositionAlignmentPolicy) {
    ScrollPositionAlignmentPolicy["explicit"] = "{ \"_name\": \"ScrollPositionAlignmentPolicy.explicit\", \"index\": 0 }";
    ScrollPositionAlignmentPolicy["keepVisibleAtEnd"] = "{ \"_name\": \"ScrollPositionAlignmentPolicy.keepVisibleAtEnd\", \"index\": 1 }";
    ScrollPositionAlignmentPolicy["keepVisibleAtStart"] = "{ \"_name\": \"ScrollPositionAlignmentPolicy.keepVisibleAtStart\", \"index\": 2 }";
})(ScrollPositionAlignmentPolicy || (ScrollPositionAlignmentPolicy = {}));
export { ScrollPositionAlignmentPolicy };
class ScrollPosition extends ViewportOffset {
}
export { ScrollPosition };
