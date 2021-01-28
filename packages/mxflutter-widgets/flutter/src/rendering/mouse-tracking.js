//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class MouseTrackerAnnotation extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onEnter = namedParameters.onEnter;
        this.onHover = namedParameters.onHover;
        this.onExit = namedParameters.onExit;
        this.cursor = namedParameters.cursor;
        this.className = 'MouseTrackerAnnotation';
    }
}
export { MouseTrackerAnnotation };
class _MouseState extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['initialEvent'] = namedParameters.initialEvent;
        this.className = '_MouseState';
    }
}
export { _MouseState };
class MouseTrackerUpdateDetails extends MXDartClass {
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
export { MouseTrackerUpdateDetails };
class BaseMouseTracker extends ChangeNotifier {
    constructor(_router, annotationFinder) {
        super();
        this.router = _router;
        this.annotationFinder = annotationFinder;
        this.className = 'BaseMouseTracker';
    }
}
export { BaseMouseTracker };
class _MouseTrackerEventMixin extends BaseMouseTracker {
}
export { _MouseTrackerEventMixin };
class MouseTracker extends BaseMouseTracker {
    constructor(router, annotationFinder) {
        super();
        this['router'] = router;
        this['annotationFinder'] = annotationFinder;
        this.className = 'MouseTracker';
    }
}
export { MouseTracker };
