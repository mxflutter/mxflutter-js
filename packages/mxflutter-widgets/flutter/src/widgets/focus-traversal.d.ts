import { Intent, Action } from './actions';
import { Key } from '../foundation/key';
import { InheritedWidget, StatefulWidget, State } from './framework';
import { TextDirection, Rect } from '../../../mx-dart-sdk';
import { FocusNode } from './focus-manager';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _FocusTraversalGroupInfo extends MXDartClass {
    groupNode: FocusNode;
    policy: FocusTraversalPolicy;
    members: Array<any>;
    constructor(marker?: _FocusTraversalGroupMarker, namedParameters?: {
        defaultPolicy?: FocusTraversalPolicy;
        members?: Array<any>;
    });
}
export { _FocusTraversalGroupInfo };
declare enum TraversalDirection {
    up = "{ \"_name\": \"TraversalDirection.up\", \"index\": 0 }",
    right = "{ \"_name\": \"TraversalDirection.right\", \"index\": 1 }",
    down = "{ \"_name\": \"TraversalDirection.down\", \"index\": 2 }",
    left = "{ \"_name\": \"TraversalDirection.left\", \"index\": 3 }"
}
export { TraversalDirection };
declare abstract class FocusTraversalPolicy extends MXDartClass {
}
export { FocusTraversalPolicy };
declare class _DirectionalPolicyDataEntry extends MXDartClass {
    direction: TraversalDirection;
    node: FocusNode;
    constructor(namedParameters?: {
        direction?: TraversalDirection;
        node?: FocusNode;
    });
}
export { _DirectionalPolicyDataEntry };
declare class _DirectionalPolicyData extends MXDartClass {
    history: Array<any>;
    constructor(namedParameters?: {
        history?: Array<any>;
    });
}
export { _DirectionalPolicyData };
declare abstract class DirectionalFocusTraversalPolicyMixin extends FocusTraversalPolicy {
    policyData: Map<any, any>;
}
export { DirectionalFocusTraversalPolicyMixin };
declare class WidgetOrderTraversalPolicy extends FocusTraversalPolicy {
}
export { WidgetOrderTraversalPolicy };
declare class _ReadingOrderSortData extends MXDartClass {
    directionality: TextDirection;
    rect: Rect;
    node: FocusNode;
    directionalAncestors: Array<any>;
    constructor(node?: FocusNode);
    static sortWithDirectionality(list?: Array<any>, directionality?: TextDirection): MXDartClass;
}
export { _ReadingOrderSortData };
declare class _ReadingOrderDirectionalGroupData extends MXDartClass {
    members: Array<any>;
    rect: Rect;
    memberAncestors: Array<any>;
    constructor(members?: Array<any>);
    static sortWithDirectionality(list?: Array<any>, directionality?: TextDirection): MXDartClass;
}
export { _ReadingOrderDirectionalGroupData };
declare class ReadingOrderTraversalPolicy extends FocusTraversalPolicy {
}
export { ReadingOrderTraversalPolicy };
declare abstract class FocusOrder extends MXDartClass {
}
export { FocusOrder };
declare class NumericFocusOrder extends FocusOrder {
    order: number;
    constructor(order?: number);
}
export { NumericFocusOrder };
declare class LexicalFocusOrder extends FocusOrder {
    order: string;
    constructor(order?: string);
}
export { LexicalFocusOrder };
declare class _OrderedFocusInfo extends MXDartClass {
    node: FocusNode;
    order: FocusOrder;
    constructor(namedParameters?: {
        node?: FocusNode;
        order?: FocusOrder;
    });
}
export { _OrderedFocusInfo };
declare class OrderedTraversalPolicy extends FocusTraversalPolicy {
    secondary: FocusTraversalPolicy;
    constructor(namedParameters?: {
        secondary?: FocusTraversalPolicy;
    });
}
export { OrderedTraversalPolicy };
declare class FocusTraversalOrder extends InheritedWidget {
    order: FocusOrder;
    constructor(namedParameters?: {
        key?: Key;
        order?: FocusOrder;
        child?: MXWidget;
    });
}
export { FocusTraversalOrder };
declare class FocusTraversalGroup extends StatefulWidget {
    policy: FocusTraversalPolicy;
    descendantsAreFocusable: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        policy?: FocusTraversalPolicy;
        descendantsAreFocusable?: boolean;
        child?: MXWidget;
    });
}
export { FocusTraversalGroup };
declare class _FocusTraversalGroupState extends State {
    focusNode: FocusNode;
}
export { _FocusTraversalGroupState };
declare class _FocusTraversalGroupMarker extends InheritedWidget {
    policy: FocusTraversalPolicy;
    focusNode: FocusNode;
    constructor(namedParameters?: {
        policy?: FocusTraversalPolicy;
        focusNode?: FocusNode;
        child?: MXWidget;
    });
}
export { _FocusTraversalGroupMarker };
declare class RequestFocusIntent extends Intent {
    focusNode: FocusNode;
    constructor(focusNode?: FocusNode);
}
export { RequestFocusIntent };
declare class RequestFocusAction extends Action {
}
export { RequestFocusAction };
declare class NextFocusIntent extends Intent {
}
export { NextFocusIntent };
declare class NextFocusAction extends Action {
}
export { NextFocusAction };
declare class PreviousFocusIntent extends Intent {
}
export { PreviousFocusIntent };
declare class PreviousFocusAction extends Action {
}
export { PreviousFocusAction };
declare class DirectionalFocusIntent extends Intent {
    direction: TraversalDirection;
    ignoreTextFields: boolean;
    constructor(direction?: TraversalDirection, namedParameters?: {
        ignoreTextFields?: boolean;
    });
}
export { DirectionalFocusIntent };
declare class DirectionalFocusAction extends Action {
}
export { DirectionalFocusAction };
