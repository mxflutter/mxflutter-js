//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Animation, AnimationStatus } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Duration } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { InkResponse } from './ink-well';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { MaterialStateProperty } from './material-state';
import { LocalKey, Key } from '../foundation/key';
import { Widget, StatelessWidget$, BuildContext$, StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DataColumn extends MXDartClass {
  label: MXWidget;
  tooltip: string;
  numeric: boolean;
  onSort: any;
  public constructor(namedParameters: { label?: MXWidget; tooltip?: string; numeric?: boolean; onSort?: any } = {}) {
    super();
    this.label = namedParameters.label;
    this.tooltip = namedParameters.tooltip;
    this.numeric = namedParameters.numeric;
    this.onSort = namedParameters.onSort;
    this.className = 'DataColumn';
  }
}
export { DataColumn };
class DataRow extends MXDartClass {
  key: LocalKey;
  onSelectChanged: any;
  selected: boolean;
  cells: Array<any>;
  color: MaterialStateProperty;
  public constructor(
    namedParameters: {
      key?: LocalKey;
      selected?: boolean;
      onSelectChanged?: any;
      color?: MaterialStateProperty;
      cells?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selected = namedParameters.selected;
    this.onSelectChanged = namedParameters.onSelectChanged;
    this.color = namedParameters.color;
    this.cells = namedParameters.cells;
    this.className = 'DataRow';
  }
  static byIndex(
    namedParameters: {
      index?: number;
      selected?: boolean;
      onSelectChanged?: any;
      color?: MaterialStateProperty;
      cells?: Array<any>;
    } = {},
  ) {
    var jsObj = new DataRow();
    jsObj['index'] = namedParameters.index;
    jsObj.selected = namedParameters.selected;
    jsObj.onSelectChanged = namedParameters.onSelectChanged;
    jsObj.color = namedParameters.color;
    jsObj.cells = namedParameters.cells;
    jsObj['constructorName'] = 'byIndex';
    return jsObj;
  }
}
export { DataRow };
class DataCell extends MXDartClass {
  child: MXWidget;
  placeholder: boolean;
  showEditIcon: boolean;
  onTap: any;
  public constructor(
    child?: MXWidget,
    namedParameters: { placeholder?: boolean; showEditIcon?: boolean; onTap?: any } = {},
  ) {
    super();
    this.child = child;
    this.placeholder = namedParameters.placeholder;
    this.showEditIcon = namedParameters.showEditIcon;
    this.onTap = namedParameters.onTap;
    this.className = 'DataCell';
  }
  static get empty() {
    var jsObj = new DataCell();
    jsObj['className'] = 'DataCell';
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
}
export { DataCell };
class DataTable extends StatelessWidget$ {
  columns: Array<any>;
  sortColumnIndex: number;
  sortAscending: boolean;
  onSelectAll: any;
  dataRowHeight: number;
  headingRowHeight: number;
  horizontalMargin: number;
  columnSpacing: number;
  showCheckboxColumn: boolean;
  rows: Array<any>;
  onlyTextColumn: number;
  dividerThickness: number;
  public constructor(
    namedParameters: {
      key?: Key;
      columns?: Array<any>;
      sortColumnIndex?: number;
      sortAscending?: boolean;
      onSelectAll?: any;
      dataRowHeight?: number;
      headingRowHeight?: number;
      horizontalMargin?: number;
      columnSpacing?: number;
      showCheckboxColumn?: boolean;
      dividerThickness?: number;
      rows?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.columns = namedParameters.columns;
    this.sortColumnIndex = namedParameters.sortColumnIndex;
    this.sortAscending = namedParameters.sortAscending;
    this.onSelectAll = namedParameters.onSelectAll;
    this.dataRowHeight = namedParameters.dataRowHeight;
    this.headingRowHeight = namedParameters.headingRowHeight;
    this.horizontalMargin = namedParameters.horizontalMargin;
    this.columnSpacing = namedParameters.columnSpacing;
    this.showCheckboxColumn = namedParameters.showCheckboxColumn;
    this.dividerThickness = namedParameters.dividerThickness;
    this.rows = namedParameters.rows;
    this.className = 'DataTable';
  }
}
export { DataTable };
class TableRowInkWell extends InkResponse {
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      onTap?: any;
      onDoubleTap?: any;
      onLongPress?: any;
      onHighlightChanged?: any;
      overlayColor?: MaterialStateProperty;
    } = {},
  ) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this['onTap'] = namedParameters.onTap;
    this['onDoubleTap'] = namedParameters.onDoubleTap;
    this['onLongPress'] = namedParameters.onLongPress;
    this['onHighlightChanged'] = namedParameters.onHighlightChanged;
    this['overlayColor'] = namedParameters.overlayColor;
    this.className = 'TableRowInkWell';
  }
}
export { TableRowInkWell };
class _SortArrow extends StatefulWidget$ {
  visible: boolean;
  down: boolean;
  duration: Duration;
  public constructor(namedParameters: { key?: Key; visible?: boolean; down?: boolean; duration?: Duration } = {}) {
    super();
    this.key = namedParameters.key;
    this.visible = namedParameters.visible;
    this.down = namedParameters.down;
    this.duration = namedParameters.duration;
    this.className = '_SortArrow';
  }
}
export { _SortArrow };
class _SortArrowState extends State$ {
  opacityController: AnimationController;
  opacityAnimation: Animation;
  orientationController: AnimationController;
  orientationAnimation: Animation;
  orientationOffset: number;
  down: boolean;
}
export { _SortArrowState };
