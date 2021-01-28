//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from '../rendering/box';
import { StatefulWidget$, State$, MultiChildRenderObjectWidget, MultiChildRenderObjectElement, } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class OverlayEntry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.opaque = namedParameters.opaque;
        this.maintainState = namedParameters.maintainState;
        this.className = 'OverlayEntry';
    }
}
export { OverlayEntry };
class _OverlayEntryWidget extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.entry = namedParameters.entry;
        this.tickerEnabled = namedParameters.tickerEnabled;
        this.className = '_OverlayEntryWidget';
    }
}
export { _OverlayEntryWidget };
class _OverlayEntryWidgetState extends State$ {
}
export { _OverlayEntryWidgetState };
class Overlay extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialEntries = namedParameters.initialEntries;
        this.className = 'Overlay';
    }
}
export { Overlay };
class OverlayState extends State$ {
}
export { OverlayState };
class _Theatre extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.skipCount = namedParameters.skipCount;
        this.children = namedParameters.children;
        this.className = '_Theatre';
    }
}
export { _Theatre };
class _TheatreElement extends MultiChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_TheatreElement';
    }
}
export { _TheatreElement };
class _RenderTheatre extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.textDirection = namedParameters.textDirection;
        this.skipCount = namedParameters.skipCount;
        this.className = '_RenderTheatre';
    }
}
export { _RenderTheatre };
