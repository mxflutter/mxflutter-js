import { Key } from '../foundation/key';
import { StatefulWidget, State, InheritedWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Form extends StatefulWidget {
    child: MXWidget;
    onWillPop: any;
    onChanged: any;
    autovalidateMode: AutovalidateMode;
    autovalidate: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        autovalidate?: boolean;
        onWillPop?: any;
        onChanged?: any;
        autovalidateMode?: AutovalidateMode;
    });
}
export { Form };
declare class FormState extends State {
    generation: number;
    hasInteractedByUser: boolean;
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
declare class FormField extends StatefulWidget {
    onSaved: any;
    validator: any;
    builder: any;
    initialValue: any;
    enabled: boolean;
    autovalidateMode: AutovalidateMode;
    autovalidate: boolean;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
        onSaved?: any;
        validator?: any;
        initialValue?: any;
        autovalidate?: boolean;
        enabled?: boolean;
        autovalidateMode?: AutovalidateMode;
    });
}
export { FormField };
declare class FormFieldState extends State {
    value: any;
    errorText: string;
    hasInteractedByUser: boolean;
}
export { FormFieldState };
declare enum AutovalidateMode {
    disabled = "{ \"_name\": \"AutovalidateMode.disabled\", \"index\": 0 }",
    always = "{ \"_name\": \"AutovalidateMode.always\", \"index\": 1 }",
    onUserInteraction = "{ \"_name\": \"AutovalidateMode.onUserInteraction\", \"index\": 2 }"
}
export { AutovalidateMode };
