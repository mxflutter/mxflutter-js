//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
class CupertinoContextMenuAction extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.isDefaultAction = namedParameters.isDefaultAction;
        this.isDestructiveAction = namedParameters.isDestructiveAction;
        this.onPressed = namedParameters.onPressed;
        this.trailingIcon = namedParameters.trailingIcon;
        this.className = 'CupertinoContextMenuAction';
    }
}
export { CupertinoContextMenuAction };
class _CupertinoContextMenuActionState extends State$ {
}
export { _CupertinoContextMenuActionState };
