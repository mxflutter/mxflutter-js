// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ShapeBorder } from './borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class NotchedShape extends MXDartClass {}
export { NotchedShape };
class CircularNotchedRectangle extends NotchedShape {}
export { CircularNotchedRectangle };
class AutomaticNotchedShape extends NotchedShape {
  host: ShapeBorder;
  guest: ShapeBorder;
  public constructor(host?: ShapeBorder, guest?: ShapeBorder) {
    super();
    this.host = host;
    this.guest = guest;
    this.className = 'AutomaticNotchedShape';
  }
}
export { AutomaticNotchedShape };
