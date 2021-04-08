// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { CustomPainter } from '../rendering/custom-paint';
import { Offset, Color } from '../../../mx-dart-sdk';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { RenderBox } from '../rendering/box';
import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { ClipboardStatusNotifier, TextSelectionControls } from '../widgets/text-selection';
import { StatefulWidget, State, UniqueKey, SingleChildRenderObjectWidget, Widget, MultiChildRenderObjectWidget, MultiChildRenderObjectElement } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _TextSelectionToolbar extends StatefulWidget {
  clipboardStatus: ClipboardStatusNotifier;
  handleCut: any;
  handleCopy: any;
  handlePaste: any;
  handleSelectAll: any;
  isAbove: boolean;
  public constructor(namedParameters: {clipboardStatus?: ClipboardStatusNotifier, key?: Key, handleCut?: any, handleCopy?: any, handlePaste?: any, handleSelectAll?: any, isAbove?: boolean} = {}) {
    super();
    this.clipboardStatus = namedParameters.clipboardStatus;
    this.key = namedParameters.key;
    this.handleCut = namedParameters.handleCut;
    this.handleCopy = namedParameters.handleCopy;
    this.handlePaste = namedParameters.handlePaste;
    this.handleSelectAll = namedParameters.handleSelectAll;
    this.isAbove = namedParameters.isAbove;
    this.className = '_TextSelectionToolbar';
  }
}
export { _TextSelectionToolbar };
class _ItemData extends MXDartClass {
  onPressed: any;
  label: string;
  public constructor(onPressed?: any, label?: string) {
    super();
    this.onPressed = onPressed;
    this.label = label;
    this.className = '_ItemData';
  }
}
export { _ItemData };
class _TextSelectionToolbarState extends State {
  clipboardStatus: ClipboardStatusNotifier;
  overflowOpen: boolean;
  containerKey: UniqueKey;
}
export { _TextSelectionToolbarState };
class _TextSelectionToolbarContainer extends SingleChildRenderObjectWidget {
  overflowOpen: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, overflowOpen?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.overflowOpen = namedParameters.overflowOpen;
    this.className = '_TextSelectionToolbarContainer';
  }
}
export { _TextSelectionToolbarContainer };
class _TextSelectionToolbarContainerRenderBox extends RenderProxyBox {
  closedWidth: number;
  overflowOpen: boolean;
  public constructor(namedParameters: {overflowOpen?: boolean} = {}) {
    super();
    this.overflowOpen = namedParameters.overflowOpen;
    this.className = '_TextSelectionToolbarContainerRenderBox';
  }
}
export { _TextSelectionToolbarContainerRenderBox };
class _TextSelectionToolbarItems extends MultiChildRenderObjectWidget {
  isAbove: boolean;
  overflowOpen: boolean;
  public constructor(namedParameters: {key?: Key, isAbove?: boolean, overflowOpen?: boolean, children?: Array<any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.isAbove = namedParameters.isAbove;
    this.overflowOpen = namedParameters.overflowOpen;
    this.children = namedParameters.children;
    this.className = '_TextSelectionToolbarItems';
  }
}
export { _TextSelectionToolbarItems };
class _TextSelectionToolbarItemsElement extends MultiChildRenderObjectElement {
  public constructor(widget?: MultiChildRenderObjectWidget) {
    super();
    this['widget'] = widget;
    this.className = '_TextSelectionToolbarItemsElement';
  }
}
export { _TextSelectionToolbarItemsElement };
class _TextSelectionToolbarItemsRenderBox extends RenderBox {
  lastIndexThatFits: number;
  isAbove: boolean;
  overflowOpen: boolean;
  public constructor(namedParameters: {isAbove?: boolean, overflowOpen?: boolean} = {}) {
    super();
    this.isAbove = namedParameters.isAbove;
    this.overflowOpen = namedParameters.overflowOpen;
    this.className = '_TextSelectionToolbarItemsRenderBox';
  }
}
export { _TextSelectionToolbarItemsRenderBox };
class _TextSelectionToolbarLayout extends SingleChildLayoutDelegate {
  anchor: Offset;
  upperBounds: number;
  fitsAbove: boolean;
  public constructor(anchor?: Offset, upperBounds?: number, fitsAbove?: boolean) {
    super();
    this.anchor = anchor;
    this.upperBounds = upperBounds;
    this.fitsAbove = fitsAbove;
    this.className = '_TextSelectionToolbarLayout';
  }
}
export { _TextSelectionToolbarLayout };
class _TextSelectionHandlePainter extends CustomPainter {
  color: Color;
  public constructor(namedParameters: {color?: Color} = {}) {
    super();
    this.color = namedParameters.color;
    this.className = '_TextSelectionHandlePainter';
  }
}
export { _TextSelectionHandlePainter };
class _MaterialTextSelectionControls extends TextSelectionControls {}
export { _MaterialTextSelectionControls };
