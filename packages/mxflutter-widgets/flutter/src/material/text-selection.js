//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { RenderBox } from '../rendering/box';
import { RenderProxyBox } from '../rendering/proxy-box';
import { TextSelectionControls } from '../widgets/text-selection';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget, MultiChildRenderObjectWidget, MultiChildRenderObjectElement, } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _TextSelectionToolbar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(onPressed, label) {
        super();
        this.onPressed = onPressed;
        this.label = label;
        this.className = '_ItemData';
    }
}
export { _ItemData };
class _TextSelectionToolbarState extends State$ {
}
export { _TextSelectionToolbarState };
class _TextSelectionToolbarContainer extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.overflowOpen = namedParameters.overflowOpen;
        this.className = '_TextSelectionToolbarContainer';
    }
}
export { _TextSelectionToolbarContainer };
class _TextSelectionToolbarContainerRenderBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.overflowOpen = namedParameters.overflowOpen;
        this.className = '_TextSelectionToolbarContainerRenderBox';
    }
}
export { _TextSelectionToolbarContainerRenderBox };
class _TextSelectionToolbarItems extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
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
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_TextSelectionToolbarItemsElement';
    }
}
export { _TextSelectionToolbarItemsElement };
class _TextSelectionToolbarItemsRenderBox extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.isAbove = namedParameters.isAbove;
        this.overflowOpen = namedParameters.overflowOpen;
        this.className = '_TextSelectionToolbarItemsRenderBox';
    }
}
export { _TextSelectionToolbarItemsRenderBox };
class _TextSelectionToolbarLayout extends SingleChildLayoutDelegate {
    constructor(anchor, upperBounds, fitsAbove) {
        super();
        this.anchor = anchor;
        this.upperBounds = upperBounds;
        this.fitsAbove = fitsAbove;
        this.className = '_TextSelectionToolbarLayout';
    }
}
export { _TextSelectionToolbarLayout };
class _TextSelectionHandlePainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.className = '_TextSelectionHandlePainter';
    }
}
export { _TextSelectionHandlePainter };
class _MaterialTextSelectionControls extends TextSelectionControls {
}
export { _MaterialTextSelectionControls };
