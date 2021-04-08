"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionalFocusAction = exports.DirectionalFocusIntent = exports.PreviousFocusAction = exports.PreviousFocusIntent = exports.NextFocusAction = exports.NextFocusIntent = exports.RequestFocusAction = exports.RequestFocusIntent = exports._FocusTraversalGroupMarker = exports._FocusTraversalGroupState = exports.FocusTraversalGroup = exports.FocusTraversalOrder = exports.OrderedTraversalPolicy = exports._OrderedFocusInfo = exports.LexicalFocusOrder = exports.NumericFocusOrder = exports.FocusOrder = exports.ReadingOrderTraversalPolicy = exports._ReadingOrderDirectionalGroupData = exports._ReadingOrderSortData = exports.WidgetOrderTraversalPolicy = exports.DirectionalFocusTraversalPolicyMixin = exports._DirectionalPolicyData = exports._DirectionalPolicyDataEntry = exports.FocusTraversalPolicy = exports.TraversalDirection = exports._FocusTraversalGroupInfo = void 0;
const actions_1 = require("./actions");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _FocusTraversalGroupInfo extends mxflutter_base_1.MXDartClass {
    constructor(marker, namedParameters = {}) {
        super();
        this['marker'] = marker;
        this['defaultPolicy'] = namedParameters.defaultPolicy;
        this.members = namedParameters.members;
        this.className = '_FocusTraversalGroupInfo';
    }
}
exports._FocusTraversalGroupInfo = _FocusTraversalGroupInfo;
var TraversalDirection;
(function (TraversalDirection) {
    TraversalDirection["up"] = "{ \"_name\": \"TraversalDirection.up\", \"index\": 0 }";
    TraversalDirection["right"] = "{ \"_name\": \"TraversalDirection.right\", \"index\": 1 }";
    TraversalDirection["down"] = "{ \"_name\": \"TraversalDirection.down\", \"index\": 2 }";
    TraversalDirection["left"] = "{ \"_name\": \"TraversalDirection.left\", \"index\": 3 }";
})(TraversalDirection || (TraversalDirection = {}));
exports.TraversalDirection = TraversalDirection;
;
class FocusTraversalPolicy extends mxflutter_base_1.MXDartClass {
}
exports.FocusTraversalPolicy = FocusTraversalPolicy;
class _DirectionalPolicyDataEntry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.direction = namedParameters.direction;
        this.node = namedParameters.node;
        this.className = '_DirectionalPolicyDataEntry';
    }
}
exports._DirectionalPolicyDataEntry = _DirectionalPolicyDataEntry;
class _DirectionalPolicyData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.history = namedParameters.history;
        this.className = '_DirectionalPolicyData';
    }
}
exports._DirectionalPolicyData = _DirectionalPolicyData;
class DirectionalFocusTraversalPolicyMixin extends FocusTraversalPolicy {
}
exports.DirectionalFocusTraversalPolicyMixin = DirectionalFocusTraversalPolicyMixin;
class WidgetOrderTraversalPolicy extends FocusTraversalPolicy {
}
exports.WidgetOrderTraversalPolicy = WidgetOrderTraversalPolicy;
class _ReadingOrderSortData extends mxflutter_base_1.MXDartClass {
    constructor(node) {
        super();
        this.node = node;
        this.className = '_ReadingOrderSortData';
    }
    // MX modified begin
    static sortWithDirectionality(list, directionality) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['list'] = list;
        jsObj['directionality'] = directionality;
        jsObj.className = '_ReadingOrderSortData';
        jsObj['constructorName'] = 'sortWithDirectionality';
        return jsObj;
    }
}
exports._ReadingOrderSortData = _ReadingOrderSortData;
class _ReadingOrderDirectionalGroupData extends mxflutter_base_1.MXDartClass {
    constructor(members) {
        super();
        this.members = members;
        this.className = '_ReadingOrderDirectionalGroupData';
    }
    static sortWithDirectionality(list, directionality) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['list'] = list;
        jsObj['directionality'] = directionality;
        jsObj.className = '_ReadingOrderDirectionalGroupData';
        jsObj['constructorName'] = 'sortWithDirectionality';
        return jsObj;
    }
}
exports._ReadingOrderDirectionalGroupData = _ReadingOrderDirectionalGroupData;
class ReadingOrderTraversalPolicy extends FocusTraversalPolicy {
}
exports.ReadingOrderTraversalPolicy = ReadingOrderTraversalPolicy;
class FocusOrder extends mxflutter_base_1.MXDartClass {
}
exports.FocusOrder = FocusOrder;
class NumericFocusOrder extends FocusOrder {
    constructor(order) {
        super();
        this.order = order;
        this.className = 'NumericFocusOrder';
    }
}
exports.NumericFocusOrder = NumericFocusOrder;
class LexicalFocusOrder extends FocusOrder {
    constructor(order) {
        super();
        this.order = order;
        this.className = 'LexicalFocusOrder';
    }
}
exports.LexicalFocusOrder = LexicalFocusOrder;
class _OrderedFocusInfo extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.node = namedParameters.node;
        this.order = namedParameters.order;
        this.className = '_OrderedFocusInfo';
    }
}
exports._OrderedFocusInfo = _OrderedFocusInfo;
class OrderedTraversalPolicy extends FocusTraversalPolicy {
    constructor(namedParameters = {}) {
        super();
        this.secondary = namedParameters.secondary;
        this.className = 'OrderedTraversalPolicy';
    }
}
exports.OrderedTraversalPolicy = OrderedTraversalPolicy;
class FocusTraversalOrder extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.order = namedParameters.order;
        this.child = namedParameters.child;
        this.className = 'FocusTraversalOrder';
    }
}
exports.FocusTraversalOrder = FocusTraversalOrder;
class FocusTraversalGroup extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.policy = namedParameters.policy;
        this.descendantsAreFocusable = namedParameters.descendantsAreFocusable;
        this.child = namedParameters.child;
        this.className = 'FocusTraversalGroup';
    }
}
exports.FocusTraversalGroup = FocusTraversalGroup;
class _FocusTraversalGroupState extends framework_1.State {
}
exports._FocusTraversalGroupState = _FocusTraversalGroupState;
class _FocusTraversalGroupMarker extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.policy = namedParameters.policy;
        this.focusNode = namedParameters.focusNode;
        this.child = namedParameters.child;
        this.className = '_FocusTraversalGroupMarker';
    }
}
exports._FocusTraversalGroupMarker = _FocusTraversalGroupMarker;
class RequestFocusIntent extends actions_1.Intent {
    constructor(focusNode) {
        super();
        this.focusNode = focusNode;
        this.className = 'RequestFocusIntent';
    }
}
exports.RequestFocusIntent = RequestFocusIntent;
class RequestFocusAction extends actions_1.Action {
}
exports.RequestFocusAction = RequestFocusAction;
class NextFocusIntent extends actions_1.Intent {
}
exports.NextFocusIntent = NextFocusIntent;
class NextFocusAction extends actions_1.Action {
}
exports.NextFocusAction = NextFocusAction;
class PreviousFocusIntent extends actions_1.Intent {
}
exports.PreviousFocusIntent = PreviousFocusIntent;
class PreviousFocusAction extends actions_1.Action {
}
exports.PreviousFocusAction = PreviousFocusAction;
class DirectionalFocusIntent extends actions_1.Intent {
    constructor(direction, namedParameters = {}) {
        super();
        this.direction = direction;
        this.ignoreTextFields = namedParameters.ignoreTextFields;
        this.className = 'DirectionalFocusIntent';
    }
}
exports.DirectionalFocusIntent = DirectionalFocusIntent;
class DirectionalFocusAction extends actions_1.Action {
}
exports.DirectionalFocusAction = DirectionalFocusAction;
