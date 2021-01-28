//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
class Scrollbar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.controller = namedParameters.controller;
        this.isAlwaysShown = namedParameters.isAlwaysShown;
        this.className = 'Scrollbar';
    }
}
export { Scrollbar };
class _ScrollbarState extends State$ {
}
export { _ScrollbarState };
