//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ChangeNotifier } from '../foundation/change-notifier';
import { Comparable } from '../../../mx-dart-sdk';
import { AbstractNode } from '../foundation/node';
import { DiagnosticableTree, } from '../foundation/diagnostics';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SemanticsTag extends MXDartClass {
    constructor(name) {
        super();
        this.name = name;
        this.className = 'SemanticsTag';
    }
}
export { SemanticsTag };
class CustomSemanticsAction extends MXDartClass {
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
export { CustomSemanticsAction };
class SemanticsData extends MXDartClass {
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
export { SemanticsData };
class SemanticsHintOverrides extends DiagnosticableTree {
    constructor(namedParameters = {}) {
        super();
        this.onTapHint = namedParameters.onTapHint;
        this.onLongPressHint = namedParameters.onLongPressHint;
        this.className = 'SemanticsHintOverrides';
    }
}
export { SemanticsHintOverrides };
class SemanticsProperties extends DiagnosticableTree {
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
export { SemanticsProperties };
class SemanticsNode extends AbstractNode {
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
        jsObj['__mx_owner'] = namedParameters.owner;
        jsObj['constructorName'] = 'root';
        return jsObj;
    }
}
export { SemanticsNode };
class _BoxEdge extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.isLeadingEdge = namedParameters.isLeadingEdge;
        this.offset = namedParameters.offset;
        this.node = namedParameters.node;
        this.className = '_BoxEdge';
    }
}
export { _BoxEdge };
class _SemanticsSortGroup extends Comparable {
    constructor(namedParameters = {}) {
        super();
        this.startOffset = namedParameters.startOffset;
        this.textDirection = namedParameters.textDirection;
        this.className = '_SemanticsSortGroup';
    }
}
export { _SemanticsSortGroup };
class _TraversalSortNode extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.node = namedParameters.node;
        this.sortKey = namedParameters.sortKey;
        this.position = namedParameters.position;
        this.className = '_TraversalSortNode';
    }
}
export { _TraversalSortNode };
class SemanticsOwner extends ChangeNotifier {
}
export { SemanticsOwner };
class SemanticsConfiguration extends MXDartClass {
}
export { SemanticsConfiguration };
var DebugSemanticsDumpOrder;
(function (DebugSemanticsDumpOrder) {
    DebugSemanticsDumpOrder["inverseHitTest"] = "{ \"_name\": \"DebugSemanticsDumpOrder.inverseHitTest\", \"index\": 0 }";
    DebugSemanticsDumpOrder["traversalOrder"] = "{ \"_name\": \"DebugSemanticsDumpOrder.traversalOrder\", \"index\": 1 }";
})(DebugSemanticsDumpOrder || (DebugSemanticsDumpOrder = {}));
export { DebugSemanticsDumpOrder };
class SemanticsSortKey extends MXDartClass {
}
export { SemanticsSortKey };
class OrdinalSortKey extends SemanticsSortKey {
    constructor(order, namedParameters = {}) {
        super();
        this.order = order;
        this.name = namedParameters.name;
        this.className = 'OrdinalSortKey';
    }
}
export { OrdinalSortKey };
