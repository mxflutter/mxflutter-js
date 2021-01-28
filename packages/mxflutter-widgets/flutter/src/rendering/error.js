//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from './box';
class RenderErrorBox extends RenderBox {
    constructor(message) {
        super();
        this.message = message;
        this.className = 'RenderErrorBox';
    }
}
export { RenderErrorBox };
