//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ImageSizeInfo extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.source = namedParameters.source;
        this.displaySize = namedParameters.displaySize;
        this.imageSize = namedParameters.imageSize;
        this.className = 'ImageSizeInfo';
    }
}
export { ImageSizeInfo };
