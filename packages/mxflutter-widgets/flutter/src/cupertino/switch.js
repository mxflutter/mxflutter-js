//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
class CupertinoSwitch extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.onChanged = namedParameters.onChanged;
        this.activeColor = namedParameters.activeColor;
        this.trackColor = namedParameters.trackColor;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = 'CupertinoSwitch';
    }
}
export { CupertinoSwitch };
class _CupertinoSwitchState extends State$ {
}
export { _CupertinoSwitchState };
class _CupertinoSwitchRenderObjectWidget extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.activeColor = namedParameters.activeColor;
        this.trackColor = namedParameters.trackColor;
        this.onChanged = namedParameters.onChanged;
        this.textDirection = namedParameters.textDirection;
        this.state = namedParameters.state;
        this.className = '_CupertinoSwitchRenderObjectWidget';
    }
}
export { _CupertinoSwitchRenderObjectWidget };
class _RenderCupertinoSwitch extends RenderConstrainedBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.activeColor = namedParameters.activeColor;
        this.trackColor = namedParameters.trackColor;
        this.onChanged = namedParameters.onChanged;
        this.textDirection = namedParameters.textDirection;
        this.state = namedParameters.state;
        this.className = '_RenderCupertinoSwitch';
    }
}
export { _RenderCupertinoSwitch };
