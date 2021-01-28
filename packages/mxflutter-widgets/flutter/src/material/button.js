//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderShiftedBox } from '../rendering/shifted-box';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget } from '../widgets/framework';
class RawMaterialButton extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPressed = namedParameters.onPressed;
        this.onLongPress = namedParameters.onLongPress;
        this.onHighlightChanged = namedParameters.onHighlightChanged;
        this.mouseCursor = namedParameters.mouseCursor;
        this.textStyle = namedParameters.textStyle;
        this.fillColor = namedParameters.fillColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.splashColor = namedParameters.splashColor;
        this.elevation = namedParameters.elevation;
        this.focusElevation = namedParameters.focusElevation;
        this.hoverElevation = namedParameters.hoverElevation;
        this.highlightElevation = namedParameters.highlightElevation;
        this.disabledElevation = namedParameters.disabledElevation;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.constraints = namedParameters.constraints;
        this.shape = namedParameters.shape;
        this.animationDuration = namedParameters.animationDuration;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.child = namedParameters.child;
        this.enableFeedback = namedParameters.enableFeedback;
        this.className = 'RawMaterialButton';
    }
}
export { RawMaterialButton };
class _RawMaterialButtonState extends State$ {
}
export { _RawMaterialButtonState };
class _InputPadding extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.minSize = namedParameters.minSize;
        this.className = '_InputPadding';
    }
}
export { _InputPadding };
class _RenderInputPadding extends RenderShiftedBox {
    constructor(_minSize, child) {
        super();
        this.minSize = _minSize;
        this['child'] = child;
        this.className = '_RenderInputPadding';
    }
}
export { _RenderInputPadding };
