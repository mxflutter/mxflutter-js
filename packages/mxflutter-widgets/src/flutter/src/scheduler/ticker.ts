//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class TickerProvider extends MXDartClass {}
export { TickerProvider };
class Ticker extends MXDartClass {
  future: TickerFuture;
  muted: boolean;
  startTime: Duration;
  onTick: any;
  animationId: number;
  debugLabel: string;
  debugCreationStack: any;
  public constructor(_onTick?: any, namedParameters: { debugLabel?: string } = {}) {
    super();
    this.onTick = _onTick;
    this.debugLabel = namedParameters.debugLabel;
    this.className = 'Ticker';
  }
}
export { Ticker };
class TickerFuture extends MXDartClass {
  primaryCompleter: any;
  secondaryCompleter: any;
  completed: boolean;
  static complete() {
    var jsObj = new TickerFuture();
    jsObj['constructorName'] = 'complete';
    return jsObj;
  }
}
export { TickerFuture };
class TickerCanceled extends MXDartClass {
  ticker: Ticker;
  public constructor(ticker?: Ticker) {
    super();
    this.ticker = ticker;
    this.className = 'TickerCanceled';
  }
}
export { TickerCanceled };
