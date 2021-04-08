import { RawKeyEventData } from './raw-keyboard';
declare class RawKeyEventDataFuchsia extends RawKeyEventData {
    hidUsage: number;
    codePoint: number;
    modifiers: number;
    constructor(namedParameters?: {
        hidUsage?: number;
        codePoint?: number;
        modifiers?: number;
    });
    static get modifierNone(): number;
    static get modifierCapsLock(): number;
    static get modifierLeftShift(): number;
    static get modifierRightShift(): number;
    static get modifierShift(): number;
    static get modifierLeftControl(): number;
    static get modifierRightControl(): number;
    static get modifierControl(): number;
    static get modifierLeftAlt(): number;
    static get modifierRightAlt(): number;
    static get modifierAlt(): number;
    static get modifierLeftMeta(): number;
    static get modifierRightMeta(): number;
    static get modifierMeta(): number;
}
export { RawKeyEventDataFuchsia };
