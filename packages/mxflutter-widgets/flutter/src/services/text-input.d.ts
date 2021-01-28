import { MethodChannel } from './platform-channel';
import { Matrix4 } from '../../../vector-math-64';
import { TextSelection } from './text-editing';
import { Brightness, Offset, TextRange, Size } from '../../../mx-dart-sdk';
import { AutofillConfiguration } from './autofill';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum SmartDashesType {
    disabled = "{ \"_name\": \"SmartDashesType.disabled\", \"index\": 0 }",
    enabled = "{ \"_name\": \"SmartDashesType.enabled\", \"index\": 1 }"
}
export { SmartDashesType };
declare enum SmartQuotesType {
    disabled = "{ \"_name\": \"SmartQuotesType.disabled\", \"index\": 0 }",
    enabled = "{ \"_name\": \"SmartQuotesType.enabled\", \"index\": 1 }"
}
export { SmartQuotesType };
declare class TextInputType extends MXDartClass {
    index: number;
    signed: boolean;
    decimal: boolean;
    static get text(): TextInputType;
    static get multiline(): TextInputType;
    static get number(): TextInputType;
    static get phone(): TextInputType;
    static get datetime(): TextInputType;
    static get emailAddress(): TextInputType;
    static get url(): TextInputType;
    static get visiblePassword(): TextInputType;
    static get mxName(): TextInputType;
    static get streetAddress(): TextInputType;
    static get values(): (string | TextInputType)[];
    static numberWithOptions(namedParameters?: {
        signed?: boolean;
        decimal?: boolean;
    }): TextInputType;
}
export { TextInputType };
declare enum TextInputAction {
    none = "{ \"_name\": \"TextInputAction.none\", \"index\": 0 }",
    unspecified = "{ \"_name\": \"TextInputAction.unspecified\", \"index\": 1 }",
    done = "{ \"_name\": \"TextInputAction.done\", \"index\": 2 }",
    go = "{ \"_name\": \"TextInputAction.go\", \"index\": 3 }",
    search = "{ \"_name\": \"TextInputAction.search\", \"index\": 4 }",
    send = "{ \"_name\": \"TextInputAction.send\", \"index\": 5 }",
    next = "{ \"_name\": \"TextInputAction.next\", \"index\": 6 }",
    previous = "{ \"_name\": \"TextInputAction.previous\", \"index\": 7 }",
    continueAction = "{ \"_name\": \"TextInputAction.continueAction\", \"index\": 8 }",
    join = "{ \"_name\": \"TextInputAction.join\", \"index\": 9 }",
    route = "{ \"_name\": \"TextInputAction.route\", \"index\": 10 }",
    emergencyCall = "{ \"_name\": \"TextInputAction.emergencyCall\", \"index\": 11 }",
    newline = "{ \"_name\": \"TextInputAction.newline\", \"index\": 12 }"
}
export { TextInputAction };
declare enum TextCapitalization {
    words = "{ \"_name\": \"TextCapitalization.words\", \"index\": 0 }",
    sentences = "{ \"_name\": \"TextCapitalization.sentences\", \"index\": 1 }",
    characters = "{ \"_name\": \"TextCapitalization.characters\", \"index\": 2 }",
    none = "{ \"_name\": \"TextCapitalization.none\", \"index\": 3 }"
}
export { TextCapitalization };
declare class TextInputConfiguration extends MXDartClass {
    inputType: TextInputType;
    obscureText: boolean;
    autocorrect: boolean;
    autofillConfiguration: AutofillConfiguration;
    smartDashesType: SmartDashesType;
    smartQuotesType: SmartQuotesType;
    enableSuggestions: boolean;
    actionLabel: string;
    inputAction: TextInputAction;
    textCapitalization: TextCapitalization;
    keyboardAppearance: Brightness;
    constructor(namedParameters?: {
        inputType?: TextInputType;
        obscureText?: boolean;
        autocorrect?: boolean;
        smartDashesType?: SmartDashesType;
        smartQuotesType?: SmartQuotesType;
        enableSuggestions?: boolean;
        actionLabel?: string;
        inputAction?: TextInputAction;
        keyboardAppearance?: Brightness;
        textCapitalization?: TextCapitalization;
        autofillConfiguration?: AutofillConfiguration;
    });
}
export { TextInputConfiguration };
declare enum FloatingCursorDragState {
    Start = "{ \"_name\": \"FloatingCursorDragState.Start\", \"index\": 0 }",
    Update = "{ \"_name\": \"FloatingCursorDragState.Update\", \"index\": 1 }",
    End = "{ \"_name\": \"FloatingCursorDragState.End\", \"index\": 2 }"
}
export { FloatingCursorDragState };
declare class RawFloatingCursorPoint extends MXDartClass {
    offset: Offset;
    state: FloatingCursorDragState;
    constructor(namedParameters?: {
        offset?: Offset;
        state?: FloatingCursorDragState;
    });
}
export { RawFloatingCursorPoint };
declare class TextEditingValue extends MXDartClass {
    text: string;
    selection: TextSelection;
    composing: TextRange;
    constructor(namedParameters?: {
        text?: string;
        selection?: TextSelection;
        composing?: TextRange;
    });
    static get empty(): TextEditingValue;
    static fromJSON(encoded?: Map<any, any>): TextEditingValue;
}
export { TextEditingValue };
declare abstract class TextSelectionDelegate extends MXDartClass {
}
export { TextSelectionDelegate };
declare abstract class TextInputClient extends MXDartClass {
}
export { TextInputClient };
declare class TextInputConnection extends MXDartClass {
    cachedSize: Size;
    cachedTransform: Matrix4;
    id: number;
    client: TextInputClient;
    static debugResetId(namedParameters?: {
        to?: number;
    }): MXDartClass;
}
export { TextInputConnection };
declare class TextInput extends MXDartClass {
    channel: MethodChannel;
    currentConnection: TextInputConnection;
    currentConfiguration: TextInputConfiguration;
    hidePending: boolean;
    static setChannel(newChannel?: MethodChannel): MXDartClass;
}
export { TextInput };
