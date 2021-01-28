//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InteractiveInkFeatureFactory } from './ink-well';
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { StatelessWidget$, StatefulWidget$, State$, SingleChildRenderObjectWidget, RenderObjectWidget, RenderObjectElement, } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ChipAttributes extends MXDartClass {
}
export { ChipAttributes };
class DeletableChipAttributes extends MXDartClass {
}
export { DeletableChipAttributes };
class CheckmarkableChipAttributes extends MXDartClass {
}
export { CheckmarkableChipAttributes };
class SelectableChipAttributes extends MXDartClass {
}
export { SelectableChipAttributes };
class DisabledChipAttributes extends MXDartClass {
}
export { DisabledChipAttributes };
class TappableChipAttributes extends MXDartClass {
}
export { TappableChipAttributes };
class Chip extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.labelStyle = namedParameters.labelStyle;
        this.labelPadding = namedParameters.labelPadding;
        this.deleteIcon = namedParameters.deleteIcon;
        this.onDeleted = namedParameters.onDeleted;
        this.deleteIconColor = namedParameters.deleteIconColor;
        this.deleteButtonTooltipMessage = namedParameters.deleteButtonTooltipMessage;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.backgroundColor = namedParameters.backgroundColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.className = 'Chip';
    }
}
export { Chip };
class InputChip extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.labelStyle = namedParameters.labelStyle;
        this.labelPadding = namedParameters.labelPadding;
        this.selected = namedParameters.selected;
        this.isEnabled = namedParameters.isEnabled;
        this.onSelected = namedParameters.onSelected;
        this.deleteIcon = namedParameters.deleteIcon;
        this.onDeleted = namedParameters.onDeleted;
        this.deleteIconColor = namedParameters.deleteIconColor;
        this.deleteButtonTooltipMessage = namedParameters.deleteButtonTooltipMessage;
        this.onPressed = namedParameters.onPressed;
        this.pressElevation = namedParameters.pressElevation;
        this.disabledColor = namedParameters.disabledColor;
        this.selectedColor = namedParameters.selectedColor;
        this.tooltip = namedParameters.tooltip;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.backgroundColor = namedParameters.backgroundColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.selectedShadowColor = namedParameters.selectedShadowColor;
        this.showCheckmark = namedParameters.showCheckmark;
        this.checkmarkColor = namedParameters.checkmarkColor;
        this.avatarBorder = namedParameters.avatarBorder;
        this.className = 'InputChip';
    }
}
export { InputChip };
class ChoiceChip extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.labelStyle = namedParameters.labelStyle;
        this.labelPadding = namedParameters.labelPadding;
        this.onSelected = namedParameters.onSelected;
        this.pressElevation = namedParameters.pressElevation;
        this.selected = namedParameters.selected;
        this.selectedColor = namedParameters.selectedColor;
        this.disabledColor = namedParameters.disabledColor;
        this.tooltip = namedParameters.tooltip;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.backgroundColor = namedParameters.backgroundColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.selectedShadowColor = namedParameters.selectedShadowColor;
        this.avatarBorder = namedParameters.avatarBorder;
        this.className = 'ChoiceChip';
    }
}
export { ChoiceChip };
class FilterChip extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.labelStyle = namedParameters.labelStyle;
        this.labelPadding = namedParameters.labelPadding;
        this.selected = namedParameters.selected;
        this.onSelected = namedParameters.onSelected;
        this.pressElevation = namedParameters.pressElevation;
        this.disabledColor = namedParameters.disabledColor;
        this.selectedColor = namedParameters.selectedColor;
        this.tooltip = namedParameters.tooltip;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.backgroundColor = namedParameters.backgroundColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.selectedShadowColor = namedParameters.selectedShadowColor;
        this.showCheckmark = namedParameters.showCheckmark;
        this.checkmarkColor = namedParameters.checkmarkColor;
        this.avatarBorder = namedParameters.avatarBorder;
        this.className = 'FilterChip';
    }
}
export { FilterChip };
class ActionChip extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.labelStyle = namedParameters.labelStyle;
        this.labelPadding = namedParameters.labelPadding;
        this.onPressed = namedParameters.onPressed;
        this.pressElevation = namedParameters.pressElevation;
        this.tooltip = namedParameters.tooltip;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.backgroundColor = namedParameters.backgroundColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.className = 'ActionChip';
    }
}
export { ActionChip };
class RawChip extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.labelStyle = namedParameters.labelStyle;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.labelPadding = namedParameters.labelPadding;
        this.deleteIcon = namedParameters.deleteIcon;
        this.onDeleted = namedParameters.onDeleted;
        this.deleteIconColor = namedParameters.deleteIconColor;
        this.deleteButtonTooltipMessage = namedParameters.deleteButtonTooltipMessage;
        this.onPressed = namedParameters.onPressed;
        this.onSelected = namedParameters.onSelected;
        this.pressElevation = namedParameters.pressElevation;
        this.tapEnabled = namedParameters.tapEnabled;
        this.selected = namedParameters.selected;
        this.isEnabled = namedParameters.isEnabled;
        this.disabledColor = namedParameters.disabledColor;
        this.selectedColor = namedParameters.selectedColor;
        this.tooltip = namedParameters.tooltip;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.backgroundColor = namedParameters.backgroundColor;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.selectedShadowColor = namedParameters.selectedShadowColor;
        this.showCheckmark = namedParameters.showCheckmark;
        this.checkmarkColor = namedParameters.checkmarkColor;
        this.avatarBorder = namedParameters.avatarBorder;
        this.className = 'RawChip';
    }
}
export { RawChip };
class _RawChipState extends State$ {
    static get pressedAnimationDuration() {
        var jsObj = new Duration();
        jsObj['className'] = '_RawChipState';
        jsObj['constructorName'] = 'pressedAnimationDuration';
        return jsObj;
    }
}
export { _RawChipState };
class _ChipRedirectingHitDetectionWidget extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.constraints = namedParameters.constraints;
        this.className = '_ChipRedirectingHitDetectionWidget';
    }
}
export { _ChipRedirectingHitDetectionWidget };
class _RenderChipRedirectingHitDetection extends RenderConstrainedBox {
    constructor(additionalConstraints) {
        super();
        this['additionalConstraints'] = additionalConstraints;
        this.className = '_RenderChipRedirectingHitDetection';
    }
}
export { _RenderChipRedirectingHitDetection };
class _ChipRenderWidget extends RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.theme = namedParameters.theme;
        this.value = namedParameters.value;
        this.isEnabled = namedParameters.isEnabled;
        this.checkmarkAnimation = namedParameters.checkmarkAnimation;
        this.avatarDrawerAnimation = namedParameters.avatarDrawerAnimation;
        this.deleteDrawerAnimation = namedParameters.deleteDrawerAnimation;
        this.enableAnimation = namedParameters.enableAnimation;
        this.avatarBorder = namedParameters.avatarBorder;
        this.className = '_ChipRenderWidget';
    }
}
export { _ChipRenderWidget };
var _ChipSlot;
(function (_ChipSlot) {
    _ChipSlot["label"] = "{ \"_name\": \"_ChipSlot.label\", \"index\": 0 }";
    _ChipSlot["avatar"] = "{ \"_name\": \"_ChipSlot.avatar\", \"index\": 1 }";
    _ChipSlot["deleteIcon"] = "{ \"_name\": \"_ChipSlot.deleteIcon\", \"index\": 2 }";
})(_ChipSlot || (_ChipSlot = {}));
export { _ChipSlot };
class _RenderChipElement extends RenderObjectElement {
    constructor(chip) {
        super();
        this['chip'] = chip;
        this.className = '_RenderChipElement';
    }
}
export { _RenderChipElement };
class _ChipRenderTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.avatar = namedParameters.avatar;
        this.label = namedParameters.label;
        this.deleteIcon = namedParameters.deleteIcon;
        this.brightness = namedParameters.brightness;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.labelPadding = namedParameters.labelPadding;
        this.showAvatar = namedParameters.showAvatar;
        this.showCheckmark = namedParameters.showCheckmark;
        this.checkmarkColor = namedParameters.checkmarkColor;
        this.canTapBody = namedParameters.canTapBody;
        this.className = '_ChipRenderTheme';
    }
}
export { _ChipRenderTheme };
class _RenderChip extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.theme = namedParameters.theme;
        this.textDirection = namedParameters.textDirection;
        this.value = namedParameters.value;
        this.isEnabled = namedParameters.isEnabled;
        this.checkmarkAnimation = namedParameters.checkmarkAnimation;
        this.avatarDrawerAnimation = namedParameters.avatarDrawerAnimation;
        this.deleteDrawerAnimation = namedParameters.deleteDrawerAnimation;
        this.enableAnimation = namedParameters.enableAnimation;
        this.avatarBorder = namedParameters.avatarBorder;
        this.className = '_RenderChip';
    }
}
export { _RenderChip };
class _LocationAwareInkRippleFactory extends InteractiveInkFeatureFactory {
    constructor(hasDeleteButton, chipContext, deleteIconKey) {
        super();
        this.hasDeleteButton = hasDeleteButton;
        this.chipContext = chipContext;
        this.deleteIconKey = deleteIconKey;
        this.className = '_LocationAwareInkRippleFactory';
    }
}
export { _LocationAwareInkRippleFactory };
