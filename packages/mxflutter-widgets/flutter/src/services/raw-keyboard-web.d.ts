import { RawKeyEventData } from './raw-keyboard';
declare class RawKeyEventDataWeb extends RawKeyEventData {
    code: string;
    key: string;
    metaState: number;
    constructor(namedParameters?: {
        code?: string;
        key?: string;
        metaState?: number;
    });
    static get modifierNone(): number;
    static get modifierShift(): number;
    static get modifierAlt(): number;
    static get modifierControl(): number;
    static get modifierMeta(): number;
    static get modifierNumLock(): number;
    static get modifierCapsLock(): number;
    static get modifierScrollLock(): number;
}
export { RawKeyEventDataWeb };
