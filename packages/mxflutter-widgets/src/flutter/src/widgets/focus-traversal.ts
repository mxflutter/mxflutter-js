//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Intent, Action } from './actions';
import { Key } from '../foundation/key';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Rect, TextDirection } from '../../../mx-dart-sdk';
import { BuildContext$, InheritedWidget, Widget, StatefulWidget$, State$ } from './framework';
import { FocusNode, FocusScopeNode } from './focus-manager';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _FocusTraversalGroupInfo extends MXDartClass {
  groupNode: FocusNode;
  policy: FocusTraversalPolicy;
  members: Array<any>;
  public constructor(
    marker?: _FocusTraversalGroupMarker,
    namedParameters: { defaultPolicy?: FocusTraversalPolicy; members?: Array<any> } = {},
  ) {
    super();
    this['marker'] = marker;
    this['defaultPolicy'] = namedParameters.defaultPolicy;
    this.members = namedParameters.members;
    this.className = '_FocusTraversalGroupInfo';
  }
}
export { _FocusTraversalGroupInfo };
enum TraversalDirection {
  up = '{ "_name": "TraversalDirection.up", "index": 0 }',
  right = '{ "_name": "TraversalDirection.right", "index": 1 }',
  down = '{ "_name": "TraversalDirection.down", "index": 2 }',
  left = '{ "_name": "TraversalDirection.left", "index": 3 }',
}

export { TraversalDirection };
abstract class FocusTraversalPolicy extends MXDartClass {}
export { FocusTraversalPolicy };
class _DirectionalPolicyDataEntry extends MXDartClass {
  direction: TraversalDirection;
  node: FocusNode;
  public constructor(namedParameters: { direction?: TraversalDirection; node?: FocusNode } = {}) {
    super();
    this.direction = namedParameters.direction;
    this.node = namedParameters.node;
    this.className = '_DirectionalPolicyDataEntry';
  }
}
export { _DirectionalPolicyDataEntry };
class _DirectionalPolicyData extends MXDartClass {
  history: Array<any>;
  public constructor(namedParameters: { history?: Array<any> } = {}) {
    super();
    this.history = namedParameters.history;
    this.className = '_DirectionalPolicyData';
  }
}
export { _DirectionalPolicyData };
abstract class DirectionalFocusTraversalPolicyMixin extends FocusTraversalPolicy {
  policyData: Map<any, any>;
}
export { DirectionalFocusTraversalPolicyMixin };
class WidgetOrderTraversalPolicy extends FocusTraversalPolicy {}
export { WidgetOrderTraversalPolicy };
class _ReadingOrderSortData extends MXDartClass {
  directionality: TextDirection;
  rect: Rect;
  node: FocusNode;
  directionalAncestors: Array<any>;
  public constructor(node?: FocusNode) {
    super();
    this.node = node;
    this.className = '_ReadingOrderSortData';
  }
  static sortWithDirectionality(list?: Array<any>, directionality?: TextDirection) {
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
  members: Array<any>;
  rect: Rect;
  memberAncestors: Array<any>;
  public constructor(members?: Array<any>) {
    super();
    this.members = members;
    this.className = '_ReadingOrderDirectionalGroupData';
  }
  static sortWithDirectionality(list?: Array<any>, directionality?: TextDirection) {
    var jsObj = new MXDartClass();
    jsObj['list'] = list;
    jsObj['directionality'] = directionality;
    jsObj.className = '_ReadingOrderDirectionalGroupData';
    jsObj['constructorName'] = 'sortWithDirectionality';
    return jsObj;
  }
}
export { _ReadingOrderDirectionalGroupData };
class ReadingOrderTraversalPolicy extends FocusTraversalPolicy {}
export { ReadingOrderTraversalPolicy };
abstract class FocusOrder extends MXDartClass {}
export { FocusOrder };
class NumericFocusOrder extends FocusOrder {
  order: number;
  public constructor(order?: number) {
    super();
    this.order = order;
    this.className = 'NumericFocusOrder';
  }
}
export { NumericFocusOrder };
class LexicalFocusOrder extends FocusOrder {
  order: string;
  public constructor(order?: string) {
    super();
    this.order = order;
    this.className = 'LexicalFocusOrder';
  }
}
export { LexicalFocusOrder };
class _OrderedFocusInfo extends MXDartClass {
  node: FocusNode;
  order: FocusOrder;
  public constructor(namedParameters: { node?: FocusNode; order?: FocusOrder } = {}) {
    super();
    this.node = namedParameters.node;
    this.order = namedParameters.order;
    this.className = '_OrderedFocusInfo';
  }
}
export { _OrderedFocusInfo };
class OrderedTraversalPolicy extends FocusTraversalPolicy {
  secondary: FocusTraversalPolicy;
  public constructor(namedParameters: { secondary?: FocusTraversalPolicy } = {}) {
    super();
    this.secondary = namedParameters.secondary;
    this.className = 'OrderedTraversalPolicy';
  }
}
export { OrderedTraversalPolicy };
class FocusTraversalOrder extends InheritedWidget {
  order: FocusOrder;
  public constructor(namedParameters: { key?: Key; order?: FocusOrder; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.order = namedParameters.order;
    this.child = namedParameters.child;
    this.className = 'FocusTraversalOrder';
  }
}
export { FocusTraversalOrder };
class FocusTraversalGroup extends StatefulWidget$ {
  policy: FocusTraversalPolicy;
  descendantsAreFocusable: boolean;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      policy?: FocusTraversalPolicy;
      descendantsAreFocusable?: boolean;
      child?: MXWidget;
    } = {},
  ) {
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
  focusNode: FocusNode;
}
export { _FocusTraversalGroupState };
class _FocusTraversalGroupMarker extends InheritedWidget {
  policy: FocusTraversalPolicy;
  focusNode: FocusNode;
  public constructor(namedParameters: { policy?: FocusTraversalPolicy; focusNode?: FocusNode; child?: MXWidget } = {}) {
    super();
    this.policy = namedParameters.policy;
    this.focusNode = namedParameters.focusNode;
    this.child = namedParameters.child;
    this.className = '_FocusTraversalGroupMarker';
  }
}
export { _FocusTraversalGroupMarker };
class RequestFocusIntent extends Intent {
  focusNode: FocusNode;
  public constructor(focusNode?: FocusNode) {
    super();
    this.focusNode = focusNode;
    this.className = 'RequestFocusIntent';
  }
}
export { RequestFocusIntent };
class RequestFocusAction extends Action {}
export { RequestFocusAction };
class NextFocusIntent extends Intent {}
export { NextFocusIntent };
class NextFocusAction extends Action {}
export { NextFocusAction };
class PreviousFocusIntent extends Intent {}
export { PreviousFocusIntent };
class PreviousFocusAction extends Action {}
export { PreviousFocusAction };
class DirectionalFocusIntent extends Intent {
  direction: TraversalDirection;
  ignoreTextFields: boolean;
  public constructor(direction?: TraversalDirection, namedParameters: { ignoreTextFields?: boolean } = {}) {
    super();
    this.direction = direction;
    this.ignoreTextFields = namedParameters.ignoreTextFields;
    this.className = 'DirectionalFocusIntent';
  }
}
export { DirectionalFocusIntent };
class DirectionalFocusAction extends Action {}
export { DirectionalFocusAction };
