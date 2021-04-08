import { RawKeyEventData } from './raw-keyboard';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class RawKeyEventDataLinux extends RawKeyEventData {
    keyHelper: KeyHelper;
    unicodeScalarValues: number;
    scanCode: number;
    keyCode: number;
    modifiers: number;
    isDown: boolean;
    constructor(namedParameters?: {
        keyHelper?: KeyHelper;
        unicodeScalarValues?: number;
        scanCode?: number;
        keyCode?: number;
        modifiers?: number;
        isDown?: boolean;
    });
}
export { RawKeyEventDataLinux };
declare abstract class KeyHelper extends MXDartClass {
    constructor(toolkit?: string);
}
export { KeyHelper };
declare class GLFWKeyHelper extends MXDartClass {
    static get modifierCapsLock(): number;
    static get modifierShift(): number;
    static get modifierControl(): number;
    static get modifierAlt(): number;
    static get modifierMeta(): number;
    static get modifierNumericPad(): number;
}
export { GLFWKeyHelper };
declare class GtkKeyHelper extends MXDartClass {
    static get modifierShift(): number;
    static get modifierCapsLock(): number;
    static get modifierControl(): number;
    static get modifierMod1(): number;
    static get modifierMod2(): number;
    static get modifierMeta(): number;
}
export { GtkKeyHelper };
