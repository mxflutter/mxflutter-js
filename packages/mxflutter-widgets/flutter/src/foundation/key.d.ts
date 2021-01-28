import { MXBaseKey } from '@mxflutter/mxflutter-base';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class Key extends MXBaseKey {
    constructor(value?: string);
    toString(): string;
}
export { Key };
declare abstract class LocalKey extends Key {
}
export { LocalKey };
declare class ValueKey extends LocalKey {
    value: any;
    constructor(value?: any);
}
export { ValueKey };
declare class _TypeLiteral extends MXDartClass {
}
export { _TypeLiteral };
