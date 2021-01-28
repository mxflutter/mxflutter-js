//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
class Icon extends StatelessWidget$ {
    constructor(icon, namedParameters = {}) {
        super();
        this.icon = icon;
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.color = namedParameters.color;
        this.semanticLabel = namedParameters.semanticLabel;
        this.textDirection = namedParameters.textDirection;
        this.className = 'Icon';
    }
}
export { Icon };
