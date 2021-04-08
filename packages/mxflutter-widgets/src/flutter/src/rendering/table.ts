// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ImageConfiguration } from '../painting/image-provider';
import { TableBorder } from './table-border';
import { TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { BoxParentData, RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TableCellParentData extends BoxParentData {
  verticalAlignment: TableCellVerticalAlignment;
  x: number;
  y: number;
}
export { TableCellParentData };
abstract class TableColumnWidth extends MXDartClass {}
export { TableColumnWidth };
class IntrinsicColumnWidth extends TableColumnWidth {
  flex: number;
  public constructor(namedParameters: {flex?: number} = {}) {
    super();
    this.flex = namedParameters.flex;
    this.className = 'IntrinsicColumnWidth';
  }
}
export { IntrinsicColumnWidth };
class FixedColumnWidth extends TableColumnWidth {
  value: number;
  public constructor(value?: number) {
    super();
    this.value = value;
    this.className = 'FixedColumnWidth';
  }
}
export { FixedColumnWidth };
class FractionColumnWidth extends TableColumnWidth {
  value: number;
  public constructor(value?: number) {
    super();
    this.value = value;
    this.className = 'FractionColumnWidth';
  }
}
export { FractionColumnWidth };
class FlexColumnWidth extends TableColumnWidth {
  value: number;
  public constructor(value?: number) {
    super();
    this.value = value;
    this.className = 'FlexColumnWidth';
  }
}
export { FlexColumnWidth };
class MaxColumnWidth extends TableColumnWidth {
  a: TableColumnWidth;
  b: TableColumnWidth;
  public constructor(a?: TableColumnWidth, b?: TableColumnWidth) {
    super();
    this.a = a;
    this.b = b;
    this.className = 'MaxColumnWidth';
  }
}
export { MaxColumnWidth };
class MinColumnWidth extends TableColumnWidth {
  a: TableColumnWidth;
  b: TableColumnWidth;
  public constructor(a?: TableColumnWidth, b?: TableColumnWidth) {
    super();
    this.a = a;
    this.b = b;
    this.className = 'MinColumnWidth';
  }
}
export { MinColumnWidth };
enum TableCellVerticalAlignment {
  top = '{ "_name": "TableCellVerticalAlignment.top", "index": 0 }',
  middle = '{ "_name": "TableCellVerticalAlignment.middle", "index": 1 }',
  bottom = '{ "_name": "TableCellVerticalAlignment.bottom", "index": 2 }',
  baseline = '{ "_name": "TableCellVerticalAlignment.baseline", "index": 3 }',
  fill = '{ "_name": "TableCellVerticalAlignment.fill", "index": 4 }',
};

export { TableCellVerticalAlignment };
class RenderTable extends RenderBox {
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
  public constructor(namedParameters: {columns?: number, rows?: number, columnWidths?: Map<any, any>, defaultColumnWidth?: TableColumnWidth, textDirection?: TextDirection, border?: TableBorder, rowDecorations?: Array<any>, configuration?: ImageConfiguration, defaultVerticalAlignment?: TableCellVerticalAlignment, textBaseline?: TextBaseline, children?: Array<any>} = {}) {
    super();
    this.columns = namedParameters.columns;
    this.rows = namedParameters.rows;
    this.columnWidths = namedParameters.columnWidths;
    this.defaultColumnWidth = namedParameters.defaultColumnWidth;
    this.textDirection = namedParameters.textDirection;
    this.border = namedParameters.border;
    this.rowDecorations = namedParameters.rowDecorations;
    this.configuration = namedParameters.configuration;
    this.defaultVerticalAlignment = namedParameters.defaultVerticalAlignment;
    this.textBaseline = namedParameters.textBaseline;
    this.children = namedParameters.children;
    this.className = 'RenderTable';
  }
}
export { RenderTable };
