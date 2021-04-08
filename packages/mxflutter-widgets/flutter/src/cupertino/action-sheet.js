"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderCupertinoAlertActions = exports._CupertinoAlertActionsRenderWidget = exports._ActionButtonParentData = exports._ActionButtonParentDataWidget = exports._PressableActionButtonState = exports._PressableActionButton = exports._CupertinoAlertActionSectionState = exports._CupertinoAlertActionSection = exports._CupertinoAlertContentSection = exports._AlertSections = exports._RenderCupertinoAlert = exports._CupertinoAlertRenderElement = exports._CupertinoAlertRenderWidget = exports._CupertinoActionSheetCancelButtonState = exports._CupertinoActionSheetCancelButton = exports.CupertinoActionSheetAction = exports.CupertinoActionSheet = void 0;
const custom_layout_1 = require("../rendering/custom-layout");
const box_1 = require("../rendering/box");
const framework_1 = require("../widgets/framework");
class CupertinoActionSheet extends framework_1.StatelessWidget {
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
exports.CupertinoActionSheet = CupertinoActionSheet;
class CupertinoActionSheetAction extends framework_1.StatelessWidget {
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
exports.CupertinoActionSheetAction = CupertinoActionSheetAction;
class _CupertinoActionSheetCancelButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_CupertinoActionSheetCancelButton';
    }
}
exports._CupertinoActionSheetCancelButton = _CupertinoActionSheetCancelButton;
class _CupertinoActionSheetCancelButtonState extends framework_1.State {
}
exports._CupertinoActionSheetCancelButtonState = _CupertinoActionSheetCancelButtonState;
class _CupertinoAlertRenderWidget extends framework_1.RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.contentSection = namedParameters.contentSection;
        this.actionsSection = namedParameters.actionsSection;
        this.className = '_CupertinoAlertRenderWidget';
    }
}
exports._CupertinoAlertRenderWidget = _CupertinoAlertRenderWidget;
class _CupertinoAlertRenderElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_CupertinoAlertRenderElement';
    }
}
exports._CupertinoAlertRenderElement = _CupertinoAlertRenderElement;
class _RenderCupertinoAlert extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.contentSection = namedParameters.contentSection;
        this.actionsSection = namedParameters.actionsSection;
        this.dividerThickness = namedParameters.dividerThickness;
        this['dividerColor'] = namedParameters.dividerColor;
        this.className = '_RenderCupertinoAlert';
    }
}
exports._RenderCupertinoAlert = _RenderCupertinoAlert;
var _AlertSections;
(function (_AlertSections) {
    _AlertSections["contentSection"] = "{ \"_name\": \"_AlertSections.contentSection\", \"index\": 0 }";
    _AlertSections["actionsSection"] = "{ \"_name\": \"_AlertSections.actionsSection\", \"index\": 1 }";
})(_AlertSections || (_AlertSections = {}));
exports._AlertSections = _AlertSections;
;
class _CupertinoAlertContentSection extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.title = namedParameters.title;
        this.message = namedParameters.message;
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
        this.hasCancelButton = namedParameters.hasCancelButton;
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
class _CupertinoAlertActionsRenderWidget extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['actionButtons'] = namedParameters.actionButtons;
        this.dividerThickness = namedParameters.dividerThickness;
        this.hasCancelButton = namedParameters.hasCancelButton;
        this.className = '_CupertinoAlertActionsRenderWidget';
    }
}
exports._CupertinoAlertActionsRenderWidget = _CupertinoAlertActionsRenderWidget;
class _RenderCupertinoAlertActions extends box_1.RenderBox {
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
exports._RenderCupertinoAlertActions = _RenderCupertinoAlertActions;
