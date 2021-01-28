//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ScrollDirection {
  idle = '{ "_name": "ScrollDirection.idle", "index": 0 }',
  forward = '{ "_name": "ScrollDirection.forward", "index": 1 }',
  reverse = '{ "_name": "ScrollDirection.reverse", "index": 2 }',
}

export { ScrollDirection };
abstract class ViewportOffset extends ChangeNotifier {
  static fixed(value?: number) {
    var jsObj = new (class MXViewportOffset extends ViewportOffset {})();
    jsObj['value'] = value;
    jsObj['constructorName'] = 'fixed';
    return jsObj;
  }
  static zero() {
    var jsObj = new (class MXViewportOffset extends ViewportOffset {})();
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
}
export { ViewportOffset };
class _FixedViewportOffset extends ViewportOffset {
  pixels: number;
  public constructor(_pixels?: number) {
    super();
    this.pixels = _pixels;
    this.className = '_FixedViewportOffset';
  }
  static zero() {
    var jsObj = new _FixedViewportOffset();
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
}
export { _FixedViewportOffset };
