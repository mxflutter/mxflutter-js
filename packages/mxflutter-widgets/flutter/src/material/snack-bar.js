//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
var SnackBarClosedReason;
(function (SnackBarClosedReason) {
    SnackBarClosedReason["action"] = "{ \"_name\": \"SnackBarClosedReason.action\", \"index\": 0 }";
    SnackBarClosedReason["dismiss"] = "{ \"_name\": \"SnackBarClosedReason.dismiss\", \"index\": 1 }";
    SnackBarClosedReason["swipe"] = "{ \"_name\": \"SnackBarClosedReason.swipe\", \"index\": 2 }";
    SnackBarClosedReason["hide"] = "{ \"_name\": \"SnackBarClosedReason.hide\", \"index\": 3 }";
    SnackBarClosedReason["remove"] = "{ \"_name\": \"SnackBarClosedReason.remove\", \"index\": 4 }";
    SnackBarClosedReason["timeout"] = "{ \"_name\": \"SnackBarClosedReason.timeout\", \"index\": 5 }";
})(SnackBarClosedReason || (SnackBarClosedReason = {}));
export { SnackBarClosedReason };
class SnackBarAction extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textColor = namedParameters.textColor;
        this.disabledTextColor = namedParameters.disabledTextColor;
        this.label = namedParameters.label;
        this.onPressed = namedParameters.onPressed;
        this.className = 'SnackBarAction';
    }
}
export { SnackBarAction };
class _SnackBarActionState extends State$ {
}
export { _SnackBarActionState };
class SnackBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.content = namedParameters.content;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.behavior = namedParameters.behavior;
        this.action = namedParameters.action;
        this.duration = namedParameters.duration;
        this.animation = namedParameters.animation;
        this.onVisible = namedParameters.onVisible;
        this.className = 'SnackBar';
    }
}
export { SnackBar };
class _SnackBarState extends State$ {
}
export { _SnackBarState };
