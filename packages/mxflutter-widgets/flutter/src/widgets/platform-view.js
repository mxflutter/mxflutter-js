//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PlatformViewController } from '../services/platform-views';
import { StatefulWidget$, StatelessWidget$, State$, LeafRenderObjectWidget } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class AndroidView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.viewType = namedParameters.viewType;
        this.onPlatformViewCreated = namedParameters.onPlatformViewCreated;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.layoutDirection = namedParameters.layoutDirection;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.creationParams = namedParameters.creationParams;
        this.creationParamsCodec = namedParameters.creationParamsCodec;
        this.className = 'AndroidView';
    }
}
export { AndroidView };
class UiKitView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.viewType = namedParameters.viewType;
        this.onPlatformViewCreated = namedParameters.onPlatformViewCreated;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.layoutDirection = namedParameters.layoutDirection;
        this.creationParams = namedParameters.creationParams;
        this.creationParamsCodec = namedParameters.creationParamsCodec;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = 'UiKitView';
    }
}
export { UiKitView };
class HtmlElementView extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.viewType = namedParameters.viewType;
        this.className = 'HtmlElementView';
    }
}
export { HtmlElementView };
class _HtmlElementViewController extends PlatformViewController {
    constructor(viewId, viewType) {
        super();
        this.viewId = viewId;
        this.viewType = viewType;
        this.className = '_HtmlElementViewController';
    }
}
export { _HtmlElementViewController };
class _AndroidViewState extends State$ {
}
export { _AndroidViewState };
class _UiKitViewState extends State$ {
}
export { _UiKitViewState };
class _AndroidPlatformView extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = '_AndroidPlatformView';
    }
}
export { _AndroidPlatformView };
class _UiKitPlatformView extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = '_UiKitPlatformView';
    }
}
export { _UiKitPlatformView };
class PlatformViewCreationParams extends MXDartClass {
}
export { PlatformViewCreationParams };
class PlatformViewLink extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.surfaceFactory = namedParameters.surfaceFactory;
        this.onCreatePlatformView = namedParameters.onCreatePlatformView;
        this.viewType = namedParameters.viewType;
        this.className = 'PlatformViewLink';
    }
}
export { PlatformViewLink };
class _PlatformViewLinkState extends State$ {
}
export { _PlatformViewLinkState };
class PlatformViewSurface extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = 'PlatformViewSurface';
    }
}
export { PlatformViewSurface };
class AndroidViewSurface extends PlatformViewSurface {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['controller'] = namedParameters.controller;
        this['hitTestBehavior'] = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'AndroidViewSurface';
    }
}
export { AndroidViewSurface };
