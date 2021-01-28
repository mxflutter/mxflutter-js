//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Ticker } from '../scheduler/ticker';
import { StatelessWidget$, InheritedWidget, State$ } from './framework';
class TickerMode extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = 'TickerMode';
    }
}
export { TickerMode };
class _EffectiveTickerMode extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = '_EffectiveTickerMode';
    }
}
export { _EffectiveTickerMode };
class SingleTickerProviderStateMixin extends State$ {
}
export { SingleTickerProviderStateMixin };
class TickerProviderStateMixin extends State$ {
}
export { TickerProviderStateMixin };
class _WidgetTicker extends Ticker {
    constructor(onTick, _creator, namedParameters = {}) {
        super();
        this.onTick = onTick;
        this.creator = _creator;
        this.debugLabel = namedParameters.debugLabel;
        this.className = '_WidgetTicker';
    }
}
export { _WidgetTicker };
