import { InheritedNotifier } from './inherited-notifier';
import { Key } from '../foundation/key';
import { FocusNode, FocusAttachment, FocusScopeNode } from './focus-manager';
import { StatefulWidget, State, StatelessWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Focus extends StatefulWidget {
    debugLabel: string;
    child: MXWidget;
    onKey: any;
    onFocusChange: any;
    autofocus: boolean;
    focusNode: FocusNode;
    skipTraversal: boolean;
    includeSemantics: boolean;
    canRequestFocus: boolean;
    descendantsAreFocusable: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        focusNode?: FocusNode;
        autofocus?: boolean;
        onFocusChange?: any;
        onKey?: any;
        debugLabel?: string;
        canRequestFocus?: boolean;
        descendantsAreFocusable?: boolean;
        skipTraversal?: boolean;
        includeSemantics?: boolean;
    });
}
export { Focus };
declare class _FocusState extends State {
    internalNode: FocusNode;
    hasPrimaryFocus: boolean;
    canRequestFocus: boolean;
    descendantsAreFocusable: boolean;
    didAutofocus: boolean;
    focusAttachment: FocusAttachment;
}
export { _FocusState };
declare class FocusScope extends Focus {
    constructor(namedParameters?: {
        key?: Key;
        node?: FocusScopeNode;
        child?: MXWidget;
        autofocus?: boolean;
        onFocusChange?: any;
        canRequestFocus?: boolean;
        skipTraversal?: boolean;
        onKey?: any;
        debugLabel?: string;
    });
}
export { FocusScope };
declare class _FocusScopeState extends _FocusState {
}
export { _FocusScopeState };
declare class _FocusMarker extends InheritedNotifier {
    constructor(namedParameters?: {
        key?: Key;
        node?: FocusNode;
        child?: MXWidget;
    });
}
export { _FocusMarker };
declare class ExcludeFocus extends StatelessWidget {
    excluding: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        excluding?: boolean;
        child?: MXWidget;
    });
}
export { ExcludeFocus };
