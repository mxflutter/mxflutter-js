//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { FocusManager } from './focus-manager';
import { RenderObject, ParentData } from '../rendering/object';
import { DiagnosticableTree, DiagnosticPropertiesBuilder, DiagnosticsTreeStyle } from '../foundation/diagnostics';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class UniqueKey extends LocalKey {}
export { UniqueKey };
class ObjectKey extends LocalKey {
  value: any;
  public constructor(value?: any) {
    super();
    this.value = value;
    this.className = 'ObjectKey';
  }
}
export { ObjectKey };
abstract class GlobalKey extends Key {
  public constructor(namedParameters: { debugLabel?: string } = {}) {
    super();
    this['debugLabel'] = namedParameters.debugLabel;
    this.className = 'GlobalKey';
  }
}
export { GlobalKey };
class LabeledGlobalKey extends GlobalKey {
  debugLabel: string;
  public constructor(_debugLabel?: string) {
    super();
    this.debugLabel = _debugLabel;
    this.className = 'LabeledGlobalKey';
  }
}
export { LabeledGlobalKey };
class GlobalObjectKey extends GlobalKey {
  value: any;
  public constructor(value?: any) {
    super();
    this.value = value;
    this.className = 'GlobalObjectKey';
  }
}
export { GlobalObjectKey };
class TypeMatcher extends MXDartClass {}
export { TypeMatcher };
abstract class Widget extends DiagnosticableTree {
  key: Key;
}
export { Widget };
abstract class StatelessWidget extends Widget {}
export { StatelessWidget as StatelessWidget$ };
abstract class StatefulWidget extends Widget {}
export { StatefulWidget as StatefulWidget$ };
enum _StateLifecycle {
  created = '{ "_name": "_StateLifecycle.created", "index": 0 }',
  initialized = '{ "_name": "_StateLifecycle.initialized", "index": 1 }',
  ready = '{ "_name": "_StateLifecycle.ready", "index": 2 }',
  defunct = '{ "_name": "_StateLifecycle.defunct", "index": 3 }',
}

export { _StateLifecycle };
abstract class State extends MXDartClass {
  widget: any;
  debugLifecycleState: _StateLifecycle;
  element: StatefulElement;
}
export { State as State$ };
abstract class ProxyWidget extends Widget {
  child: MXWidget;
}
export { ProxyWidget };
abstract class ParentDataWidget extends ProxyWidget {}
export { ParentDataWidget };
abstract class InheritedWidget extends ProxyWidget {}
export { InheritedWidget };
abstract class RenderObjectWidget extends Widget {}
export { RenderObjectWidget };
abstract class LeafRenderObjectWidget extends RenderObjectWidget {}
export { LeafRenderObjectWidget };
abstract class SingleChildRenderObjectWidget extends RenderObjectWidget {
  child: MXWidget;
}
export { SingleChildRenderObjectWidget };
abstract class MultiChildRenderObjectWidget extends RenderObjectWidget {
  children: Array<any>;
}
export { MultiChildRenderObjectWidget };
enum _ElementLifecycle {
  initial = '{ "_name": "_ElementLifecycle.initial", "index": 0 }',
  active = '{ "_name": "_ElementLifecycle.active", "index": 1 }',
  inactive = '{ "_name": "_ElementLifecycle.inactive", "index": 2 }',
  defunct = '{ "_name": "_ElementLifecycle.defunct", "index": 3 }',
}

export { _ElementLifecycle };
class _InactiveElements extends MXDartClass {
  locked: boolean;
  elements: Set<any>;
}
export { _InactiveElements };
abstract class BuildContext extends MXDartClass {}
export { BuildContext as BuildContext$ };
class BuildOwner extends MXDartClass {
  onBuildScheduled: any;
  inactiveElements: _InactiveElements;
  dirtyElements: Array<any>;
  scheduledFlushDirtyElements: boolean;
  dirtyElementsNeedsResorting: boolean;
  focusManager: FocusManager;
  debugStateLockLevel: number;
  debugBuilding: boolean;
  debugCurrentBuildTarget: Element;
  debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans: Map<any, any>;
  public constructor(namedParameters: { onBuildScheduled?: any } = {}) {
    super();
    this.onBuildScheduled = namedParameters.onBuildScheduled;
    this.className = 'BuildOwner';
  }
}
export { BuildOwner as BuildOwner$ };
abstract class Element extends DiagnosticableTree {
  parent: Element;
  cachedHash: number;
  slot: any;
  depth: number;
  widget: MXWidget;
  owner: BuildOwner;
  active: boolean;
  debugLifecycleState: _ElementLifecycle;
  debugForgottenChildrenWithGlobalKey: Set<any>;
  inheritedWidgets: Map<any, any>;
  dependencies: Set<any>;
  hadUnsatisfiedDependencies: boolean;
  dirty: boolean;
  inDirtyList: boolean;
  debugBuiltOnce: boolean;
  debugAllowIgnoredCallsToMarkNeedsBuild: boolean;
}
export { Element as Element$ };
class ErrorWidget extends LeafRenderObjectWidget {
  message: string;
  flutterError: any;
  public constructor(exception?: any) {
    super();
    this['exception'] = exception;
    this.className = 'ErrorWidget';
  }
  static withDetails(namedParameters: { message?: string; error?: any } = {}) {
    var jsObj = new ErrorWidget();
    jsObj.message = namedParameters.message;
    jsObj['error'] = namedParameters.error;
    jsObj['constructorName'] = 'withDetails';
    return jsObj;
  }
}
export { ErrorWidget };
abstract class ComponentElement extends Element {
  child: Element;
  debugDoingBuild: boolean;
}
export { ComponentElement };
class StatelessElement extends ComponentElement {
  public constructor(widget?: StatelessWidget) {
    super();
    this['widget'] = widget;
    this.className = 'StatelessElement';
  }
}
export { StatelessElement };
class StatefulElement extends ComponentElement {
  state: State;
  didChangeDependencies: boolean;
  public constructor(widget?: StatefulWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = 'StatefulElement';
  }
}
export { StatefulElement };
abstract class ProxyElement extends ComponentElement {}
export { ProxyElement };
class ParentDataElement extends ProxyElement {
  public constructor(widget?: ParentDataWidget) {
    super();
    this['widget'] = widget;
    this.className = 'ParentDataElement';
  }
}
export { ParentDataElement };
class InheritedElement extends ProxyElement {
  dependents: Map<any, any>;
  public constructor(widget?: InheritedWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = 'InheritedElement';
  }
}
export { InheritedElement };
abstract class RenderObjectElement extends Element {
  renderObject: RenderObject;
  debugDoingBuild: boolean;
  ancestorRenderObjectElement: RenderObjectElement;
}
export { RenderObjectElement };
abstract class RootRenderObjectElement extends RenderObjectElement {}
export { RootRenderObjectElement };
class LeafRenderObjectElement extends RenderObjectElement {
  public constructor(widget?: LeafRenderObjectWidget) {
    super();
    this['widget'] = widget;
    this.className = 'LeafRenderObjectElement';
  }
}
export { LeafRenderObjectElement };
class SingleChildRenderObjectElement extends RenderObjectElement {
  child: Element;
  public constructor(widget?: SingleChildRenderObjectWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = 'SingleChildRenderObjectElement';
  }
}
export { SingleChildRenderObjectElement };
class MultiChildRenderObjectElement extends RenderObjectElement {
  children: Array<any>;
  forgottenChildren: Set<any>;
  public constructor(widget?: MultiChildRenderObjectWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = 'MultiChildRenderObjectElement';
  }
}
export { MultiChildRenderObjectElement };
class DebugCreator extends MXDartClass {
  element: Element;
  public constructor(element?: Element) {
    super();
    this.element = element;
    this.className = 'DebugCreator';
  }
}
export { DebugCreator };
class IndexedSlot extends MXDartClass {
  value: any;
  index: number;
  public constructor(index?: number, value?: any) {
    super();
    this.index = index;
    this.value = value;
    this.className = 'IndexedSlot';
  }
}
export { IndexedSlot };
