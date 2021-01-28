//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class Divider extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.height = namedParameters.height;
        this.thickness = namedParameters.thickness;
        this.indent = namedParameters.indent;
        this.endIndent = namedParameters.endIndent;
        this.color = namedParameters.color;
        this.className = 'Divider';
    }
}
export { Divider };
class VerticalDivider extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.width = namedParameters.width;
        this.thickness = namedParameters.thickness;
        this.indent = namedParameters.indent;
        this.endIndent = namedParameters.endIndent;
        this.color = namedParameters.color;
        this.className = 'VerticalDivider';
    }
}
export { VerticalDivider };
