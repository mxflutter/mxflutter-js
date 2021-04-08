import { Key } from '../foundation/key';
import { InheritedWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class ScrollBehavior extends MXDartClass {
}
export { ScrollBehavior };
declare class ScrollConfiguration extends InheritedWidget {
    behavior: ScrollBehavior;
    constructor(namedParameters?: {
        key?: Key;
        behavior?: ScrollBehavior;
        child?: MXWidget;
    });
}
export { ScrollConfiguration };
