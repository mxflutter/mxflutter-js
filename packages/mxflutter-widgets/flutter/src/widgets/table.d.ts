import { TableBorder } from '../rendering/table-border';
import { TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { TableColumnWidth, TableCellVerticalAlignment } from '../rendering/table';
import { RenderObjectWidget, RenderObjectElement, ParentDataWidget } from './framework';
import { Decoration } from '../painting/decoration';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class TableRow extends MXDartClass {
    key: LocalKey;
    decoration: Decoration;
    children: Array<any>;
    constructor(namedParameters?: {
        key?: LocalKey;
        decoration?: Decoration;
        children?: Array<any>;
    });
}
export { TableRow };
declare class _TableElementRow extends MXDartClass {
    key: LocalKey;
    children: Array<any>;
    constructor(namedParameters?: {
        key?: LocalKey;
        children?: Array<any>;
    });
}
export { _TableElementRow };
declare class Table extends RenderObjectWidget {
    children: Array<any>;
    columnWidths: Map<any, any>;
    defaultColumnWidth: TableColumnWidth;
    textDirection: TextDirection;
    border: TableBorder;
    defaultVerticalAlignment: TableCellVerticalAlignment;
    textBaseline: TextBaseline;
    rowDecorations: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        columnWidths?: Map<any, any>;
        defaultColumnWidth?: TableColumnWidth;
        textDirection?: TextDirection;
        border?: TableBorder;
        defaultVerticalAlignment?: TableCellVerticalAlignment;
        textBaseline?: TextBaseline;
    });
}
export { Table };
declare class _TableElement extends RenderObjectElement {
    children: Array<any>;
    forgottenChildren: Set<any>;
    constructor(widget?: Table);
}
export { _TableElement };
declare class TableCell extends ParentDataWidget {
    verticalAlignment: TableCellVerticalAlignment;
    constructor(namedParameters?: {
        key?: Key;
        verticalAlignment?: TableCellVerticalAlignment;
        child?: MXWidget;
    });
}
export { TableCell };
