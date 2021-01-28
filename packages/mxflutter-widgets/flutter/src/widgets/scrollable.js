//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Intent, Action } from './actions';
import { RenderProxyBox } from '../rendering/proxy-box';
import { StatefulWidget$, InheritedWidget, State$, SingleChildRenderObjectWidget, } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Scrollable extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.viewportBuilder = namedParameters.viewportBuilder;
        this.incrementCalculator = namedParameters.incrementCalculator;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = 'Scrollable';
    }
}
export { Scrollable };
class _ScrollableScope extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollable = namedParameters.scrollable;
        this.position = namedParameters.position;
        this.child = namedParameters.child;
        this.className = '_ScrollableScope';
    }
}
export { _ScrollableScope };
class ScrollableState extends State$ {
}
export { ScrollableState };
class _ScrollSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.position = namedParameters.position;
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.child = namedParameters.child;
        this.className = '_ScrollSemantics';
    }
}
export { _ScrollSemantics };
class _RenderScrollSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this['child'] = namedParameters.child;
        this.className = '_RenderScrollSemantics';
    }
}
export { _RenderScrollSemantics };
var ScrollIncrementType;
(function (ScrollIncrementType) {
    ScrollIncrementType["line"] = "{ \"_name\": \"ScrollIncrementType.line\", \"index\": 0 }";
    ScrollIncrementType["page"] = "{ \"_name\": \"ScrollIncrementType.page\", \"index\": 1 }";
})(ScrollIncrementType || (ScrollIncrementType = {}));
export { ScrollIncrementType };
class ScrollIncrementDetails extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.type = namedParameters.type;
        this.metrics = namedParameters.metrics;
        this.className = 'ScrollIncrementDetails';
    }
}
export { ScrollIncrementDetails };
class ScrollIntent extends Intent {
    constructor(namedParameters = {}) {
        super();
        this.direction = namedParameters.direction;
        this.type = namedParameters.type;
        this.className = 'ScrollIntent';
    }
}
export { ScrollIntent };
class ScrollAction extends Action {
}
export { ScrollAction };
