//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderToggleable } from './toggleable';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
class Radio extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.groupValue = namedParameters.groupValue;
        this.onChanged = namedParameters.onChanged;
        this.mouseCursor = namedParameters.mouseCursor;
        this.toggleable = namedParameters.toggleable;
        this.activeColor = namedParameters.activeColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.visualDensity = namedParameters.visualDensity;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.className = 'Radio';
    }
}
export { Radio };
class _RadioState extends State$ {
}
export { _RadioState };
class _RadioRenderObjectWidget extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selected = namedParameters.selected;
        this.activeColor = namedParameters.activeColor;
        this.inactiveColor = namedParameters.inactiveColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.onChanged = namedParameters.onChanged;
        this.toggleable = namedParameters.toggleable;
        this.hasFocus = namedParameters.hasFocus;
        this.hovering = namedParameters.hovering;
        this.className = '_RadioRenderObjectWidget';
    }
}
export { _RadioRenderObjectWidget };
class _RenderRadio extends RenderToggleable {
    constructor(namedParameters = {}) {
        super();
        this['value'] = namedParameters.value;
        this['activeColor'] = namedParameters.activeColor;
        this['inactiveColor'] = namedParameters.inactiveColor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['onChanged'] = namedParameters.onChanged;
        this['tristate'] = namedParameters.tristate;
        this['additionalConstraints'] = namedParameters.additionalConstraints;
        this['hasFocus'] = namedParameters.hasFocus;
        this['hovering'] = namedParameters.hovering;
        this.className = '_RenderRadio';
    }
}
export { _RenderRadio };
