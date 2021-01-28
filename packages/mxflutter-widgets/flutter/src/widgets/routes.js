//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// MX Modified begin
import { MXMirrorObjMethodCall, invokeMirrorObjMethod } from '@mxflutter/mxflutter-base';
import { InheritedWidget, StatefulWidget$, State$ } from './framework';
import { DismissAction } from './actions';
import { Route, NavigatorObserver } from './navigator';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class OverlayRoute extends Route {
}
export { OverlayRoute };
class TransitionRoute extends OverlayRoute {
}
export { TransitionRoute };
class LocalHistoryEntry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onRemove = namedParameters.onRemove;
        this.className = 'LocalHistoryEntry';
    }
}
export { LocalHistoryEntry };
// MX Modified begin
// const willPop = Symbol('willPop');
// MX Modified end
class LocalHistoryRoute extends Route {
}
export { LocalHistoryRoute };
class _DismissModalAction extends DismissAction {
}
export { _DismissModalAction };
class _ModalScopeStatus extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isCurrent = namedParameters.isCurrent;
        this.canPop = namedParameters.canPop;
        this.route = namedParameters.route;
        this.child = namedParameters.child;
        this.className = '_ModalScopeStatus';
    }
}
export { _ModalScopeStatus };
class _ModalScope extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.className = '_ModalScope';
    }
}
export { _ModalScope };
class _ModalScopeState extends State$ {
}
export { _ModalScopeState };
const willPop = Symbol('willPop');
class ModalRoute extends TransitionRoute {
    // MX Modified begin
    // TODO: 先用异步实现
    static of(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const argument = new MXMirrorObjMethodCall({
                funcName: 'ModalRoute.of',
                args: {
                    widgetElementID: context.widgetElementID,
                },
            });
            const promiseResult = new Promise(function (resolve, reject) {
                invokeMirrorObjMethod(argument, function (value) {
                    if (value !== null) {
                        const jsonObj = JSON.parse(value);
                        resolve(jsonObj);
                    }
                    else {
                        reject(null);
                    }
                });
            });
            return promiseResult;
        });
    }
}
export { ModalRoute };
class PopupRoute extends ModalRoute {
}
export { PopupRoute };
class RouteObserver extends NavigatorObserver {
}
export { RouteObserver };
class RouteAware extends MXDartClass {
}
export { RouteAware };
class _DialogRoute extends PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.pageBuilder = namedParameters.pageBuilder;
        this.barrierDismissible = namedParameters.barrierDismissible;
        this.barrierLabel = namedParameters.barrierLabel;
        this.barrierColor = namedParameters.barrierColor;
        this.transitionDuration = namedParameters.transitionDuration;
        this.transitionBuilder = namedParameters.transitionBuilder;
        this.settings = namedParameters.settings;
        this.className = '_DialogRoute';
    }
}
export { _DialogRoute };
