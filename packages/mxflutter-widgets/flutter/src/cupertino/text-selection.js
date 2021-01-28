//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { BoxParentData, RenderBox } from '../rendering/box';
import { TextSelectionControls } from '../widgets/text-selection';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget, RenderObjectWidget, RenderObjectElement, } from '../widgets/framework';
class _CupertinoTextSelectionToolbarWrapper extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
class _CupertinoTextSelectionToolbarWrapperState extends State$ {
}
export { _CupertinoTextSelectionToolbarWrapperState };
class CupertinoTextSelectionToolbar extends SingleChildRenderObjectWidget {
}
export { CupertinoTextSelectionToolbar };
class _ToolbarParentData extends BoxParentData {
}
export { _ToolbarParentData };
class _ToolbarRenderBox extends RenderShiftedBox {
    constructor(_barTopY, _arrowTipX, _isArrowPointingDown, child) {
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
    constructor(color) {
        super();
        this.color = color;
        this.className = '_TextSelectionHandlePainter';
    }
}
export { _TextSelectionHandlePainter };
class _CupertinoTextSelectionControls extends TextSelectionControls {
}
export { _CupertinoTextSelectionControls };
class _CupertinoTextSelectionToolbarContent extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.isArrowPointingDown = namedParameters.isArrowPointingDown;
        this.className = '_CupertinoTextSelectionToolbarContent';
    }
}
export { _CupertinoTextSelectionToolbarContent };
class _CupertinoTextSelectionToolbarContentState extends State$ {
}
export { _CupertinoTextSelectionToolbarContentState };
class _CupertinoTextSelectionToolbarItems extends RenderObjectWidget {
    constructor(namedParameters = {}) {
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
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_CupertinoTextSelectionToolbarItemsElement';
    }
}
export { _CupertinoTextSelectionToolbarItemsElement };
class _CupertinoTextSelectionToolbarItemsRenderBox extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.dividerWidth = namedParameters.dividerWidth;
        this.page = namedParameters.page;
        this.className = '_CupertinoTextSelectionToolbarItemsRenderBox';
    }
}
export { _CupertinoTextSelectionToolbarItemsRenderBox };
var _CupertinoTextSelectionToolbarItemsSlot;
(function (_CupertinoTextSelectionToolbarItemsSlot) {
    _CupertinoTextSelectionToolbarItemsSlot["backButton"] = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.backButton\", \"index\": 0 }";
    _CupertinoTextSelectionToolbarItemsSlot["nextButton"] = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.nextButton\", \"index\": 1 }";
    _CupertinoTextSelectionToolbarItemsSlot["nextButtonDisabled"] = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled\", \"index\": 2 }";
})(_CupertinoTextSelectionToolbarItemsSlot || (_CupertinoTextSelectionToolbarItemsSlot = {}));
export { _CupertinoTextSelectionToolbarItemsSlot };
