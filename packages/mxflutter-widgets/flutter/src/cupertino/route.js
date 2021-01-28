//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Decoration, BoxPainter } from '../painting/decoration';
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { PopupRoute } from '../widgets/routes';
import { Page } from '../widgets/navigator';
import { PageRoute } from '../widgets/pages';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class CupertinoRouteTransitionMixin extends PageRoute {
}
export { CupertinoRouteTransitionMixin };
class CupertinoPageRoute extends PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.title = namedParameters.title;
        this.settings = namedParameters.settings;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.className = 'CupertinoPageRoute';
    }
}
export { CupertinoPageRoute };
class _PageBasedCupertinoPageRoute extends PageRoute {
    constructor(namedParameters = {}) {
        super();
        this['page'] = namedParameters.page;
        this.className = '_PageBasedCupertinoPageRoute';
    }
}
export { _PageBasedCupertinoPageRoute };
class CupertinoPage extends Page {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.maintainState = namedParameters.maintainState;
        this.title = namedParameters.title;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.key = namedParameters.key;
        this.name = namedParameters.name;
        this.__mx_arguments = namedParameters.__mx_arguments;
        this.className = 'CupertinoPage';
    }
}
export { CupertinoPage };
class CupertinoPageTransition extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['primaryRouteAnimation'] = namedParameters.primaryRouteAnimation;
        this['secondaryRouteAnimation'] = namedParameters.secondaryRouteAnimation;
        this.child = namedParameters.child;
        this['linearTransition'] = namedParameters.linearTransition;
        this.className = 'CupertinoPageTransition';
    }
}
export { CupertinoPageTransition };
class CupertinoFullscreenDialogTransition extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['primaryRouteAnimation'] = namedParameters.primaryRouteAnimation;
        this['secondaryRouteAnimation'] = namedParameters.secondaryRouteAnimation;
        this.child = namedParameters.child;
        this['linearTransition'] = namedParameters.linearTransition;
        this.className = 'CupertinoFullscreenDialogTransition';
    }
}
export { CupertinoFullscreenDialogTransition };
class _CupertinoBackGestureDetector extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabledCallback = namedParameters.enabledCallback;
        this.onStartPopGesture = namedParameters.onStartPopGesture;
        this.child = namedParameters.child;
        this.className = '_CupertinoBackGestureDetector';
    }
}
export { _CupertinoBackGestureDetector };
class _CupertinoBackGestureDetectorState extends State$ {
}
export { _CupertinoBackGestureDetectorState };
class _CupertinoBackGestureController extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.navigator = namedParameters.navigator;
        this.controller = namedParameters.controller;
        this.className = '_CupertinoBackGestureController';
    }
}
export { _CupertinoBackGestureController };
class _CupertinoEdgeShadowDecoration extends Decoration {
    constructor(namedParameters = {}) {
        super();
        this.edgeGradient = namedParameters.edgeGradient;
        this.className = '_CupertinoEdgeShadowDecoration';
    }
    static get none() {
        var jsObj = new _CupertinoEdgeShadowDecoration();
        jsObj['className'] = '_CupertinoEdgeShadowDecoration';
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
export { _CupertinoEdgeShadowDecoration };
class _CupertinoEdgeShadowPainter extends BoxPainter {
    constructor(_decoration, onChange) {
        super();
        this.decoration = _decoration;
        this['onChange'] = onChange;
        this.className = '_CupertinoEdgeShadowPainter';
    }
}
export { _CupertinoEdgeShadowPainter };
class _CupertinoModalPopupRoute extends PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.barrierColor = namedParameters.barrierColor;
        this.barrierLabel = namedParameters.barrierLabel;
        this.builder = namedParameters.builder;
        this.semanticsDismissible = namedParameters.semanticsDismissible;
        this.filter = namedParameters.filter;
        this.settings = namedParameters.settings;
        this.className = '_CupertinoModalPopupRoute';
    }
}
export { _CupertinoModalPopupRoute };
