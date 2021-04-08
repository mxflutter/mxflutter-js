"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MXTickerAndKeepAliveMixinWidgetState = exports.MXTickerAndKeepAliveMixinWidget = exports.MXSingleTickerAndKeepAliveMixinWidgetState = exports.MXSingleTickerAndKeepAliveMixinWidget = exports.MXKeepAliveMixinWidgetState = exports.MXKeepAliveMixinWidget = exports.MXTickerMixinWidgetState = exports.MXTickerMixinWidget = exports.MXSingleTickerMixinWidgetState = exports.MXSingleTickerMixinWidget = void 0;
const widget_1 = require("./widget");
class MXSingleTickerMixinWidget extends widget_1.MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXSingleTickerMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXSingleTickerMixinWidget';
    }
}
exports.MXSingleTickerMixinWidget = MXSingleTickerMixinWidget;
class MXSingleTickerMixinWidgetState extends widget_1.MXJSWidgetState {
}
exports.MXSingleTickerMixinWidgetState = MXSingleTickerMixinWidgetState;
class MXTickerMixinWidget extends widget_1.MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXTickerMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXTickerMixinWidget';
    }
}
exports.MXTickerMixinWidget = MXTickerMixinWidget;
class MXTickerMixinWidgetState extends widget_1.MXJSWidgetState {
}
exports.MXTickerMixinWidgetState = MXTickerMixinWidgetState;
class MXKeepAliveMixinWidget extends widget_1.MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXKeepAliveMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXKeepAliveMixinWidget';
    }
}
exports.MXKeepAliveMixinWidget = MXKeepAliveMixinWidget;
class MXKeepAliveMixinWidgetState extends widget_1.MXJSWidgetState {
}
exports.MXKeepAliveMixinWidgetState = MXKeepAliveMixinWidgetState;
class MXSingleTickerAndKeepAliveMixinWidget extends widget_1.MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXSingleTickerAndKeepAliveMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXSingleTickerAndKeepAliveMixinWidget';
    }
}
exports.MXSingleTickerAndKeepAliveMixinWidget = MXSingleTickerAndKeepAliveMixinWidget;
class MXSingleTickerAndKeepAliveMixinWidgetState extends widget_1.MXJSWidgetState {
}
exports.MXSingleTickerAndKeepAliveMixinWidgetState = MXSingleTickerAndKeepAliveMixinWidgetState;
class MXTickerAndKeepAliveMixinWidget extends widget_1.MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXTickerAndKeepAliveMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXTickerAndKeepAliveMixinWidget';
    }
}
exports.MXTickerAndKeepAliveMixinWidget = MXTickerAndKeepAliveMixinWidget;
class MXTickerAndKeepAliveMixinWidgetState extends widget_1.MXJSWidgetState {
}
exports.MXTickerAndKeepAliveMixinWidgetState = MXTickerAndKeepAliveMixinWidgetState;
