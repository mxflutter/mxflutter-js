//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TickerProvider extends MXDartClass {
}
export { TickerProvider };
class Ticker extends MXDartClass {
    constructor(_onTick, namedParameters = {}) {
        super();
        this.onTick = _onTick;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'Ticker';
    }
}
export { Ticker };
class TickerFuture extends MXDartClass {
    static complete() {
        var jsObj = new TickerFuture();
        jsObj['constructorName'] = 'complete';
        return jsObj;
    }
}
export { TickerFuture };
class TickerCanceled extends MXDartClass {
    constructor(ticker) {
        super();
        this.ticker = ticker;
        this.className = 'TickerCanceled';
    }
}
export { TickerCanceled };
