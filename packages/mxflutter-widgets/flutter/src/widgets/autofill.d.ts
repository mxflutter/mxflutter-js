import { Key } from '../foundation/key';
import { StatefulWidget$, State$, InheritedWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class AutofillGroup extends StatefulWidget$ {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { AutofillGroup };
declare class AutofillGroupState extends State$ {
    clients: Map<any, any>;
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
