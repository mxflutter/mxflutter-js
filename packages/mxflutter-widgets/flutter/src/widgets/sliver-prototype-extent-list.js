//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliverFixedExtentBoxAdaptor } from '../rendering/sliver-fixed-extent-list';
import { SliverMultiBoxAdaptorWidget, SliverMultiBoxAdaptorElement } from './sliver';
class SliverPrototypeExtentList extends SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.prototypeItem = namedParameters.prototypeItem;
        this.className = 'SliverPrototypeExtentList';
    }
}
export { SliverPrototypeExtentList };
class _SliverPrototypeExtentListElement extends SliverMultiBoxAdaptorElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_SliverPrototypeExtentListElement';
    }
}
export { _SliverPrototypeExtentListElement };
class _RenderSliverPrototypeExtentList extends RenderSliverFixedExtentBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this['__mx_childManager'] = namedParameters.childManager;
        this.className = '_RenderSliverPrototypeExtentList';
    }
}
export { _RenderSliverPrototypeExtentList };
