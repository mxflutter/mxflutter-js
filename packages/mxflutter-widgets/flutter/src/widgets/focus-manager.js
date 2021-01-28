//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class FocusAttachment extends MXDartClass {
}
export { FocusAttachment };
var UnfocusDisposition;
(function (UnfocusDisposition) {
    UnfocusDisposition["scope"] = "{ \"_name\": \"UnfocusDisposition.scope\", \"index\": 0 }";
    UnfocusDisposition["previouslyFocusedChild"] = "{ \"_name\": \"UnfocusDisposition.previouslyFocusedChild\", \"index\": 1 }";
})(UnfocusDisposition || (UnfocusDisposition = {}));
export { UnfocusDisposition };
class FocusNode extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.debugLabel = namedParameters.debugLabel;
        this.onKey = namedParameters.onKey;
        this.skipTraversal = namedParameters.skipTraversal;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.descendantsAreFocusable = namedParameters.descendantsAreFocusable;
        this.className = 'FocusNode';
    }
}
export { FocusNode };
class FocusScopeNode extends FocusNode {
    constructor(namedParameters = {}) {
        super();
        this.debugLabel = namedParameters.debugLabel;
        this.onKey = namedParameters.onKey;
        this.skipTraversal = namedParameters.skipTraversal;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.className = 'FocusScopeNode';
    }
}
export { FocusScopeNode };
var FocusHighlightMode;
(function (FocusHighlightMode) {
    FocusHighlightMode["touch"] = "{ \"_name\": \"FocusHighlightMode.touch\", \"index\": 0 }";
    FocusHighlightMode["traditional"] = "{ \"_name\": \"FocusHighlightMode.traditional\", \"index\": 1 }";
})(FocusHighlightMode || (FocusHighlightMode = {}));
export { FocusHighlightMode };
var FocusHighlightStrategy;
(function (FocusHighlightStrategy) {
    FocusHighlightStrategy["automatic"] = "{ \"_name\": \"FocusHighlightStrategy.automatic\", \"index\": 0 }";
    FocusHighlightStrategy["alwaysTouch"] = "{ \"_name\": \"FocusHighlightStrategy.alwaysTouch\", \"index\": 1 }";
    FocusHighlightStrategy["alwaysTraditional"] = "{ \"_name\": \"FocusHighlightStrategy.alwaysTraditional\", \"index\": 2 }";
})(FocusHighlightStrategy || (FocusHighlightStrategy = {}));
export { FocusHighlightStrategy };
class FocusManager extends MXDartClass {
}
export { FocusManager };
