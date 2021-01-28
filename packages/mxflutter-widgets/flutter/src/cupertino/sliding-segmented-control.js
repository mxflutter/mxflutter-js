//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from '../rendering/box';
import { StatefulWidget$, State$, MultiChildRenderObjectWidget } from '../widgets/framework';
import { Tween } from '../animation/tween';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _FontWeightTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = '_FontWeightTween';
    }
}
export { _FontWeightTween };
class CupertinoSlidingSegmentedControl extends StatefulWidget$ {
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
export { CupertinoSlidingSegmentedControl };
class _SegmentedControlState extends State$ {
}
export { _SegmentedControlState };
class _SegmentedControlRenderWidget extends MultiChildRenderObjectWidget {
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
export { _SegmentedControlRenderWidget };
class _ChildAnimationManifest extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.opacity = namedParameters.opacity;
        this.separatorOpacity = namedParameters.separatorOpacity;
        this.className = '_ChildAnimationManifest';
    }
}
export { _ChildAnimationManifest };
class _SegmentedControlContainerBoxParentData extends ContainerBoxParentData {
}
export { _SegmentedControlContainerBoxParentData };
class _RenderSegmentedControl extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['selectedIndex'] = namedParameters.selectedIndex;
        this.thumbColor = namedParameters.thumbColor;
        this.state = namedParameters.state;
        this.className = '_RenderSegmentedControl';
    }
}
export { _RenderSegmentedControl };
