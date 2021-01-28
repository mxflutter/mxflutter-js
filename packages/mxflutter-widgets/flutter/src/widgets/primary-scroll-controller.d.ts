import { Key } from '../foundation/key';
import { ScrollController } from './scroll-controller';
import { InheritedWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class PrimaryScrollController extends InheritedWidget {
    controller: ScrollController;
    constructor(namedParameters?: {
        key?: Key;
        controller?: ScrollController;
        child?: MXWidget;
    });
    static none(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    }): PrimaryScrollController;
}
export { PrimaryScrollController };
