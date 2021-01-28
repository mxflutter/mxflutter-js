//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { DiagnosticableTree } from '../foundation/diagnostics';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class UniqueKey extends LocalKey {
}
export { UniqueKey };
class ObjectKey extends LocalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'ObjectKey';
    }
}
export { ObjectKey };
class GlobalKey extends Key {
    constructor(namedParameters = {}) {
        super();
        this['debugLabel'] = namedParameters.debugLabel;
        this.className = 'GlobalKey';
    }
}
export { GlobalKey };
class LabeledGlobalKey extends GlobalKey {
    constructor(_debugLabel) {
        super();
        this.debugLabel = _debugLabel;
        this.className = 'LabeledGlobalKey';
    }
}
export { LabeledGlobalKey };
class GlobalObjectKey extends GlobalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'GlobalObjectKey';
    }
}
export { GlobalObjectKey };
class TypeMatcher extends MXDartClass {
}
export { TypeMatcher };
class Widget extends DiagnosticableTree {
}
export { Widget };
class StatelessWidget extends Widget {
}
export { StatelessWidget as StatelessWidget$ };
class StatefulWidget extends Widget {
}
export { StatefulWidget as StatefulWidget$ };
var _StateLifecycle;
(function (_StateLifecycle) {
    _StateLifecycle["created"] = "{ \"_name\": \"_StateLifecycle.created\", \"index\": 0 }";
    _StateLifecycle["initialized"] = "{ \"_name\": \"_StateLifecycle.initialized\", \"index\": 1 }";
    _StateLifecycle["ready"] = "{ \"_name\": \"_StateLifecycle.ready\", \"index\": 2 }";
    _StateLifecycle["defunct"] = "{ \"_name\": \"_StateLifecycle.defunct\", \"index\": 3 }";
})(_StateLifecycle || (_StateLifecycle = {}));
export { _StateLifecycle };
class State extends MXDartClass {
}
export { State as State$ };
class ProxyWidget extends Widget {
}
export { ProxyWidget };
class ParentDataWidget extends ProxyWidget {
}
export { ParentDataWidget };
class InheritedWidget extends ProxyWidget {
}
export { InheritedWidget };
class RenderObjectWidget extends Widget {
}
export { RenderObjectWidget };
class LeafRenderObjectWidget extends RenderObjectWidget {
}
export { LeafRenderObjectWidget };
class SingleChildRenderObjectWidget extends RenderObjectWidget {
}
export { SingleChildRenderObjectWidget };
class MultiChildRenderObjectWidget extends RenderObjectWidget {
}
export { MultiChildRenderObjectWidget };
var _ElementLifecycle;
(function (_ElementLifecycle) {
    _ElementLifecycle["initial"] = "{ \"_name\": \"_ElementLifecycle.initial\", \"index\": 0 }";
    _ElementLifecycle["active"] = "{ \"_name\": \"_ElementLifecycle.active\", \"index\": 1 }";
    _ElementLifecycle["inactive"] = "{ \"_name\": \"_ElementLifecycle.inactive\", \"index\": 2 }";
    _ElementLifecycle["defunct"] = "{ \"_name\": \"_ElementLifecycle.defunct\", \"index\": 3 }";
})(_ElementLifecycle || (_ElementLifecycle = {}));
export { _ElementLifecycle };
class _InactiveElements extends MXDartClass {
}
export { _InactiveElements };
class BuildContext extends MXDartClass {
}
export { BuildContext as BuildContext$ };
class BuildOwner extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onBuildScheduled = namedParameters.onBuildScheduled;
        this.className = 'BuildOwner';
    }
}
export { BuildOwner as BuildOwner$ };
class Element extends DiagnosticableTree {
}
export { Element as Element$ };
class ErrorWidget extends LeafRenderObjectWidget {
    constructor(exception) {
        super();
        this['exception'] = exception;
        this.className = 'ErrorWidget';
    }
    static withDetails(namedParameters = {}) {
        var jsObj = new ErrorWidget();
        jsObj.message = namedParameters.message;
        jsObj['error'] = namedParameters.error;
        jsObj['constructorName'] = 'withDetails';
        return jsObj;
    }
}
export { ErrorWidget };
class ComponentElement extends Element {
}
export { ComponentElement };
class StatelessElement extends ComponentElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'StatelessElement';
    }
}
export { StatelessElement };
class StatefulElement extends ComponentElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'StatefulElement';
    }
}
export { StatefulElement };
class ProxyElement extends ComponentElement {
}
export { ProxyElement };
class ParentDataElement extends ProxyElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'ParentDataElement';
    }
}
export { ParentDataElement };
class InheritedElement extends ProxyElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'InheritedElement';
    }
}
export { InheritedElement };
class RenderObjectElement extends Element {
}
export { RenderObjectElement };
class RootRenderObjectElement extends RenderObjectElement {
}
export { RootRenderObjectElement };
class LeafRenderObjectElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'LeafRenderObjectElement';
    }
}
export { LeafRenderObjectElement };
class SingleChildRenderObjectElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'SingleChildRenderObjectElement';
    }
}
export { SingleChildRenderObjectElement };
class MultiChildRenderObjectElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'MultiChildRenderObjectElement';
    }
}
export { MultiChildRenderObjectElement };
class DebugCreator extends MXDartClass {
    constructor(element) {
        super();
        this.element = element;
        this.className = 'DebugCreator';
    }
}
export { DebugCreator };
class IndexedSlot extends MXDartClass {
    constructor(index, value) {
        super();
        this.index = index;
        this.value = value;
        this.className = 'IndexedSlot';
    }
}
export { IndexedSlot };
