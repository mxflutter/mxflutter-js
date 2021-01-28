//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
class ExpandIcon extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isExpanded = namedParameters.isExpanded;
        this.size = namedParameters.size;
        this.onPressed = namedParameters.onPressed;
        this.padding = namedParameters.padding;
        this.color = namedParameters.color;
        this.disabledColor = namedParameters.disabledColor;
        this.expandedColor = namedParameters.expandedColor;
        this.className = 'ExpandIcon';
    }
}
export { ExpandIcon };
class _ExpandIconState extends State$ {
}
export { _ExpandIconState };
