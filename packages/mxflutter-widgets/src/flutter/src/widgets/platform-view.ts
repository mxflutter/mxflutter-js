//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { FocusNode } from './focus-manager';
import { PointerEvent } from '../gestures/events';
import { PlatformViewController, AndroidViewController, UiKitViewController } from '../services/platform-views';
import { Key } from '../foundation/key';
import { MessageCodec } from '../services/message-codec';
import { TextDirection, Offset } from '../../../mx-dart-sdk';
import {
  PlatformViewHitTestBehavior,
  RenderAndroidView,
  RenderUiKitView,
  PlatformViewRenderBox,
} from '../rendering/platform-view';
import { StatefulWidget$, StatelessWidget$, BuildContext$, State$, LeafRenderObjectWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AndroidView extends StatefulWidget$ {
  viewType: string;
  onPlatformViewCreated: any;
  hitTestBehavior: PlatformViewHitTestBehavior;
  layoutDirection: TextDirection;
  gestureRecognizers: Set<any>;
  creationParams: any;
  creationParamsCodec: MessageCodec;
  public constructor(
    namedParameters: {
      key?: Key;
      viewType?: string;
      onPlatformViewCreated?: any;
      hitTestBehavior?: PlatformViewHitTestBehavior;
      layoutDirection?: TextDirection;
      gestureRecognizers?: Set<any>;
      creationParams?: any;
      creationParamsCodec?: MessageCodec;
    } = {},
  ) {
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
  viewType: string;
  onPlatformViewCreated: any;
  hitTestBehavior: PlatformViewHitTestBehavior;
  layoutDirection: TextDirection;
  creationParams: any;
  creationParamsCodec: MessageCodec;
  gestureRecognizers: Set<any>;
  public constructor(
    namedParameters: {
      key?: Key;
      viewType?: string;
      onPlatformViewCreated?: any;
      hitTestBehavior?: PlatformViewHitTestBehavior;
      layoutDirection?: TextDirection;
      creationParams?: any;
      creationParamsCodec?: MessageCodec;
      gestureRecognizers?: Set<any>;
    } = {},
  ) {
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
  viewType: string;
  public constructor(namedParameters: { key?: Key; viewType?: string } = {}) {
    super();
    this.key = namedParameters.key;
    this.viewType = namedParameters.viewType;
    this.className = 'HtmlElementView';
  }
}
export { HtmlElementView };
class _HtmlElementViewController extends PlatformViewController {
  viewId: number;
  viewType: string;
  initialized: boolean;
  public constructor(viewId?: number, viewType?: string) {
    super();
    this.viewId = viewId;
    this.viewType = viewType;
    this.className = '_HtmlElementViewController';
  }
}
export { _HtmlElementViewController };
class _AndroidViewState extends State$ {
  id: number;
  controller: AndroidViewController;
  layoutDirection: TextDirection;
  initialized: boolean;
  focusNode: FocusNode;
}
export { _AndroidViewState };
class _UiKitViewState extends State$ {
  controller: UiKitViewController;
  layoutDirection: TextDirection;
  initialized: boolean;
}
export { _UiKitViewState };
class _AndroidPlatformView extends LeafRenderObjectWidget {
  controller: AndroidViewController;
  hitTestBehavior: PlatformViewHitTestBehavior;
  gestureRecognizers: Set<any>;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: AndroidViewController;
      hitTestBehavior?: PlatformViewHitTestBehavior;
      gestureRecognizers?: Set<any>;
    } = {},
  ) {
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
  controller: UiKitViewController;
  hitTestBehavior: PlatformViewHitTestBehavior;
  gestureRecognizers: Set<any>;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: UiKitViewController;
      hitTestBehavior?: PlatformViewHitTestBehavior;
      gestureRecognizers?: Set<any>;
    } = {},
  ) {
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
  id: number;
  viewType: string;
  onPlatformViewCreated: any;
  onFocusChanged: any;
}
export { PlatformViewCreationParams };
class PlatformViewLink extends StatefulWidget$ {
  surfaceFactory: any;
  onCreatePlatformView: any;
  viewType: string;
  public constructor(
    namedParameters: { key?: Key; surfaceFactory?: any; onCreatePlatformView?: any; viewType?: string } = {},
  ) {
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
  id: number;
  controller: PlatformViewController;
  platformViewCreated: boolean;
  surface: MXWidget;
  focusNode: FocusNode;
}
export { _PlatformViewLinkState };
class PlatformViewSurface extends LeafRenderObjectWidget {
  controller: PlatformViewController;
  gestureRecognizers: Set<any>;
  hitTestBehavior: PlatformViewHitTestBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: PlatformViewController;
      hitTestBehavior?: PlatformViewHitTestBehavior;
      gestureRecognizers?: Set<any>;
    } = {},
  ) {
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
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: AndroidViewController;
      hitTestBehavior?: PlatformViewHitTestBehavior;
      gestureRecognizers?: Set<any>;
    } = {},
  ) {
    super();
    this['key'] = namedParameters.key;
    this['controller'] = namedParameters.controller;
    this['hitTestBehavior'] = namedParameters.hitTestBehavior;
    this['gestureRecognizers'] = namedParameters.gestureRecognizers;
    this.className = 'AndroidViewSurface';
  }
}
export { AndroidViewSurface };
