import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class AbstractNode extends MXDartClass {
    depth: number;
    owner: any;
    parent: AbstractNode;
}
export { AbstractNode };
