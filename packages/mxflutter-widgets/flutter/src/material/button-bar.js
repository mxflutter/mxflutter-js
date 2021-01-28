//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Flex } from '../widgets/basic';
import { RenderFlex } from '../rendering/flex';
import { StatelessWidget$ } from '../widgets/framework';
class ButtonBar extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.buttonTextTheme = namedParameters.buttonTextTheme;
        this.buttonMinWidth = namedParameters.buttonMinWidth;
        this.buttonHeight = namedParameters.buttonHeight;
        this.buttonPadding = namedParameters.buttonPadding;
        this.buttonAlignedDropdown = namedParameters.buttonAlignedDropdown;
        this.layoutBehavior = namedParameters.layoutBehavior;
        this.overflowDirection = namedParameters.overflowDirection;
        this.overflowButtonSpacing = namedParameters.overflowButtonSpacing;
        this.children = namedParameters.children;
        this.className = 'ButtonBar';
    }
}
export { ButtonBar };
class _ButtonBarRow extends Flex {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.direction = namedParameters.direction;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.mainAxisAlignment = namedParameters.mainAxisAlignment;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this['overflowDirection'] = namedParameters.overflowDirection;
        this.textBaseline = namedParameters.textBaseline;
        this.overflowButtonSpacing = namedParameters.overflowButtonSpacing;
        this.className = '_ButtonBarRow';
    }
}
export { _ButtonBarRow };
class _RenderButtonBarRow extends RenderFlex {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.direction = namedParameters.direction;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.mainAxisAlignment = namedParameters.mainAxisAlignment;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this.verticalDirection = namedParameters.verticalDirection;
        this.textBaseline = namedParameters.textBaseline;
        this.overflowButtonSpacing = namedParameters.overflowButtonSpacing;
        this.className = '_RenderButtonBarRow';
    }
}
export { _RenderButtonBarRow };
