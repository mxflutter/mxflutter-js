//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { IconThemeData } from '../widgets/icon-theme-data';
class CupertinoIconThemeData extends IconThemeData {
    constructor(namedParameters = {}) {
        super();
        this['color'] = namedParameters.color;
        this['opacity'] = namedParameters.opacity;
        this['size'] = namedParameters.size;
        this.className = 'CupertinoIconThemeData';
    }
}
export { CupertinoIconThemeData };
