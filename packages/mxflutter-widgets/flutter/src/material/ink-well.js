"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InkWell = exports._InkResponseState = exports._HighlightType = exports._InkResponseStateWidget = exports.InkResponse = exports._ParentInkResponseProvider = exports._ParentInkResponseState = exports.InteractiveInkFeatureFactory = exports.InteractiveInkFeature = void 0;
const framework_1 = require("../widgets/framework");
const material_1 = require("./material");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class InteractiveInkFeature extends material_1.InkFeature {
}
exports.InteractiveInkFeature = InteractiveInkFeature;
class InteractiveInkFeatureFactory extends mxflutter_base_1.MXDartClass {
}
exports.InteractiveInkFeatureFactory = InteractiveInkFeatureFactory;
class _ParentInkResponseState extends mxflutter_base_1.MXDartClass {
}
exports._ParentInkResponseState = _ParentInkResponseState;
class _ParentInkResponseProvider extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.child = namedParameters.child;
        this.className = '_ParentInkResponseProvider';
    }
}
exports._ParentInkResponseProvider = _ParentInkResponseProvider;
class InkResponse extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onTap = namedParameters.onTap;
        this.onTapDown = namedParameters.onTapDown;
        this.onTapCancel = namedParameters.onTapCancel;
        this.onDoubleTap = namedParameters.onDoubleTap;
        this.onLongPress = namedParameters.onLongPress;
        this.onHighlightChanged = namedParameters.onHighlightChanged;
        this.onHover = namedParameters.onHover;
        this.mouseCursor = namedParameters.mouseCursor;
        this.containedInkWell = namedParameters.containedInkWell;
        this.highlightShape = namedParameters.highlightShape;
        this.radius = namedParameters.radius;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.overlayColor = namedParameters.overlayColor;
        this.splashColor = namedParameters.splashColor;
        this.splashFactory = namedParameters.splashFactory;
        this.enableFeedback = namedParameters.enableFeedback;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.focusNode = namedParameters.focusNode;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.onFocusChange = namedParameters.onFocusChange;
        this.autofocus = namedParameters.autofocus;
        this.className = 'InkResponse';
    }
}
exports.InkResponse = InkResponse;
class _InkResponseStateWidget extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.onTap = namedParameters.onTap;
        this.onTapDown = namedParameters.onTapDown;
        this.onTapCancel = namedParameters.onTapCancel;
        this.onDoubleTap = namedParameters.onDoubleTap;
        this.onLongPress = namedParameters.onLongPress;
        this.onHighlightChanged = namedParameters.onHighlightChanged;
        this.onHover = namedParameters.onHover;
        this.mouseCursor = namedParameters.mouseCursor;
        this.containedInkWell = namedParameters.containedInkWell;
        this.highlightShape = namedParameters.highlightShape;
        this.radius = namedParameters.radius;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.overlayColor = namedParameters.overlayColor;
        this.splashColor = namedParameters.splashColor;
        this.splashFactory = namedParameters.splashFactory;
        this.enableFeedback = namedParameters.enableFeedback;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.focusNode = namedParameters.focusNode;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.onFocusChange = namedParameters.onFocusChange;
        this.autofocus = namedParameters.autofocus;
        this.parentState = namedParameters.parentState;
        this.getRectCallback = namedParameters.getRectCallback;
        this.debugCheckContext = namedParameters.debugCheckContext;
        this.className = '_InkResponseStateWidget';
    }
}
exports._InkResponseStateWidget = _InkResponseStateWidget;
var _HighlightType;
(function (_HighlightType) {
    _HighlightType["pressed"] = "{ \"_name\": \"_HighlightType.pressed\", \"index\": 0 }";
    _HighlightType["hover"] = "{ \"_name\": \"_HighlightType.hover\", \"index\": 1 }";
    _HighlightType["focus"] = "{ \"_name\": \"_HighlightType.focus\", \"index\": 2 }";
})(_HighlightType || (_HighlightType = {}));
exports._HighlightType = _HighlightType;
;
class _InkResponseState extends framework_1.State {
}
exports._InkResponseState = _InkResponseState;
class InkWell extends InkResponse {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this['onTap'] = namedParameters.onTap;
        this['onDoubleTap'] = namedParameters.onDoubleTap;
        this['onLongPress'] = namedParameters.onLongPress;
        this['onTapDown'] = namedParameters.onTapDown;
        this['onTapCancel'] = namedParameters.onTapCancel;
        this['onHighlightChanged'] = namedParameters.onHighlightChanged;
        this['onHover'] = namedParameters.onHover;
        this['mouseCursor'] = namedParameters.mouseCursor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['highlightColor'] = namedParameters.highlightColor;
        this['overlayColor'] = namedParameters.overlayColor;
        this['splashColor'] = namedParameters.splashColor;
        this['splashFactory'] = namedParameters.splashFactory;
        this['radius'] = namedParameters.radius;
        this['borderRadius'] = namedParameters.borderRadius;
        this['customBorder'] = namedParameters.customBorder;
        this['enableFeedback'] = namedParameters.enableFeedback;
        this['excludeFromSemantics'] = namedParameters.excludeFromSemantics;
        this['focusNode'] = namedParameters.focusNode;
        this['canRequestFocus'] = namedParameters.canRequestFocus;
        this['onFocusChange'] = namedParameters.onFocusChange;
        this['autofocus'] = namedParameters.autofocus;
        this.className = 'InkWell';
    }
}
exports.InkWell = InkWell;
