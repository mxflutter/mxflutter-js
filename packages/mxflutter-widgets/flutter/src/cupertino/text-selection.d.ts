import { AnimationController } from '../animation/animation-controller';
import { CustomPainter } from '../rendering/custom-paint';
import { Paint, Color } from '../../../mx-dart-sdk';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { BoxParentData, BoxConstraints, RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { ClipboardStatusNotifier, TextSelectionControls } from '../widgets/text-selection';
import { StatefulWidget, State, SingleChildRenderObjectWidget, RenderObjectWidget, RenderObjectElement } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class _CupertinoTextSelectionToolbarWrapper extends StatefulWidget {
    arrowTipX: number;
    barTopY: number;
    clipboardStatus: ClipboardStatusNotifier;
    handleCut: any;
    handleCopy: any;
    handlePaste: any;
    handleSelectAll: any;
    isArrowPointingDown: boolean;
    constructor(namedParameters?: {
        key?: Key;
        arrowTipX?: number;
        barTopY?: number;
        clipboardStatus?: ClipboardStatusNotifier;
        handleCut?: any;
        handleCopy?: any;
        handlePaste?: any;
        handleSelectAll?: any;
        isArrowPointingDown?: boolean;
    });
}
export { _CupertinoTextSelectionToolbarWrapper };
declare class _CupertinoTextSelectionToolbarWrapperState extends State {
    clipboardStatus: ClipboardStatusNotifier;
}
export { _CupertinoTextSelectionToolbarWrapperState };
declare class CupertinoTextSelectionToolbar extends SingleChildRenderObjectWidget {
    barTopY: number;
    arrowTipX: number;
    isArrowPointingDown: boolean;
}
export { CupertinoTextSelectionToolbar };
declare class _ToolbarParentData extends BoxParentData {
    arrowXOffsetFromCenter: number;
}
export { _ToolbarParentData };
declare class _ToolbarRenderBox extends RenderShiftedBox {
    barTopY: number;
    arrowTipX: number;
    isArrowPointingDown: boolean;
    heightConstraint: BoxConstraints;
    debugPaint: Paint;
    constructor(_barTopY?: number, _arrowTipX?: number, _isArrowPointingDown?: boolean, child?: RenderBox);
}
export { _ToolbarRenderBox };
declare class _TextSelectionHandlePainter extends CustomPainter {
    color: Color;
    constructor(color?: Color);
}
export { _TextSelectionHandlePainter };
declare class _CupertinoTextSelectionControls extends TextSelectionControls {
}
export { _CupertinoTextSelectionControls };
declare class _CupertinoTextSelectionToolbarContent extends StatefulWidget {
    children: Array<any>;
    isArrowPointingDown: boolean;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        isArrowPointingDown?: boolean;
    });
}
export { _CupertinoTextSelectionToolbarContent };
declare class _CupertinoTextSelectionToolbarContentState extends State {
    controller: AnimationController;
    page: number;
    nextPage: number;
}
export { _CupertinoTextSelectionToolbarContentState };
declare class _CupertinoTextSelectionToolbarItems extends RenderObjectWidget {
    backButton: MXWidget;
    children: Array<any>;
    dividerWidth: number;
    nextButton: MXWidget;
    nextButtonDisabled: MXWidget;
    page: number;
    constructor(namedParameters?: {
        key?: Key;
        page?: number;
        children?: Array<any>;
        backButton?: MXWidget;
        dividerWidth?: number;
        nextButton?: MXWidget;
        nextButtonDisabled?: MXWidget;
    });
}
export { _CupertinoTextSelectionToolbarItems };
declare class _CupertinoTextSelectionToolbarItemsElement extends RenderObjectElement {
    children: Array<any>;
    slotToChild: Map<any, any>;
    forgottenChildren: Set<any>;
    constructor(widget?: _CupertinoTextSelectionToolbarItems);
}
export { _CupertinoTextSelectionToolbarItemsElement };
declare class _CupertinoTextSelectionToolbarItemsRenderBox extends RenderBox {
    slottedChildren: Map<any, any>;
    page: number;
    dividerWidth: number;
    backButton: RenderBox;
    nextButton: RenderBox;
    nextButtonDisabled: RenderBox;
    constructor(namedParameters?: {
        dividerWidth?: number;
        page?: number;
    });
}
export { _CupertinoTextSelectionToolbarItemsRenderBox };
declare enum _CupertinoTextSelectionToolbarItemsSlot {
    backButton = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.backButton\", \"index\": 0 }",
    nextButton = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.nextButton\", \"index\": 1 }",
    nextButtonDisabled = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled\", \"index\": 2 }"
}
export { _CupertinoTextSelectionToolbarItemsSlot };
