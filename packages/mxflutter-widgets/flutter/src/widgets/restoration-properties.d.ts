import { TextEditingController } from './editable-text';
import { TextEditingValue } from '../services/text-input';
import { RestorableProperty } from './restoration';
declare abstract class RestorableValue extends RestorableProperty {
    value: any;
}
export { RestorableValue };
declare class _RestorablePrimitiveValue extends RestorableValue {
    defaultValue: any;
    constructor(_defaultValue?: any);
}
export { _RestorablePrimitiveValue };
declare class RestorableNum extends _RestorablePrimitiveValue {
    constructor(defaultValue?: any);
}
export { RestorableNum };
declare class RestorableDouble extends RestorableNum {
    constructor(defaultValue?: number);
}
export { RestorableDouble };
declare class RestorableInt extends RestorableNum {
    constructor(defaultValue?: number);
}
export { RestorableInt };
declare class RestorableString extends _RestorablePrimitiveValue {
    constructor(defaultValue?: string);
}
export { RestorableString };
declare class RestorableBool extends _RestorablePrimitiveValue {
    constructor(defaultValue?: boolean);
}
export { RestorableBool };
declare abstract class RestorableListenable extends RestorableProperty {
    value: any;
}
export { RestorableListenable };
declare class RestorableTextEditingController extends RestorableListenable {
    initialValue: TextEditingValue;
    controller: TextEditingController;
    constructor(namedParameters?: {
        text?: string;
    });
    static fromValue(value?: TextEditingValue): RestorableTextEditingController;
}
export { RestorableTextEditingController };
