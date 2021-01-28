//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { InheritedNotifier } from './inherited-notifier';
import { DragStartDetails } from '../gestures/drag-details';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { BoxConstraints } from '../rendering/box';
import { ValueNotifier, ChangeNotifier } from '../foundation/change-notifier';
import { Notification } from './notification-listener';
import { Key } from '../foundation/key';
import { StatefulWidget$, BuildContext$, State$, StatelessWidget$, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DraggableScrollableSheet extends StatefulWidget$ {
  initialChildSize: number;
  minChildSize: number;
  maxChildSize: number;
  expand: boolean;
  builder: any;
  public constructor(
    namedParameters: {
      key?: Key;
      initialChildSize?: number;
      minChildSize?: number;
      maxChildSize?: number;
      expand?: boolean;
      builder?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.initialChildSize = namedParameters.initialChildSize;
    this.minChildSize = namedParameters.minChildSize;
    this.maxChildSize = namedParameters.maxChildSize;
    this.expand = namedParameters.expand;
    this.builder = namedParameters.builder;
    this.className = 'DraggableScrollableSheet';
  }
}
export { DraggableScrollableSheet };
class DraggableScrollableNotification extends Notification {
  extent: number;
  minExtent: number;
  maxExtent: number;
  initialExtent: number;
  context: BuildContext$;
  public constructor(
    namedParameters: {
      extent?: number;
      minExtent?: number;
      maxExtent?: number;
      initialExtent?: number;
      context?: BuildContext$;
    } = {},
  ) {
    super();
    this.extent = namedParameters.extent;
    this.minExtent = namedParameters.minExtent;
    this.maxExtent = namedParameters.maxExtent;
    this.initialExtent = namedParameters.initialExtent;
    this.context = namedParameters.context;
    this.className = 'DraggableScrollableNotification';
  }
}
export { DraggableScrollableNotification };
class _DraggableSheetExtent extends MXDartClass {
  minExtent: number;
  maxExtent: number;
  initialExtent: number;
  currentExtent: ValueNotifier;
  availablePixels: number;
  public constructor(
    namedParameters: { minExtent?: number; maxExtent?: number; initialExtent?: number; listener?: any } = {},
  ) {
    super();
    this.minExtent = namedParameters.minExtent;
    this.maxExtent = namedParameters.maxExtent;
    this.initialExtent = namedParameters.initialExtent;
    this['listener'] = namedParameters.listener;
    this.className = '_DraggableSheetExtent';
  }
}
export { _DraggableSheetExtent };
class _DraggableScrollableSheetState extends State$ {
  scrollController: _DraggableScrollableSheetScrollController;
  extent: _DraggableSheetExtent;
}
export { _DraggableScrollableSheetState };
class _DraggableScrollableSheetScrollController extends ScrollController {
  extent: _DraggableSheetExtent;
  public constructor(
    namedParameters: { initialScrollOffset?: number; debugLabel?: string; extent?: _DraggableSheetExtent } = {},
  ) {
    super();
    this.initialScrollOffset = namedParameters.initialScrollOffset;
    this.debugLabel = namedParameters.debugLabel;
    this.extent = namedParameters.extent;
    this.className = '_DraggableScrollableSheetScrollController';
  }
}
export { _DraggableScrollableSheetScrollController };
class _DraggableScrollableSheetScrollPosition extends ScrollPositionWithSingleContext {
  dragCancelCallback: any;
  extent: _DraggableSheetExtent;
  public constructor(
    namedParameters: {
      physics?: ScrollPhysics;
      context?: ScrollContext;
      initialPixels?: number;
      keepScrollOffset?: boolean;
      oldPosition?: ScrollPosition;
      debugLabel?: string;
      extent?: _DraggableSheetExtent;
    } = {},
  ) {
    super();
    this.physics = namedParameters.physics;
    this.context = namedParameters.context;
    this['initialPixels'] = namedParameters.initialPixels;
    this.keepScrollOffset = namedParameters.keepScrollOffset;
    this['oldPosition'] = namedParameters.oldPosition;
    this.debugLabel = namedParameters.debugLabel;
    this.extent = namedParameters.extent;
    this.className = '_DraggableScrollableSheetScrollPosition';
  }
}
export { _DraggableScrollableSheetScrollPosition };
class DraggableScrollableActuator extends StatelessWidget$ {
  child: MXWidget;
  notifier: _ResetNotifier;
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = 'DraggableScrollableActuator';
  }
}
export { DraggableScrollableActuator };
class _ResetNotifier extends ChangeNotifier {
  wasCalled: boolean;
}
export { _ResetNotifier };
class _InheritedResetNotifier extends InheritedNotifier {
  public constructor(namedParameters: { key?: Key; child?: MXWidget; notifier?: _ResetNotifier } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this['notifier'] = namedParameters.notifier;
    this.className = '_InheritedResetNotifier';
  }
}
export { _InheritedResetNotifier };
