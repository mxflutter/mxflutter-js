//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$, InheritedWidget } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Intent extends MXDartClass {
    static get doNothing() {
        var jsObj = new DoNothingIntent();
        jsObj['className'] = 'Intent';
        jsObj['constructorName'] = 'doNothing';
        return jsObj;
    }
}
export { Intent };
class Action extends MXDartClass {
}
export { Action };
class ActionListener extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.listener = namedParameters.listener;
        this.action = namedParameters.action;
        this.child = namedParameters.child;
        this.className = 'ActionListener';
    }
}
export { ActionListener };
class _ActionListenerState extends State$ {
}
export { _ActionListenerState };
class ContextAction extends Action {
}
export { ContextAction };
class CallbackAction extends Action {
    constructor(namedParameters = {}) {
        super();
        this.onInvoke = namedParameters.onInvoke;
        this.className = 'CallbackAction';
    }
}
export { CallbackAction };
class ActionDispatcher extends MXDartClass {
}
export { ActionDispatcher };
class Actions extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.dispatcher = namedParameters.dispatcher;
        this.actions = namedParameters.actions;
        this.child = namedParameters.child;
        this.className = 'Actions';
    }
}
export { Actions };
class _ActionsState extends State$ {
}
export { _ActionsState };
class _ActionsMarker extends InheritedWidget {
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
export { _ActionsMarker };
class FocusableActionDetector extends StatefulWidget$ {
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
export { FocusableActionDetector };
class _FocusableActionDetectorState extends State$ {
}
export { _FocusableActionDetectorState };
class DoNothingIntent extends Intent {
    constructor() {
        super();
        this.className = 'DoNothingIntent';
    }
}
export { DoNothingIntent };
class DoNothingAction extends Action {
}
export { DoNothingAction };
class ActivateIntent extends Intent {
}
export { ActivateIntent };
class ActivateAction extends Action {
}
export { ActivateAction };
class SelectIntent extends Intent {
}
export { SelectIntent };
class SelectAction extends Action {
}
export { SelectAction };
class DismissIntent extends Intent {
}
export { DismissIntent };
class DismissAction extends Action {
}
export { DismissAction };
