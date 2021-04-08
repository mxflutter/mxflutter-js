"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerControllerState = exports.DrawerController = exports.Drawer = exports.DrawerAlignment = void 0;
const framework_1 = require("../widgets/framework");
var DrawerAlignment;
(function (DrawerAlignment) {
    DrawerAlignment["start"] = "{ \"_name\": \"DrawerAlignment.start\", \"index\": 0 }";
    DrawerAlignment["end"] = "{ \"_name\": \"DrawerAlignment.end\", \"index\": 1 }";
})(DrawerAlignment || (DrawerAlignment = {}));
exports.DrawerAlignment = DrawerAlignment;
;
class Drawer extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.elevation = namedParameters.elevation;
        this.child = namedParameters.child;
        this.semanticLabel = namedParameters.semanticLabel;
        this.className = 'Drawer';
    }
}
exports.Drawer = Drawer;
class DrawerController extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this['mx_key'] = namedParameters.key;
        this.child = namedParameters.child;
        this.alignment = namedParameters.alignment;
        this.drawerCallback = namedParameters.drawerCallback;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.scrimColor = namedParameters.scrimColor;
        this.edgeDragWidth = namedParameters.edgeDragWidth;
        this.enableOpenDragGesture = namedParameters.enableOpenDragGesture;
        this.className = 'DrawerController';
    }
}
exports.DrawerController = DrawerController;
class DrawerControllerState extends framework_1.State {
}
exports.DrawerControllerState = DrawerControllerState;
