import { MultiChildLayoutParentData } from '../rendering/custom-layout';
import { Paint, Color } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { ScrollController } from '../widgets/scroll-controller';
import { StatelessWidget$, StatefulWidget$, State$, RenderObjectWidget, RenderObjectElement, Element$, ParentDataWidget, MultiChildRenderObjectWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoActionSheet extends StatelessWidget$ {
    title: MXWidget;
    message: MXWidget;
    actions: Array<any>;
    messageScrollController: ScrollController;
    actionScrollController: ScrollController;
    cancelButton: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        message?: MXWidget;
        actions?: Array<any>;
        messageScrollController?: ScrollController;
        actionScrollController?: ScrollController;
        cancelButton?: MXWidget;
    });
}
export { CupertinoActionSheet };
declare class CupertinoActionSheetAction extends StatelessWidget$ {
    onPressed: any;
    isDefaultAction: boolean;
    isDestructiveAction: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        onPressed?: any;
        isDefaultAction?: boolean;
        isDestructiveAction?: boolean;
        child?: MXWidget;
    });
}
export { CupertinoActionSheetAction };
declare class _CupertinoActionSheetCancelButton extends StatefulWidget$ {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { _CupertinoActionSheetCancelButton };
declare class _CupertinoActionSheetCancelButtonState extends State$ {
    isBeingPressed: boolean;
}
export { _CupertinoActionSheetCancelButtonState };
declare class _CupertinoAlertRenderWidget extends RenderObjectWidget {
    contentSection: MXWidget;
    actionsSection: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        contentSection?: MXWidget;
        actionsSection?: MXWidget;
    });
}
export { _CupertinoAlertRenderWidget };
declare class _CupertinoAlertRenderElement extends RenderObjectElement {
    contentElement: Element$;
    actionsElement: Element$;
    constructor(widget?: _CupertinoAlertRenderWidget);
}
export { _CupertinoAlertRenderElement };
declare class _RenderCupertinoAlert extends RenderBox {
    contentSection: RenderBox;
    actionsSection: RenderBox;
    dividerThickness: number;
    dividerPaint: Paint;
    constructor(namedParameters?: {
        contentSection?: RenderBox;
        actionsSection?: RenderBox;
        dividerThickness?: number;
        dividerColor?: Color;
    });
}
export { _RenderCupertinoAlert };
declare enum _AlertSections {
    contentSection = "{ \"_name\": \"_AlertSections.contentSection\", \"index\": 0 }",
    actionsSection = "{ \"_name\": \"_AlertSections.actionsSection\", \"index\": 1 }"
}
export { _AlertSections };
declare class _CupertinoAlertContentSection extends StatelessWidget$ {
    title: MXWidget;
    message: MXWidget;
    scrollController: ScrollController;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        message?: MXWidget;
        scrollController?: ScrollController;
    });
}
export { _CupertinoAlertContentSection };
declare class _CupertinoAlertActionSection extends StatefulWidget$ {
    children: Array<any>;
    scrollController: ScrollController;
    hasCancelButton: boolean;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        scrollController?: ScrollController;
        hasCancelButton?: boolean;
    });
}
export { _CupertinoAlertActionSection };
declare class _CupertinoAlertActionSectionState extends State$ {
}
export { _CupertinoAlertActionSectionState };
declare class _PressableActionButton extends StatefulWidget$ {
    child: MXWidget;
    constructor(namedParameters?: {
        child?: MXWidget;
    });
}
export { _PressableActionButton };
declare class _PressableActionButtonState extends State$ {
    isPressed: boolean;
}
export { _PressableActionButtonState };
declare class _ActionButtonParentDataWidget extends ParentDataWidget {
    isPressed: boolean;
    constructor(namedParameters?: {
        key?: Key;
        isPressed?: boolean;
        child?: MXWidget;
    });
}
export { _ActionButtonParentDataWidget };
declare class _ActionButtonParentData extends MultiChildLayoutParentData {
    isPressed: boolean;
    constructor(namedParameters?: {
        isPressed?: boolean;
    });
}
export { _ActionButtonParentData };
declare class _CupertinoAlertActionsRenderWidget extends MultiChildRenderObjectWidget {
    dividerThickness: number;
    hasCancelButton: boolean;
    constructor(namedParameters?: {
        key?: Key;
        actionButtons?: Array<any>;
        dividerThickness?: number;
        hasCancelButton?: boolean;
    });
}
export { _CupertinoAlertActionsRenderWidget };
declare class _RenderCupertinoAlertActions extends RenderBox {
    dividerThickness: number;
    hasCancelButton: boolean;
    buttonBackgroundPaint: Paint;
    pressedButtonBackgroundPaint: Paint;
    dividerPaint: Paint;
    constructor(namedParameters?: {
        children?: Array<any>;
        dividerThickness?: number;
        dividerColor?: Color;
        hasCancelButton?: boolean;
        backgroundColor?: Color;
        pressedColor?: Color;
    });
}
export { _RenderCupertinoAlertActions };
