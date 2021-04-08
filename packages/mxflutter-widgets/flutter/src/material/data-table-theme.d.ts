import { Key } from '../foundation/key';
import { InheritedWidget } from '../widgets/framework';
import { TextStyle } from '../painting/text-style';
import { MaterialStateProperty } from './material-state';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class DataTableThemeData extends MXDartClass {
    dataRowColor: MaterialStateProperty;
    dataRowHeight: number;
    dataTextStyle: TextStyle;
    headingRowColor: MaterialStateProperty;
    headingRowHeight: number;
    headingTextStyle: TextStyle;
    horizontalMargin: number;
    columnSpacing: number;
    dividerThickness: number;
    constructor(namedParameters?: {
        dataRowColor?: MaterialStateProperty;
        dataRowHeight?: number;
        dataTextStyle?: TextStyle;
        headingRowColor?: MaterialStateProperty;
        headingRowHeight?: number;
        headingTextStyle?: TextStyle;
        horizontalMargin?: number;
        columnSpacing?: number;
        dividerThickness?: number;
    });
}
export { DataTableThemeData };
declare class _LerpProperties extends MXDartClass {
    a: MaterialStateProperty;
    b: MaterialStateProperty;
    t: number;
    lerpFunction: any;
    constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number, lerpFunction?: any);
}
export { _LerpProperties };
declare class DataTableTheme extends InheritedWidget {
    data: DataTableThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: DataTableThemeData;
        child?: MXWidget;
    });
}
export { DataTableTheme };
