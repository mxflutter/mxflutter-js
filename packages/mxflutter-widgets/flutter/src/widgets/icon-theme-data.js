//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class IconThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.opacity = namedParameters.opacity;
        this.size = namedParameters.size;
        this.className = 'IconThemeData';
    }
    static fallback() {
        var jsObj = new IconThemeData();
        jsObj['constructorName'] = 'fallback';
        return jsObj;
    }
    // MX modified begin
    static fromJson(mapObj) {
        if (mapObj === null || mapObj === undefined) {
            return null;
        }
        const obj = new IconThemeData();
        for (const p in mapObj) {
            if (mapObj.hasOwnProperty(p)) {
                const v = mapObj[p];
                switch (p) {
                    case 'color':
                        obj[p] = new Color(v);
                        break;
                    default:
                        obj[p] = v;
                        break;
                }
            }
        }
        return obj;
    }
}
export { IconThemeData };
