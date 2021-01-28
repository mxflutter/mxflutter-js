//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { SliverGridDelegate } from '../rendering/sliver-grid';
import { SliverChildDelegate } from './sliver';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ScrollUpdateNotification } from './scroll-notification';
import { ViewportOffset } from '../rendering/viewport-offset';
import { DragStartBehavior } from '../gestures/recognizer';
import { Key } from '../foundation/key';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { Axis, AxisDirection } from '../painting/basic-types';
import { StatelessWidget$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ScrollViewKeyboardDismissBehavior {
  manual = '{ "_name": "ScrollViewKeyboardDismissBehavior.manual", "index": 0 }',
  onDrag = '{ "_name": "ScrollViewKeyboardDismissBehavior.onDrag", "index": 1 }',
}

export { ScrollViewKeyboardDismissBehavior };
abstract class ScrollView extends StatelessWidget$ {
  scrollDirection: Axis;
  reverse: boolean;
  controller: ScrollController;
  primary: boolean;
  physics: ScrollPhysics;
  shrinkWrap: boolean;
  center: Key;
  anchor: number;
  cacheExtent: number;
  semanticChildCount: number;
  dragStartBehavior: DragStartBehavior;
  keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior;
}
export { ScrollView };
class CustomScrollView extends ScrollView {
  slivers: Array<any>;
  public constructor(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      center?: Key;
      anchor?: number;
      cacheExtent?: number;
      slivers?: Array<any>;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.controller = namedParameters.controller;
    this.primary = namedParameters.primary;
    this.physics = namedParameters.physics;
    this.shrinkWrap = namedParameters.shrinkWrap;
    this.center = namedParameters.center;
    this.anchor = namedParameters.anchor;
    this.cacheExtent = namedParameters.cacheExtent;
    this.slivers = namedParameters.slivers;
    this.semanticChildCount = namedParameters.semanticChildCount;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'CustomScrollView';
  }
}
export { CustomScrollView };
abstract class BoxScrollView extends ScrollView {
  padding: EdgeInsetsGeometry;
}
export { BoxScrollView };
class ListView extends BoxScrollView {
  itemExtent: number;
  childrenDelegate: SliverChildDelegate;
  public constructor(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      itemExtent?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      cacheExtent?: number;
      children?: Array<any>;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.controller = namedParameters.controller;
    this.primary = namedParameters.primary;
    this.physics = namedParameters.physics;
    this.shrinkWrap = namedParameters.shrinkWrap;
    this.padding = namedParameters.padding;
    this.itemExtent = namedParameters.itemExtent;
    this['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    this['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    this['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    this.cacheExtent = namedParameters.cacheExtent;
    this['children'] = namedParameters.children;
    this.semanticChildCount = namedParameters.semanticChildCount;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    this.className = 'ListView';
  }
  static builder(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      itemExtent?: number;
      itemBuilder?: any;
      itemCount?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      cacheExtent?: number;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new ListView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj.itemExtent = namedParameters.itemExtent;
    jsObj['itemBuilder'] = namedParameters.itemBuilder;
    jsObj['itemCount'] = namedParameters.itemCount;
    jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    jsObj.cacheExtent = namedParameters.cacheExtent;
    jsObj.semanticChildCount = namedParameters.semanticChildCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'builder';
    return jsObj;
  }
  static separated(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      itemBuilder?: any;
      separatorBuilder?: any;
      itemCount?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      cacheExtent?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new ListView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj['itemBuilder'] = namedParameters.itemBuilder;
    jsObj['separatorBuilder'] = namedParameters.separatorBuilder;
    jsObj['itemCount'] = namedParameters.itemCount;
    jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    jsObj.cacheExtent = namedParameters.cacheExtent;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'separated';
    return jsObj;
  }
  static custom(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      itemExtent?: number;
      childrenDelegate?: SliverChildDelegate;
      cacheExtent?: number;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new ListView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj.itemExtent = namedParameters.itemExtent;
    jsObj.childrenDelegate = namedParameters.childrenDelegate;
    jsObj.cacheExtent = namedParameters.cacheExtent;
    jsObj.semanticChildCount = namedParameters.semanticChildCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'custom';
    return jsObj;
  }
  // MX modified begin
  public preBuild(buildContext: any) {
    if (this['itemBuilder']) {
      this['children'] = [];
      for (let i = 0; i < this['itemCount']; ++i) {
        const w = this['itemBuilder'](buildContext, i);
        this['children'].push(w);
      }
      delete this['itemBuilder'];
    }
  }
  // MX modified end
}
export { ListView };
class GridView extends BoxScrollView {
  gridDelegate: SliverGridDelegate;
  childrenDelegate: SliverChildDelegate;
  public constructor(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      gridDelegate?: SliverGridDelegate;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      cacheExtent?: number;
      children?: Array<any>;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.controller = namedParameters.controller;
    this.primary = namedParameters.primary;
    this.physics = namedParameters.physics;
    this.shrinkWrap = namedParameters.shrinkWrap;
    this.padding = namedParameters.padding;
    this.gridDelegate = namedParameters.gridDelegate;
    this['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    this['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    this['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    this.cacheExtent = namedParameters.cacheExtent;
    this['children'] = namedParameters.children;
    this.semanticChildCount = namedParameters.semanticChildCount;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    this.className = 'GridView';
  }
  static builder(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      gridDelegate?: SliverGridDelegate;
      itemBuilder?: any;
      itemCount?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      cacheExtent?: number;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new GridView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj.gridDelegate = namedParameters.gridDelegate;
    jsObj['itemBuilder'] = namedParameters.itemBuilder;
    jsObj['itemCount'] = namedParameters.itemCount;
    jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    jsObj.cacheExtent = namedParameters.cacheExtent;
    jsObj.semanticChildCount = namedParameters.semanticChildCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'builder';
    return jsObj;
  }
  static custom(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      gridDelegate?: SliverGridDelegate;
      childrenDelegate?: SliverChildDelegate;
      cacheExtent?: number;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new GridView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj.gridDelegate = namedParameters.gridDelegate;
    jsObj.childrenDelegate = namedParameters.childrenDelegate;
    jsObj.cacheExtent = namedParameters.cacheExtent;
    jsObj.semanticChildCount = namedParameters.semanticChildCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'custom';
    return jsObj;
  }
  static count(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      crossAxisCount?: number;
      mainAxisSpacing?: number;
      crossAxisSpacing?: number;
      childAspectRatio?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      cacheExtent?: number;
      children?: Array<any>;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new GridView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj['crossAxisCount'] = namedParameters.crossAxisCount;
    jsObj['mainAxisSpacing'] = namedParameters.mainAxisSpacing;
    jsObj['crossAxisSpacing'] = namedParameters.crossAxisSpacing;
    jsObj['childAspectRatio'] = namedParameters.childAspectRatio;
    jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    jsObj.cacheExtent = namedParameters.cacheExtent;
    jsObj['children'] = namedParameters.children;
    jsObj.semanticChildCount = namedParameters.semanticChildCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'count';
    return jsObj;
  }
  static extent(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: ScrollController;
      primary?: boolean;
      physics?: ScrollPhysics;
      shrinkWrap?: boolean;
      padding?: EdgeInsetsGeometry;
      maxCrossAxisExtent?: number;
      mainAxisSpacing?: number;
      crossAxisSpacing?: number;
      childAspectRatio?: number;
      addAutomaticKeepAlives?: boolean;
      addRepaintBoundaries?: boolean;
      addSemanticIndexes?: boolean;
      children?: Array<any>;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
      keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    } = {},
  ) {
    var jsObj = new GridView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.primary = namedParameters.primary;
    jsObj.physics = namedParameters.physics;
    jsObj.shrinkWrap = namedParameters.shrinkWrap;
    jsObj.padding = namedParameters.padding;
    jsObj['maxCrossAxisExtent'] = namedParameters.maxCrossAxisExtent;
    jsObj['mainAxisSpacing'] = namedParameters.mainAxisSpacing;
    jsObj['crossAxisSpacing'] = namedParameters.crossAxisSpacing;
    jsObj['childAspectRatio'] = namedParameters.childAspectRatio;
    jsObj['addAutomaticKeepAlives'] = namedParameters.addAutomaticKeepAlives;
    jsObj['addRepaintBoundaries'] = namedParameters.addRepaintBoundaries;
    jsObj['addSemanticIndexes'] = namedParameters.addSemanticIndexes;
    jsObj['children'] = namedParameters.children;
    jsObj.semanticChildCount = namedParameters.semanticChildCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.keyboardDismissBehavior = namedParameters.keyboardDismissBehavior;
    jsObj['constructorName'] = 'extent';
    return jsObj;
  }
}
export { GridView };
