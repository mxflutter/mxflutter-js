//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { VerticalDirection } from '../painting/basic-types';
import { TextStyle } from '../painting/text-style';
import { Key } from '../foundation/key';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { Color, Clip } from '../../../mx-dart-sdk';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Dialog extends StatelessWidget$ {
  backgroundColor: Color;
  elevation: number;
  insetAnimationDuration: Duration;
  insetAnimationCurve: Curve;
  insetPadding: EdgeInsets;
  clipBehavior: Clip;
  shape: ShapeBorder;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      backgroundColor?: Color;
      elevation?: number;
      insetAnimationDuration?: Duration;
      insetAnimationCurve?: Curve;
      insetPadding?: EdgeInsets;
      clipBehavior?: Clip;
      shape?: ShapeBorder;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.insetAnimationDuration = namedParameters.insetAnimationDuration;
    this.insetAnimationCurve = namedParameters.insetAnimationCurve;
    this.insetPadding = namedParameters.insetPadding;
    this.clipBehavior = namedParameters.clipBehavior;
    this.shape = namedParameters.shape;
    this.child = namedParameters.child;
    this.className = 'Dialog';
  }
}
export { Dialog };
class AlertDialog extends StatelessWidget$ {
  title: MXWidget;
  titlePadding: EdgeInsetsGeometry;
  titleTextStyle: TextStyle;
  content: MXWidget;
  contentPadding: EdgeInsetsGeometry;
  contentTextStyle: TextStyle;
  actions: Array<any>;
  actionsPadding: EdgeInsetsGeometry;
  actionsOverflowDirection: VerticalDirection;
  actionsOverflowButtonSpacing: number;
  buttonPadding: EdgeInsetsGeometry;
  backgroundColor: Color;
  elevation: number;
  semanticLabel: string;
  insetPadding: EdgeInsets;
  clipBehavior: Clip;
  shape: ShapeBorder;
  scrollable: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      title?: MXWidget;
      titlePadding?: EdgeInsetsGeometry;
      titleTextStyle?: TextStyle;
      content?: MXWidget;
      contentPadding?: EdgeInsetsGeometry;
      contentTextStyle?: TextStyle;
      actions?: Array<any>;
      actionsPadding?: EdgeInsetsGeometry;
      actionsOverflowDirection?: VerticalDirection;
      actionsOverflowButtonSpacing?: number;
      buttonPadding?: EdgeInsetsGeometry;
      backgroundColor?: Color;
      elevation?: number;
      semanticLabel?: string;
      insetPadding?: EdgeInsets;
      clipBehavior?: Clip;
      shape?: ShapeBorder;
      scrollable?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.titlePadding = namedParameters.titlePadding;
    this.titleTextStyle = namedParameters.titleTextStyle;
    this.content = namedParameters.content;
    this.contentPadding = namedParameters.contentPadding;
    this.contentTextStyle = namedParameters.contentTextStyle;
    this.actions = namedParameters.actions;
    this.actionsPadding = namedParameters.actionsPadding;
    this.actionsOverflowDirection = namedParameters.actionsOverflowDirection;
    this.actionsOverflowButtonSpacing = namedParameters.actionsOverflowButtonSpacing;
    this.buttonPadding = namedParameters.buttonPadding;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.semanticLabel = namedParameters.semanticLabel;
    this.insetPadding = namedParameters.insetPadding;
    this.clipBehavior = namedParameters.clipBehavior;
    this.shape = namedParameters.shape;
    this.scrollable = namedParameters.scrollable;
    this.className = 'AlertDialog';
  }
}
export { AlertDialog };
class SimpleDialogOption extends StatelessWidget$ {
  onPressed: any;
  child: MXWidget;
  padding: EdgeInsets;
  public constructor(namedParameters: { key?: Key; onPressed?: any; padding?: EdgeInsets; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.onPressed = namedParameters.onPressed;
    this.padding = namedParameters.padding;
    this.child = namedParameters.child;
    this.className = 'SimpleDialogOption';
  }
}
export { SimpleDialogOption };
class SimpleDialog extends StatelessWidget$ {
  title: MXWidget;
  titlePadding: EdgeInsetsGeometry;
  titleTextStyle: TextStyle;
  children: Array<any>;
  contentPadding: EdgeInsetsGeometry;
  backgroundColor: Color;
  elevation: number;
  semanticLabel: string;
  shape: ShapeBorder;
  public constructor(
    namedParameters: {
      key?: Key;
      title?: MXWidget;
      titlePadding?: EdgeInsetsGeometry;
      titleTextStyle?: TextStyle;
      children?: Array<any>;
      contentPadding?: EdgeInsetsGeometry;
      backgroundColor?: Color;
      elevation?: number;
      semanticLabel?: string;
      shape?: ShapeBorder;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.titlePadding = namedParameters.titlePadding;
    this.titleTextStyle = namedParameters.titleTextStyle;
    this.children = namedParameters.children;
    this.contentPadding = namedParameters.contentPadding;
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.semanticLabel = namedParameters.semanticLabel;
    this.shape = namedParameters.shape;
    this.className = 'SimpleDialog';
  }
}
export { SimpleDialog };
