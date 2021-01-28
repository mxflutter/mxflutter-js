//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MultiChildLayoutParentData } from '../rendering/custom-layout';
import { RenderBox } from '../rendering/box';
import { StatelessWidget$, StatefulWidget$, State$, RenderObjectWidget, RenderObjectElement, ParentDataWidget, MultiChildRenderObjectWidget, } from '../widgets/framework';
class CupertinoActionSheet extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_CupertinoActionSheetCancelButton';
    }
}
export { _CupertinoActionSheetCancelButton };
class _CupertinoActionSheetCancelButtonState extends State$ {
}
export { _CupertinoActionSheetCancelButtonState };
class _CupertinoAlertRenderWidget extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.contentSection = namedParameters.contentSection;
        this.actionsSection = namedParameters.actionsSection;
        this.className = '_CupertinoAlertRenderWidget';
    }
}
export { _CupertinoAlertRenderWidget };
class _CupertinoAlertRenderElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_CupertinoAlertRenderElement';
    }
}
export { _CupertinoAlertRenderElement };
class _RenderCupertinoAlert extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.contentSection = namedParameters.contentSection;
        this.actionsSection = namedParameters.actionsSection;
        this.dividerThickness = namedParameters.dividerThickness;
        this['dividerColor'] = namedParameters.dividerColor;
        this.className = '_RenderCupertinoAlert';
    }
}
export { _RenderCupertinoAlert };
var _AlertSections;
(function (_AlertSections) {
    _AlertSections["contentSection"] = "{ \"_name\": \"_AlertSections.contentSection\", \"index\": 0 }";
    _AlertSections["actionsSection"] = "{ \"_name\": \"_AlertSections.actionsSection\", \"index\": 1 }";
})(_AlertSections || (_AlertSections = {}));
export { _AlertSections };
class _CupertinoAlertContentSection extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.scrollController = namedParameters.scrollController;
        this.hasCancelButton = namedParameters.hasCancelButton;
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
class _CupertinoAlertActionsRenderWidget extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
