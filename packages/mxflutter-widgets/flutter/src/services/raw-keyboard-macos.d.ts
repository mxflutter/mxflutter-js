import { RawKeyEventData } from './raw-keyboard';
declare class RawKeyEventDataMacOs extends RawKeyEventData {
    characters: string;
    charactersIgnoringModifiers: string;
    keyCode: number;
    modifiers: number;
    constructor(namedParameters?: {
        characters?: string;
        charactersIgnoringModifiers?: string;
        keyCode?: number;
        modifiers?: number;
    });
    static get modifierCapsLock(): number;
    static get modifierShift(): number;
    static get modifierLeftShift(): number;
    static get modifierRightShift(): number;
    static get modifierControl(): number;
    static get modifierLeftControl(): number;
    static get modifierRightControl(): number;
    static get modifierOption(): number;
    static get modifierLeftOption(): number;
    static get modifierRightOption(): number;
    static get modifierCommand(): number;
    static get modifierLeftCommand(): number;
    static get modifierRightCommand(): number;
    static get modifierNumericPad(): number;
    static get modifierHelp(): number;
    static get modifierFunction(): number;
    static get deviceIndependentMask(): number;
}
export { RawKeyEventDataMacOs };
