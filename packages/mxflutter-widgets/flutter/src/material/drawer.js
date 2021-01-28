//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
var DrawerAlignment;
(function (DrawerAlignment) {
    DrawerAlignment["start"] = "{ \"_name\": \"DrawerAlignment.start\", \"index\": 0 }";
    DrawerAlignment["end"] = "{ \"_name\": \"DrawerAlignment.end\", \"index\": 1 }";
})(DrawerAlignment || (DrawerAlignment = {}));
export { DrawerAlignment };
class Drawer extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.elevation = namedParameters.elevation;
        this.child = namedParameters.child;
        this.semanticLabel = namedParameters.semanticLabel;
        this.className = 'Drawer';
    }
}
export { Drawer };
class DrawerController extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this['__mx_key'] = namedParameters.key;
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
export { DrawerController };
class DrawerControllerState extends State$ {
}
export { DrawerControllerState };
