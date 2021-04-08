"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseTracker = exports._MouseTrackerEventMixin = exports.BaseMouseTracker = exports.MouseTrackerUpdateDetails = exports._MouseState = exports.MouseTrackerAnnotation = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MouseTrackerAnnotation extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onEnter = namedParameters.onEnter;
        this.onHover = namedParameters.onHover;
        this.onExit = namedParameters.onExit;
        this.cursor = namedParameters.cursor;
        this.className = 'MouseTrackerAnnotation';
    }
}
exports.MouseTrackerAnnotation = MouseTrackerAnnotation;
class _MouseState extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['initialEvent'] = namedParameters.initialEvent;
        this.className = '_MouseState';
    }
}
exports._MouseState = _MouseState;
class MouseTrackerUpdateDetails extends mxflutter_base_1.MXDartClass {
    static byNewFrame(namedParameters = {}) {
        var jsObj = new MouseTrackerUpdateDetails();
        jsObj.lastAnnotations = namedParameters.lastAnnotations;
        jsObj.nextAnnotations = namedParameters.nextAnnotations;
        jsObj.previousEvent = namedParameters.previousEvent;
        jsObj['constructorName'] = 'byNewFrame';
        return jsObj;
    }
    static byPointerEvent(namedParameters = {}) {
        var jsObj = new MouseTrackerUpdateDetails();
        jsObj.lastAnnotations = namedParameters.lastAnnotations;
        jsObj.nextAnnotations = namedParameters.nextAnnotations;
        jsObj.previousEvent = namedParameters.previousEvent;
        jsObj.triggeringEvent = namedParameters.triggeringEvent;
        jsObj['constructorName'] = 'byPointerEvent';
        return jsObj;
    }
}
exports.MouseTrackerUpdateDetails = MouseTrackerUpdateDetails;
class BaseMouseTracker extends change_notifier_1.ChangeNotifier {
}
exports.BaseMouseTracker = BaseMouseTracker;
class _MouseTrackerEventMixin extends BaseMouseTracker {
}
exports._MouseTrackerEventMixin = _MouseTrackerEventMixin;
class MouseTracker extends BaseMouseTracker {
}
exports.MouseTracker = MouseTracker;
