//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliver } from './sliver';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class OverScrollHeaderStretchConfiguration extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.stretchTriggerOffset = namedParameters.stretchTriggerOffset;
        this.onStretchTrigger = namedParameters.onStretchTrigger;
        this.className = 'OverScrollHeaderStretchConfiguration';
    }
}
export { OverScrollHeaderStretchConfiguration };
class RenderSliverPersistentHeader extends RenderSliver {
}
export { RenderSliverPersistentHeader };
class RenderSliverScrollingPersistentHeader extends RenderSliverPersistentHeader {
}
export { RenderSliverScrollingPersistentHeader };
class RenderSliverPinnedPersistentHeader extends RenderSliverPersistentHeader {
}
export { RenderSliverPinnedPersistentHeader };
class FloatingHeaderSnapConfiguration extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.className = 'FloatingHeaderSnapConfiguration';
    }
}
export { FloatingHeaderSnapConfiguration };
class RenderSliverFloatingPersistentHeader extends RenderSliverPersistentHeader {
}
export { RenderSliverFloatingPersistentHeader };
class RenderSliverFloatingPinnedPersistentHeader extends RenderSliverFloatingPersistentHeader {
}
export { RenderSliverFloatingPinnedPersistentHeader };
