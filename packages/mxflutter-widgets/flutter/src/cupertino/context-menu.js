"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._OnOffAnimation = exports._ContextMenuSheet = exports._ContextMenuRouteStaticState = exports._ContextMenuRouteStatic = exports._ContextMenuRoute = exports._DecoyChildState = exports._DecoyChild = exports._CupertinoContextMenuState = exports.CupertinoContextMenu = exports._ContextMenuLocation = void 0;
const animations_1 = require("../animation/animations");
const routes_1 = require("../widgets/routes");
const framework_1 = require("../widgets/framework");
var _ContextMenuLocation;
(function (_ContextMenuLocation) {
    _ContextMenuLocation["center"] = "{ \"_name\": \"_ContextMenuLocation.center\", \"index\": 0 }";
    _ContextMenuLocation["left"] = "{ \"_name\": \"_ContextMenuLocation.left\", \"index\": 1 }";
    _ContextMenuLocation["right"] = "{ \"_name\": \"_ContextMenuLocation.right\", \"index\": 2 }";
})(_ContextMenuLocation || (_ContextMenuLocation = {}));
exports._ContextMenuLocation = _ContextMenuLocation;
;
class CupertinoContextMenu extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.actions = namedParameters.actions;
        this.child = namedParameters.child;
        this.previewBuilder = namedParameters.previewBuilder;
        this.className = 'CupertinoContextMenu';
    }
}
exports.CupertinoContextMenu = CupertinoContextMenu;
class _CupertinoContextMenuState extends framework_1.State {
}
exports._CupertinoContextMenuState = _CupertinoContextMenuState;
class _DecoyChild extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.beginRect = namedParameters.beginRect;
        this.controller = namedParameters.controller;
        this.endRect = namedParameters.endRect;
        this.child = namedParameters.child;
        this.className = '_DecoyChild';
    }
}
exports._DecoyChild = _DecoyChild;
class _DecoyChildState extends framework_1.State {
}
exports._DecoyChildState = _DecoyChildState;
class _ContextMenuRoute extends routes_1.PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.actions = namedParameters.actions;
        this.contextMenuLocation = namedParameters.contextMenuLocation;
        this.barrierLabel = namedParameters.barrierLabel;
        this.builder = namedParameters.builder;
        this.filter = namedParameters.filter;
        this.previousChildRect = namedParameters.previousChildRect;
        this.settings = namedParameters.settings;
        this.className = '_ContextMenuRoute';
    }
}
exports._ContextMenuRoute = _ContextMenuRoute;
class _ContextMenuRouteStatic extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.actions = namedParameters.actions;
        this.child = namedParameters.child;
        this.childGlobalKey = namedParameters.childGlobalKey;
        this.contextMenuLocation = namedParameters.contextMenuLocation;
        this.onDismiss = namedParameters.onDismiss;
        this.orientation = namedParameters.orientation;
        this.sheetGlobalKey = namedParameters.sheetGlobalKey;
        this.className = '_ContextMenuRouteStatic';
    }
}
exports._ContextMenuRouteStatic = _ContextMenuRouteStatic;
class _ContextMenuRouteStaticState extends framework_1.State {
}
exports._ContextMenuRouteStaticState = _ContextMenuRouteStaticState;
class _ContextMenuSheet extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.actions = namedParameters.actions;
        this.contextMenuLocation = namedParameters.contextMenuLocation;
        this.orientation = namedParameters.orientation;
        this.className = '_ContextMenuSheet';
    }
}
exports._ContextMenuSheet = _ContextMenuSheet;
class _OnOffAnimation extends animations_1.CompoundAnimation {
    constructor(namedParameters = {}) {
        super();
        this['controller'] = namedParameters.controller;
        this['onValue'] = namedParameters.onValue;
        this.offValue = namedParameters.offValue;
        this['intervalOn'] = namedParameters.intervalOn;
        this['intervalOff'] = namedParameters.intervalOff;
        this.className = '_OnOffAnimation';
    }
}
exports._OnOffAnimation = _OnOffAnimation;
