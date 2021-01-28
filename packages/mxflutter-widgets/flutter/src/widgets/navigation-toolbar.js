//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { StatelessWidget$ } from './framework';
class NavigationToolbar extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.middle = namedParameters.middle;
        this.trailing = namedParameters.trailing;
        this.centerMiddle = namedParameters.centerMiddle;
        this.middleSpacing = namedParameters.middleSpacing;
        this.className = 'NavigationToolbar';
    }
    static get kMiddleSpacing() {
        return 16.0;
    }
}
export { NavigationToolbar };
var _ToolbarSlot;
(function (_ToolbarSlot) {
    _ToolbarSlot["leading"] = "{ \"_name\": \"_ToolbarSlot.leading\", \"index\": 0 }";
    _ToolbarSlot["middle"] = "{ \"_name\": \"_ToolbarSlot.middle\", \"index\": 1 }";
    _ToolbarSlot["trailing"] = "{ \"_name\": \"_ToolbarSlot.trailing\", \"index\": 2 }";
})(_ToolbarSlot || (_ToolbarSlot = {}));
export { _ToolbarSlot };
class _ToolbarLayout extends MultiChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.centerMiddle = namedParameters.centerMiddle;
        this.middleSpacing = namedParameters.middleSpacing;
        this.textDirection = namedParameters.textDirection;
        this.className = '_ToolbarLayout';
    }
}
export { _ToolbarLayout };
