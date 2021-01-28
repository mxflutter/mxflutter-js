//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BuildContext$ } from './framework';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { RenderObject } from '../rendering/object';
import { ScrollMetrics } from './scroll-metrics';
import { ScrollActivity } from './scroll-activity';
import { ValueNotifier } from '../foundation/change-notifier';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ViewportOffset, ScrollDirection } from '../rendering/viewport-offset';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ScrollPositionAlignmentPolicy {
  explicit = '{ "_name": "ScrollPositionAlignmentPolicy.explicit", "index": 0 }',
  keepVisibleAtEnd = '{ "_name": "ScrollPositionAlignmentPolicy.keepVisibleAtEnd", "index": 1 }',
  keepVisibleAtStart = '{ "_name": "ScrollPositionAlignmentPolicy.keepVisibleAtStart", "index": 2 }',
}

export { ScrollPositionAlignmentPolicy };
abstract class ScrollPosition extends ViewportOffset {
  physics: ScrollPhysics;
  context: ScrollContext;
  keepScrollOffset: boolean;
  debugLabel: string;
  minScrollExtent: number;
  maxScrollExtent: number;
  pixels: number;
  viewportDimension: number;
  haveDimensions: boolean;
  didChangeViewportDimensionOrReceiveCorrection: boolean;
  semanticActions: Set<any>;
  isScrollingNotifier: ValueNotifier;
  activity: ScrollActivity;
}
export { ScrollPosition };
