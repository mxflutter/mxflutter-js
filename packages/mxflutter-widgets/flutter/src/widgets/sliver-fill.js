//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliverEdgeInsetsPadding } from '../rendering/sliver-padding';
import { SliverMultiBoxAdaptorWidget } from './sliver';
import { StatelessWidget$, SingleChildRenderObjectWidget } from './framework';
class SliverFillViewport extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.viewportFraction = namedParameters.viewportFraction;
        this.padEnds = namedParameters.padEnds;
        this.className = 'SliverFillViewport';
    }
}
export { SliverFillViewport };
class _SliverFillViewportRenderObjectWidget extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = '_SliverFillViewportRenderObjectWidget';
    }
}
export { _SliverFillViewportRenderObjectWidget };
class _SliverFractionalPadding extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.viewportFraction = namedParameters.viewportFraction;
        this['sliver'] = namedParameters.sliver;
        this.className = '_SliverFractionalPadding';
    }
}
export { _SliverFractionalPadding };
class _RenderSliverFractionalPadding extends RenderSliverEdgeInsetsPadding {
    constructor(namedParameters = {}) {
        super();
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = '_RenderSliverFractionalPadding';
    }
}
export { _RenderSliverFractionalPadding };
class SliverFillRemaining extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.hasScrollBody = namedParameters.hasScrollBody;
        this.fillOverscroll = namedParameters.fillOverscroll;
        this.className = 'SliverFillRemaining';
    }
}
export { SliverFillRemaining };
class _SliverFillRemainingWithScrollable extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_SliverFillRemainingWithScrollable';
    }
}
export { _SliverFillRemainingWithScrollable };
class _SliverFillRemainingWithoutScrollable extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_SliverFillRemainingWithoutScrollable';
    }
}
export { _SliverFillRemainingWithoutScrollable };
class _SliverFillRemainingAndOverscroll extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_SliverFillRemainingAndOverscroll';
    }
}
export { _SliverFillRemainingAndOverscroll };
