"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoContextMenuActionState = exports.CupertinoContextMenuAction = void 0;
const framework_1 = require("../widgets/framework");
class CupertinoContextMenuAction extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.isDefaultAction = namedParameters.isDefaultAction;
        this.isDestructiveAction = namedParameters.isDestructiveAction;
        this.onPressed = namedParameters.onPressed;
        this.trailingIcon = namedParameters.trailingIcon;
        this.className = 'CupertinoContextMenuAction';
    }
}
exports.CupertinoContextMenuAction = CupertinoContextMenuAction;
class _CupertinoContextMenuActionState extends framework_1.State {
}
exports._CupertinoContextMenuActionState = _CupertinoContextMenuActionState;
