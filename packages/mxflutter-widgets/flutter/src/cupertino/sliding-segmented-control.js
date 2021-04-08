"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSegmentedControl = exports._SegmentedControlContainerBoxParentData = exports._ChildAnimationManifest = exports._SegmentedControlRenderWidget = exports._SegmentedControlState = exports.CupertinoSlidingSegmentedControl = exports._FontWeightTween = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("../widgets/framework");
const tween_1 = require("../animation/tween");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _FontWeightTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = '_FontWeightTween';
    }
}
exports._FontWeightTween = _FontWeightTween;
class CupertinoSlidingSegmentedControl extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.onValueChanged = namedParameters.onValueChanged;
        this.groupValue = namedParameters.groupValue;
        this.thumbColor = namedParameters.thumbColor;
        this.padding = namedParameters.padding;
        this.backgroundColor = namedParameters.backgroundColor;
        this.className = 'CupertinoSlidingSegmentedControl';
    }
}
exports.CupertinoSlidingSegmentedControl = CupertinoSlidingSegmentedControl;
class _SegmentedControlState extends framework_1.State {
}
exports._SegmentedControlState = _SegmentedControlState;
class _SegmentedControlRenderWidget extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.selectedIndex = namedParameters.selectedIndex;
        this.thumbColor = namedParameters.thumbColor;
        this.state = namedParameters.state;
        this.className = '_SegmentedControlRenderWidget';
    }
}
exports._SegmentedControlRenderWidget = _SegmentedControlRenderWidget;
class _ChildAnimationManifest extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.opacity = namedParameters.opacity;
        this.separatorOpacity = namedParameters.separatorOpacity;
        this.className = '_ChildAnimationManifest';
    }
}
exports._ChildAnimationManifest = _ChildAnimationManifest;
class _SegmentedControlContainerBoxParentData extends box_1.ContainerBoxParentData {
}
exports._SegmentedControlContainerBoxParentData = _SegmentedControlContainerBoxParentData;
class _RenderSegmentedControl extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['selectedIndex'] = namedParameters.selectedIndex;
        this.thumbColor = namedParameters.thumbColor;
        this.state = namedParameters.state;
        this.className = '_RenderSegmentedControl';
    }
}
exports._RenderSegmentedControl = _RenderSegmentedControl;
