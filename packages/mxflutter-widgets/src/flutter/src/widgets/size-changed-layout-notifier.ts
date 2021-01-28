//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderBox } from '../rendering/box';
import { Size } from '../../../mx-dart-sdk';
import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { SingleChildRenderObjectWidget, Widget, BuildContext$ } from './framework';
import { LayoutChangedNotification } from './notification-listener';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SizeChangedLayoutNotification extends LayoutChangedNotification {}
export { SizeChangedLayoutNotification };
class SizeChangedLayoutNotifier extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = 'SizeChangedLayoutNotifier';
  }
}
export { SizeChangedLayoutNotifier };
class _RenderSizeChangedWithCallback extends RenderProxyBox {
  onLayoutChangedCallback: any;
  oldSize: Size;
  public constructor(namedParameters: { child?: RenderBox; onLayoutChangedCallback?: any } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.onLayoutChangedCallback = namedParameters.onLayoutChangedCallback;
    this.className = '_RenderSizeChangedWithCallback';
  }
}
export { _RenderSizeChangedWithCallback };
