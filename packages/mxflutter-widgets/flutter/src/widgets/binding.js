//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { BindingBase } from '../foundation/binding';
import { RenderObjectWidget, RootRenderObjectElement } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class WidgetsBindingObserver extends MXDartClass {
}
export { WidgetsBindingObserver };
class WidgetsBinding extends MXDartClass {
}
export { WidgetsBinding };
class RenderObjectToWidgetAdapter extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.container = namedParameters.container;
        this.debugShortDescription = namedParameters.debugShortDescription;
        this.className = 'RenderObjectToWidgetAdapter';
    }
}
export { RenderObjectToWidgetAdapter };
class RenderObjectToWidgetElement extends RootRenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = 'RenderObjectToWidgetElement';
    }
}
export { RenderObjectToWidgetElement };
class WidgetsFlutterBinding extends BindingBase {
}
export { WidgetsFlutterBinding };
