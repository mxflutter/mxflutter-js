//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
class Title extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.title = namedParameters.title;
        this.color = namedParameters.color;
        this.child = namedParameters.child;
        this.className = 'Title';
    }
}
export { Title };
