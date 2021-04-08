import { Key } from '../foundation/key';
import { IconThemeData } from './icon-theme-data';
import { InheritedTheme } from './inherited-theme';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class IconTheme extends InheritedTheme {
    data: IconThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: IconThemeData;
        child?: MXWidget;
    });
    static of(context: any): IconThemeData;
}
export { IconTheme };
