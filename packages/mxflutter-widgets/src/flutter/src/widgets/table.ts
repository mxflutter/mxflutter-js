//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { RenderObject } from '../rendering/object';
import { TableBorder } from '../rendering/table-border';
import { TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { TableColumnWidth, TableCellVerticalAlignment, RenderTable } from '../rendering/table';
import {
  RenderObjectWidget,
  BuildContext$,
  RenderObjectElement,
  Element$,
  Widget,
  IndexedSlot,
  ParentDataWidget,
} from './framework';
import { Decoration } from '../painting/decoration';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TableRow extends MXDartClass {
  key: LocalKey;
  decoration: Decoration;
  children: Array<any>;
  public constructor(namedParameters: { key?: LocalKey; decoration?: Decoration; children?: Array<any> } = {}) {
    super();
    this.key = namedParameters.key;
    this.decoration = namedParameters.decoration;
    this.children = namedParameters.children;
    this.className = 'TableRow';
  }
}
export { TableRow };
class _TableElementRow extends MXDartClass {
  key: LocalKey;
  children: Array<any>;
  public constructor(namedParameters: { key?: LocalKey; children?: Array<any> } = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.className = '_TableElementRow';
  }
}
export { _TableElementRow };
class Table extends RenderObjectWidget {
  children: Array<any>;
  columnWidths: Map<any, any>;
  defaultColumnWidth: TableColumnWidth;
  textDirection: TextDirection;
  border: TableBorder;
  defaultVerticalAlignment: TableCellVerticalAlignment;
  textBaseline: TextBaseline;
  rowDecorations: Array<any>;
  public constructor(
    namedParameters: {
      key?: Key;
      children?: Array<any>;
      columnWidths?: Map<any, any>;
      defaultColumnWidth?: TableColumnWidth;
      textDirection?: TextDirection;
      border?: TableBorder;
      defaultVerticalAlignment?: TableCellVerticalAlignment;
      textBaseline?: TextBaseline;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.columnWidths = namedParameters.columnWidths;
    this.defaultColumnWidth = namedParameters.defaultColumnWidth;
    this.textDirection = namedParameters.textDirection;
    this.border = namedParameters.border;
    this.defaultVerticalAlignment = namedParameters.defaultVerticalAlignment;
    this.textBaseline = namedParameters.textBaseline;
    this.className = 'Table';
  }
}
export { Table };
class _TableElement extends RenderObjectElement {
  children: Array<any>;
  forgottenChildren: Set<any>;
  public constructor(widget?: Table) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_TableElement';
  }
}
export { _TableElement };
class TableCell extends ParentDataWidget {
  verticalAlignment: TableCellVerticalAlignment;
  public constructor(
    namedParameters: { key?: Key; verticalAlignment?: TableCellVerticalAlignment; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.verticalAlignment = namedParameters.verticalAlignment;
    this.child = namedParameters.child;
    this.className = 'TableCell';
  }
}
export { TableCell };
