//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Scrollable, ScrollableState } from './scrollable';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { FixedScrollMetrics } from './scroll-metrics';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { StatefulWidget$, State$, RenderObjectElement, RenderObjectWidget, } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ListWheelChildDelegate extends MXDartClass {
}
export { ListWheelChildDelegate };
class ListWheelChildListDelegate extends ListWheelChildDelegate {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.className = 'ListWheelChildListDelegate';
    }
}
export { ListWheelChildListDelegate };
class ListWheelChildLoopingListDelegate extends ListWheelChildDelegate {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.className = 'ListWheelChildLoopingListDelegate';
    }
}
export { ListWheelChildLoopingListDelegate };
class ListWheelChildBuilderDelegate extends ListWheelChildDelegate {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.childCount = namedParameters.childCount;
        this.className = 'ListWheelChildBuilderDelegate';
    }
}
export { ListWheelChildBuilderDelegate };
class FixedExtentScrollController extends ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialItem = namedParameters.initialItem;
        this.className = 'FixedExtentScrollController';
    }
}
export { FixedExtentScrollController };
class FixedExtentMetrics extends FixedScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.itemIndex = namedParameters.itemIndex;
        this.className = 'FixedExtentMetrics';
    }
}
export { FixedExtentMetrics };
class _FixedExtentScrollPosition extends ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this['physics'] = namedParameters.physics;
        this['context'] = namedParameters.context;
        this['initialItem'] = namedParameters.initialItem;
        this['keepScrollOffset'] = namedParameters.keepScrollOffset;
        this['oldPosition'] = namedParameters.oldPosition;
        this['debugLabel'] = namedParameters.debugLabel;
        this.className = '_FixedExtentScrollPosition';
    }
}
export { _FixedExtentScrollPosition };
class _FixedExtentScrollable extends Scrollable {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.itemExtent = namedParameters.itemExtent;
        this.viewportBuilder = namedParameters.viewportBuilder;
        this.className = '_FixedExtentScrollable';
    }
}
export { _FixedExtentScrollable };
class _FixedExtentScrollableState extends ScrollableState {
}
export { _FixedExtentScrollableState };
class FixedExtentScrollPhysics extends ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'FixedExtentScrollPhysics';
    }
}
export { FixedExtentScrollPhysics };
class ListWheelScrollView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.diameterRatio = namedParameters.diameterRatio;
        this.perspective = namedParameters.perspective;
        this.offAxisFraction = namedParameters.offAxisFraction;
        this.useMagnifier = namedParameters.useMagnifier;
        this.magnification = namedParameters.magnification;
        this.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        this.itemExtent = namedParameters.itemExtent;
        this.squeeze = namedParameters.squeeze;
        this.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
        this.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        this.clipBehavior = namedParameters.clipBehavior;
        this['children'] = namedParameters.children;
        this.className = 'ListWheelScrollView';
    }
    static useDelegate(namedParameters = {}) {
        var jsObj = new ListWheelScrollView();
        jsObj.key = namedParameters.key;
        jsObj.controller = namedParameters.controller;
        jsObj.physics = namedParameters.physics;
        jsObj.diameterRatio = namedParameters.diameterRatio;
        jsObj.perspective = namedParameters.perspective;
        jsObj.offAxisFraction = namedParameters.offAxisFraction;
        jsObj.useMagnifier = namedParameters.useMagnifier;
        jsObj.magnification = namedParameters.magnification;
        jsObj.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        jsObj.itemExtent = namedParameters.itemExtent;
        jsObj.squeeze = namedParameters.squeeze;
        jsObj.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
        jsObj.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj.childDelegate = namedParameters.childDelegate;
        jsObj['constructorName'] = 'useDelegate';
        return jsObj;
    }
}
export { ListWheelScrollView };
class _ListWheelScrollViewState extends State$ {
}
export { _ListWheelScrollViewState };
class ListWheelElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'ListWheelElement';
    }
}
export { ListWheelElement };
class ListWheelViewport extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.diameterRatio = namedParameters.diameterRatio;
        this.perspective = namedParameters.perspective;
        this.offAxisFraction = namedParameters.offAxisFraction;
        this.useMagnifier = namedParameters.useMagnifier;
        this.magnification = namedParameters.magnification;
        this.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        this.itemExtent = namedParameters.itemExtent;
        this.squeeze = namedParameters.squeeze;
        this.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        this.offset = namedParameters.offset;
        this.childDelegate = namedParameters.childDelegate;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ListWheelViewport';
    }
}
export { ListWheelViewport };
