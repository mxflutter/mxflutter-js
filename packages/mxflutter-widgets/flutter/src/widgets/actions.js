"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DismissAction = exports.DismissIntent = exports.SelectAction = exports.SelectIntent = exports.ActivateAction = exports.ActivateIntent = exports.DoNothingAction = exports.DoNothingIntent = exports._FocusableActionDetectorState = exports.FocusableActionDetector = exports._ActionsMarker = exports._ActionsState = exports.Actions = exports.ActionDispatcher = exports.CallbackAction = exports.ContextAction = exports._ActionListenerState = exports.ActionListener = exports.Action = exports.Intent = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Intent extends mxflutter_base_1.MXDartClass {
    static get doNothing() {
        var jsObj = new DoNothingIntent();
        jsObj['className'] = 'Intent';
        jsObj['constructorName'] = 'doNothing';
        return jsObj;
    }
}
exports.Intent = Intent;
class Action extends mxflutter_base_1.MXDartClass {
}
exports.Action = Action;
class ActionListener extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.listener = namedParameters.listener;
        this.action = namedParameters.action;
        this.child = namedParameters.child;
        this.className = 'ActionListener';
    }
}
exports.ActionListener = ActionListener;
class _ActionListenerState extends framework_1.State {
}
exports._ActionListenerState = _ActionListenerState;
class ContextAction extends Action {
}
exports.ContextAction = ContextAction;
class CallbackAction extends Action {
    constructor(namedParameters = {}) {
        super();
        this.onInvoke = namedParameters.onInvoke;
        this.className = 'CallbackAction';
    }
}
exports.CallbackAction = CallbackAction;
class ActionDispatcher extends mxflutter_base_1.MXDartClass {
}
exports.ActionDispatcher = ActionDispatcher;
class Actions extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.dispatcher = namedParameters.dispatcher;
        this.actions = namedParameters.actions;
        this.child = namedParameters.child;
        this.className = 'Actions';
    }
}
exports.Actions = Actions;
class _ActionsState extends framework_1.State {
}
exports._ActionsState = _ActionsState;
class _ActionsMarker extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.dispatcher = namedParameters.dispatcher;
        this.actions = namedParameters.actions;
        this.rebuildKey = namedParameters.rebuildKey;
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_ActionsMarker';
    }
}
exports._ActionsMarker = _ActionsMarker;
class FocusableActionDetector extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabled = namedParameters.enabled;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.shortcuts = namedParameters.shortcuts;
        this.actions = namedParameters.actions;
        this.onShowFocusHighlight = namedParameters.onShowFocusHighlight;
        this.onShowHoverHighlight = namedParameters.onShowHoverHighlight;
        this.onFocusChange = namedParameters.onFocusChange;
        this.mouseCursor = namedParameters.mouseCursor;
        this.child = namedParameters.child;
        this.className = 'FocusableActionDetector';
    }
}
exports.FocusableActionDetector = FocusableActionDetector;
class _FocusableActionDetectorState extends framework_1.State {
}
exports._FocusableActionDetectorState = _FocusableActionDetectorState;
class DoNothingIntent extends Intent {
    constructor() {
        super();
        this.className = 'DoNothingIntent';
    }
}
exports.DoNothingIntent = DoNothingIntent;
class DoNothingAction extends Action {
}
exports.DoNothingAction = DoNothingAction;
class ActivateIntent extends Intent {
}
exports.ActivateIntent = ActivateIntent;
class ActivateAction extends Action {
}
exports.ActivateAction = ActivateAction;
class SelectIntent extends Intent {
}
exports.SelectIntent = SelectIntent;
class SelectAction extends Action {
}
exports.SelectAction = SelectAction;
class DismissIntent extends Intent {
}
exports.DismissIntent = DismissIntent;
class DismissAction extends Action {
}
exports.DismissAction = DismissAction;
