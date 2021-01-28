//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from '../rendering/box';
import { AnimatedWidget } from '../widgets/transitions';
import { StatefulWidget$, Widget, State$, RenderObjectElement, RenderObjectWidget, StatelessWidget$, } from '../widgets/framework';
import { CustomPainter } from '../rendering/custom-paint';
import { Tween } from '../animation/tween';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _InputBorderGap extends ChangeNotifier {
}
export { _InputBorderGap };
class _InputBorderTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = '_InputBorderTween';
    }
}
export { _InputBorderTween };
class _InputBorderPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.repaint = namedParameters.repaint;
        this.borderAnimation = namedParameters.borderAnimation;
        this.border = namedParameters.border;
        this.gapAnimation = namedParameters.gapAnimation;
        this.gap = namedParameters.gap;
        this.textDirection = namedParameters.textDirection;
        this.fillColor = namedParameters.fillColor;
        this.hoverAnimation = namedParameters.hoverAnimation;
        this.hoverColorTween = namedParameters.hoverColorTween;
        this.className = '_InputBorderPainter';
    }
}
export { _InputBorderPainter };
class _BorderContainer extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.border = namedParameters.border;
        this.gap = namedParameters.gap;
        this.gapAnimation = namedParameters.gapAnimation;
        this.fillColor = namedParameters.fillColor;
        this.hoverColor = namedParameters.hoverColor;
        this.isHovering = namedParameters.isHovering;
        this.child = namedParameters.child;
        this.className = '_BorderContainer';
    }
}
export { _BorderContainer };
class _BorderContainerState extends State$ {
}
export { _BorderContainerState };
class _Shaker extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['animation'] = namedParameters.animation;
        this.child = namedParameters.child;
        this.className = '_Shaker';
    }
}
export { _Shaker };
class _HelperError extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textAlign = namedParameters.textAlign;
        this.helperText = namedParameters.helperText;
        this.helperStyle = namedParameters.helperStyle;
        this.helperMaxLines = namedParameters.helperMaxLines;
        this.errorText = namedParameters.errorText;
        this.errorStyle = namedParameters.errorStyle;
        this.errorMaxLines = namedParameters.errorMaxLines;
        this.className = '_HelperError';
    }
}
export { _HelperError };
class _HelperErrorState extends State$ {
    static get empty() {
        var jsObj = new (class MXWidget extends Widget {
        })();
        jsObj['className'] = '_HelperErrorState';
        jsObj['constructorName'] = 'empty';
        return jsObj;
    }
}
export { _HelperErrorState };
var FloatingLabelBehavior;
(function (FloatingLabelBehavior) {
    FloatingLabelBehavior["never"] = "{ \"_name\": \"FloatingLabelBehavior.never\", \"index\": 0 }";
    FloatingLabelBehavior["auto"] = "{ \"_name\": \"FloatingLabelBehavior.auto\", \"index\": 1 }";
    FloatingLabelBehavior["always"] = "{ \"_name\": \"FloatingLabelBehavior.always\", \"index\": 2 }";
})(FloatingLabelBehavior || (FloatingLabelBehavior = {}));
export { FloatingLabelBehavior };
var _DecorationSlot;
(function (_DecorationSlot) {
    _DecorationSlot["icon"] = "{ \"_name\": \"_DecorationSlot.icon\", \"index\": 0 }";
    _DecorationSlot["input"] = "{ \"_name\": \"_DecorationSlot.input\", \"index\": 1 }";
    _DecorationSlot["label"] = "{ \"_name\": \"_DecorationSlot.label\", \"index\": 2 }";
    _DecorationSlot["hint"] = "{ \"_name\": \"_DecorationSlot.hint\", \"index\": 3 }";
    _DecorationSlot["prefix"] = "{ \"_name\": \"_DecorationSlot.prefix\", \"index\": 4 }";
    _DecorationSlot["suffix"] = "{ \"_name\": \"_DecorationSlot.suffix\", \"index\": 5 }";
    _DecorationSlot["prefixIcon"] = "{ \"_name\": \"_DecorationSlot.prefixIcon\", \"index\": 6 }";
    _DecorationSlot["suffixIcon"] = "{ \"_name\": \"_DecorationSlot.suffixIcon\", \"index\": 7 }";
    _DecorationSlot["helperError"] = "{ \"_name\": \"_DecorationSlot.helperError\", \"index\": 8 }";
    _DecorationSlot["counter"] = "{ \"_name\": \"_DecorationSlot.counter\", \"index\": 9 }";
    _DecorationSlot["container"] = "{ \"_name\": \"_DecorationSlot.container\", \"index\": 10 }";
})(_DecorationSlot || (_DecorationSlot = {}));
export { _DecorationSlot };
class _Decoration extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.contentPadding = namedParameters.contentPadding;
        this.isCollapsed = namedParameters.isCollapsed;
        this.floatingLabelHeight = namedParameters.floatingLabelHeight;
        this.floatingLabelProgress = namedParameters.floatingLabelProgress;
        this.border = namedParameters.border;
        this.borderGap = namedParameters.borderGap;
        this.alignLabelWithHint = namedParameters.alignLabelWithHint;
        this.isDense = namedParameters.isDense;
        this.visualDensity = namedParameters.visualDensity;
        this.icon = namedParameters.icon;
        this.input = namedParameters.input;
        this.label = namedParameters.label;
        this.hint = namedParameters.hint;
        this.prefix = namedParameters.prefix;
        this.suffix = namedParameters.suffix;
        this.prefixIcon = namedParameters.prefixIcon;
        this.suffixIcon = namedParameters.suffixIcon;
        this.helperError = namedParameters.helperError;
        this.counter = namedParameters.counter;
        this.container = namedParameters.container;
        this.fixTextFieldOutlineLabel = namedParameters.fixTextFieldOutlineLabel;
        this.className = '_Decoration';
    }
}
export { _Decoration };
class _RenderDecorationLayout extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.boxToBaseline = namedParameters.boxToBaseline;
        this.inputBaseline = namedParameters.inputBaseline;
        this.outlineBaseline = namedParameters.outlineBaseline;
        this.subtextBaseline = namedParameters.subtextBaseline;
        this.containerHeight = namedParameters.containerHeight;
        this.subtextHeight = namedParameters.subtextHeight;
        this.className = '_RenderDecorationLayout';
    }
}
export { _RenderDecorationLayout };
class _RenderDecoration extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.decoration = namedParameters.decoration;
        this.textDirection = namedParameters.textDirection;
        this.textBaseline = namedParameters.textBaseline;
        this.isFocused = namedParameters.isFocused;
        this.expands = namedParameters.expands;
        this.textAlignVertical = namedParameters.textAlignVertical;
        this.className = '_RenderDecoration';
    }
    static get subtextGap() {
        return 8.0;
    }
}
export { _RenderDecoration };
class _RenderDecorationElement extends RenderObjectElement {
    constructor(widget) {
        super();
        this['__mx_widget'] = widget;
        this.className = '_RenderDecorationElement';
    }
}
export { _RenderDecorationElement };
class _Decorator extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textAlignVertical = namedParameters.textAlignVertical;
        this.decoration = namedParameters.decoration;
        this.textDirection = namedParameters.textDirection;
        this.textBaseline = namedParameters.textBaseline;
        this.isFocused = namedParameters.isFocused;
        this.expands = namedParameters.expands;
        this.className = '_Decorator';
    }
}
export { _Decorator };
class _AffixText extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.labelIsFloating = namedParameters.labelIsFloating;
        this.text = namedParameters.text;
        this.style = namedParameters.style;
        this.child = namedParameters.child;
        this.className = '_AffixText';
    }
}
export { _AffixText };
class InputDecorator extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.baseStyle = namedParameters.baseStyle;
        this.textAlign = namedParameters.textAlign;
        this.textAlignVertical = namedParameters.textAlignVertical;
        this.isFocused = namedParameters.isFocused;
        this.isHovering = namedParameters.isHovering;
        this.expands = namedParameters.expands;
        this.isEmpty = namedParameters.isEmpty;
        this.child = namedParameters.child;
        this.className = 'InputDecorator';
    }
}
export { InputDecorator };
class _InputDecoratorState extends State$ {
}
export { _InputDecoratorState };
class InputDecoration extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.icon = namedParameters.icon;
        this.labelText = namedParameters.labelText;
        this.labelStyle = namedParameters.labelStyle;
        this.helperText = namedParameters.helperText;
        this.helperStyle = namedParameters.helperStyle;
        this.helperMaxLines = namedParameters.helperMaxLines;
        this.hintText = namedParameters.hintText;
        this.hintStyle = namedParameters.hintStyle;
        this.hintMaxLines = namedParameters.hintMaxLines;
        this.errorText = namedParameters.errorText;
        this.errorStyle = namedParameters.errorStyle;
        this.errorMaxLines = namedParameters.errorMaxLines;
        this.hasFloatingPlaceholder = namedParameters.hasFloatingPlaceholder;
        this.floatingLabelBehavior = namedParameters.floatingLabelBehavior;
        this.isCollapsed = namedParameters.isCollapsed;
        this.isDense = namedParameters.isDense;
        this.contentPadding = namedParameters.contentPadding;
        this.prefixIcon = namedParameters.prefixIcon;
        this.prefixIconConstraints = namedParameters.prefixIconConstraints;
        this.prefix = namedParameters.prefix;
        this.prefixText = namedParameters.prefixText;
        this.prefixStyle = namedParameters.prefixStyle;
        this.suffixIcon = namedParameters.suffixIcon;
        this.suffix = namedParameters.suffix;
        this.suffixText = namedParameters.suffixText;
        this.suffixStyle = namedParameters.suffixStyle;
        this.suffixIconConstraints = namedParameters.suffixIconConstraints;
        this.counter = namedParameters.counter;
        this.counterText = namedParameters.counterText;
        this.counterStyle = namedParameters.counterStyle;
        this.filled = namedParameters.filled;
        this.fillColor = namedParameters.fillColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.errorBorder = namedParameters.errorBorder;
        this.focusedBorder = namedParameters.focusedBorder;
        this.focusedErrorBorder = namedParameters.focusedErrorBorder;
        this.disabledBorder = namedParameters.disabledBorder;
        this.enabledBorder = namedParameters.enabledBorder;
        this.border = namedParameters.border;
        this.enabled = namedParameters.enabled;
        this.semanticCounterText = namedParameters.semanticCounterText;
        this.alignLabelWithHint = namedParameters.alignLabelWithHint;
        this.className = 'InputDecoration';
    }
    static collapsed(namedParameters = {}) {
        var jsObj = new InputDecoration();
        jsObj.hintText = namedParameters.hintText;
        jsObj.hasFloatingPlaceholder = namedParameters.hasFloatingPlaceholder;
        jsObj.floatingLabelBehavior = namedParameters.floatingLabelBehavior;
        jsObj.hintStyle = namedParameters.hintStyle;
        jsObj.filled = namedParameters.filled;
        jsObj.fillColor = namedParameters.fillColor;
        jsObj.focusColor = namedParameters.focusColor;
        jsObj.hoverColor = namedParameters.hoverColor;
        jsObj.border = namedParameters.border;
        jsObj.enabled = namedParameters.enabled;
        jsObj['constructorName'] = 'collapsed';
        return jsObj;
    }
}
export { InputDecoration };
class InputDecorationTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.labelStyle = namedParameters.labelStyle;
        this.helperStyle = namedParameters.helperStyle;
        this.helperMaxLines = namedParameters.helperMaxLines;
        this.hintStyle = namedParameters.hintStyle;
        this.errorStyle = namedParameters.errorStyle;
        this.errorMaxLines = namedParameters.errorMaxLines;
        this.hasFloatingPlaceholder = namedParameters.hasFloatingPlaceholder;
        this.floatingLabelBehavior = namedParameters.floatingLabelBehavior;
        this.isDense = namedParameters.isDense;
        this.contentPadding = namedParameters.contentPadding;
        this.isCollapsed = namedParameters.isCollapsed;
        this.prefixStyle = namedParameters.prefixStyle;
        this.suffixStyle = namedParameters.suffixStyle;
        this.counterStyle = namedParameters.counterStyle;
        this.filled = namedParameters.filled;
        this.fillColor = namedParameters.fillColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.errorBorder = namedParameters.errorBorder;
        this.focusedBorder = namedParameters.focusedBorder;
        this.focusedErrorBorder = namedParameters.focusedErrorBorder;
        this.disabledBorder = namedParameters.disabledBorder;
        this.enabledBorder = namedParameters.enabledBorder;
        this.border = namedParameters.border;
        this.alignLabelWithHint = namedParameters.alignLabelWithHint;
        this.className = 'InputDecorationTheme';
    }
}
export { InputDecorationTheme };
