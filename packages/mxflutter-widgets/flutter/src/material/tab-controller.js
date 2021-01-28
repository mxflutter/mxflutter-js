//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
import { InheritedWidget, StatefulWidget$, State$ } from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
class TabController extends ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this['initialIndex'] = namedParameters.initialIndex;
        this.length = namedParameters.length;
        this.className = 'TabController';
        // MX Modified begin
        this['listenerList'] = [];
        // MX Modified end
    }
    addListener(listener) {
        this['listenerList'].push(listener.bind(this));
    }
    listenerCallback(args) {
        // 通过回调来保存相关参数
        this._index = args.index;
        this.previousIndex = args.previousIndex;
        this.indexIsChanging = args.indexIsChanging;
        this.offset = args.offset;
        for (const funcKey in this['listenerList']) {
            this['listenerList'][funcKey]();
        }
    }
    get index() {
        return this._index;
    }
    set index(index) {
        const argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'TabController',
            funcName: 'index',
            args: {
                index,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
}
export { TabController };
class _TabControllerScope extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = '_TabControllerScope';
    }
}
export { _TabControllerScope };
class DefaultTabController extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.length = namedParameters.length;
        this.initialIndex = namedParameters.initialIndex;
        this.child = namedParameters.child;
        this.className = 'DefaultTabController';
    }
}
export { DefaultTabController };
class _DefaultTabControllerState extends State$ {
}
export { _DefaultTabControllerState };
