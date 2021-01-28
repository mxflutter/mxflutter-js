//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXJSStatefulWidget, MXJSWidgetState } from './widget';
export class MXSingleTickerMixinWidget extends MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXSingleTickerMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXSingleTickerMixinWidget';
    }
}
export class MXSingleTickerMixinWidgetState extends MXJSWidgetState {
}
export class MXTickerMixinWidget extends MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXTickerMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXTickerMixinWidget';
    }
}
export class MXTickerMixinWidgetState extends MXJSWidgetState {
}
export class MXKeepAliveMixinWidget extends MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXKeepAliveMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXKeepAliveMixinWidget';
    }
}
export class MXKeepAliveMixinWidgetState extends MXJSWidgetState {
}
export class MXSingleTickerAndKeepAliveMixinWidget extends MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXSingleTickerAndKeepAliveMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXSingleTickerAndKeepAliveMixinWidget';
    }
}
export class MXSingleTickerAndKeepAliveMixinWidgetState extends MXJSWidgetState {
}
export class MXTickerAndKeepAliveMixinWidget extends MXJSStatefulWidget {
    constructor(name, { key } = {}) {
        super(name, { key });
        this.className = 'MXTickerAndKeepAliveMixinWidget';
    }
    init() {
        super.init();
        this.className = 'MXTickerAndKeepAliveMixinWidget';
    }
}
export class MXTickerAndKeepAliveMixinWidgetState extends MXJSWidgetState {
}
