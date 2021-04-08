"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderCupertinoDialogActions = exports._CupertinoDialogActionsRenderWidget = exports.CupertinoDialogAction = exports._ActionButtonParentData = exports._ActionButtonParentDataWidget = exports._PressableActionButtonState = exports._PressableActionButton = exports._CupertinoAlertActionSectionState = exports._CupertinoAlertActionSection = exports._CupertinoAlertContentSection = exports._AlertDialogSections = exports._RenderCupertinoDialog = exports._CupertinoDialogRenderElement = exports._CupertinoDialogRenderWidget = exports.CupertinoPopupSurface = exports.CupertinoDialog = exports.CupertinoAlertDialog = void 0;
const custom_layout_1 = require("../rendering/custom-layout");
const box_1 = require("../rendering/box");
const framework_1 = require("../widgets/framework");
class CupertinoAlertDialog extends framework_1.StatelessWidget {
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
exports.CupertinoAlertDialog = CupertinoAlertDialog;
class CupertinoDialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'CupertinoDialog';
    }
}
exports.CupertinoDialog = CupertinoDialog;
class CupertinoPopupSurface extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isSurfacePainted = namedParameters.isSurfacePainted;
        this.child = namedParameters.child;
        this.className = 'CupertinoPopupSurface';
    }
}
exports.CupertinoPopupSurface = CupertinoPopupSurface;
class _CupertinoDialogRenderWidget extends framework_1.RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.contentSection = namedParameters.contentSection;
        this.actionsSection = namedParameters.actionsSection;
        this.className = '_CupertinoDialogRenderWidget';
    }
}
exports._CupertinoDialogRenderWidget = _CupertinoDialogRenderWidget;
class _CupertinoDialogRenderElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_CupertinoDialogRenderElement';
    }
}
exports._CupertinoDialogRenderElement = _CupertinoDialogRenderElement;
class _RenderCupertinoDialog extends box_1.RenderBox {
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
exports._RenderCupertinoDialog = _RenderCupertinoDialog;
var _AlertDialogSections;
(function (_AlertDialogSections) {
    _AlertDialogSections["contentSection"] = "{ \"_name\": \"_AlertDialogSections.contentSection\", \"index\": 0 }";
    _AlertDialogSections["actionsSection"] = "{ \"_name\": \"_AlertDialogSections.actionsSection\", \"index\": 1 }";
})(_AlertDialogSections || (_AlertDialogSections = {}));
exports._AlertDialogSections = _AlertDialogSections;
;
class _CupertinoAlertContentSection extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.title = namedParameters.title;
        this.content = namedParameters.content;
        this.scrollController = namedParameters.scrollController;
        this.className = '_CupertinoAlertContentSection';
    }
}
exports._CupertinoAlertContentSection = _CupertinoAlertContentSection;
class _CupertinoAlertActionSection extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.scrollController = namedParameters.scrollController;
        this.className = '_CupertinoAlertActionSection';
    }
}
exports._CupertinoAlertActionSection = _CupertinoAlertActionSection;
class _CupertinoAlertActionSectionState extends framework_1.State {
}
exports._CupertinoAlertActionSectionState = _CupertinoAlertActionSectionState;
class _PressableActionButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.className = '_PressableActionButton';
    }
}
exports._PressableActionButton = _PressableActionButton;
class _PressableActionButtonState extends framework_1.State {
}
exports._PressableActionButtonState = _PressableActionButtonState;
class _ActionButtonParentDataWidget extends framework_1.ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isPressed = namedParameters.isPressed;
        this.child = namedParameters.child;
        this.className = '_ActionButtonParentDataWidget';
    }
}
exports._ActionButtonParentDataWidget = _ActionButtonParentDataWidget;
class _ActionButtonParentData extends custom_layout_1.MultiChildLayoutParentData {
    constructor(namedParameters = {}) {
        super();
        this.isPressed = namedParameters.isPressed;
        this.className = '_ActionButtonParentData';
    }
}
exports._ActionButtonParentData = _ActionButtonParentData;
class CupertinoDialogAction extends framework_1.StatelessWidget {
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
exports.CupertinoDialogAction = CupertinoDialogAction;
class _CupertinoDialogActionsRenderWidget extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['actionButtons'] = namedParameters.actionButtons;
        this.dividerThickness = namedParameters.dividerThickness;
        this.className = '_CupertinoDialogActionsRenderWidget';
    }
}
exports._CupertinoDialogActionsRenderWidget = _CupertinoDialogActionsRenderWidget;
class _RenderCupertinoDialogActions extends box_1.RenderBox {
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
exports._RenderCupertinoDialogActions = _RenderCupertinoDialogActions;
