import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class FontLoader extends MXDartClass {
    family: string;
    loaded: boolean;
    fontFutures: Array<any>;
    constructor(family?: string);
}
export { FontLoader };
