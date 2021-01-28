//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliverPersistentHeader, RenderSliverScrollingPersistentHeader, RenderSliverPinnedPersistentHeader, RenderSliverFloatingPinnedPersistentHeader, RenderSliverFloatingPersistentHeader, } from '../rendering/sliver-persistent-header';
import { StatelessWidget$, RenderObjectElement, RenderObjectWidget } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SliverPersistentHeaderDelegate extends MXDartClass {
}
export { SliverPersistentHeaderDelegate };
class SliverPersistentHeader extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.pinned = namedParameters.pinned;
        this.floating = namedParameters.floating;
        this.className = 'SliverPersistentHeader';
    }
}
export { SliverPersistentHeader };
class _SliverPersistentHeaderElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_SliverPersistentHeaderElement';
    }
}
export { _SliverPersistentHeaderElement };
class _SliverPersistentHeaderRenderObjectWidget extends RenderObjectWidget {
}
export { _SliverPersistentHeaderRenderObjectWidget };
class _RenderSliverPersistentHeaderForWidgetsMixin extends RenderSliverPersistentHeader {
}
export { _RenderSliverPersistentHeaderForWidgetsMixin };
class _SliverScrollingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverScrollingPersistentHeader';
    }
}
export { _SliverScrollingPersistentHeader };
class _RenderSliverScrollingPersistentHeaderForWidgets extends RenderSliverScrollingPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this.className = '_RenderSliverScrollingPersistentHeaderForWidgets';
    }
}
export { _RenderSliverScrollingPersistentHeaderForWidgets };
class _SliverPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverPinnedPersistentHeader';
    }
}
export { _SliverPinnedPersistentHeader };
class _RenderSliverPinnedPersistentHeaderForWidgets extends RenderSliverPinnedPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this.className = '_RenderSliverPinnedPersistentHeaderForWidgets';
    }
}
export { _RenderSliverPinnedPersistentHeaderForWidgets };
class _SliverFloatingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverFloatingPersistentHeader';
    }
}
export { _SliverFloatingPersistentHeader };
class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends RenderSliverFloatingPinnedPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['snapConfiguration'] = namedParameters.snapConfiguration;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this.className = '_RenderSliverFloatingPinnedPersistentHeaderForWidgets';
    }
}
export { _RenderSliverFloatingPinnedPersistentHeaderForWidgets };
class _SliverFloatingPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverFloatingPinnedPersistentHeader';
    }
}
export { _SliverFloatingPinnedPersistentHeader };
class _RenderSliverFloatingPersistentHeaderForWidgets extends RenderSliverFloatingPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['snapConfiguration'] = namedParameters.snapConfiguration;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this.className = '_RenderSliverFloatingPersistentHeaderForWidgets';
    }
}
export { _RenderSliverFloatingPersistentHeaderForWidgets };
