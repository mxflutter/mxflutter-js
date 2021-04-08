// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { Axis } from '../painting/basic-types';
import { StatefulWidget, State, GlobalKey } from './framework';
import { AnimationController } from '../animation/animation-controller';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _ActiveItem extends MXDartClass {
  controller: AnimationController;
  removedItemBuilder: any;
  itemIndex: number;
  static incoming(controller?: AnimationController, itemIndex?: number) {
    var jsObj = new _ActiveItem();
    jsObj.controller = controller;
    jsObj.itemIndex = itemIndex;
    jsObj['constructorName'] = 'incoming';
    return jsObj;
  }
  static outgoing(controller?: AnimationController, itemIndex?: number, removedItemBuilder?: any) {
    var jsObj = new _ActiveItem();
    jsObj.controller = controller;
    jsObj.itemIndex = itemIndex;
    jsObj.removedItemBuilder = removedItemBuilder;
    jsObj['constructorName'] = 'outgoing';
    return jsObj;
  }
  static index(itemIndex?: number) {
    var jsObj = new _ActiveItem();
    jsObj.itemIndex = itemIndex;
    jsObj['constructorName'] = 'index';
    return jsObj;
  }
}
export { _ActiveItem };
class AnimatedList extends StatefulWidget {
  itemBuilder: any;
  initialItemCount: number;
  scrollDirection: Axis;
  reverse: boolean;
  controller: ScrollController;
  primary: boolean;
  physics: ScrollPhysics;
  shrinkWrap: boolean;
  padding: EdgeInsetsGeometry;
  public constructor(namedParameters: {key?: Key, itemBuilder?: any, initialItemCount?: number, scrollDirection?: Axis, reverse?: boolean, controller?: ScrollController, primary?: boolean, physics?: ScrollPhysics, shrinkWrap?: boolean, padding?: EdgeInsetsGeometry} = {}) {
    super();
    this.key = namedParameters.key;
    this.itemBuilder = namedParameters.itemBuilder;
    this.initialItemCount = namedParameters.initialItemCount;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.controller = namedParameters.controller;
    this.primary = namedParameters.primary;
    this.physics = namedParameters.physics;
    this.shrinkWrap = namedParameters.shrinkWrap;
    this.padding = namedParameters.padding;
    this.className = 'AnimatedList';
  }
}
export { AnimatedList };
class AnimatedListState extends State {
  sliverAnimatedListKey: GlobalKey;
}
export { AnimatedListState };
class SliverAnimatedList extends StatefulWidget {
  itemBuilder: any;
  initialItemCount: number;
  public constructor(namedParameters: {key?: Key, itemBuilder?: any, initialItemCount?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.itemBuilder = namedParameters.itemBuilder;
    this.initialItemCount = namedParameters.initialItemCount;
    this.className = 'SliverAnimatedList';
  }
}
export { SliverAnimatedList };
class SliverAnimatedListState extends State {
  incomingItems: Array<any>;
  outgoingItems: Array<any>;
  itemsCount: number;
}
export { SliverAnimatedListState };
