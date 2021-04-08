// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Ticker } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { StatelessWidget, Widget, InheritedWidget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TickerMode extends StatelessWidget {
  enabled: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, enabled?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.enabled = namedParameters.enabled;
    this.child = namedParameters.child;
    this.className = 'TickerMode';
  }
}
export { TickerMode };
class _EffectiveTickerMode extends InheritedWidget {
  enabled: boolean;
  public constructor(namedParameters: {key?: Key, enabled?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.enabled = namedParameters.enabled;
    this.child = namedParameters.child;
    this.className = '_EffectiveTickerMode';
  }
}
export { _EffectiveTickerMode };
abstract class SingleTickerProviderStateMixin extends State {
  ticker: Ticker;
}
export { SingleTickerProviderStateMixin };
abstract class TickerProviderStateMixin extends State {
  tickers: Set<any>;
}
export { TickerProviderStateMixin };
class _WidgetTicker extends Ticker {
  creator: TickerProviderStateMixin;
  public constructor(onTick?: any, _creator?: TickerProviderStateMixin, namedParameters: {debugLabel?: string} = {}) {
    super();
    this.onTick = onTick;
    this.creator = _creator;
    this.debugLabel = namedParameters.debugLabel;
    this.className = '_WidgetTicker';
  }
}
export { _WidgetTicker };
