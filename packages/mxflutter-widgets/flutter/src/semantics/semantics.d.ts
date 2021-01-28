import { ChangeNotifier } from '../foundation/change-notifier';
import { Comparable } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { AbstractNode } from '../foundation/node';
import { DiagnosticableTree } from '../foundation/diagnostics';
import { Matrix4 } from '../../../vector-math-64';
import { TextSelection } from '../services/text-editing';
import { SemanticsAction, TextDirection, Rect } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class SemanticsTag extends MXDartClass {
    name: string;
    constructor(name?: string);
}
export { SemanticsTag };
declare class CustomSemanticsAction extends MXDartClass {
    label: string;
    hint: string;
    action: SemanticsAction;
    constructor(namedParameters?: {
        label?: string;
    });
    static overridingAction(namedParameters?: {
        hint?: string;
        action?: SemanticsAction;
    }): CustomSemanticsAction;
}
export { CustomSemanticsAction };
declare class SemanticsData extends MXDartClass {
    flags: number;
    actions: number;
    label: string;
    value: string;
    increasedValue: string;
    decreasedValue: string;
    hint: string;
    textDirection: TextDirection;
    textSelection: TextSelection;
    scrollChildCount: number;
    scrollIndex: number;
    scrollPosition: number;
    scrollExtentMax: number;
    scrollExtentMin: number;
    platformViewId: number;
    maxValueLength: number;
    currentValueLength: number;
    rect: Rect;
    tags: Set<any>;
    transform: Matrix4;
    elevation: number;
    thickness: number;
    customSemanticsActionIds: Array<any>;
    constructor(namedParameters?: {
        flags?: number;
        actions?: number;
        label?: string;
        increasedValue?: string;
        value?: string;
        decreasedValue?: string;
        hint?: string;
        textDirection?: TextDirection;
        rect?: Rect;
        elevation?: number;
        thickness?: number;
        textSelection?: TextSelection;
        scrollIndex?: number;
        scrollChildCount?: number;
        scrollPosition?: number;
        scrollExtentMax?: number;
        scrollExtentMin?: number;
        platformViewId?: number;
        maxValueLength?: number;
        currentValueLength?: number;
        tags?: Set<any>;
        transform?: Matrix4;
        customSemanticsActionIds?: Array<any>;
    });
}
export { SemanticsData };
declare class SemanticsHintOverrides extends DiagnosticableTree {
    onTapHint: string;
    onLongPressHint: string;
    constructor(namedParameters?: {
        onTapHint?: string;
        onLongPressHint?: string;
    });
}
export { SemanticsHintOverrides };
declare class SemanticsProperties extends DiagnosticableTree {
    enabled: boolean;
    checked: boolean;
    toggled: boolean;
    selected: boolean;
    button: boolean;
    link: boolean;
    header: boolean;
    textField: boolean;
    readOnly: boolean;
    focusable: boolean;
    focused: boolean;
    inMutuallyExclusiveGroup: boolean;
    hidden: boolean;
    obscured: boolean;
    multiline: boolean;
    scopesRoute: boolean;
    namesRoute: boolean;
    image: boolean;
    liveRegion: boolean;
    maxValueLength: number;
    currentValueLength: number;
    label: string;
    value: string;
    increasedValue: string;
    decreasedValue: string;
    hint: string;
    hintOverrides: SemanticsHintOverrides;
    textDirection: TextDirection;
    sortKey: SemanticsSortKey;
    onTap: any;
    onLongPress: any;
    onScrollLeft: any;
    onScrollRight: any;
    onScrollUp: any;
    onScrollDown: any;
    onIncrease: any;
    onDecrease: any;
    onCopy: any;
    onCut: any;
    onPaste: any;
    onMoveCursorForwardByCharacter: any;
    onMoveCursorBackwardByCharacter: any;
    onMoveCursorForwardByWord: any;
    onMoveCursorBackwardByWord: any;
    onSetSelection: any;
    onDidGainAccessibilityFocus: any;
    onDidLoseAccessibilityFocus: any;
    onDismiss: any;
    customSemanticsActions: Map<any, any>;
    constructor(namedParameters?: {
        enabled?: boolean;
        checked?: boolean;
        selected?: boolean;
        toggled?: boolean;
        button?: boolean;
        link?: boolean;
        header?: boolean;
        textField?: boolean;
        readOnly?: boolean;
        focusable?: boolean;
        focused?: boolean;
        inMutuallyExclusiveGroup?: boolean;
        hidden?: boolean;
        obscured?: boolean;
        multiline?: boolean;
        scopesRoute?: boolean;
        namesRoute?: boolean;
        image?: boolean;
        liveRegion?: boolean;
        maxValueLength?: number;
        currentValueLength?: number;
        label?: string;
        value?: string;
        increasedValue?: string;
        decreasedValue?: string;
        hint?: string;
        hintOverrides?: SemanticsHintOverrides;
        textDirection?: TextDirection;
        sortKey?: SemanticsSortKey;
        onTap?: any;
        onLongPress?: any;
        onScrollLeft?: any;
        onScrollRight?: any;
        onScrollUp?: any;
        onScrollDown?: any;
        onIncrease?: any;
        onDecrease?: any;
        onCopy?: any;
        onCut?: any;
        onPaste?: any;
        onMoveCursorForwardByCharacter?: any;
        onMoveCursorBackwardByCharacter?: any;
        onMoveCursorForwardByWord?: any;
        onMoveCursorBackwardByWord?: any;
        onSetSelection?: any;
        onDidGainAccessibilityFocus?: any;
        onDidLoseAccessibilityFocus?: any;
        onDismiss?: any;
        customSemanticsActions?: Map<any, any>;
    });
}
export { SemanticsProperties };
declare class SemanticsNode extends AbstractNode {
    key: Key;
    id: number;
    showOnScreen: any;
    transform: Matrix4;
    rect: Rect;
    parentSemanticsClipRect: Rect;
    parentPaintClipRect: Rect;
    elevationAdjustment: number;
    indexInParent: number;
    isMergedIntoParent: boolean;
    mergeAllDescendantsIntoThisNode: boolean;
    children: Array<any>;
    debugPreviousSnapshot: Array<any>;
    dead: boolean;
    dirty: boolean;
    actions: Map<any, any>;
    customSemanticsActions: Map<any, any>;
    actionsAsBits: number;
    tags: Set<any>;
    flags: number;
    label: string;
    value: string;
    decreasedValue: string;
    increasedValue: string;
    hint: string;
    elevation: number;
    thickness: number;
    hintOverrides: SemanticsHintOverrides;
    textDirection: TextDirection;
    sortKey: SemanticsSortKey;
    textSelection: TextSelection;
    isMultiline: boolean;
    scrollChildCount: number;
    scrollIndex: number;
    scrollPosition: number;
    scrollExtentMax: number;
    scrollExtentMin: number;
    platformViewId: number;
    maxValueLength: number;
    currentValueLength: number;
    constructor(namedParameters?: {
        key?: Key;
        showOnScreen?: any;
    });
    static root(namedParameters?: {
        key?: Key;
        showOnScreen?: any;
        owner?: SemanticsOwner;
    }): SemanticsNode;
}
export { SemanticsNode };
declare class _BoxEdge extends MXDartClass {
    isLeadingEdge: boolean;
    offset: number;
    node: SemanticsNode;
    constructor(namedParameters?: {
        isLeadingEdge?: boolean;
        offset?: number;
        node?: SemanticsNode;
    });
}
export { _BoxEdge };
declare class _SemanticsSortGroup extends Comparable {
    startOffset: number;
    textDirection: TextDirection;
    nodes: Array<any>;
    constructor(namedParameters?: {
        startOffset?: number;
        textDirection?: TextDirection;
    });
}
export { _SemanticsSortGroup };
declare class _TraversalSortNode extends MXDartClass {
    node: SemanticsNode;
    sortKey: SemanticsSortKey;
    position: number;
    constructor(namedParameters?: {
        node?: SemanticsNode;
        sortKey?: SemanticsSortKey;
        position?: number;
    });
}
export { _TraversalSortNode };
declare class SemanticsOwner extends ChangeNotifier {
    dirtyNodes: Set<any>;
    nodes: Map<any, any>;
    detachedNodes: Set<any>;
}
export { SemanticsOwner };
declare class SemanticsConfiguration extends MXDartClass {
    isSemanticBoundary: boolean;
    explicitChildNodes: boolean;
    isBlockingSemanticsOfPreviouslyPaintedNodes: boolean;
    hasBeenAnnotated: boolean;
    actions: Map<any, any>;
    actionsAsBits: number;
    onTap: any;
    onLongPress: any;
    onScrollLeft: any;
    onDismiss: any;
    onScrollRight: any;
    onScrollUp: any;
    onScrollDown: any;
    onIncrease: any;
    onDecrease: any;
    onCopy: any;
    onCut: any;
    onPaste: any;
    onShowOnScreen: any;
    onMoveCursorForwardByCharacter: any;
    onMoveCursorBackwardByCharacter: any;
    onMoveCursorForwardByWord: any;
    onMoveCursorBackwardByWord: any;
    onSetSelection: any;
    onDidGainAccessibilityFocus: any;
    onDidLoseAccessibilityFocus: any;
    sortKey: SemanticsSortKey;
    indexInParent: number;
    scrollChildCount: number;
    scrollIndex: number;
    platformViewId: number;
    maxValueLength: number;
    currentValueLength: number;
    isMergingSemanticsOfDescendants: boolean;
    customSemanticsActions: Map<any, any>;
    label: string;
    value: string;
    decreasedValue: string;
    increasedValue: string;
    hint: string;
    hintOverrides: SemanticsHintOverrides;
    elevation: number;
    thickness: number;
    textDirection: TextDirection;
    textSelection: TextSelection;
    scrollPosition: number;
    scrollExtentMax: number;
    scrollExtentMin: number;
    tagsForChildren: Set<any>;
    flags: number;
}
export { SemanticsConfiguration };
declare enum DebugSemanticsDumpOrder {
    inverseHitTest = "{ \"_name\": \"DebugSemanticsDumpOrder.inverseHitTest\", \"index\": 0 }",
    traversalOrder = "{ \"_name\": \"DebugSemanticsDumpOrder.traversalOrder\", \"index\": 1 }"
}
export { DebugSemanticsDumpOrder };
declare abstract class SemanticsSortKey extends MXDartClass {
    name: string;
}
export { SemanticsSortKey };
declare class OrdinalSortKey extends SemanticsSortKey {
    order: number;
    constructor(order?: number, namedParameters?: {
        name?: string;
    });
}
export { OrdinalSortKey };
