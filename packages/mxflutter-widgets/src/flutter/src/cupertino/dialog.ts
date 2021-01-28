//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextStyle } from '../painting/text-style';
import { MultiChildLayoutParentData } from '../rendering/custom-layout';
import { TapDownDetails, TapUpDetails } from '../gestures/tap';
import { Paint, Color, Offset, Canvas } from '../../../mx-dart-sdk';
import { RenderObject, PipelineOwner, PaintingContext } from '../rendering/object';
import { BoxConstraints, RenderBox, BoxHitTestResult } from '../rendering/box';
import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ScrollController } from '../widgets/scroll-controller';
import {
  StatelessWidget$,
  Widget,
  BuildContext$,
  RenderObjectWidget,
  RenderObjectElement,
  Element$,
  StatefulWidget$,
  State$,
  ParentDataWidget,
  MultiChildRenderObjectWidget,
} from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoAlertDialog extends StatelessWidget$ {
  title: MXWidget;
  content: MXWidget;
  actions: Array<any>;
  scrollController: ScrollController;
  actionScrollController: ScrollController;
  insetAnimationDuration: Duration;
  insetAnimationCurve: Curve;
  public constructor(
    namedParameters: {
      key?: Key;
      title?: MXWidget;
      content?: MXWidget;
      actions?: Array<any>;
      scrollController?: ScrollController;
      actionScrollController?: ScrollController;
      insetAnimationDuration?: Duration;
      insetAnimationCurve?: Curve;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.content = namedParameters.content;
    this.actions = namedParameters.actions;
    this.scrollController = namedParameters.scrollController;
    this.actionScrollController = namedParameters.actionScrollController;
    this.insetAnimationDuration = namedParameters.insetAnimationDuration;
    this.insetAnimationCurve = namedParameters.insetAnimationCurve;
    this.className = 'CupertinoAlertDialog';
  }
}
export { CupertinoAlertDialog };
class CupertinoDialog extends StatelessWidget$ {
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'CupertinoDialog';
  }
}
export { CupertinoDialog };
class CupertinoPopupSurface extends StatelessWidget$ {
  isSurfacePainted: boolean;
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; isSurfacePainted?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.isSurfacePainted = namedParameters.isSurfacePainted;
    this.child = namedParameters.child;
    this.className = 'CupertinoPopupSurface';
  }
}
export { CupertinoPopupSurface };
class _CupertinoDialogRenderWidget extends RenderObjectWidget {
  contentSection: MXWidget;
  actionsSection: MXWidget;
  public constructor(namedParameters: { key?: Key; contentSection?: MXWidget; actionsSection?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.contentSection = namedParameters.contentSection;
    this.actionsSection = namedParameters.actionsSection;
    this.className = '_CupertinoDialogRenderWidget';
  }
}
export { _CupertinoDialogRenderWidget };
class _CupertinoDialogRenderElement extends RenderObjectElement {
  contentElement: Element$;
  actionsElement: Element$;
  public constructor(widget?: _CupertinoDialogRenderWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_CupertinoDialogRenderElement';
  }
}
export { _CupertinoDialogRenderElement };
class _RenderCupertinoDialog extends RenderBox {
  contentSection: RenderBox;
  actionsSection: RenderBox;
  isInAccessibilityMode: boolean;
  dividerThickness: number;
  dividerPaint: Paint;
  public constructor(
    namedParameters: {
      contentSection?: RenderBox;
      actionsSection?: RenderBox;
      dividerThickness?: number;
      isInAccessibilityMode?: boolean;
      dividerColor?: Color;
    } = {},
  ) {
    super();
    this.contentSection = namedParameters.contentSection;
    this.actionsSection = namedParameters.actionsSection;
    this.dividerThickness = namedParameters.dividerThickness;
    this.isInAccessibilityMode = namedParameters.isInAccessibilityMode;
    this['dividerColor'] = namedParameters.dividerColor;
    this.className = '_RenderCupertinoDialog';
  }
}
export { _RenderCupertinoDialog };
enum _AlertDialogSections {
  contentSection = '{ "_name": "_AlertDialogSections.contentSection", "index": 0 }',
  actionsSection = '{ "_name": "_AlertDialogSections.actionsSection", "index": 1 }',
}

export { _AlertDialogSections };
class _CupertinoAlertContentSection extends StatelessWidget$ {
  title: MXWidget;
  content: MXWidget;
  scrollController: ScrollController;
  public constructor(
    namedParameters: { key?: Key; title?: MXWidget; content?: MXWidget; scrollController?: ScrollController } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.content = namedParameters.content;
    this.scrollController = namedParameters.scrollController;
    this.className = '_CupertinoAlertContentSection';
  }
}
export { _CupertinoAlertContentSection };
class _CupertinoAlertActionSection extends StatefulWidget$ {
  children: Array<any>;
  scrollController: ScrollController;
  public constructor(namedParameters: { key?: Key; children?: Array<any>; scrollController?: ScrollController } = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.scrollController = namedParameters.scrollController;
    this.className = '_CupertinoAlertActionSection';
  }
}
export { _CupertinoAlertActionSection };
class _CupertinoAlertActionSectionState extends State$ {}
export { _CupertinoAlertActionSectionState };
class _PressableActionButton extends StatefulWidget$ {
  child: MXWidget;
  public constructor(namedParameters: { child?: MXWidget } = {}) {
    super();
    this.child = namedParameters.child;
    this.className = '_PressableActionButton';
  }
}
export { _PressableActionButton };
class _PressableActionButtonState extends State$ {
  isPressed: boolean;
}
export { _PressableActionButtonState };
class _ActionButtonParentDataWidget extends ParentDataWidget {
  isPressed: boolean;
  public constructor(namedParameters: { key?: Key; isPressed?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.isPressed = namedParameters.isPressed;
    this.child = namedParameters.child;
    this.className = '_ActionButtonParentDataWidget';
  }
}
export { _ActionButtonParentDataWidget };
class _ActionButtonParentData extends MultiChildLayoutParentData {
  isPressed: boolean;
  public constructor(namedParameters: { isPressed?: boolean } = {}) {
    super();
    this.isPressed = namedParameters.isPressed;
    this.className = '_ActionButtonParentData';
  }
}
export { _ActionButtonParentData };
class CupertinoDialogAction extends StatelessWidget$ {
  onPressed: any;
  isDefaultAction: boolean;
  isDestructiveAction: boolean;
  textStyle: TextStyle;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      onPressed?: any;
      isDefaultAction?: boolean;
      isDestructiveAction?: boolean;
      textStyle?: TextStyle;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onPressed = namedParameters.onPressed;
    this.isDefaultAction = namedParameters.isDefaultAction;
    this.isDestructiveAction = namedParameters.isDestructiveAction;
    this.textStyle = namedParameters.textStyle;
    this.child = namedParameters.child;
    this.className = 'CupertinoDialogAction';
  }
}
export { CupertinoDialogAction };
class _CupertinoDialogActionsRenderWidget extends MultiChildRenderObjectWidget {
  dividerThickness: number;
  public constructor(namedParameters: { key?: Key; actionButtons?: Array<any>; dividerThickness?: number } = {}) {
    super();
    this.key = namedParameters.key;
    this['actionButtons'] = namedParameters.actionButtons;
    this.dividerThickness = namedParameters.dividerThickness;
    this.className = '_CupertinoDialogActionsRenderWidget';
  }
}
export { _CupertinoDialogActionsRenderWidget };
class _RenderCupertinoDialogActions extends RenderBox {
  dialogWidth: number;
  dividerThickness: number;
  buttonBackgroundPaint: Paint;
  pressedButtonBackgroundPaint: Paint;
  dividerPaint: Paint;
  public constructor(
    namedParameters: {
      children?: Array<any>;
      dialogWidth?: number;
      dividerThickness?: number;
      dialogColor?: Color;
      dialogPressedColor?: Color;
      dividerColor?: Color;
    } = {},
  ) {
    super();
    this['children'] = namedParameters.children;
    this.dialogWidth = namedParameters.dialogWidth;
    this.dividerThickness = namedParameters.dividerThickness;
    this['dialogColor'] = namedParameters.dialogColor;
    this['dialogPressedColor'] = namedParameters.dialogPressedColor;
    this['dividerColor'] = namedParameters.dividerColor;
    this.className = '_RenderCupertinoDialogActions';
  }
}
export { _RenderCupertinoDialogActions };
