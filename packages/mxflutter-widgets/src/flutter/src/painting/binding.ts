//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Listenable } from '../foundation/change-notifier';
import { ImageCache } from './image-cache';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
const handleSystemMessage = Symbol('handleSystemMessage');
abstract class PaintingBinding extends MXDartClass {
  imageCache: ImageCache;
  systemFonts: _SystemFontsNotifier;
}
export { PaintingBinding };
class _SystemFontsNotifier extends Listenable {
  systemFontsCallbacks: Set<any>;
}
export { _SystemFontsNotifier };
