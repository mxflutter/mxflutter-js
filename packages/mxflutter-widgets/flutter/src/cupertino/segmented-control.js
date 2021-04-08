"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSegmentedControl = exports._SegmentedControlContainerBoxParentData = exports._SegmentedControlRenderWidget = exports._SegmentedControlState = exports.CupertinoSegmentedControl = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("../widgets/framework");
class CupertinoSegmentedControl extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.onValueChanged = namedParameters.onValueChanged;
        this.groupValue = namedParameters.groupValue;
        this.unselectedColor = namedParameters.unselectedColor;
        this.selectedColor = namedParameters.selectedColor;
        this.borderColor = namedParameters.borderColor;
        this.pressedColor = namedParameters.pressedColor;
        this.padding = namedParameters.padding;
        this.className = 'CupertinoSegmentedControl';
    }
}
exports.CupertinoSegmentedControl = CupertinoSegmentedControl;
class _SegmentedControlState extends framework_1.State {
}
exports._SegmentedControlState = _SegmentedControlState;
class _SegmentedControlRenderWidget extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.selectedIndex = namedParameters.selectedIndex;
        this.pressedIndex = namedParameters.pressedIndex;
        this.backgroundColors = namedParameters.backgroundColors;
        this.borderColor = namedParameters.borderColor;
        this.className = '_SegmentedControlRenderWidget';
    }
}
exports._SegmentedControlRenderWidget = _SegmentedControlRenderWidget;
class _SegmentedControlContainerBoxParentData extends box_1.ContainerBoxParentData {
}
exports._SegmentedControlContainerBoxParentData = _SegmentedControlContainerBoxParentData;
class _RenderSegmentedControl extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.selectedIndex = namedParameters.selectedIndex;
        this.pressedIndex = namedParameters.pressedIndex;
        this.textDirection = namedParameters.textDirection;
        this.backgroundColors = namedParameters.backgroundColors;
        this.borderColor = namedParameters.borderColor;
        this.className = '_RenderSegmentedControl';
    }
}
exports._RenderSegmentedControl = _RenderSegmentedControl;
