import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class Priority extends MXDartClass {
    value: number;
    static get idle(): Priority;
    static get animation(): Priority;
    static get touch(): Priority;
    static get kMaxOffset(): number;
}
export { Priority };
