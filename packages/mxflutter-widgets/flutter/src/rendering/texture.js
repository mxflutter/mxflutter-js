//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from './box';
class TextureBox extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.textureId = namedParameters.textureId;
        this.filterQuality = namedParameters.filterQuality;
        this.className = 'TextureBox';
    }
}
export { TextureBox };
