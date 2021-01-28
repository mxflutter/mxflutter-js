//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class NotchedShape extends MXDartClass {
}
export { NotchedShape };
class CircularNotchedRectangle extends NotchedShape {
}
export { CircularNotchedRectangle };
class AutomaticNotchedShape extends NotchedShape {
    constructor(host, guest) {
        super();
        this.host = host;
        this.guest = guest;
        this.className = 'AutomaticNotchedShape';
    }
}
export { AutomaticNotchedShape };
