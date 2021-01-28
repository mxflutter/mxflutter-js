//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CompoundAnimation } from '../animation/animations';
import { PopupRoute } from '../widgets/routes';
import { StatefulWidget$, State$, StatelessWidget$ } from '../widgets/framework';
var _ContextMenuLocation;
(function (_ContextMenuLocation) {
    _ContextMenuLocation["center"] = "{ \"_name\": \"_ContextMenuLocation.center\", \"index\": 0 }";
    _ContextMenuLocation["left"] = "{ \"_name\": \"_ContextMenuLocation.left\", \"index\": 1 }";
    _ContextMenuLocation["right"] = "{ \"_name\": \"_ContextMenuLocation.right\", \"index\": 2 }";
})(_ContextMenuLocation || (_ContextMenuLocation = {}));
export { _ContextMenuLocation };
class CupertinoContextMenu extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.actions = namedParameters.actions;
        this.child = namedParameters.child;
        this.previewBuilder = namedParameters.previewBuilder;
        this.className = 'CupertinoContextMenu';
    }
}
export { CupertinoContextMenu };
class _CupertinoContextMenuState extends State$ {
}
export { _CupertinoContextMenuState };
class _DecoyChild extends StatefulWidget$ {
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
export { _DecoyChild };
class _DecoyChildState extends State$ {
}
export { _DecoyChildState };
class _ContextMenuRoute extends PopupRoute {
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
export { _ContextMenuRoute };
class _ContextMenuRouteStatic extends StatefulWidget$ {
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
export { _ContextMenuRouteStatic };
class _ContextMenuRouteStaticState extends State$ {
}
export { _ContextMenuRouteStaticState };
class _ContextMenuSheet extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.actions = namedParameters.actions;
        this.contextMenuLocation = namedParameters.contextMenuLocation;
        this.orientation = namedParameters.orientation;
        this.className = '_ContextMenuSheet';
    }
}
export { _ContextMenuSheet };
class _OnOffAnimation extends CompoundAnimation {
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
export { _OnOffAnimation };
