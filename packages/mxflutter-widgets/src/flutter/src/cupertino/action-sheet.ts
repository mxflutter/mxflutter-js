//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MultiChildLayoutParentData } from '../rendering/custom-layout';
import { Paint, Color, Offset, Canvas } from '../../../mx-dart-sdk';
import { RenderBox, BoxHitTestResult } from '../rendering/box';
import { RenderObject, PipelineOwner, PaintingContext } from '../rendering/object';
import { TapDownDetails, TapUpDetails } from '../gestures/tap';
import { Key } from '../foundation/key';
import { ScrollController } from '../widgets/scroll-controller';
import {
  StatelessWidget$,
  Widget,
  BuildContext$,
  StatefulWidget$,
  State$,
  RenderObjectWidget,
  RenderObjectElement,
  Element$,
  ParentDataWidget,
  MultiChildRenderObjectWidget,
} from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoActionSheet extends StatelessWidget$ {
  title: MXWidget;
  message: MXWidget;
  actions: Array<any>;
  messageScrollController: ScrollController;
  actionScrollController: ScrollController;
  cancelButton: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      title?: MXWidget;
      message?: MXWidget;
      actions?: Array<any>;
      messageScrollController?: ScrollController;
      actionScrollController?: ScrollController;
      cancelButton?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.message = namedParameters.message;
    this.actions = namedParameters.actions;
    this.messageScrollController = namedParameters.messageScrollController;
    this.actionScrollController = namedParameters.actionScrollController;
    this.cancelButton = namedParameters.cancelButton;
    this.className = 'CupertinoActionSheet';
  }
}
export { CupertinoActionSheet };
class CupertinoActionSheetAction extends StatelessWidget$ {
  onPressed: any;
  isDefaultAction: boolean;
  isDestructiveAction: boolean;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      onPressed?: any;
      isDefaultAction?: boolean;
      isDestructiveAction?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onPressed = namedParameters.onPressed;
    this.isDefaultAction = namedParameters.isDefaultAction;
    this.isDestructiveAction = namedParameters.isDestructiveAction;
    this.child = namedParameters.child;
    this.className = 'CupertinoActionSheetAction';
  }
}
export { CupertinoActionSheetAction };
class _CupertinoActionSheetCancelButton extends StatefulWidget$ {
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = '_CupertinoActionSheetCancelButton';
  }
}
export { _CupertinoActionSheetCancelButton };
class _CupertinoActionSheetCancelButtonState extends State$ {
  isBeingPressed: boolean;
}
export { _CupertinoActionSheetCancelButtonState };
class _CupertinoAlertRenderWidget extends RenderObjectWidget {
  contentSection: MXWidget;
  actionsSection: MXWidget;
  public constructor(namedParameters: { key?: Key; contentSection?: MXWidget; actionsSection?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.contentSection = namedParameters.contentSection;
    this.actionsSection = namedParameters.actionsSection;
    this.className = '_CupertinoAlertRenderWidget';
  }
}
export { _CupertinoAlertRenderWidget };
class _CupertinoAlertRenderElement extends RenderObjectElement {
  contentElement: Element$;
  actionsElement: Element$;
  public constructor(widget?: _CupertinoAlertRenderWidget) {
    super();
    this['__mx_widget'] = widget;
    this.className = '_CupertinoAlertRenderElement';
  }
}
export { _CupertinoAlertRenderElement };
class _RenderCupertinoAlert extends RenderBox {
  contentSection: RenderBox;
  actionsSection: RenderBox;
  dividerThickness: number;
  dividerPaint: Paint;
  public constructor(
    namedParameters: {
      contentSection?: RenderBox;
      actionsSection?: RenderBox;
      dividerThickness?: number;
      dividerColor?: Color;
    } = {},
  ) {
    super();
    this.contentSection = namedParameters.contentSection;
    this.actionsSection = namedParameters.actionsSection;
    this.dividerThickness = namedParameters.dividerThickness;
    this['dividerColor'] = namedParameters.dividerColor;
    this.className = '_RenderCupertinoAlert';
  }
}
export { _RenderCupertinoAlert };
enum _AlertSections {
  contentSection = '{ "_name": "_AlertSections.contentSection", "index": 0 }',
  actionsSection = '{ "_name": "_AlertSections.actionsSection", "index": 1 }',
}

export { _AlertSections };
class _CupertinoAlertContentSection extends StatelessWidget$ {
  title: MXWidget;
  message: MXWidget;
  scrollController: ScrollController;
  public constructor(
    namedParameters: { key?: Key; title?: MXWidget; message?: MXWidget; scrollController?: ScrollController } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.message = namedParameters.message;
    this.scrollController = namedParameters.scrollController;
    this.className = '_CupertinoAlertContentSection';
  }
}
export { _CupertinoAlertContentSection };
class _CupertinoAlertActionSection extends StatefulWidget$ {
  children: Array<any>;
  scrollController: ScrollController;
  hasCancelButton: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      children?: Array<any>;
      scrollController?: ScrollController;
      hasCancelButton?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.scrollController = namedParameters.scrollController;
    this.hasCancelButton = namedParameters.hasCancelButton;
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
class _CupertinoAlertActionsRenderWidget extends MultiChildRenderObjectWidget {
  dividerThickness: number;
  hasCancelButton: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      actionButtons?: Array<any>;
      dividerThickness?: number;
      hasCancelButton?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this['actionButtons'] = namedParameters.actionButtons;
    this.dividerThickness = namedParameters.dividerThickness;
    this.hasCancelButton = namedParameters.hasCancelButton;
    this.className = '_CupertinoAlertActionsRenderWidget';
  }
}
export { _CupertinoAlertActionsRenderWidget };
class _RenderCupertinoAlertActions extends RenderBox {
  dividerThickness: number;
  hasCancelButton: boolean;
  buttonBackgroundPaint: Paint;
  pressedButtonBackgroundPaint: Paint;
  dividerPaint: Paint;
  public constructor(
    namedParameters: {
      children?: Array<any>;
      dividerThickness?: number;
      dividerColor?: Color;
      hasCancelButton?: boolean;
      backgroundColor?: Color;
      pressedColor?: Color;
    } = {},
  ) {
    super();
    this['children'] = namedParameters.children;
    this.dividerThickness = namedParameters.dividerThickness;
    this['dividerColor'] = namedParameters.dividerColor;
    this.hasCancelButton = namedParameters.hasCancelButton;
    this['backgroundColor'] = namedParameters.backgroundColor;
    this['pressedColor'] = namedParameters.pressedColor;
    this.className = '_RenderCupertinoAlertActions';
  }
}
export { _RenderCupertinoAlertActions };
