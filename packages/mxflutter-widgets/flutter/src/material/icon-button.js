//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class IconButton extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.iconSize = namedParameters.iconSize;
        this.visualDensity = namedParameters.visualDensity;
        this.padding = namedParameters.padding;
        this.alignment = namedParameters.alignment;
        this.splashRadius = namedParameters.splashRadius;
        this.icon = namedParameters.icon;
        this.color = namedParameters.color;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.splashColor = namedParameters.splashColor;
        this.disabledColor = namedParameters.disabledColor;
        this.onPressed = namedParameters.onPressed;
        this.mouseCursor = namedParameters.mouseCursor;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.tooltip = namedParameters.tooltip;
        this.enableFeedback = namedParameters.enableFeedback;
        this.constraints = namedParameters.constraints;
        this.className = 'IconButton';
    }
}
export { IconButton };
