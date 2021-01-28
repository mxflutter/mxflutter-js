import { FocusManager } from './focus-manager';
import { RenderObject } from '../rendering/object';
import { DiagnosticableTree } from '../foundation/diagnostics';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class UniqueKey extends LocalKey {
}
export { UniqueKey };
declare class ObjectKey extends LocalKey {
    value: any;
    constructor(value?: any);
}
export { ObjectKey };
declare abstract class GlobalKey extends Key {
    constructor(namedParameters?: {
        debugLabel?: string;
    });
}
export { GlobalKey };
declare class LabeledGlobalKey extends GlobalKey {
    debugLabel: string;
    constructor(_debugLabel?: string);
}
export { LabeledGlobalKey };
declare class GlobalObjectKey extends GlobalKey {
    value: any;
    constructor(value?: any);
}
export { GlobalObjectKey };
declare class TypeMatcher extends MXDartClass {
}
export { TypeMatcher };
declare abstract class Widget extends DiagnosticableTree {
    key: Key;
}
export { Widget };
declare abstract class StatelessWidget extends Widget {
}
export { StatelessWidget as StatelessWidget$ };
declare abstract class StatefulWidget extends Widget {
}
export { StatefulWidget as StatefulWidget$ };
declare enum _StateLifecycle {
    created = "{ \"_name\": \"_StateLifecycle.created\", \"index\": 0 }",
    initialized = "{ \"_name\": \"_StateLifecycle.initialized\", \"index\": 1 }",
    ready = "{ \"_name\": \"_StateLifecycle.ready\", \"index\": 2 }",
    defunct = "{ \"_name\": \"_StateLifecycle.defunct\", \"index\": 3 }"
}
export { _StateLifecycle };
declare abstract class State extends MXDartClass {
    widget: any;
    debugLifecycleState: _StateLifecycle;
    element: StatefulElement;
}
export { State as State$ };
declare abstract class ProxyWidget extends Widget {
    child: MXWidget;
}
export { ProxyWidget };
declare abstract class ParentDataWidget extends ProxyWidget {
}
export { ParentDataWidget };
declare abstract class InheritedWidget extends ProxyWidget {
}
export { InheritedWidget };
declare abstract class RenderObjectWidget extends Widget {
}
export { RenderObjectWidget };
declare abstract class LeafRenderObjectWidget extends RenderObjectWidget {
}
export { LeafRenderObjectWidget };
declare abstract class SingleChildRenderObjectWidget extends RenderObjectWidget {
    child: MXWidget;
}
export { SingleChildRenderObjectWidget };
declare abstract class MultiChildRenderObjectWidget extends RenderObjectWidget {
    children: Array<any>;
}
export { MultiChildRenderObjectWidget };
declare enum _ElementLifecycle {
    initial = "{ \"_name\": \"_ElementLifecycle.initial\", \"index\": 0 }",
    active = "{ \"_name\": \"_ElementLifecycle.active\", \"index\": 1 }",
    inactive = "{ \"_name\": \"_ElementLifecycle.inactive\", \"index\": 2 }",
    defunct = "{ \"_name\": \"_ElementLifecycle.defunct\", \"index\": 3 }"
}
export { _ElementLifecycle };
declare class _InactiveElements extends MXDartClass {
    locked: boolean;
    elements: Set<any>;
}
export { _InactiveElements };
declare abstract class BuildContext extends MXDartClass {
}
export { BuildContext as BuildContext$ };
declare class BuildOwner extends MXDartClass {
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
    constructor(namedParameters?: {
        onBuildScheduled?: any;
    });
}
export { BuildOwner as BuildOwner$ };
declare abstract class Element extends DiagnosticableTree {
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
declare class ErrorWidget extends LeafRenderObjectWidget {
    message: string;
    flutterError: any;
    constructor(exception?: any);
    static withDetails(namedParameters?: {
        message?: string;
        error?: any;
    }): ErrorWidget;
}
export { ErrorWidget };
declare abstract class ComponentElement extends Element {
    child: Element;
    debugDoingBuild: boolean;
}
export { ComponentElement };
declare class StatelessElement extends ComponentElement {
    constructor(widget?: StatelessWidget);
}
export { StatelessElement };
declare class StatefulElement extends ComponentElement {
    state: State;
    didChangeDependencies: boolean;
    constructor(widget?: StatefulWidget);
}
export { StatefulElement };
declare abstract class ProxyElement extends ComponentElement {
}
export { ProxyElement };
declare class ParentDataElement extends ProxyElement {
    constructor(widget?: ParentDataWidget);
}
export { ParentDataElement };
declare class InheritedElement extends ProxyElement {
    dependents: Map<any, any>;
    constructor(widget?: InheritedWidget);
}
export { InheritedElement };
declare abstract class RenderObjectElement extends Element {
    renderObject: RenderObject;
    debugDoingBuild: boolean;
    ancestorRenderObjectElement: RenderObjectElement;
}
export { RenderObjectElement };
declare abstract class RootRenderObjectElement extends RenderObjectElement {
}
export { RootRenderObjectElement };
declare class LeafRenderObjectElement extends RenderObjectElement {
    constructor(widget?: LeafRenderObjectWidget);
}
export { LeafRenderObjectElement };
declare class SingleChildRenderObjectElement extends RenderObjectElement {
    child: Element;
    constructor(widget?: SingleChildRenderObjectWidget);
}
export { SingleChildRenderObjectElement };
declare class MultiChildRenderObjectElement extends RenderObjectElement {
    children: Array<any>;
    forgottenChildren: Set<any>;
    constructor(widget?: MultiChildRenderObjectWidget);
}
export { MultiChildRenderObjectElement };
declare class DebugCreator extends MXDartClass {
    element: Element;
    constructor(element?: Element);
}
export { DebugCreator };
declare class IndexedSlot extends MXDartClass {
    value: any;
    index: number;
    constructor(index?: number, value?: any);
}
export { IndexedSlot };
