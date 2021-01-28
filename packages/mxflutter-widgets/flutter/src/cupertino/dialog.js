//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MultiChildLayoutParentData } from '../rendering/custom-layout';
import { RenderBox } from '../rendering/box';
import { StatelessWidget$, RenderObjectWidget, RenderObjectElement, StatefulWidget$, State$, ParentDataWidget, MultiChildRenderObjectWidget, } from '../widgets/framework';
class CupertinoAlertDialog extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'CupertinoDialog';
    }
}
export { CupertinoDialog };
class CupertinoPopupSurface extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isSurfacePainted = namedParameters.isSurfacePainted;
        this.child = namedParameters.child;
        this.className = 'CupertinoPopupSurface';
    }
}
export { CupertinoPopupSurface };
class _CupertinoDialogRenderWidget extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.contentSection = namedParameters.contentSection;
        this.actionsSection = namedParameters.actionsSection;
        this.className = '_CupertinoDialogRenderWidget';
    }
}
export { _CupertinoDialogRenderWidget };
class _CupertinoDialogRenderElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_CupertinoDialogRenderElement';
    }
}
export { _CupertinoDialogRenderElement };
class _RenderCupertinoDialog extends RenderBox {
    constructor(namedParameters = {}) {
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
var _AlertDialogSections;
(function (_AlertDialogSections) {
    _AlertDialogSections["contentSection"] = "{ \"_name\": \"_AlertDialogSections.contentSection\", \"index\": 0 }";
    _AlertDialogSections["actionsSection"] = "{ \"_name\": \"_AlertDialogSections.actionsSection\", \"index\": 1 }";
})(_AlertDialogSections || (_AlertDialogSections = {}));
export { _AlertDialogSections };
class _CupertinoAlertContentSection extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.scrollController = namedParameters.scrollController;
        this.className = '_CupertinoAlertActionSection';
    }
}
export { _CupertinoAlertActionSection };
class _CupertinoAlertActionSectionState extends State$ {
}
export { _CupertinoAlertActionSectionState };
class _PressableActionButton extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.className = '_PressableActionButton';
    }
}
export { _PressableActionButton };
class _PressableActionButtonState extends State$ {
}
export { _PressableActionButtonState };
class _ActionButtonParentDataWidget extends ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isPressed = namedParameters.isPressed;
        this.child = namedParameters.child;
        this.className = '_ActionButtonParentDataWidget';
    }
}
export { _ActionButtonParentDataWidget };
class _ActionButtonParentData extends MultiChildLayoutParentData {
    constructor(namedParameters = {}) {
        super();
        this.isPressed = namedParameters.isPressed;
        this.className = '_ActionButtonParentData';
    }
}
export { _ActionButtonParentData };
class CupertinoDialogAction extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['actionButtons'] = namedParameters.actionButtons;
        this.dividerThickness = namedParameters.dividerThickness;
        this.className = '_CupertinoDialogActionsRenderWidget';
    }
}
export { _CupertinoDialogActionsRenderWidget };
class _RenderCupertinoDialogActions extends RenderBox {
    constructor(namedParameters = {}) {
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
