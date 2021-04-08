// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { AnimationController } from '../animation/animation-controller';
import { CustomPainter } from '../rendering/custom-paint';
import { Paint, Color } from '../../../mx-dart-sdk';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { BoxParentData, BoxConstraints, RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { ClipboardStatusNotifier, TextSelectionControls } from '../widgets/text-selection';
import { StatefulWidget, State, SingleChildRenderObjectWidget, RenderObjectWidget, Widget, RenderObjectElement } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _CupertinoTextSelectionToolbarWrapper extends StatefulWidget {
  arrowTipX: number;
  barTopY: number;
  clipboardStatus: ClipboardStatusNotifier;
  handleCut: any;
  handleCopy: any;
  handlePaste: any;
  handleSelectAll: any;
  isArrowPointingDown: boolean;
  public constructor(namedParameters: {key?: Key, arrowTipX?: number, barTopY?: number, clipboardStatus?: ClipboardStatusNotifier, handleCut?: any, handleCopy?: any, handlePaste?: any, handleSelectAll?: any, isArrowPointingDown?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.arrowTipX = namedParameters.arrowTipX;
    this.barTopY = namedParameters.barTopY;
    this.clipboardStatus = namedParameters.clipboardStatus;
    this.handleCut = namedParameters.handleCut;
    this.handleCopy = namedParameters.handleCopy;
    this.handlePaste = namedParameters.handlePaste;
    this.handleSelectAll = namedParameters.handleSelectAll;
    this.isArrowPointingDown = namedParameters.isArrowPointingDown;
    this.className = '_CupertinoTextSelectionToolbarWrapper';
  }
}
export { _CupertinoTextSelectionToolbarWrapper };
class _CupertinoTextSelectionToolbarWrapperState extends State {
  clipboardStatus: ClipboardStatusNotifier;
}
export { _CupertinoTextSelectionToolbarWrapperState };
class CupertinoTextSelectionToolbar extends SingleChildRenderObjectWidget {
  barTopY: number;
  arrowTipX: number;
  isArrowPointingDown: boolean;
}
export { CupertinoTextSelectionToolbar };
class _ToolbarParentData extends BoxParentData {
  arrowXOffsetFromCenter: number;
}
export { _ToolbarParentData };
class _ToolbarRenderBox extends RenderShiftedBox {
  barTopY: number;
  arrowTipX: number;
  isArrowPointingDown: boolean;
  heightConstraint: BoxConstraints;
  debugPaint: Paint;
  public constructor(_barTopY?: number, _arrowTipX?: number, _isArrowPointingDown?: boolean, child?: RenderBox) {
    super();
    this.barTopY = _barTopY;
    this.arrowTipX = _arrowTipX;
    this.isArrowPointingDown = _isArrowPointingDown;
    this['child'] = child;
    this.className = '_ToolbarRenderBox';
  }
}
export { _ToolbarRenderBox };
class _TextSelectionHandlePainter extends CustomPainter {
  color: Color;
  public constructor(color?: Color) {
    super();
    this.color = color;
    this.className = '_TextSelectionHandlePainter';
  }
}
export { _TextSelectionHandlePainter };
class _CupertinoTextSelectionControls extends TextSelectionControls {}
export { _CupertinoTextSelectionControls };
class _CupertinoTextSelectionToolbarContent extends StatefulWidget {
  children: Array<any>;
  isArrowPointingDown: boolean;
  public constructor(namedParameters: {key?: Key, children?: Array<any>, isArrowPointingDown?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.isArrowPointingDown = namedParameters.isArrowPointingDown;
    this.className = '_CupertinoTextSelectionToolbarContent';
  }
}
export { _CupertinoTextSelectionToolbarContent };
class _CupertinoTextSelectionToolbarContentState extends State {
  controller: AnimationController;
  page: number;
  nextPage: number;
}
export { _CupertinoTextSelectionToolbarContentState };
class _CupertinoTextSelectionToolbarItems extends RenderObjectWidget {
  backButton: MXWidget;
  children: Array<any>;
  dividerWidth: number;
  nextButton: MXWidget;
  nextButtonDisabled: MXWidget;
  page: number;
  public constructor(namedParameters: {key?: Key, page?: number, children?: Array<any>, backButton?: MXWidget, dividerWidth?: number, nextButton?: MXWidget, nextButtonDisabled?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.page = namedParameters.page;
    this.children = namedParameters.children;
    this.backButton = namedParameters.backButton;
    this.dividerWidth = namedParameters.dividerWidth;
    this.nextButton = namedParameters.nextButton;
    this.nextButtonDisabled = namedParameters.nextButtonDisabled;
    this.className = '_CupertinoTextSelectionToolbarItems';
  }
}
export { _CupertinoTextSelectionToolbarItems };
class _CupertinoTextSelectionToolbarItemsElement extends RenderObjectElement {
  children: Array<any>;
  slotToChild: Map<any, any>;
  forgottenChildren: Set<any>;
  public constructor(widget?: _CupertinoTextSelectionToolbarItems) {
    super();
    this['mx_widget'] = widget;
    this.className = '_CupertinoTextSelectionToolbarItemsElement';
  }
}
export { _CupertinoTextSelectionToolbarItemsElement };
class _CupertinoTextSelectionToolbarItemsRenderBox extends RenderBox {
  slottedChildren: Map<any, any>;
  page: number;
  dividerWidth: number;
  backButton: RenderBox;
  nextButton: RenderBox;
  nextButtonDisabled: RenderBox;
  public constructor(namedParameters: {dividerWidth?: number, page?: number} = {}) {
    super();
    this.dividerWidth = namedParameters.dividerWidth;
    this.page = namedParameters.page;
    this.className = '_CupertinoTextSelectionToolbarItemsRenderBox';
  }
}
export { _CupertinoTextSelectionToolbarItemsRenderBox };
enum _CupertinoTextSelectionToolbarItemsSlot {
  backButton = '{ "_name": "_CupertinoTextSelectionToolbarItemsSlot.backButton", "index": 0 }',
  nextButton = '{ "_name": "_CupertinoTextSelectionToolbarItemsSlot.nextButton", "index": 1 }',
  nextButtonDisabled = '{ "_name": "_CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled", "index": 2 }',
};

export { _CupertinoTextSelectionToolbarItemsSlot };
