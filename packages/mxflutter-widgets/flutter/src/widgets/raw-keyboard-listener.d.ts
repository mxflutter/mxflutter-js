import { Key } from '../foundation/key';
import { FocusNode } from './focus-manager';
import { StatefulWidget, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class RawKeyboardListener extends StatefulWidget {
    focusNode: FocusNode;
    autofocus: boolean;
    includeSemantics: boolean;
    onKey: any;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        focusNode?: FocusNode;
        autofocus?: boolean;
        includeSemantics?: boolean;
        onKey?: any;
        child?: MXWidget;
    });
}
export { RawKeyboardListener };
declare class _RawKeyboardListenerState extends State {
    listening: boolean;
}
export { _RawKeyboardListenerState };
