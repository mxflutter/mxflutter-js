"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcludeFocus = exports._FocusMarker = exports._FocusScopeState = exports.FocusScope = exports._FocusState = exports.Focus = void 0;
const inherited_notifier_1 = require("./inherited-notifier");
const framework_1 = require("./framework");
class Focus extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.onFocusChange = namedParameters.onFocusChange;
        this.onKey = namedParameters.onKey;
        this.debugLabel = namedParameters.debugLabel;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.descendantsAreFocusable = namedParameters.descendantsAreFocusable;
        this.skipTraversal = namedParameters.skipTraversal;
        this.includeSemantics = namedParameters.includeSemantics;
        this.className = 'Focus';
    }
}
exports.Focus = Focus;
class _FocusState extends framework_1.State {
}
exports._FocusState = _FocusState;
class FocusScope extends Focus {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['node'] = namedParameters.node;
        this['child'] = namedParameters.child;
        this['autofocus'] = namedParameters.autofocus;
        this['onFocusChange'] = namedParameters.onFocusChange;
        this['canRequestFocus'] = namedParameters.canRequestFocus;
        this['skipTraversal'] = namedParameters.skipTraversal;
        this['onKey'] = namedParameters.onKey;
        this['debugLabel'] = namedParameters.debugLabel;
        this.className = 'FocusScope';
    }
}
exports.FocusScope = FocusScope;
class _FocusScopeState extends _FocusState {
}
exports._FocusScopeState = _FocusScopeState;
class _FocusMarker extends inherited_notifier_1.InheritedNotifier {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['node'] = namedParameters.node;
        this['child'] = namedParameters.child;
        this.className = '_FocusMarker';
    }
}
exports._FocusMarker = _FocusMarker;
class ExcludeFocus extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.excluding = namedParameters.excluding;
        this.child = namedParameters.child;
        this.className = 'ExcludeFocus';
    }
}
exports.ExcludeFocus = ExcludeFocus;
