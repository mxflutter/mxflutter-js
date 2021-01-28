//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Priority extends MXDartClass {
    static get idle() {
        var jsObj = new Priority();
        jsObj['className'] = 'Priority';
        jsObj['constructorName'] = 'idle';
        return jsObj;
    }
    static get animation() {
        var jsObj = new Priority();
        jsObj['className'] = 'Priority';
        jsObj['constructorName'] = 'animation';
        return jsObj;
    }
    static get touch() {
        var jsObj = new Priority();
        jsObj['className'] = 'Priority';
        jsObj['constructorName'] = 'touch';
        return jsObj;
    }
    static get kMaxOffset() {
        return 10000;
    }
}
export { Priority };
