"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._LocationAwareInkRippleFactory = exports._RenderChip = exports._ChipRenderTheme = exports._RenderChipElement = exports._ChipSlot = exports._ChipRenderWidget = exports._RenderChipRedirectingHitDetection = exports._ChipRedirectingHitDetectionWidget = exports._RawChipState = exports.RawChip = exports.ActionChip = exports.FilterChip = exports.ChoiceChip = exports.InputChip = exports.Chip = exports.TappableChipAttributes = exports.DisabledChipAttributes = exports.SelectableChipAttributes = exports.CheckmarkableChipAttributes = exports.DeletableChipAttributes = exports.ChipAttributes = void 0;
const ink_well_1 = require("./ink-well");
const proxy_box_1 = require("../rendering/proxy-box");
const box_1 = require("../rendering/box");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ChipAttributes extends mxflutter_base_1.MXDartClass {
}
exports.ChipAttributes = ChipAttributes;
class DeletableChipAttributes extends mxflutter_base_1.MXDartClass {
}
exports.DeletableChipAttributes = DeletableChipAttributes;
class CheckmarkableChipAttributes extends mxflutter_base_1.MXDartClass {
}
exports.CheckmarkableChipAttributes = CheckmarkableChipAttributes;
class SelectableChipAttributes extends mxflutter_base_1.MXDartClass {
}
exports.SelectableChipAttributes = SelectableChipAttributes;
class DisabledChipAttributes extends mxflutter_base_1.MXDartClass {
}
exports.DisabledChipAttributes = DisabledChipAttributes;
class TappableChipAttributes extends mxflutter_base_1.MXDartClass {
}
exports.TappableChipAttributes = TappableChipAttributes;
class Chip extends framework_1.StatelessWidget {
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
exports.Chip = Chip;
class InputChip extends framework_1.StatelessWidget {
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
exports.InputChip = InputChip;
class ChoiceChip extends framework_1.StatelessWidget {
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
exports.ChoiceChip = ChoiceChip;
class FilterChip extends framework_1.StatelessWidget {
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
exports.FilterChip = FilterChip;
class ActionChip extends framework_1.StatelessWidget {
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
exports.ActionChip = ActionChip;
class RawChip extends framework_1.StatefulWidget {
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
exports.RawChip = RawChip;
class _RawChipState extends framework_1.State {
    static get pressedAnimationDuration() {
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = '_RawChipState';
        jsObj['constructorName'] = 'pressedAnimationDuration';
        return jsObj;
    }
}
exports._RawChipState = _RawChipState;
class _ChipRedirectingHitDetectionWidget extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.constraints = namedParameters.constraints;
        this.className = '_ChipRedirectingHitDetectionWidget';
    }
}
exports._ChipRedirectingHitDetectionWidget = _ChipRedirectingHitDetectionWidget;
class _RenderChipRedirectingHitDetection extends proxy_box_1.RenderConstrainedBox {
    constructor(additionalConstraints) {
        super();
        this['additionalConstraints'] = additionalConstraints;
        this.className = '_RenderChipRedirectingHitDetection';
    }
}
exports._RenderChipRedirectingHitDetection = _RenderChipRedirectingHitDetection;
class _ChipRenderWidget extends framework_1.RenderObjectWidget {
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
exports._ChipRenderWidget = _ChipRenderWidget;
var _ChipSlot;
(function (_ChipSlot) {
    _ChipSlot["label"] = "{ \"_name\": \"_ChipSlot.label\", \"index\": 0 }";
    _ChipSlot["avatar"] = "{ \"_name\": \"_ChipSlot.avatar\", \"index\": 1 }";
    _ChipSlot["deleteIcon"] = "{ \"_name\": \"_ChipSlot.deleteIcon\", \"index\": 2 }";
})(_ChipSlot || (_ChipSlot = {}));
exports._ChipSlot = _ChipSlot;
;
class _RenderChipElement extends framework_1.RenderObjectElement {
    constructor(chip) {
        super();
        this['chip'] = chip;
        this.className = '_RenderChipElement';
    }
}
exports._RenderChipElement = _RenderChipElement;
class _ChipRenderTheme extends mxflutter_base_1.MXDartClass {
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
exports._ChipRenderTheme = _ChipRenderTheme;
class _RenderChip extends box_1.RenderBox {
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
exports._RenderChip = _RenderChip;
class _LocationAwareInkRippleFactory extends ink_well_1.InteractiveInkFeatureFactory {
    constructor(hasDeleteButton, chipContext, deleteIconKey) {
        super();
        this.hasDeleteButton = hasDeleteButton;
        this.chipContext = chipContext;
        this.deleteIconKey = deleteIconKey;
        this.className = '_LocationAwareInkRippleFactory';
    }
}
exports._LocationAwareInkRippleFactory = _LocationAwareInkRippleFactory;
