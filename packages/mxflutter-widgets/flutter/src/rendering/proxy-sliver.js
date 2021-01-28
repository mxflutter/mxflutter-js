//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliver } from './sliver';
class RenderProxySliver extends RenderSliver {
}
export { RenderProxySliver };
class RenderSliverOpacity extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverOpacity';
    }
}
export { RenderSliverOpacity };
class RenderSliverIgnorePointer extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this['sliver'] = namedParameters.sliver;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'RenderSliverIgnorePointer';
    }
}
export { RenderSliverIgnorePointer };
class RenderSliverOffstage extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this.offstage = namedParameters.offstage;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverOffstage';
    }
}
export { RenderSliverOffstage };
class RenderSliverAnimatedOpacity extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this['opacity'] = namedParameters.opacity;
        this['alwaysIncludeSemantics'] = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverAnimatedOpacity';
    }
}
export { RenderSliverAnimatedOpacity };
