//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Page } from './navigator';
import { ModalRoute } from './routes';
class PageRoute extends ModalRoute {
}
export { PageRoute };
class PageRouteBuilder extends PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.settings = namedParameters.settings;
        this.pageBuilder = namedParameters.pageBuilder;
        this.transitionsBuilder = namedParameters.transitionsBuilder;
        this.transitionDuration = namedParameters.transitionDuration;
        this.opaque = namedParameters.opaque;
        this.barrierDismissible = namedParameters.barrierDismissible;
        this.barrierColor = namedParameters.barrierColor;
        this.barrierLabel = namedParameters.barrierLabel;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.className = 'PageRouteBuilder';
    }
}
export { PageRouteBuilder };
class TransitionBuilderPage extends Page {
    constructor(namedParameters = {}) {
        super();
        this.pageBuilder = namedParameters.pageBuilder;
        this.transitionsBuilder = namedParameters.transitionsBuilder;
        this.transitionDuration = namedParameters.transitionDuration;
        this.opaque = namedParameters.opaque;
        this.barrierDismissible = namedParameters.barrierDismissible;
        this.barrierColor = namedParameters.barrierColor;
        this.barrierLabel = namedParameters.barrierLabel;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.key = namedParameters.key;
        this.name = namedParameters.name;
        this.__mx_arguments = namedParameters.__mx_arguments;
        this.className = 'TransitionBuilderPage';
    }
}
export { TransitionBuilderPage };
class _PageBasedPageRouteBuilder extends PageRoute {
    constructor(page) {
        super();
        this['page'] = page;
        this.className = '_PageBasedPageRouteBuilder';
    }
}
export { _PageBasedPageRouteBuilder };
