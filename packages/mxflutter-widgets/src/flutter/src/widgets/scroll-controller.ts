//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

// MX Modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
// MX Modified end
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollPosition } from './scroll-position';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ScrollController extends ChangeNotifier {
  initialScrollOffset: number;
  keepScrollOffset: boolean;
  debugLabel: string;
  positions: Array<any>;
  public constructor(
    namedParameters: { initialScrollOffset?: number; keepScrollOffset?: boolean; debugLabel?: string } = {},
  ) {
    super();
    this.initialScrollOffset = namedParameters.initialScrollOffset;
    this.keepScrollOffset = namedParameters.keepScrollOffset;
    this.debugLabel = namedParameters.debugLabel;
    this.className = 'ScrollController';
  }
  // MX modified begin
  public animateTo(offset: any, namedParameters: { duration?: any; curve?: any } = {}) {
    const argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'ScrollController',
      funcName: 'animateTo',
      args: {
        offset,
        duration: namedParameters.duration,
        curve: namedParameters.curve,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }

  public jumpTo(value: any) {
    const argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'ScrollController',
      funcName: 'jumpTo',
      args: {
        value,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }
  // MX modified end
}
export { ScrollController };
class TrackingScrollController extends ScrollController {
  positionToListener: Map<any, any>;
  lastUpdated: ScrollPosition;
  lastUpdatedOffset: number;
  public constructor(
    namedParameters: { initialScrollOffset?: number; keepScrollOffset?: boolean; debugLabel?: string } = {},
  ) {
    super();
    this.initialScrollOffset = namedParameters.initialScrollOffset;
    this.keepScrollOffset = namedParameters.keepScrollOffset;
    this.debugLabel = namedParameters.debugLabel;
    this.className = 'TrackingScrollController';
  }
}
export { TrackingScrollController };
