"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ShortcutsMarker = exports._ShortcutsState = exports.Shortcuts = exports.ShortcutManager = exports.LogicalKeySet = exports.KeySet = void 0;
const inherited_notifier_1 = require("./inherited-notifier");
const framework_1 = require("./framework");
const change_notifier_1 = require("../foundation/change-notifier");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class KeySet extends mxflutter_base_1.MXDartClass {
    constructor(key1, key2, key3, key4) {
        super();
        this['key1'] = key1;
        this['key2'] = key2;
        this['key3'] = key3;
        this['key4'] = key4;
        this.className = 'KeySet';
    }
    static fromSet(keys) {
        var jsObj = new KeySet();
        jsObj['mx_keys'] = keys;
        jsObj['constructorName'] = 'fromSet';
        return jsObj;
    }
}
exports.KeySet = KeySet;
class LogicalKeySet extends KeySet {
    constructor(key1, key2, key3, key4) {
        super();
        this['key1'] = key1;
        this['key2'] = key2;
        this['key3'] = key3;
        this['key4'] = key4;
        this.className = 'LogicalKeySet';
    }
    static fromSet(keys) {
        var jsObj = new LogicalKeySet();
        jsObj['keys'] = keys;
        jsObj['constructorName'] = 'fromSet';
        return jsObj;
    }
}
exports.LogicalKeySet = LogicalKeySet;
class ShortcutManager extends change_notifier_1.ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.shortcuts = namedParameters.shortcuts;
        this.modal = namedParameters.modal;
        this.className = 'ShortcutManager';
    }
}
exports.ShortcutManager = ShortcutManager;
class Shortcuts extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.manager = namedParameters.manager;
        this.shortcuts = namedParameters.shortcuts;
        this.child = namedParameters.child;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'Shortcuts';
    }
}
exports.Shortcuts = Shortcuts;
class _ShortcutsState extends framework_1.State {
}
exports._ShortcutsState = _ShortcutsState;
class _ShortcutsMarker extends inherited_notifier_1.InheritedNotifier {
    constructor(namedParameters = {}) {
        super();
        this['manager'] = namedParameters.manager;
        this['child'] = namedParameters.child;
        this.className = '_ShortcutsMarker';
    }
}
exports._ShortcutsMarker = _ShortcutsMarker;
