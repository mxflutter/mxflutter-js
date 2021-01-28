//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from '../rendering/box';
import { RenderObjectWithChildMixin } from '../rendering/object';
import { RenderObjectWidget, RenderObjectElement } from './framework';
class ConstrainedLayoutBuilder extends RenderObjectWidget {
}
export { ConstrainedLayoutBuilder };
class _LayoutBuilderElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_LayoutBuilderElement';
    }
}
export { _LayoutBuilderElement };
class RenderConstrainedLayoutBuilder extends RenderObjectWithChildMixin {
}
export { RenderConstrainedLayoutBuilder };
class LayoutBuilder extends ConstrainedLayoutBuilder {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['builder'] = namedParameters.builder;
        this.className = 'LayoutBuilder';
    }
}
export { LayoutBuilder };
class _RenderLayoutBuilder extends RenderBox {
}
export { _RenderLayoutBuilder };
