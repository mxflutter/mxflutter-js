//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class DrawerHeader extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.margin = namedParameters.margin;
        this.padding = namedParameters.padding;
        this.duration = namedParameters.duration;
        this.curve = namedParameters.curve;
        this.child = namedParameters.child;
        this.className = 'DrawerHeader';
    }
}
export { DrawerHeader };
