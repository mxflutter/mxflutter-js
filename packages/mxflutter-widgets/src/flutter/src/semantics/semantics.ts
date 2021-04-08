// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ChangeNotifier } from '../foundation/change-notifier';
import { Comparable } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { AbstractNode } from '../foundation/node';
import { DiagnosticableTree } from '../foundation/diagnostics';
import { Matrix4 } from '../../../vector-math-64';
import { TextSelection } from '../services/text-editing';
import { SemanticsAction, TextDirection, Rect } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SemanticsTag extends MXDartClass {
  name: string;
  public constructor(name?: string) {
    super();
    this.name = name;
    this.className = 'SemanticsTag';
  }
}
export { SemanticsTag };
class CustomSemanticsAction extends MXDartClass {
  label: string;
  hint: string;
  action: SemanticsAction;
  public constructor(namedParameters: {label?: string} = {}) {
    super();
    this.label = namedParameters.label;
    this.className = 'CustomSemanticsAction';
  }
  static overridingAction(namedParameters: {hint?: string, action?: SemanticsAction} = {}) {
    var jsObj = new CustomSemanticsAction();
    jsObj.hint = namedParameters.hint;
    jsObj.action = namedParameters.action;
    jsObj['constructorName'] = 'overridingAction';
    return jsObj;
  }
}
export { CustomSemanticsAction };
class SemanticsData extends MXDartClass {
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
  public constructor(namedParameters: {flags?: number, actions?: number, label?: string, increasedValue?: string, value?: string, decreasedValue?: string, hint?: string, textDirection?: TextDirection, rect?: Rect, elevation?: number, thickness?: number, textSelection?: TextSelection, scrollIndex?: number, scrollChildCount?: number, scrollPosition?: number, scrollExtentMax?: number, scrollExtentMin?: number, platformViewId?: number, maxValueLength?: number, currentValueLength?: number, tags?: Set<any>, transform?: Matrix4, customSemanticsActionIds?: Array<any>} = {}) {
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
  onTapHint: string;
  onLongPressHint: string;
  public constructor(namedParameters: {onTapHint?: string, onLongPressHint?: string} = {}) {
    super();
    this.onTapHint = namedParameters.onTapHint;
    this.onLongPressHint = namedParameters.onLongPressHint;
    this.className = 'SemanticsHintOverrides';
  }
}
export { SemanticsHintOverrides };
class SemanticsProperties extends DiagnosticableTree {
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
  public constructor(namedParameters: {enabled?: boolean, checked?: boolean, selected?: boolean, toggled?: boolean, button?: boolean, link?: boolean, header?: boolean, textField?: boolean, readOnly?: boolean, focusable?: boolean, focused?: boolean, inMutuallyExclusiveGroup?: boolean, hidden?: boolean, obscured?: boolean, multiline?: boolean, scopesRoute?: boolean, namesRoute?: boolean, image?: boolean, liveRegion?: boolean, maxValueLength?: number, currentValueLength?: number, label?: string, value?: string, increasedValue?: string, decreasedValue?: string, hint?: string, hintOverrides?: SemanticsHintOverrides, textDirection?: TextDirection, sortKey?: SemanticsSortKey, onTap?: any, onLongPress?: any, onScrollLeft?: any, onScrollRight?: any, onScrollUp?: any, onScrollDown?: any, onIncrease?: any, onDecrease?: any, onCopy?: any, onCut?: any, onPaste?: any, onMoveCursorForwardByCharacter?: any, onMoveCursorBackwardByCharacter?: any, onMoveCursorForwardByWord?: any, onMoveCursorBackwardByWord?: any, onSetSelection?: any, onDidGainAccessibilityFocus?: any, onDidLoseAccessibilityFocus?: any, onDismiss?: any, customSemanticsActions?: Map<any, any>} = {}) {
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
  public constructor(namedParameters: {key?: Key, showOnScreen?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.showOnScreen = namedParameters.showOnScreen;
    this.className = 'SemanticsNode';
  }
  static root(namedParameters: {key?: Key, showOnScreen?: any, owner?: SemanticsOwner} = {}) {
    var jsObj = new SemanticsNode();
    jsObj.key = namedParameters.key;
    jsObj.showOnScreen = namedParameters.showOnScreen;
    jsObj['mx_owner'] = namedParameters.owner;
    jsObj['constructorName'] = 'root';
    return jsObj;
  }
}
export { SemanticsNode };
class _BoxEdge extends MXDartClass {
  isLeadingEdge: boolean;
  offset: number;
  node: SemanticsNode;
  public constructor(namedParameters: {isLeadingEdge?: boolean, offset?: number, node?: SemanticsNode} = {}) {
    super();
    this.isLeadingEdge = namedParameters.isLeadingEdge;
    this.offset = namedParameters.offset;
    this.node = namedParameters.node;
    this.className = '_BoxEdge';
  }
}
export { _BoxEdge };
class _SemanticsSortGroup extends Comparable {
  startOffset: number;
  textDirection: TextDirection;
  nodes: Array<any>;
  public constructor(namedParameters: {startOffset?: number, textDirection?: TextDirection} = {}) {
    super();
    this.startOffset = namedParameters.startOffset;
    this.textDirection = namedParameters.textDirection;
    this.className = '_SemanticsSortGroup';
  }
}
export { _SemanticsSortGroup };
class _TraversalSortNode extends MXDartClass {
  node: SemanticsNode;
  sortKey: SemanticsSortKey;
  position: number;
  public constructor(namedParameters: {node?: SemanticsNode, sortKey?: SemanticsSortKey, position?: number} = {}) {
    super();
    this.node = namedParameters.node;
    this.sortKey = namedParameters.sortKey;
    this.position = namedParameters.position;
    this.className = '_TraversalSortNode';
  }
}
export { _TraversalSortNode };
class SemanticsOwner extends ChangeNotifier {
  dirtyNodes: Set<any>;
  nodes: Map<any, any>;
  detachedNodes: Set<any>;
}
export { SemanticsOwner };
class SemanticsConfiguration extends MXDartClass {
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
enum DebugSemanticsDumpOrder {
  inverseHitTest = '{ "_name": "DebugSemanticsDumpOrder.inverseHitTest", "index": 0 }',
  traversalOrder = '{ "_name": "DebugSemanticsDumpOrder.traversalOrder", "index": 1 }',
};

export { DebugSemanticsDumpOrder };
abstract class SemanticsSortKey extends MXDartClass {
  name: string;
}
export { SemanticsSortKey };
class OrdinalSortKey extends SemanticsSortKey {
  order: number;
  public constructor(order?: number, namedParameters: {name?: string} = {}) {
    super();
    this.order = order;
    this.name = namedParameters.name;
    this.className = 'OrdinalSortKey';
  }
}
export { OrdinalSortKey };
