import { TextStyle } from '../painting/text-style';
import { MultiChildLayoutParentData } from '../rendering/custom-layout';
import { Paint, Color } from '../../../mx-dart-sdk';
import { RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ScrollController } from '../widgets/scroll-controller';
import { StatelessWidget, RenderObjectWidget, RenderObjectElement, Element, StatefulWidget, State, ParentDataWidget, MultiChildRenderObjectWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoAlertDialog extends StatelessWidget {
    title: MXWidget;
    content: MXWidget;
    actions: Array<any>;
    scrollController: ScrollController;
    actionScrollController: ScrollController;
    insetAnimationDuration: Duration;
    insetAnimationCurve: Curve;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        content?: MXWidget;
        actions?: Array<any>;
        scrollController?: ScrollController;
        actionScrollController?: ScrollController;
        insetAnimationDuration?: Duration;
        insetAnimationCurve?: Curve;
    });
}
export { CupertinoAlertDialog };
declare class CupertinoDialog extends StatelessWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { CupertinoDialog };
declare class CupertinoPopupSurface extends StatelessWidget {
    isSurfacePainted: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        isSurfacePainted?: boolean;
        child?: MXWidget;
    });
}
export { CupertinoPopupSurface };
declare class _CupertinoDialogRenderWidget extends RenderObjectWidget {
    contentSection: MXWidget;
    actionsSection: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        contentSection?: MXWidget;
        actionsSection?: MXWidget;
    });
}
export { _CupertinoDialogRenderWidget };
declare class _CupertinoDialogRenderElement extends RenderObjectElement {
    contentElement: Element;
    actionsElement: Element;
    constructor(widget?: _CupertinoDialogRenderWidget);
}
export { _CupertinoDialogRenderElement };
declare class _RenderCupertinoDialog extends RenderBox {
    contentSection: RenderBox;
    actionsSection: RenderBox;
    isInAccessibilityMode: boolean;
    dividerThickness: number;
    dividerPaint: Paint;
    constructor(namedParameters?: {
        contentSection?: RenderBox;
        actionsSection?: RenderBox;
        dividerThickness?: number;
        isInAccessibilityMode?: boolean;
        dividerColor?: Color;
    });
}
export { _RenderCupertinoDialog };
declare enum _AlertDialogSections {
    contentSection = "{ \"_name\": \"_AlertDialogSections.contentSection\", \"index\": 0 }",
    actionsSection = "{ \"_name\": \"_AlertDialogSections.actionsSection\", \"index\": 1 }"
}
export { _AlertDialogSections };
declare class _CupertinoAlertContentSection extends StatelessWidget {
    title: MXWidget;
    content: MXWidget;
    scrollController: ScrollController;
    constructor(namedParameters?: {
        key?: Key;
        title?: MXWidget;
        content?: MXWidget;
        scrollController?: ScrollController;
    });
}
export { _CupertinoAlertContentSection };
declare class _CupertinoAlertActionSection extends StatefulWidget {
    children: Array<any>;
    scrollController: ScrollController;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        scrollController?: ScrollController;
    });
}
export { _CupertinoAlertActionSection };
declare class _CupertinoAlertActionSectionState extends State {
}
export { _CupertinoAlertActionSectionState };
declare class _PressableActionButton extends StatefulWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        child?: MXWidget;
    });
}
export { _PressableActionButton };
declare class _PressableActionButtonState extends State {
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
declare class CupertinoDialogAction extends StatelessWidget {
    onPressed: any;
    isDefaultAction: boolean;
    isDestructiveAction: boolean;
    textStyle: TextStyle;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        onPressed?: any;
        isDefaultAction?: boolean;
        isDestructiveAction?: boolean;
        textStyle?: TextStyle;
        child?: MXWidget;
    });
}
export { CupertinoDialogAction };
declare class _CupertinoDialogActionsRenderWidget extends MultiChildRenderObjectWidget {
    dividerThickness: number;
    constructor(namedParameters?: {
        key?: Key;
        actionButtons?: Array<any>;
        dividerThickness?: number;
    });
}
export { _CupertinoDialogActionsRenderWidget };
declare class _RenderCupertinoDialogActions extends RenderBox {
    dialogWidth: number;
    dividerThickness: number;
    buttonBackgroundPaint: Paint;
    pressedButtonBackgroundPaint: Paint;
    dividerPaint: Paint;
    constructor(namedParameters?: {
        children?: Array<any>;
        dialogWidth?: number;
        dividerThickness?: number;
        dialogColor?: Color;
        dialogPressedColor?: Color;
        dividerColor?: Color;
    });
}
export { _RenderCupertinoDialogActions };
