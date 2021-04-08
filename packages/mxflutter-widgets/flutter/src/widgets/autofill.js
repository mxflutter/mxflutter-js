"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AutofillScope = exports.AutofillGroupState = exports.AutofillGroup = exports.AutofillContextAction = void 0;
const framework_1 = require("./framework");
var AutofillContextAction;
(function (AutofillContextAction) {
    AutofillContextAction["commit"] = "{ \"_name\": \"AutofillContextAction.commit\", \"index\": 0 }";
    AutofillContextAction["cancel"] = "{ \"_name\": \"AutofillContextAction.cancel\", \"index\": 1 }";
})(AutofillContextAction || (AutofillContextAction = {}));
exports.AutofillContextAction = AutofillContextAction;
;
class AutofillGroup extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onDisposeAction = namedParameters.onDisposeAction;
        this.className = 'AutofillGroup';
    }
}
exports.AutofillGroup = AutofillGroup;
class AutofillGroupState extends framework_1.State {
}
exports.AutofillGroupState = AutofillGroupState;
class _AutofillScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this['autofillScopeState'] = namedParameters.autofillScopeState;
        this.className = '_AutofillScope';
    }
}
exports._AutofillScope = _AutofillScope;
