"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexedSlot = exports.DebugCreator = exports.MultiChildRenderObjectElement = exports.SingleChildRenderObjectElement = exports.LeafRenderObjectElement = exports.RootRenderObjectElement = exports.RenderObjectElement = exports.InheritedElement = exports.ParentDataElement = exports.ProxyElement = exports.StatefulElement = exports.StatelessElement = exports.ComponentElement = exports.ErrorWidget = exports.Element = exports.BuildOwner = exports.BuildContext = exports._InactiveElements = exports._ElementLifecycle = exports.MultiChildRenderObjectWidget = exports.SingleChildRenderObjectWidget = exports.LeafRenderObjectWidget = exports.RenderObjectWidget = exports.InheritedWidget = exports.ParentDataWidget = exports.ProxyWidget = exports.State = exports._StateLifecycle = exports.StatefulWidget = exports.StatelessWidget = exports.Widget = exports.TypeMatcher = exports.GlobalObjectKey = exports.LabeledGlobalKey = exports.GlobalKey = exports.ObjectKey = exports.UniqueKey = void 0;
const diagnostics_1 = require("../foundation/diagnostics");
const key_1 = require("../foundation/key");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class UniqueKey extends key_1.LocalKey {
}
exports.UniqueKey = UniqueKey;
class ObjectKey extends key_1.LocalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'ObjectKey';
    }
}
exports.ObjectKey = ObjectKey;
class GlobalKey extends key_1.Key {
    constructor(namedParameters = {}) {
        super();
        this['debugLabel'] = namedParameters.debugLabel;
        this.className = 'GlobalKey';
    }
}
exports.GlobalKey = GlobalKey;
class LabeledGlobalKey extends GlobalKey {
    constructor(_debugLabel) {
        super();
        this.debugLabel = _debugLabel;
        this.className = 'LabeledGlobalKey';
    }
}
exports.LabeledGlobalKey = LabeledGlobalKey;
class GlobalObjectKey extends GlobalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'GlobalObjectKey';
    }
}
exports.GlobalObjectKey = GlobalObjectKey;
class TypeMatcher extends mxflutter_base_1.MXDartClass {
}
exports.TypeMatcher = TypeMatcher;
class Widget extends diagnostics_1.DiagnosticableTree {
}
exports.Widget = Widget;
class StatelessWidget extends Widget {
}
exports.StatelessWidget = StatelessWidget;
class StatefulWidget extends Widget {
}
exports.StatefulWidget = StatefulWidget;
var _StateLifecycle;
(function (_StateLifecycle) {
    _StateLifecycle["created"] = "{ \"_name\": \"_StateLifecycle.created\", \"index\": 0 }";
    _StateLifecycle["initialized"] = "{ \"_name\": \"_StateLifecycle.initialized\", \"index\": 1 }";
    _StateLifecycle["ready"] = "{ \"_name\": \"_StateLifecycle.ready\", \"index\": 2 }";
    _StateLifecycle["defunct"] = "{ \"_name\": \"_StateLifecycle.defunct\", \"index\": 3 }";
})(_StateLifecycle || (_StateLifecycle = {}));
exports._StateLifecycle = _StateLifecycle;
;
class State extends mxflutter_base_1.MXDartClass {
}
exports.State = State;
class ProxyWidget extends Widget {
}
exports.ProxyWidget = ProxyWidget;
class ParentDataWidget extends ProxyWidget {
}
exports.ParentDataWidget = ParentDataWidget;
class InheritedWidget extends ProxyWidget {
}
exports.InheritedWidget = InheritedWidget;
class RenderObjectWidget extends Widget {
}
exports.RenderObjectWidget = RenderObjectWidget;
class LeafRenderObjectWidget extends RenderObjectWidget {
}
exports.LeafRenderObjectWidget = LeafRenderObjectWidget;
class SingleChildRenderObjectWidget extends RenderObjectWidget {
}
exports.SingleChildRenderObjectWidget = SingleChildRenderObjectWidget;
class MultiChildRenderObjectWidget extends RenderObjectWidget {
}
exports.MultiChildRenderObjectWidget = MultiChildRenderObjectWidget;
var _ElementLifecycle;
(function (_ElementLifecycle) {
    _ElementLifecycle["initial"] = "{ \"_name\": \"_ElementLifecycle.initial\", \"index\": 0 }";
    _ElementLifecycle["active"] = "{ \"_name\": \"_ElementLifecycle.active\", \"index\": 1 }";
    _ElementLifecycle["inactive"] = "{ \"_name\": \"_ElementLifecycle.inactive\", \"index\": 2 }";
    _ElementLifecycle["defunct"] = "{ \"_name\": \"_ElementLifecycle.defunct\", \"index\": 3 }";
})(_ElementLifecycle || (_ElementLifecycle = {}));
exports._ElementLifecycle = _ElementLifecycle;
;
class _InactiveElements extends mxflutter_base_1.MXDartClass {
}
exports._InactiveElements = _InactiveElements;
class BuildContext extends mxflutter_base_1.MXDartClass {
}
exports.BuildContext = BuildContext;
class BuildOwner extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onBuildScheduled = namedParameters.onBuildScheduled;
        this.className = 'BuildOwner';
    }
}
exports.BuildOwner = BuildOwner;
class Element extends diagnostics_1.DiagnosticableTree {
}
exports.Element = Element;
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
exports.ErrorWidget = ErrorWidget;
class ComponentElement extends Element {
}
exports.ComponentElement = ComponentElement;
class StatelessElement extends ComponentElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'StatelessElement';
    }
}
exports.StatelessElement = StatelessElement;
class StatefulElement extends ComponentElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'StatefulElement';
    }
}
exports.StatefulElement = StatefulElement;
class ProxyElement extends ComponentElement {
}
exports.ProxyElement = ProxyElement;
class ParentDataElement extends ProxyElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'ParentDataElement';
    }
}
exports.ParentDataElement = ParentDataElement;
class InheritedElement extends ProxyElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'InheritedElement';
    }
}
exports.InheritedElement = InheritedElement;
class RenderObjectElement extends Element {
}
exports.RenderObjectElement = RenderObjectElement;
class RootRenderObjectElement extends RenderObjectElement {
}
exports.RootRenderObjectElement = RootRenderObjectElement;
class LeafRenderObjectElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = 'LeafRenderObjectElement';
    }
}
exports.LeafRenderObjectElement = LeafRenderObjectElement;
class SingleChildRenderObjectElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'SingleChildRenderObjectElement';
    }
}
exports.SingleChildRenderObjectElement = SingleChildRenderObjectElement;
class MultiChildRenderObjectElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'MultiChildRenderObjectElement';
    }
}
exports.MultiChildRenderObjectElement = MultiChildRenderObjectElement;
class DebugCreator extends mxflutter_base_1.MXDartClass {
    constructor(element) {
        super();
        this.element = element;
        this.className = 'DebugCreator';
    }
}
exports.DebugCreator = DebugCreator;
class IndexedSlot extends mxflutter_base_1.MXDartClass {
    constructor(index, value) {
        super();
        this.index = index;
        this.value = value;
        this.className = 'IndexedSlot';
    }
}
exports.IndexedSlot = IndexedSlot;
