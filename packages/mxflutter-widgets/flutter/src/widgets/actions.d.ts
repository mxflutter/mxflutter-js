import { MouseCursor } from '../rendering/mouse-cursor';
import { FocusNode } from './focus-manager';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$, InheritedWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class Intent extends MXDartClass {
    static get doNothing(): DoNothingIntent;
}
export { Intent };
declare abstract class Action extends MXDartClass {
    listeners: any;
}
export { Action };
declare class ActionListener extends StatefulWidget$ {
    listener: any;
    action: Action;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        listener?: any;
        action?: Action;
        child?: MXWidget;
    });
}
export { ActionListener };
declare class _ActionListenerState extends State$ {
}
export { _ActionListenerState };
declare abstract class ContextAction extends Action {
}
export { ContextAction };
declare class CallbackAction extends Action {
    onInvoke: any;
    constructor(namedParameters?: {
        onInvoke?: any;
    });
}
export { CallbackAction };
declare class ActionDispatcher extends MXDartClass {
}
export { ActionDispatcher };
declare class Actions extends StatefulWidget$ {
    dispatcher: ActionDispatcher;
    actions: Map<any, any>;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        dispatcher?: ActionDispatcher;
        actions?: Map<any, any>;
        child?: MXWidget;
    });
}
export { Actions };
declare class _ActionsState extends State$ {
    listenedActions: Set<any>;
    rebuildKey: any;
}
export { _ActionsState };
declare class _ActionsMarker extends InheritedWidget {
    dispatcher: ActionDispatcher;
    actions: Map<any, any>;
    rebuildKey: any;
    constructor(namedParameters?: {
        dispatcher?: ActionDispatcher;
        actions?: Map<any, any>;
        rebuildKey?: any;
        key?: Key;
        child?: MXWidget;
    });
}
export { _ActionsMarker };
declare class FocusableActionDetector extends StatefulWidget$ {
    enabled: boolean;
    focusNode: FocusNode;
    autofocus: boolean;
    actions: Map<any, any>;
    shortcuts: Map<any, any>;
    onShowFocusHighlight: any;
    onShowHoverHighlight: any;
    onFocusChange: any;
    mouseCursor: MouseCursor;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        enabled?: boolean;
        focusNode?: FocusNode;
        autofocus?: boolean;
        shortcuts?: Map<any, any>;
        actions?: Map<any, any>;
        onShowFocusHighlight?: any;
        onShowHoverHighlight?: any;
        onFocusChange?: any;
        mouseCursor?: MouseCursor;
        child?: MXWidget;
    });
}
export { FocusableActionDetector };
declare class _FocusableActionDetectorState extends State$ {
    canShowHighlight: boolean;
    hovering: boolean;
    focused: boolean;
}
export { _FocusableActionDetectorState };
declare class DoNothingIntent extends Intent {
    constructor();
}
export { DoNothingIntent };
declare class DoNothingAction extends Action {
}
export { DoNothingAction };
declare class ActivateIntent extends Intent {
}
export { ActivateIntent };
declare abstract class ActivateAction extends Action {
}
export { ActivateAction };
declare class SelectIntent extends Intent {
}
export { SelectIntent };
declare abstract class SelectAction extends Action {
}
export { SelectAction };
declare class DismissIntent extends Intent {
}
export { DismissIntent };
declare abstract class DismissAction extends Action {
}
export { DismissAction };
