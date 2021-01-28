//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Intent, Action } from './actions';
import { InheritedWidget, StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _FocusTraversalGroupInfo extends MXDartClass {
    constructor(marker, namedParameters = {}) {
        super();
        this['marker'] = marker;
        this['defaultPolicy'] = namedParameters.defaultPolicy;
        this.members = namedParameters.members;
        this.className = '_FocusTraversalGroupInfo';
    }
}
export { _FocusTraversalGroupInfo };
var TraversalDirection;
(function (TraversalDirection) {
    TraversalDirection["up"] = "{ \"_name\": \"TraversalDirection.up\", \"index\": 0 }";
    TraversalDirection["right"] = "{ \"_name\": \"TraversalDirection.right\", \"index\": 1 }";
    TraversalDirection["down"] = "{ \"_name\": \"TraversalDirection.down\", \"index\": 2 }";
    TraversalDirection["left"] = "{ \"_name\": \"TraversalDirection.left\", \"index\": 3 }";
})(TraversalDirection || (TraversalDirection = {}));
export { TraversalDirection };
class FocusTraversalPolicy extends MXDartClass {
}
export { FocusTraversalPolicy };
class _DirectionalPolicyDataEntry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.direction = namedParameters.direction;
        this.node = namedParameters.node;
        this.className = '_DirectionalPolicyDataEntry';
    }
}
export { _DirectionalPolicyDataEntry };
class _DirectionalPolicyData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.history = namedParameters.history;
        this.className = '_DirectionalPolicyData';
    }
}
export { _DirectionalPolicyData };
class DirectionalFocusTraversalPolicyMixin extends FocusTraversalPolicy {
}
export { DirectionalFocusTraversalPolicyMixin };
class WidgetOrderTraversalPolicy extends FocusTraversalPolicy {
}
export { WidgetOrderTraversalPolicy };
class _ReadingOrderSortData extends MXDartClass {
    constructor(node) {
        super();
        this.node = node;
        this.className = '_ReadingOrderSortData';
    }
    static sortWithDirectionality(list, directionality) {
        var jsObj = new MXDartClass();
        jsObj['list'] = list;
        // MX Modified begin
        jsObj['directionality'] = directionality;
        // MX Modified end
        jsObj.className = '_ReadingOrderSortData';
        jsObj['constructorName'] = 'sortWithDirectionality';
        return jsObj;
    }
}
export { _ReadingOrderSortData };
class _ReadingOrderDirectionalGroupData extends MXDartClass {
    constructor(members) {
        super();
        this.members = members;
        this.className = '_ReadingOrderDirectionalGroupData';
    }
    static sortWithDirectionality(list, directionality) {
        var jsObj = new MXDartClass();
        jsObj['list'] = list;
        jsObj['directionality'] = directionality;
        jsObj.className = '_ReadingOrderDirectionalGroupData';
        jsObj['constructorName'] = 'sortWithDirectionality';
        return jsObj;
    }
}
export { _ReadingOrderDirectionalGroupData };
class ReadingOrderTraversalPolicy extends FocusTraversalPolicy {
}
export { ReadingOrderTraversalPolicy };
class FocusOrder extends MXDartClass {
}
export { FocusOrder };
class NumericFocusOrder extends FocusOrder {
    constructor(order) {
        super();
        this.order = order;
        this.className = 'NumericFocusOrder';
    }
}
export { NumericFocusOrder };
class LexicalFocusOrder extends FocusOrder {
    constructor(order) {
        super();
        this.order = order;
        this.className = 'LexicalFocusOrder';
    }
}
export { LexicalFocusOrder };
class _OrderedFocusInfo extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.node = namedParameters.node;
        this.order = namedParameters.order;
        this.className = '_OrderedFocusInfo';
    }
}
export { _OrderedFocusInfo };
class OrderedTraversalPolicy extends FocusTraversalPolicy {
    constructor(namedParameters = {}) {
        super();
        this.secondary = namedParameters.secondary;
        this.className = 'OrderedTraversalPolicy';
    }
}
export { OrderedTraversalPolicy };
class FocusTraversalOrder extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.order = namedParameters.order;
        this.child = namedParameters.child;
        this.className = 'FocusTraversalOrder';
    }
}
export { FocusTraversalOrder };
class FocusTraversalGroup extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.policy = namedParameters.policy;
        this.descendantsAreFocusable = namedParameters.descendantsAreFocusable;
        this.child = namedParameters.child;
        this.className = 'FocusTraversalGroup';
    }
}
export { FocusTraversalGroup };
class _FocusTraversalGroupState extends State$ {
}
export { _FocusTraversalGroupState };
class _FocusTraversalGroupMarker extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.policy = namedParameters.policy;
        this.focusNode = namedParameters.focusNode;
        this.child = namedParameters.child;
        this.className = '_FocusTraversalGroupMarker';
    }
}
export { _FocusTraversalGroupMarker };
class RequestFocusIntent extends Intent {
    constructor(focusNode) {
        super();
        this.focusNode = focusNode;
        this.className = 'RequestFocusIntent';
    }
}
export { RequestFocusIntent };
class RequestFocusAction extends Action {
}
export { RequestFocusAction };
class NextFocusIntent extends Intent {
}
export { NextFocusIntent };
class NextFocusAction extends Action {
}
export { NextFocusAction };
class PreviousFocusIntent extends Intent {
}
export { PreviousFocusIntent };
class PreviousFocusAction extends Action {
}
export { PreviousFocusAction };
class DirectionalFocusIntent extends Intent {
    constructor(direction, namedParameters = {}) {
        super();
        this.direction = direction;
        this.ignoreTextFields = namedParameters.ignoreTextFields;
        this.className = 'DirectionalFocusIntent';
    }
}
export { DirectionalFocusIntent };
class DirectionalFocusAction extends Action {
}
export { DirectionalFocusAction };
