import { ImageConfiguration } from '../painting/image-provider';
import { TableBorder } from './table-border';
import { TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { BoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TableCellParentData extends BoxParentData {
    verticalAlignment: TableCellVerticalAlignment;
    x: number;
    y: number;
}
export { TableCellParentData };
declare abstract class TableColumnWidth extends MXDartClass {
}
export { TableColumnWidth };
declare class IntrinsicColumnWidth extends TableColumnWidth {
    flex: number;
    constructor(namedParameters?: {
        flex?: number;
    });
}
export { IntrinsicColumnWidth };
declare class FixedColumnWidth extends TableColumnWidth {
    value: number;
    constructor(value?: number);
}
export { FixedColumnWidth };
declare class FractionColumnWidth extends TableColumnWidth {
    value: number;
    constructor(value?: number);
}
export { FractionColumnWidth };
declare class FlexColumnWidth extends TableColumnWidth {
    value: number;
    constructor(value?: number);
}
export { FlexColumnWidth };
declare class MaxColumnWidth extends TableColumnWidth {
    a: TableColumnWidth;
    b: TableColumnWidth;
    constructor(a?: TableColumnWidth, b?: TableColumnWidth);
}
export { MaxColumnWidth };
declare class MinColumnWidth extends TableColumnWidth {
    a: TableColumnWidth;
    b: TableColumnWidth;
    constructor(a?: TableColumnWidth, b?: TableColumnWidth);
}
export { MinColumnWidth };
declare enum TableCellVerticalAlignment {
    top = "{ \"_name\": \"TableCellVerticalAlignment.top\", \"index\": 0 }",
    middle = "{ \"_name\": \"TableCellVerticalAlignment.middle\", \"index\": 1 }",
    bottom = "{ \"_name\": \"TableCellVerticalAlignment.bottom\", \"index\": 2 }",
    baseline = "{ \"_name\": \"TableCellVerticalAlignment.baseline\", \"index\": 3 }",
    fill = "{ \"_name\": \"TableCellVerticalAlignment.fill\", \"index\": 4 }"
}
export { TableCellVerticalAlignment };
declare class RenderTable extends RenderBox {
    children: Array<any>;
    columns: number;
    rows: number;
    columnWidths: Map<any, any>;
    defaultColumnWidth: TableColumnWidth;
    textDirection: TextDirection;
    border: TableBorder;
    rowDecorations: Array<any>;
    rowDecorationPainters: Array<any>;
    configuration: ImageConfiguration;
    defaultVerticalAlignment: TableCellVerticalAlignment;
    textBaseline: TextBaseline;
    baselineDistance: number;
    rowTops: Array<any>;
    columnLefts: any;
    constructor(namedParameters?: {
        columns?: number;
        rows?: number;
        columnWidths?: Map<any, any>;
        defaultColumnWidth?: TableColumnWidth;
        textDirection?: TextDirection;
        border?: TableBorder;
        rowDecorations?: Array<any>;
        configuration?: ImageConfiguration;
        defaultVerticalAlignment?: TableCellVerticalAlignment;
        textBaseline?: TextBaseline;
        children?: Array<any>;
    });
}
export { RenderTable };
