//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class PreferredSizeWidget extends MXDartClass {
}
export { PreferredSizeWidget };
class PreferredSize extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.preferredSize = namedParameters.preferredSize;
        this.className = 'PreferredSize';
    }
}
export { PreferredSize };
