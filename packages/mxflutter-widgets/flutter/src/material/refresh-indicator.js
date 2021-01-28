//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
var _RefreshIndicatorMode;
(function (_RefreshIndicatorMode) {
    _RefreshIndicatorMode["drag"] = "{ \"_name\": \"_RefreshIndicatorMode.drag\", \"index\": 0 }";
    _RefreshIndicatorMode["armed"] = "{ \"_name\": \"_RefreshIndicatorMode.armed\", \"index\": 1 }";
    _RefreshIndicatorMode["snap"] = "{ \"_name\": \"_RefreshIndicatorMode.snap\", \"index\": 2 }";
    _RefreshIndicatorMode["refresh"] = "{ \"_name\": \"_RefreshIndicatorMode.refresh\", \"index\": 3 }";
    _RefreshIndicatorMode["done"] = "{ \"_name\": \"_RefreshIndicatorMode.done\", \"index\": 4 }";
    _RefreshIndicatorMode["canceled"] = "{ \"_name\": \"_RefreshIndicatorMode.canceled\", \"index\": 5 }";
})(_RefreshIndicatorMode || (_RefreshIndicatorMode = {}));
export { _RefreshIndicatorMode };
class RefreshIndicator extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.displacement = namedParameters.displacement;
        this.onRefresh = namedParameters.onRefresh;
        this.color = namedParameters.color;
        this.backgroundColor = namedParameters.backgroundColor;
        this.notificationPredicate = namedParameters.notificationPredicate;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.semanticsValue = namedParameters.semanticsValue;
        this.strokeWidth = namedParameters.strokeWidth;
        this.className = 'RefreshIndicator';
    }
}
export { RefreshIndicator };
class RefreshIndicatorState extends State$ {
}
export { RefreshIndicatorState };
