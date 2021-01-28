//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
import { StatefulWidget$, State$ } from './framework';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { FixedScrollMetrics } from './scroll-metrics';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
class PageController extends ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialPage = namedParameters.initialPage;
        this.keepPage = namedParameters.keepPage;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = 'PageController';
    }
    // MX Modified begin
    jumpToPage(page) {
        const argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'PageController',
            funcName: 'jumpToPage',
            args: {
                page,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
}
export { PageController };
class PageMetrics extends FixedScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = 'PageMetrics';
    }
}
export { PageMetrics };
class _PagePosition extends ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this.initialPage = namedParameters.initialPage;
        this['keepPage'] = namedParameters.keepPage;
        this.viewportFraction = namedParameters.viewportFraction;
        this['oldPosition'] = namedParameters.oldPosition;
        this.className = '_PagePosition';
    }
}
export { _PagePosition };
class _ForceImplicitScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.parent = namedParameters.parent;
        this.className = '_ForceImplicitScrollPhysics';
    }
}
export { _ForceImplicitScrollPhysics };
class PageScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'PageScrollPhysics';
    }
}
export { PageScrollPhysics };
class PageView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.pageSnapping = namedParameters.pageSnapping;
        this.onPageChanged = namedParameters.onPageChanged;
        this['children'] = namedParameters.children;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.className = 'PageView';
    }
    static builder(namedParameters = {}) {
        var jsObj = new PageView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.physics = namedParameters.physics;
        jsObj.pageSnapping = namedParameters.pageSnapping;
        jsObj.onPageChanged = namedParameters.onPageChanged;
        jsObj['itemBuilder'] = namedParameters.itemBuilder;
        jsObj['itemCount'] = namedParameters.itemCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        jsObj['constructorName'] = 'builder';
        return jsObj;
    }
    static custom(namedParameters = {}) {
        var jsObj = new PageView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.physics = namedParameters.physics;
        jsObj.pageSnapping = namedParameters.pageSnapping;
        jsObj.onPageChanged = namedParameters.onPageChanged;
        jsObj.childrenDelegate = namedParameters.childrenDelegate;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        jsObj['constructorName'] = 'custom';
        return jsObj;
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this['itemBuilder']) {
            this['children'] = [];
            for (let i = 0; i < this['itemCount']; ++i) {
                const w = this['itemBuilder'](buildContext, i);
                this['children'].push(w);
            }
            delete this['itemBuilder'];
        }
    }
}
export { PageView };
class _PageViewState extends State$ {
}
export { _PageViewState };
