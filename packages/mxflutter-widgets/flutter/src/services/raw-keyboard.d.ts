import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum KeyboardSide {
    any = "{ \"_name\": \"KeyboardSide.any\", \"index\": 0 }",
    left = "{ \"_name\": \"KeyboardSide.left\", \"index\": 1 }",
    right = "{ \"_name\": \"KeyboardSide.right\", \"index\": 2 }",
    all = "{ \"_name\": \"KeyboardSide.all\", \"index\": 3 }"
}
export { KeyboardSide };
declare enum ModifierKey {
    controlModifier = "{ \"_name\": \"ModifierKey.controlModifier\", \"index\": 0 }",
    shiftModifier = "{ \"_name\": \"ModifierKey.shiftModifier\", \"index\": 1 }",
    altModifier = "{ \"_name\": \"ModifierKey.altModifier\", \"index\": 2 }",
    metaModifier = "{ \"_name\": \"ModifierKey.metaModifier\", \"index\": 3 }",
    capsLockModifier = "{ \"_name\": \"ModifierKey.capsLockModifier\", \"index\": 4 }",
    numLockModifier = "{ \"_name\": \"ModifierKey.numLockModifier\", \"index\": 5 }",
    scrollLockModifier = "{ \"_name\": \"ModifierKey.scrollLockModifier\", \"index\": 6 }",
    functionModifier = "{ \"_name\": \"ModifierKey.functionModifier\", \"index\": 7 }",
    symbolModifier = "{ \"_name\": \"ModifierKey.symbolModifier\", \"index\": 8 }"
}
export { ModifierKey };
declare abstract class RawKeyEventData extends MXDartClass {
}
export { RawKeyEventData };
declare abstract class RawKeyEvent extends MXDartClass {
    character: string;
    data: RawKeyEventData;
    static fromMessage(message?: Map<any, any>): {
        character: string;
        data: RawKeyEventData;
        className: string;
        mirrorID: string;
    };
}
export { RawKeyEvent };
declare class RawKeyDownEvent extends RawKeyEvent {
    constructor(namedParameters?: {
        data?: RawKeyEventData;
        character?: string;
    });
}
export { RawKeyDownEvent };
declare class RawKeyUpEvent extends RawKeyEvent {
    constructor(namedParameters?: {
        data?: RawKeyEventData;
        character?: string;
    });
}
export { RawKeyUpEvent };
declare class RawKeyboard extends MXDartClass {
    listeners: Array<any>;
    keyEventHandler: any;
    keysPressed: Map<any, any>;
}
export { RawKeyboard };
declare class _ModifierSidePair extends MXDartClass {
    modifier: ModifierKey;
    side: KeyboardSide;
    constructor(modifier?: ModifierKey, side?: KeyboardSide);
}
export { _ModifierSidePair };
