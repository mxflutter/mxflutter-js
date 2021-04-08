"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DefaultTabControllerState = exports.DefaultTabController = exports._TabControllerScope = exports.TabController = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const framework_1 = require("../widgets/framework");
const change_notifier_1 = require("../foundation/change-notifier");
class TabController extends change_notifier_1.ChangeNotifier {
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
        const argument = new mxflutter_base_1.MXMirrorObjMethodCall({
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
exports.TabController = TabController;
class _TabControllerScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = '_TabControllerScope';
    }
}
exports._TabControllerScope = _TabControllerScope;
class DefaultTabController extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.length = namedParameters.length;
        this.initialIndex = namedParameters.initialIndex;
        this.child = namedParameters.child;
        this.className = 'DefaultTabController';
    }
}
exports.DefaultTabController = DefaultTabController;
class _DefaultTabControllerState extends framework_1.State {
}
exports._DefaultTabControllerState = _DefaultTabControllerState;
