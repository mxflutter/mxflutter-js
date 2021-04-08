"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdinalSortKey = exports.SemanticsSortKey = exports.DebugSemanticsDumpOrder = exports.SemanticsConfiguration = exports.SemanticsOwner = exports._TraversalSortNode = exports._SemanticsSortGroup = exports._BoxEdge = exports.SemanticsNode = exports.SemanticsProperties = exports.SemanticsHintOverrides = exports.SemanticsData = exports.CustomSemanticsAction = exports.SemanticsTag = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const node_1 = require("../foundation/node");
const diagnostics_1 = require("../foundation/diagnostics");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SemanticsTag extends mxflutter_base_1.MXDartClass {
    constructor(name) {
        super();
        this.name = name;
        this.className = 'SemanticsTag';
    }
}
exports.SemanticsTag = SemanticsTag;
class CustomSemanticsAction extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.label = namedParameters.label;
        this.className = 'CustomSemanticsAction';
    }
    static overridingAction(namedParameters = {}) {
        var jsObj = new CustomSemanticsAction();
        jsObj.hint = namedParameters.hint;
        jsObj.action = namedParameters.action;
        jsObj['constructorName'] = 'overridingAction';
        return jsObj;
    }
}
exports.CustomSemanticsAction = CustomSemanticsAction;
class SemanticsData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.flags = namedParameters.flags;
        this.actions = namedParameters.actions;
        this.label = namedParameters.label;
        this.increasedValue = namedParameters.increasedValue;
        this.value = namedParameters.value;
        this.decreasedValue = namedParameters.decreasedValue;
        this.hint = namedParameters.hint;
        this.textDirection = namedParameters.textDirection;
        this.rect = namedParameters.rect;
        this.elevation = namedParameters.elevation;
        this.thickness = namedParameters.thickness;
        this.textSelection = namedParameters.textSelection;
        this.scrollIndex = namedParameters.scrollIndex;
        this.scrollChildCount = namedParameters.scrollChildCount;
        this.scrollPosition = namedParameters.scrollPosition;
        this.scrollExtentMax = namedParameters.scrollExtentMax;
        this.scrollExtentMin = namedParameters.scrollExtentMin;
        this.platformViewId = namedParameters.platformViewId;
        this.maxValueLength = namedParameters.maxValueLength;
        this.currentValueLength = namedParameters.currentValueLength;
        this.tags = namedParameters.tags;
        this.transform = namedParameters.transform;
        this.customSemanticsActionIds = namedParameters.customSemanticsActionIds;
        this.className = 'SemanticsData';
    }
}
exports.SemanticsData = SemanticsData;
class SemanticsHintOverrides extends diagnostics_1.DiagnosticableTree {
    constructor(namedParameters = {}) {
        super();
        this.onTapHint = namedParameters.onTapHint;
        this.onLongPressHint = namedParameters.onLongPressHint;
        this.className = 'SemanticsHintOverrides';
    }
}
exports.SemanticsHintOverrides = SemanticsHintOverrides;
class SemanticsProperties extends diagnostics_1.DiagnosticableTree {
    constructor(namedParameters = {}) {
        super();
        this.enabled = namedParameters.enabled;
        this.checked = namedParameters.checked;
        this.selected = namedParameters.selected;
        this.toggled = namedParameters.toggled;
        this.button = namedParameters.button;
        this.link = namedParameters.link;
        this.header = namedParameters.header;
        this.textField = namedParameters.textField;
        this.readOnly = namedParameters.readOnly;
        this.focusable = namedParameters.focusable;
        this.focused = namedParameters.focused;
        this.inMutuallyExclusiveGroup = namedParameters.inMutuallyExclusiveGroup;
        this.hidden = namedParameters.hidden;
        this.obscured = namedParameters.obscured;
        this.multiline = namedParameters.multiline;
        this.scopesRoute = namedParameters.scopesRoute;
        this.namesRoute = namedParameters.namesRoute;
        this.image = namedParameters.image;
        this.liveRegion = namedParameters.liveRegion;
        this.maxValueLength = namedParameters.maxValueLength;
        this.currentValueLength = namedParameters.currentValueLength;
        this.label = namedParameters.label;
        this.value = namedParameters.value;
        this.increasedValue = namedParameters.increasedValue;
        this.decreasedValue = namedParameters.decreasedValue;
        this.hint = namedParameters.hint;
        this.hintOverrides = namedParameters.hintOverrides;
        this.textDirection = namedParameters.textDirection;
        this.sortKey = namedParameters.sortKey;
        this.onTap = namedParameters.onTap;
        this.onLongPress = namedParameters.onLongPress;
        this.onScrollLeft = namedParameters.onScrollLeft;
        this.onScrollRight = namedParameters.onScrollRight;
        this.onScrollUp = namedParameters.onScrollUp;
        this.onScrollDown = namedParameters.onScrollDown;
        this.onIncrease = namedParameters.onIncrease;
        this.onDecrease = namedParameters.onDecrease;
        this.onCopy = namedParameters.onCopy;
        this.onCut = namedParameters.onCut;
        this.onPaste = namedParameters.onPaste;
        this.onMoveCursorForwardByCharacter = namedParameters.onMoveCursorForwardByCharacter;
        this.onMoveCursorBackwardByCharacter = namedParameters.onMoveCursorBackwardByCharacter;
        this.onMoveCursorForwardByWord = namedParameters.onMoveCursorForwardByWord;
        this.onMoveCursorBackwardByWord = namedParameters.onMoveCursorBackwardByWord;
        this.onSetSelection = namedParameters.onSetSelection;
        this.onDidGainAccessibilityFocus = namedParameters.onDidGainAccessibilityFocus;
        this.onDidLoseAccessibilityFocus = namedParameters.onDidLoseAccessibilityFocus;
        this.onDismiss = namedParameters.onDismiss;
        this.customSemanticsActions = namedParameters.customSemanticsActions;
        this.className = 'SemanticsProperties';
    }
}
exports.SemanticsProperties = SemanticsProperties;
class SemanticsNode extends node_1.AbstractNode {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.showOnScreen = namedParameters.showOnScreen;
        this.className = 'SemanticsNode';
    }
    static root(namedParameters = {}) {
        var jsObj = new SemanticsNode();
        jsObj.key = namedParameters.key;
        jsObj.showOnScreen = namedParameters.showOnScreen;
        jsObj['mx_owner'] = namedParameters.owner;
        jsObj['constructorName'] = 'root';
        return jsObj;
    }
}
exports.SemanticsNode = SemanticsNode;
class _BoxEdge extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.isLeadingEdge = namedParameters.isLeadingEdge;
        this.offset = namedParameters.offset;
        this.node = namedParameters.node;
        this.className = '_BoxEdge';
    }
}
exports._BoxEdge = _BoxEdge;
class _SemanticsSortGroup extends mx_dart_sdk_1.Comparable {
    constructor(namedParameters = {}) {
        super();
        this.startOffset = namedParameters.startOffset;
        this.textDirection = namedParameters.textDirection;
        this.className = '_SemanticsSortGroup';
    }
}
exports._SemanticsSortGroup = _SemanticsSortGroup;
class _TraversalSortNode extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.node = namedParameters.node;
        this.sortKey = namedParameters.sortKey;
        this.position = namedParameters.position;
        this.className = '_TraversalSortNode';
    }
}
exports._TraversalSortNode = _TraversalSortNode;
class SemanticsOwner extends change_notifier_1.ChangeNotifier {
}
exports.SemanticsOwner = SemanticsOwner;
class SemanticsConfiguration extends mxflutter_base_1.MXDartClass {
}
exports.SemanticsConfiguration = SemanticsConfiguration;
var DebugSemanticsDumpOrder;
(function (DebugSemanticsDumpOrder) {
    DebugSemanticsDumpOrder["inverseHitTest"] = "{ \"_name\": \"DebugSemanticsDumpOrder.inverseHitTest\", \"index\": 0 }";
    DebugSemanticsDumpOrder["traversalOrder"] = "{ \"_name\": \"DebugSemanticsDumpOrder.traversalOrder\", \"index\": 1 }";
})(DebugSemanticsDumpOrder || (DebugSemanticsDumpOrder = {}));
exports.DebugSemanticsDumpOrder = DebugSemanticsDumpOrder;
;
class SemanticsSortKey extends mxflutter_base_1.MXDartClass {
}
exports.SemanticsSortKey = SemanticsSortKey;
class OrdinalSortKey extends SemanticsSortKey {
    constructor(order, namedParameters = {}) {
        super();
        this.order = order;
        this.name = namedParameters.name;
        this.className = 'OrdinalSortKey';
    }
}
exports.OrdinalSortKey = OrdinalSortKey;
