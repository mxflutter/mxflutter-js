//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class MaterialBanner extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.content = namedParameters.content;
        this.contentTextStyle = namedParameters.contentTextStyle;
        this.actions = namedParameters.actions;
        this.leading = namedParameters.leading;
        this.backgroundColor = namedParameters.backgroundColor;
        this.padding = namedParameters.padding;
        this.leadingPadding = namedParameters.leadingPadding;
        this.forceActionsBelow = namedParameters.forceActionsBelow;
        this.className = 'MaterialBanner';
    }
}
export { MaterialBanner };
