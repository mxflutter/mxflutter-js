"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexibleSpaceBarSettings = exports._FlexibleSpaceBarState = exports.FlexibleSpaceBar = exports.StretchMode = exports.CollapseMode = void 0;
const framework_1 = require("../widgets/framework");
var CollapseMode;
(function (CollapseMode) {
    CollapseMode["parallax"] = "{ \"_name\": \"CollapseMode.parallax\", \"index\": 0 }";
    CollapseMode["pin"] = "{ \"_name\": \"CollapseMode.pin\", \"index\": 1 }";
    CollapseMode["none"] = "{ \"_name\": \"CollapseMode.none\", \"index\": 2 }";
})(CollapseMode || (CollapseMode = {}));
exports.CollapseMode = CollapseMode;
;
var StretchMode;
(function (StretchMode) {
    StretchMode["zoomBackground"] = "{ \"_name\": \"StretchMode.zoomBackground\", \"index\": 0 }";
    StretchMode["blurBackground"] = "{ \"_name\": \"StretchMode.blurBackground\", \"index\": 1 }";
    StretchMode["fadeTitle"] = "{ \"_name\": \"StretchMode.fadeTitle\", \"index\": 2 }";
})(StretchMode || (StretchMode = {}));
exports.StretchMode = StretchMode;
;
class FlexibleSpaceBar extends framework_1.StatefulWidget {
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
exports.FlexibleSpaceBar = FlexibleSpaceBar;
class _FlexibleSpaceBarState extends framework_1.State {
}
exports._FlexibleSpaceBarState = _FlexibleSpaceBarState;
class FlexibleSpaceBarSettings extends framework_1.InheritedWidget {
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
exports.FlexibleSpaceBarSettings = FlexibleSpaceBarSettings;
