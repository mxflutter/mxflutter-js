//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from '../rendering/box';
import { StatefulWidget$, State$, MultiChildRenderObjectWidget } from '../widgets/framework';
class CupertinoSegmentedControl extends StatefulWidget$ {
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
export { CupertinoSegmentedControl };
class _SegmentedControlState extends State$ {
}
export { _SegmentedControlState };
class _SegmentedControlRenderWidget extends MultiChildRenderObjectWidget {
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
export { _SegmentedControlRenderWidget };
class _SegmentedControlContainerBoxParentData extends ContainerBoxParentData {
}
export { _SegmentedControlContainerBoxParentData };
class _RenderSegmentedControl extends RenderBox {
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
export { _RenderSegmentedControl };
