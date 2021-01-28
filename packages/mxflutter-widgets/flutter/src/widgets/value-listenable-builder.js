//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
class ValueListenableBuilder extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.valueListenable = namedParameters.valueListenable;
        this.builder = namedParameters.builder;
        this.child = namedParameters.child;
        this.className = 'ValueListenableBuilder';
    }
}
export { ValueListenableBuilder };
class _ValueListenableBuilderState extends State$ {
}
export { _ValueListenableBuilderState };
