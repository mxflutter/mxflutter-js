//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { StatefulWidget$, State$, StatelessWidget$ } from '../widgets/framework';
class Tooltip extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.message = namedParameters.message;
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.margin = namedParameters.margin;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.decoration = namedParameters.decoration;
        this.textStyle = namedParameters.textStyle;
        this.waitDuration = namedParameters.waitDuration;
        this.showDuration = namedParameters.showDuration;
        this.child = namedParameters.child;
        this.className = 'Tooltip';
    }
}
export { Tooltip };
class _TooltipState extends State$ {
}
export { _TooltipState };
class _TooltipPositionDelegate extends SingleChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.target = namedParameters.target;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.className = '_TooltipPositionDelegate';
    }
}
export { _TooltipPositionDelegate };
class _TooltipOverlay extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.message = namedParameters.message;
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.margin = namedParameters.margin;
        this.decoration = namedParameters.decoration;
        this.textStyle = namedParameters.textStyle;
        this.animation = namedParameters.animation;
        this.target = namedParameters.target;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.className = '_TooltipOverlay';
    }
}
export { _TooltipOverlay };
