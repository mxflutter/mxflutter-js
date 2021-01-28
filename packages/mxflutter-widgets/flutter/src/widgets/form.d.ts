import { Key } from '../foundation/key';
import { StatefulWidget$, State$, InheritedWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Form extends StatefulWidget$ {
    child: MXWidget;
    autovalidate: boolean;
    onWillPop: any;
    onChanged: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        autovalidate?: boolean;
        onWillPop?: any;
        onChanged?: any;
    });
}
export { Form };
declare class FormState extends State$ {
    generation: number;
    fields: Set<any>;
}
export { FormState };
declare class _FormScope extends InheritedWidget {
    formState: FormState;
    generation: number;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        formState?: FormState;
        generation?: number;
    });
}
export { _FormScope };
declare class FormField extends StatefulWidget$ {
    onSaved: any;
    validator: any;
    builder: any;
    initialValue: any;
    autovalidate: boolean;
    enabled: boolean;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
        onSaved?: any;
        validator?: any;
        initialValue?: any;
        autovalidate?: boolean;
        enabled?: boolean;
    });
}
export { FormField };
declare class FormFieldState extends State$ {
    value: any;
    errorText: string;
}
export { FormFieldState };
