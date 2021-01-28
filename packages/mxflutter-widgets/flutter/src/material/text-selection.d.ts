import { CustomPainter } from '../rendering/custom-paint';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { RenderBox } from '../rendering/box';
import { Offset, Color } from '../../../mx-dart-sdk';
import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { ClipboardStatusNotifier, TextSelectionControls } from '../widgets/text-selection';
import { StatefulWidget$, State$, UniqueKey, SingleChildRenderObjectWidget, MultiChildRenderObjectWidget, MultiChildRenderObjectElement } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _TextSelectionToolbar extends StatefulWidget$ {
    clipboardStatus: ClipboardStatusNotifier;
    handleCut: any;
    handleCopy: any;
    handlePaste: any;
    handleSelectAll: any;
    isAbove: boolean;
    constructor(namedParameters?: {
        clipboardStatus?: ClipboardStatusNotifier;
        key?: Key;
        handleCut?: any;
        handleCopy?: any;
        handlePaste?: any;
        handleSelectAll?: any;
        isAbove?: boolean;
    });
}
export { _TextSelectionToolbar };
declare class _ItemData extends MXDartClass {
    onPressed: any;
    label: string;
    constructor(onPressed?: any, label?: string);
}
export { _ItemData };
declare class _TextSelectionToolbarState extends State$ {
    clipboardStatus: ClipboardStatusNotifier;
    overflowOpen: boolean;
    containerKey: UniqueKey;
}
export { _TextSelectionToolbarState };
declare class _TextSelectionToolbarContainer extends SingleChildRenderObjectWidget {
    overflowOpen: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        overflowOpen?: boolean;
    });
}
export { _TextSelectionToolbarContainer };
declare class _TextSelectionToolbarContainerRenderBox extends RenderProxyBox {
    closedWidth: number;
    overflowOpen: boolean;
    constructor(namedParameters?: {
        overflowOpen?: boolean;
    });
}
export { _TextSelectionToolbarContainerRenderBox };
declare class _TextSelectionToolbarItems extends MultiChildRenderObjectWidget {
    isAbove: boolean;
    overflowOpen: boolean;
    constructor(namedParameters?: {
        key?: Key;
        isAbove?: boolean;
        overflowOpen?: boolean;
        children?: Array<any>;
    });
}
export { _TextSelectionToolbarItems };
declare class _TextSelectionToolbarItemsElement extends MultiChildRenderObjectElement {
    constructor(widget?: MultiChildRenderObjectWidget);
}
export { _TextSelectionToolbarItemsElement };
declare class _TextSelectionToolbarItemsRenderBox extends RenderBox {
    lastIndexThatFits: number;
    isAbove: boolean;
    overflowOpen: boolean;
    constructor(namedParameters?: {
        isAbove?: boolean;
        overflowOpen?: boolean;
    });
}
export { _TextSelectionToolbarItemsRenderBox };
declare class _TextSelectionToolbarLayout extends SingleChildLayoutDelegate {
    anchor: Offset;
    upperBounds: number;
    fitsAbove: boolean;
    constructor(anchor?: Offset, upperBounds?: number, fitsAbove?: boolean);
}
export { _TextSelectionToolbarLayout };
declare class _TextSelectionHandlePainter extends CustomPainter {
    color: Color;
    constructor(namedParameters?: {
        color?: Color;
    });
}
export { _TextSelectionHandlePainter };
declare class _MaterialTextSelectionControls extends TextSelectionControls {
}
export { _MaterialTextSelectionControls };
