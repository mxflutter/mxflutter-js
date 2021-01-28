import { Size } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum BoxFit {
    fill = "{ \"_name\": \"BoxFit.fill\", \"index\": 0 }",
    contain = "{ \"_name\": \"BoxFit.contain\", \"index\": 1 }",
    cover = "{ \"_name\": \"BoxFit.cover\", \"index\": 2 }",
    fitWidth = "{ \"_name\": \"BoxFit.fitWidth\", \"index\": 3 }",
    fitHeight = "{ \"_name\": \"BoxFit.fitHeight\", \"index\": 4 }",
    none = "{ \"_name\": \"BoxFit.none\", \"index\": 5 }",
    scaleDown = "{ \"_name\": \"BoxFit.scaleDown\", \"index\": 6 }"
}
export { BoxFit };
declare class FittedSizes extends MXDartClass {
    source: Size;
    destination: Size;
    constructor(source?: Size, destination?: Size);
}
export { FittedSizes };
