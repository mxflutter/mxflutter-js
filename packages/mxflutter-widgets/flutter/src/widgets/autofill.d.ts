import { Key } from '../foundation/key';
import { StatefulWidget, State, InheritedWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum AutofillContextAction {
    commit = "{ \"_name\": \"AutofillContextAction.commit\", \"index\": 0 }",
    cancel = "{ \"_name\": \"AutofillContextAction.cancel\", \"index\": 1 }"
}
export { AutofillContextAction };
declare class AutofillGroup extends StatefulWidget {
    child: MXWidget;
    onDisposeAction: AutofillContextAction;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onDisposeAction?: AutofillContextAction;
    });
}
export { AutofillGroup };
declare class AutofillGroupState extends State {
    clients: Map<any, any>;
    isTopmostAutofillGroup: boolean;
}
export { AutofillGroupState };
declare class _AutofillScope extends InheritedWidget {
    scope: AutofillGroupState;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        autofillScopeState?: AutofillGroupState;
    });
}
export { _AutofillScope };
