import { BuildContext$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class FocusAttachment extends MXDartClass {
    node: FocusNode;
}
export { FocusAttachment };
declare enum UnfocusDisposition {
    scope = "{ \"_name\": \"UnfocusDisposition.scope\", \"index\": 0 }",
    previouslyFocusedChild = "{ \"_name\": \"UnfocusDisposition.previouslyFocusedChild\", \"index\": 1 }"
}
export { UnfocusDisposition };
declare class FocusNode extends MXDartClass {
    skipTraversal: boolean;
    canRequestFocus: boolean;
    descendantsAreFocusable: boolean;
    context: BuildContext$;
    onKey: any;
    manager: FocusManager;
    ancestors: Array<any>;
    descendants: Array<any>;
    hasKeyboardToken: boolean;
    parent: FocusNode;
    children: Array<any>;
    debugLabel: string;
    attachment: FocusAttachment;
    requestFocusWhenReparented: boolean;
    constructor(namedParameters?: {
        debugLabel?: string;
        onKey?: any;
        skipTraversal?: boolean;
        canRequestFocus?: boolean;
        descendantsAreFocusable?: boolean;
    });
}
export { FocusNode };
declare class FocusScopeNode extends FocusNode {
    focusedChildren: Array<any>;
    constructor(namedParameters?: {
        debugLabel?: string;
        onKey?: any;
        skipTraversal?: boolean;
        canRequestFocus?: boolean;
    });
}
export { FocusScopeNode };
declare enum FocusHighlightMode {
    touch = "{ \"_name\": \"FocusHighlightMode.touch\", \"index\": 0 }",
    traditional = "{ \"_name\": \"FocusHighlightMode.traditional\", \"index\": 1 }"
}
export { FocusHighlightMode };
declare enum FocusHighlightStrategy {
    automatic = "{ \"_name\": \"FocusHighlightStrategy.automatic\", \"index\": 0 }",
    alwaysTouch = "{ \"_name\": \"FocusHighlightStrategy.alwaysTouch\", \"index\": 1 }",
    alwaysTraditional = "{ \"_name\": \"FocusHighlightStrategy.alwaysTraditional\", \"index\": 2 }"
}
export { FocusHighlightStrategy };
declare class FocusManager extends MXDartClass {
    highlightStrategy: FocusHighlightStrategy;
    highlightMode: FocusHighlightMode;
    lastInteractionWasTouch: boolean;
    listeners: any;
    rootScope: FocusScopeNode;
    primaryFocus: FocusNode;
    dirtyNodes: Set<any>;
    markedForFocus: FocusNode;
    haveScheduledUpdate: boolean;
}
export { FocusManager };
