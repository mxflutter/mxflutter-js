// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ScrollDirection } from '../rendering/viewport-offset';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { BuildContext } from './framework';
import { ScrollMetrics } from './scroll-metrics';
import { Notification, LayoutChangedNotification } from './notification-listener';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ViewportNotificationMixin extends Notification {
  depth: number;
}
export { ViewportNotificationMixin };
abstract class ScrollNotification extends LayoutChangedNotification {
  metrics: ScrollMetrics;
  context: BuildContext;
}
export { ScrollNotification };
class ScrollStartNotification extends ScrollNotification {
  dragDetails: DragStartDetails;
  public constructor(namedParameters: {metrics?: ScrollMetrics, context?: BuildContext, dragDetails?: DragStartDetails} = {}) {
    super();
    this.metrics = namedParameters.metrics;
    this.context = namedParameters.context;
    this.dragDetails = namedParameters.dragDetails;
    this.className = 'ScrollStartNotification';
  }
}
export { ScrollStartNotification };
class ScrollUpdateNotification extends ScrollNotification {
  dragDetails: DragUpdateDetails;
  scrollDelta: number;
  public constructor(namedParameters: {metrics?: ScrollMetrics, context?: BuildContext, dragDetails?: DragUpdateDetails, scrollDelta?: number} = {}) {
    super();
    this.metrics = namedParameters.metrics;
    this.context = namedParameters.context;
    this.dragDetails = namedParameters.dragDetails;
    this.scrollDelta = namedParameters.scrollDelta;
    this.className = 'ScrollUpdateNotification';
  }
}
export { ScrollUpdateNotification };
class OverscrollNotification extends ScrollNotification {
  dragDetails: DragUpdateDetails;
  overscroll: number;
  velocity: number;
  public constructor(namedParameters: {metrics?: ScrollMetrics, context?: BuildContext, dragDetails?: DragUpdateDetails, overscroll?: number, velocity?: number} = {}) {
    super();
    this.metrics = namedParameters.metrics;
    this.context = namedParameters.context;
    this.dragDetails = namedParameters.dragDetails;
    this.overscroll = namedParameters.overscroll;
    this.velocity = namedParameters.velocity;
    this.className = 'OverscrollNotification';
  }
}
export { OverscrollNotification };
class ScrollEndNotification extends ScrollNotification {
  dragDetails: DragEndDetails;
  public constructor(namedParameters: {metrics?: ScrollMetrics, context?: BuildContext, dragDetails?: DragEndDetails} = {}) {
    super();
    this.metrics = namedParameters.metrics;
    this.context = namedParameters.context;
    this.dragDetails = namedParameters.dragDetails;
    this.className = 'ScrollEndNotification';
  }
}
export { ScrollEndNotification };
class UserScrollNotification extends ScrollNotification {
  direction: ScrollDirection;
  public constructor(namedParameters: {metrics?: ScrollMetrics, context?: BuildContext, direction?: ScrollDirection} = {}) {
    super();
    this.metrics = namedParameters.metrics;
    this.context = namedParameters.context;
    this.direction = namedParameters.direction;
    this.className = 'UserScrollNotification';
  }
}
export { UserScrollNotification };
