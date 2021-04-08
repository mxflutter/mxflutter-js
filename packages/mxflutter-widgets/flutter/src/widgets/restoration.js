"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestorationMixin = exports.RestorableProperty = exports._RootRestorationScopeState = exports.RootRestorationScope = exports.UnmanagedRestorationScope = exports._RestorationScopeState = exports.RestorationScope = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const framework_1 = require("./framework");
class RestorationScope extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.restorationId = namedParameters.restorationId;
        this.child = namedParameters.child;
        this.className = 'RestorationScope';
    }
}
exports.RestorationScope = RestorationScope;
class _RestorationScopeState extends framework_1.State {
}
exports._RestorationScopeState = _RestorationScopeState;
class UnmanagedRestorationScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.bucket = namedParameters.bucket;
        this.child = namedParameters.child;
        this.className = 'UnmanagedRestorationScope';
    }
}
exports.UnmanagedRestorationScope = UnmanagedRestorationScope;
class RootRestorationScope extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.restorationId = namedParameters.restorationId;
        this.child = namedParameters.child;
        this.className = 'RootRestorationScope';
    }
}
exports.RootRestorationScope = RootRestorationScope;
class _RootRestorationScopeState extends framework_1.State {
}
exports._RootRestorationScopeState = _RootRestorationScopeState;
class RestorableProperty extends change_notifier_1.ChangeNotifier {
}
exports.RestorableProperty = RestorableProperty;
class RestorationMixin extends framework_1.State {
}
exports.RestorationMixin = RestorationMixin;
