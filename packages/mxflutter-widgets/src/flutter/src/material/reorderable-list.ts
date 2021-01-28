//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Velocity } from '../gestures/velocity-tracker';
import { BoxConstraints } from '../rendering/box';
import { AnimationStatus } from '../animation/animation';
import { Size, Offset } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { OverlayEntry } from '../widgets/overlay';
import { Key } from '../foundation/key';
import { EdgeInsets } from '../painting/edge-insets';
import { ScrollController } from '../widgets/scroll-controller';
import { Axis } from '../painting/basic-types';
import { StatefulWidget$, Widget, State$, GlobalKey, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ReorderableListView extends StatefulWidget$ {
  header: MXWidget;
  children: Array<any>;
  scrollDirection: Axis;
  scrollController: ScrollController;
  padding: EdgeInsets;
  reverse: boolean;
  onReorder: any;
  public constructor(
    namedParameters: {
      key?: Key;
      header?: MXWidget;
      children?: Array<any>;
      onReorder?: any;
      scrollController?: ScrollController;
      scrollDirection?: Axis;
      padding?: EdgeInsets;
      reverse?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.header = namedParameters.header;
    this.children = namedParameters.children;
    this.onReorder = namedParameters.onReorder;
    this.scrollController = namedParameters.scrollController;
    this.scrollDirection = namedParameters.scrollDirection;
    this.padding = namedParameters.padding;
    this.reverse = namedParameters.reverse;
    this.className = 'ReorderableListView';
  }
}
export { ReorderableListView };
class _ReorderableListViewState extends State$ {
  overlayKey: GlobalKey;
  listOverlayEntry: OverlayEntry;
}
export { _ReorderableListViewState };
class _ReorderableListContent extends StatefulWidget$ {
  header: MXWidget;
  children: Array<any>;
  scrollController: ScrollController;
  scrollDirection: Axis;
  padding: EdgeInsets;
  onReorder: any;
  reverse: boolean;
  public constructor(
    namedParameters: {
      header?: MXWidget;
      children?: Array<any>;
      scrollController?: ScrollController;
      scrollDirection?: Axis;
      padding?: EdgeInsets;
      onReorder?: any;
      reverse?: boolean;
    } = {},
  ) {
    super();
    this.header = namedParameters.header;
    this.children = namedParameters.children;
    this.scrollController = namedParameters.scrollController;
    this.scrollDirection = namedParameters.scrollDirection;
    this.padding = namedParameters.padding;
    this.onReorder = namedParameters.onReorder;
    this.reverse = namedParameters.reverse;
    this.className = '_ReorderableListContent';
  }
}
export { _ReorderableListContent };
class _ReorderableListContentState extends State$ {
  scrollController: ScrollController;
  entranceController: AnimationController;
  ghostController: AnimationController;
  dragging: Key;
  draggingFeedbackSize: Size;
  dragStartIndex: number;
  ghostIndex: number;
  currentIndex: number;
  nextIndex: number;
  scrolling: boolean;
}
export { _ReorderableListContentState };
