"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetsFlutterBinding = exports.RenderObjectToWidgetElement = exports.RenderObjectToWidgetAdapter = exports.WidgetsBinding = exports.WidgetsBindingObserver = void 0;
const binding_1 = require("../foundation/binding");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class WidgetsBindingObserver extends mxflutter_base_1.MXDartClass {
}
exports.WidgetsBindingObserver = WidgetsBindingObserver;
class WidgetsBinding extends mxflutter_base_1.MXDartClass {
}
exports.WidgetsBinding = WidgetsBinding;
class RenderObjectToWidgetAdapter extends framework_1.RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.container = namedParameters.container;
        this.debugShortDescription = namedParameters.debugShortDescription;
        this.className = 'RenderObjectToWidgetAdapter';
    }
}
exports.RenderObjectToWidgetAdapter = RenderObjectToWidgetAdapter;
class RenderObjectToWidgetElement extends framework_1.RootRenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'RenderObjectToWidgetElement';
    }
}
exports.RenderObjectToWidgetElement = RenderObjectToWidgetElement;
class WidgetsFlutterBinding extends binding_1.BindingBase {
}
exports.WidgetsFlutterBinding = WidgetsFlutterBinding;
