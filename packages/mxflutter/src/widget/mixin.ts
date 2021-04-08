//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSStatefulWidget, MXJSWidgetState } from './widget';

export abstract class MXSingleTickerMixinWidget extends MXJSStatefulWidget {
  public constructor(name?, { key }: { key?: any } = {}) {
    super(name, { key });
    this.className = 'MXSingleTickerMixinWidget';
  }

  public init() {
    super.init();
    this.className = 'MXSingleTickerMixinWidget';
  }
}

export abstract class MXSingleTickerMixinWidgetState extends MXJSWidgetState {}

export abstract class MXTickerMixinWidget extends MXJSStatefulWidget {
  public constructor(name?, { key }: { key?: any } = {}) {
    super(name, { key });
    this.className = 'MXTickerMixinWidget';
  }

  public init() {
    super.init();
    this.className = 'MXTickerMixinWidget';
  }
}

export abstract class MXTickerMixinWidgetState extends MXJSWidgetState {}

export abstract class MXKeepAliveMixinWidget extends MXJSStatefulWidget {
  public constructor(name?, { key }: { key?: any } = {}) {
    super(name, { key });
    this.className = 'MXKeepAliveMixinWidget';
  }

  public init() {
    super.init();
    this.className = 'MXKeepAliveMixinWidget';
  }
}

export abstract class MXKeepAliveMixinWidgetState extends MXJSWidgetState {}

export abstract class MXSingleTickerAndKeepAliveMixinWidget extends MXJSStatefulWidget {
  public constructor(name?, { key }: { key?: any } = {}) {
    super(name, { key });
    this.className = 'MXSingleTickerAndKeepAliveMixinWidget';
  }

  public init() {
    super.init();
    this.className = 'MXSingleTickerAndKeepAliveMixinWidget';
  }
}

export abstract class MXSingleTickerAndKeepAliveMixinWidgetState extends MXJSWidgetState {}

export abstract class MXTickerAndKeepAliveMixinWidget extends MXJSStatefulWidget {
  public constructor(name?, { key }: { key?: any } = {}) {
    super(name, { key });
    this.className = 'MXTickerAndKeepAliveMixinWidget';
  }

  public init() {
    super.init();
    this.className = 'MXTickerAndKeepAliveMixinWidget';
  }
}

export abstract class MXTickerAndKeepAliveMixinWidgetState extends MXJSWidgetState {}
