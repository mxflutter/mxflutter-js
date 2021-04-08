"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDialog = exports.SimpleDialogOption = exports.AlertDialog = exports.Dialog = void 0;
const framework_1 = require("../widgets/framework");
class Dialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.insetAnimationDuration = namedParameters.insetAnimationDuration;
        this.insetAnimationCurve = namedParameters.insetAnimationCurve;
        this.insetPadding = namedParameters.insetPadding;
        this.clipBehavior = namedParameters.clipBehavior;
        this.shape = namedParameters.shape;
        this.child = namedParameters.child;
        this.className = 'Dialog';
    }
}
exports.Dialog = Dialog;
class AlertDialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.title = namedParameters.title;
        this.titlePadding = namedParameters.titlePadding;
        this.titleTextStyle = namedParameters.titleTextStyle;
        this.content = namedParameters.content;
        this.contentPadding = namedParameters.contentPadding;
        this.contentTextStyle = namedParameters.contentTextStyle;
        this.actions = namedParameters.actions;
        this.actionsPadding = namedParameters.actionsPadding;
        this.actionsOverflowDirection = namedParameters.actionsOverflowDirection;
        this.actionsOverflowButtonSpacing = namedParameters.actionsOverflowButtonSpacing;
        this.buttonPadding = namedParameters.buttonPadding;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.semanticLabel = namedParameters.semanticLabel;
        this.insetPadding = namedParameters.insetPadding;
        this.clipBehavior = namedParameters.clipBehavior;
        this.shape = namedParameters.shape;
        this.scrollable = namedParameters.scrollable;
        this.className = 'AlertDialog';
    }
}
exports.AlertDialog = AlertDialog;
class SimpleDialogOption extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPressed = namedParameters.onPressed;
        this.padding = namedParameters.padding;
        this.child = namedParameters.child;
        this.className = 'SimpleDialogOption';
    }
}
exports.SimpleDialogOption = SimpleDialogOption;
class SimpleDialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.title = namedParameters.title;
        this.titlePadding = namedParameters.titlePadding;
        this.titleTextStyle = namedParameters.titleTextStyle;
        this.children = namedParameters.children;
        this.contentPadding = namedParameters.contentPadding;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.semanticLabel = namedParameters.semanticLabel;
        this.shape = namedParameters.shape;
        this.className = 'SimpleDialog';
    }
}
exports.SimpleDialog = SimpleDialog;
