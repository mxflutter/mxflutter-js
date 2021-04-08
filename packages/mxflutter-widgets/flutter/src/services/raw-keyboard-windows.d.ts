import { RawKeyEventData } from './raw-keyboard';
declare class RawKeyEventDataWindows extends RawKeyEventData {
    keyCode: number;
    scanCode: number;
    characterCodePoint: number;
    modifiers: number;
    constructor(namedParameters?: {
        keyCode?: number;
        scanCode?: number;
        characterCodePoint?: number;
        modifiers?: number;
    });
    static get modifierShift(): number;
    static get modifierLeftShift(): number;
    static get modifierRightShift(): number;
    static get modifierControl(): number;
    static get modifierLeftControl(): number;
    static get modifierRightControl(): number;
    static get modifierAlt(): number;
    static get modifierLeftAlt(): number;
    static get modifierRightAlt(): number;
    static get modifierLeftMeta(): number;
    static get modifierRightMeta(): number;
    static get modifierCaps(): number;
    static get modifierNumLock(): number;
    static get modifierScrollLock(): number;
}
export { RawKeyEventDataWindows };
