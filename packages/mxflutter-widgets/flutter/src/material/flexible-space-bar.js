//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$, InheritedWidget } from '../widgets/framework';
var CollapseMode;
(function (CollapseMode) {
    CollapseMode["parallax"] = "{ \"_name\": \"CollapseMode.parallax\", \"index\": 0 }";
    CollapseMode["pin"] = "{ \"_name\": \"CollapseMode.pin\", \"index\": 1 }";
    CollapseMode["none"] = "{ \"_name\": \"CollapseMode.none\", \"index\": 2 }";
})(CollapseMode || (CollapseMode = {}));
export { CollapseMode };
var StretchMode;
(function (StretchMode) {
    StretchMode["zoomBackground"] = "{ \"_name\": \"StretchMode.zoomBackground\", \"index\": 0 }";
    StretchMode["blurBackground"] = "{ \"_name\": \"StretchMode.blurBackground\", \"index\": 1 }";
    StretchMode["fadeTitle"] = "{ \"_name\": \"StretchMode.fadeTitle\", \"index\": 2 }";
})(StretchMode || (StretchMode = {}));
export { StretchMode };
class FlexibleSpaceBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.title = namedParameters.title;
        this.background = namedParameters.background;
        this.centerTitle = namedParameters.centerTitle;
        this.titlePadding = namedParameters.titlePadding;
        this.collapseMode = namedParameters.collapseMode;
        this.stretchModes = namedParameters.stretchModes;
        this.className = 'FlexibleSpaceBar';
    }
}
export { FlexibleSpaceBar };
class _FlexibleSpaceBarState extends State$ {
}
export { _FlexibleSpaceBarState };
class FlexibleSpaceBarSettings extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.toolbarOpacity = namedParameters.toolbarOpacity;
        this.minExtent = namedParameters.minExtent;
        this.maxExtent = namedParameters.maxExtent;
        this.currentExtent = namedParameters.currentExtent;
        this.child = namedParameters.child;
        this.className = 'FlexibleSpaceBarSettings';
    }
}
export { FlexibleSpaceBarSettings };
