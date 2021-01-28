//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderListWheelViewport } from '../rendering/list-wheel-viewport';
import { RenderObject } from '../rendering/object';
import { RenderBox } from '../rendering/box';
import { ViewportOffset } from '../rendering/viewport-offset';
import { ScrollNotification } from './scroll-notification';
import { Clip } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { Scrollable, ScrollableState } from './scrollable';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { AxisDirection } from '../painting/basic-types';
import { FixedScrollMetrics, ScrollMetrics } from './scroll-metrics';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ScrollController } from './scroll-controller';
import {
  BuildContext$,
  StatefulWidget$,
  State$,
  RenderObjectElement,
  Element$,
  Widget,
  RenderObjectWidget,
} from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ListWheelChildDelegate extends MXDartClass {}
export { ListWheelChildDelegate };
class ListWheelChildListDelegate extends ListWheelChildDelegate {
  children: Array<any>;
  public constructor(namedParameters: { children?: Array<any> } = {}) {
    super();
    this.children = namedParameters.children;
    this.className = 'ListWheelChildListDelegate';
  }
}
export { ListWheelChildListDelegate };
class ListWheelChildLoopingListDelegate extends ListWheelChildDelegate {
  children: Array<any>;
  public constructor(namedParameters: { children?: Array<any> } = {}) {
    super();
    this.children = namedParameters.children;
    this.className = 'ListWheelChildLoopingListDelegate';
  }
}
export { ListWheelChildLoopingListDelegate };
class ListWheelChildBuilderDelegate extends ListWheelChildDelegate {
  builder: any;
  childCount: number;
  public constructor(namedParameters: { builder?: any; childCount?: number } = {}) {
    super();
    this.builder = namedParameters.builder;
    this.childCount = namedParameters.childCount;
    this.className = 'ListWheelChildBuilderDelegate';
  }
}
export { ListWheelChildBuilderDelegate };
class FixedExtentScrollController extends ScrollController {
  initialItem: number;
  public constructor(namedParameters: { initialItem?: number } = {}) {
    super();
    this.initialItem = namedParameters.initialItem;
    this.className = 'FixedExtentScrollController';
  }
}
export { FixedExtentScrollController };
class FixedExtentMetrics extends FixedScrollMetrics {
  itemIndex: number;
  public constructor(
    namedParameters: {
      minScrollExtent?: number;
      maxScrollExtent?: number;
      pixels?: number;
      viewportDimension?: number;
      axisDirection?: AxisDirection;
      itemIndex?: number;
    } = {},
  ) {
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
  public constructor(
    namedParameters: {
      physics?: ScrollPhysics;
      context?: ScrollContext;
      initialItem?: number;
      keepScrollOffset?: boolean;
      oldPosition?: ScrollPosition;
      debugLabel?: string;
    } = {},
  ) {
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
  itemExtent: number;
  public constructor(
    namedParameters: {
      key?: Key;
      axisDirection?: AxisDirection;
      controller?: ScrollController;
      physics?: ScrollPhysics;
      itemExtent?: number;
      viewportBuilder?: any;
    } = {},
  ) {
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
class _FixedExtentScrollableState extends ScrollableState {}
export { _FixedExtentScrollableState };
class FixedExtentScrollPhysics extends ScrollPhysics {
  public constructor(namedParameters: { parent?: ScrollPhysics } = {}) {
    super();
    this['parent'] = namedParameters.parent;
    this.className = 'FixedExtentScrollPhysics';
  }
}
export { FixedExtentScrollPhysics };
class ListWheelScrollView extends StatefulWidget$ {
  controller: ScrollController;
  physics: ScrollPhysics;
  diameterRatio: number;
  perspective: number;
  offAxisFraction: number;
  useMagnifier: boolean;
  magnification: number;
  overAndUnderCenterOpacity: number;
  itemExtent: number;
  squeeze: number;
  onSelectedItemChanged: any;
  renderChildrenOutsideViewport: boolean;
  childDelegate: ListWheelChildDelegate;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: ScrollController;
      physics?: ScrollPhysics;
      diameterRatio?: number;
      perspective?: number;
      offAxisFraction?: number;
      useMagnifier?: boolean;
      magnification?: number;
      overAndUnderCenterOpacity?: number;
      itemExtent?: number;
      squeeze?: number;
      onSelectedItemChanged?: any;
      renderChildrenOutsideViewport?: boolean;
      clipBehavior?: Clip;
      children?: Array<any>;
    } = {},
  ) {
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
  static useDelegate(
    namedParameters: {
      key?: Key;
      controller?: ScrollController;
      physics?: ScrollPhysics;
      diameterRatio?: number;
      perspective?: number;
      offAxisFraction?: number;
      useMagnifier?: boolean;
      magnification?: number;
      overAndUnderCenterOpacity?: number;
      itemExtent?: number;
      squeeze?: number;
      onSelectedItemChanged?: any;
      renderChildrenOutsideViewport?: boolean;
      clipBehavior?: Clip;
      childDelegate?: ListWheelChildDelegate;
    } = {},
  ) {
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
  lastReportedItemIndex: number;
  scrollController: ScrollController;
}
export { _ListWheelScrollViewState };
class ListWheelElement extends RenderObjectElement {
  childWidgets: Map<any, any>;
  childElements: any;
  public constructor(widget?: ListWheelViewport) {
    super();
    this['__mx_widget'] = widget;
    this.className = 'ListWheelElement';
  }
}
export { ListWheelElement };
class ListWheelViewport extends RenderObjectWidget {
  diameterRatio: number;
  perspective: number;
  offAxisFraction: number;
  useMagnifier: boolean;
  magnification: number;
  overAndUnderCenterOpacity: number;
  itemExtent: number;
  squeeze: number;
  renderChildrenOutsideViewport: boolean;
  offset: ViewportOffset;
  childDelegate: ListWheelChildDelegate;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      diameterRatio?: number;
      perspective?: number;
      offAxisFraction?: number;
      useMagnifier?: boolean;
      magnification?: number;
      overAndUnderCenterOpacity?: number;
      itemExtent?: number;
      squeeze?: number;
      renderChildrenOutsideViewport?: boolean;
      offset?: ViewportOffset;
      childDelegate?: ListWheelChildDelegate;
      clipBehavior?: Clip;
    } = {},
  ) {
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
