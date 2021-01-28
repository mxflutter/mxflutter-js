//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderProxyBox } from '../rendering/proxy-box';
import { SingleChildRenderObjectWidget } from './framework';
import { LayoutChangedNotification } from './notification-listener';
class SizeChangedLayoutNotification extends LayoutChangedNotification {
}
export { SizeChangedLayoutNotification };
class SizeChangedLayoutNotifier extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'SizeChangedLayoutNotifier';
    }
}
export { SizeChangedLayoutNotifier };
class _RenderSizeChangedWithCallback extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.onLayoutChangedCallback = namedParameters.onLayoutChangedCallback;
        this.className = '_RenderSizeChangedWithCallback';
    }
}
export { _RenderSizeChangedWithCallback };
