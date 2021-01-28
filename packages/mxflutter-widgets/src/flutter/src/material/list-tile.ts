//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderObject, PipelineOwner, PaintingContext } from '../rendering/object';
import { RenderBox, BoxConstraints, BoxHitTestResult } from '../rendering/box';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { VisualDensity, ThemeData } from './theme-data';
import {
  Widget,
  BuildContext$,
  StatelessWidget$,
  RenderObjectWidget,
  RenderObjectElement,
  Element$,
} from '../widgets/framework';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, TextDirection, TextBaseline, Offset } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ListTileStyle {
  list = '{ "_name": "ListTileStyle.list", "index": 0 }',
  drawer = '{ "_name": "ListTileStyle.drawer", "index": 1 }',
}

export { ListTileStyle };
class ListTileTheme extends InheritedTheme {
  dense: boolean;
  shape: ShapeBorder;
  style: ListTileStyle;
  selectedColor: Color;
  iconColor: Color;
  textColor: Color;
  contentPadding: EdgeInsetsGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      dense?: boolean;
      shape?: ShapeBorder;
      style?: ListTileStyle;
      selectedColor?: Color;
      iconColor?: Color;
      textColor?: Color;
      contentPadding?: EdgeInsetsGeometry;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.dense = namedParameters.dense;
    this.shape = namedParameters.shape;
    this.style = namedParameters.style;
    this.selectedColor = namedParameters.selectedColor;
    this.iconColor = namedParameters.iconColor;
    this.textColor = namedParameters.textColor;
    this.contentPadding = namedParameters.contentPadding;
    this.child = namedParameters.child;
    this.className = 'ListTileTheme';
  }
}
export { ListTileTheme };
enum ListTileControlAffinity {
  leading = '{ "_name": "ListTileControlAffinity.leading", "index": 0 }',
  trailing = '{ "_name": "ListTileControlAffinity.trailing", "index": 1 }',
  platform = '{ "_name": "ListTileControlAffinity.platform", "index": 2 }',
}

export { ListTileControlAffinity };
class ListTile extends StatelessWidget$ {
  leading: MXWidget;
  title: MXWidget;
  subtitle: MXWidget;
  trailing: MXWidget;
  isThreeLine: boolean;
  dense: boolean;
  visualDensity: VisualDensity;
  shape: ShapeBorder;
  contentPadding: EdgeInsetsGeometry;
  enabled: boolean;
  onTap: any;
  onLongPress: any;
  mouseCursor: MouseCursor;
  selected: boolean;
  focusColor: Color;
  hoverColor: Color;
  focusNode: FocusNode;
  autofocus: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      leading?: MXWidget;
      title?: MXWidget;
      subtitle?: MXWidget;
      trailing?: MXWidget;
      isThreeLine?: boolean;
      dense?: boolean;
      visualDensity?: VisualDensity;
      shape?: ShapeBorder;
      contentPadding?: EdgeInsetsGeometry;
      enabled?: boolean;
      onTap?: any;
      onLongPress?: any;
      mouseCursor?: MouseCursor;
      selected?: boolean;
      focusColor?: Color;
      hoverColor?: Color;
      focusNode?: FocusNode;
      autofocus?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.trailing = namedParameters.trailing;
    this.isThreeLine = namedParameters.isThreeLine;
    this.dense = namedParameters.dense;
    this.visualDensity = namedParameters.visualDensity;
    this.shape = namedParameters.shape;
    this.contentPadding = namedParameters.contentPadding;
    this.enabled = namedParameters.enabled;
    this.onTap = namedParameters.onTap;
    this.onLongPress = namedParameters.onLongPress;
    this.mouseCursor = namedParameters.mouseCursor;
    this.selected = namedParameters.selected;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.className = 'ListTile';
  }
}
export { ListTile };
enum _ListTileSlot {
  leading = '{ "_name": "_ListTileSlot.leading", "index": 0 }',
  title = '{ "_name": "_ListTileSlot.title", "index": 1 }',
  subtitle = '{ "_name": "_ListTileSlot.subtitle", "index": 2 }',
  trailing = '{ "_name": "_ListTileSlot.trailing", "index": 3 }',
}

export { _ListTileSlot };
class _ListTile extends RenderObjectWidget {
  leading: MXWidget;
  title: MXWidget;
  subtitle: MXWidget;
  trailing: MXWidget;
  isThreeLine: boolean;
  isDense: boolean;
  visualDensity: VisualDensity;
  textDirection: TextDirection;
  titleBaselineType: TextBaseline;
  subtitleBaselineType: TextBaseline;
  public constructor(
    namedParameters: {
      key?: Key;
      leading?: MXWidget;
      title?: MXWidget;
      subtitle?: MXWidget;
      trailing?: MXWidget;
      isThreeLine?: boolean;
      isDense?: boolean;
      visualDensity?: VisualDensity;
      textDirection?: TextDirection;
      titleBaselineType?: TextBaseline;
      subtitleBaselineType?: TextBaseline;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.trailing = namedParameters.trailing;
    this.isThreeLine = namedParameters.isThreeLine;
    this.isDense = namedParameters.isDense;
    this.visualDensity = namedParameters.visualDensity;
    this.textDirection = namedParameters.textDirection;
    this.titleBaselineType = namedParameters.titleBaselineType;
    this.subtitleBaselineType = namedParameters.subtitleBaselineType;
    this.className = '_ListTile';
  }
}
export { _ListTile };
class _ListTileElement extends RenderObjectElement {
  slotToChild: Map<any, any>;
  childToSlot: Map<any, any>;
  public constructor(widget?: _ListTile) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_ListTileElement';
  }
}
export { _ListTileElement };
class _RenderListTile extends RenderBox {
  slotToChild: Map<any, any>;
  childToSlot: Map<any, any>;
  leading: RenderBox;
  title: RenderBox;
  subtitle: RenderBox;
  trailing: RenderBox;
  isDense: boolean;
  visualDensity: VisualDensity;
  isThreeLine: boolean;
  textDirection: TextDirection;
  titleBaselineType: TextBaseline;
  subtitleBaselineType: TextBaseline;
  public constructor(
    namedParameters: {
      isDense?: boolean;
      visualDensity?: VisualDensity;
      isThreeLine?: boolean;
      textDirection?: TextDirection;
      titleBaselineType?: TextBaseline;
      subtitleBaselineType?: TextBaseline;
    } = {},
  ) {
    super();
    this.isDense = namedParameters.isDense;
    this.visualDensity = namedParameters.visualDensity;
    this.isThreeLine = namedParameters.isThreeLine;
    this.textDirection = namedParameters.textDirection;
    this.titleBaselineType = namedParameters.titleBaselineType;
    this.subtitleBaselineType = namedParameters.subtitleBaselineType;
    this.className = '_RenderListTile';
  }
}
export { _RenderListTile };
