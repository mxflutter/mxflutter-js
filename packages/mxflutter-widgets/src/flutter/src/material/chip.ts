//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BorderRadius } from '../painting/border-radius';
import { MaterialInkController } from './material';
import { InteractiveInkFeatureFactory } from './ink-well';
import { RenderObject, PipelineOwner, PaintingContext } from '../rendering/object';
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { BoxConstraints, BoxHitTestResult, RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { ChipThemeData } from './chip-theme';
import { TapDownDetails } from '../gestures/tap';
import { MaterialState } from './material-state';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { VisualDensity, MaterialTapTargetSize, ThemeData } from './theme-data';
import { FocusNode } from '../widgets/focus-manager';
import { Clip, Color, Offset, Brightness, Rect, TextDirection, TextBaseline, Size, Canvas } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry, EdgeInsets } from '../painting/edge-insets';
import { TextStyle } from '../painting/text-style';
import {
  StatelessWidget$,
  Widget,
  BuildContext$,
  StatefulWidget$,
  State$,
  GlobalKey,
  SingleChildRenderObjectWidget,
  RenderObjectWidget,
  RenderObjectElement,
  Element$,
} from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ChipAttributes extends MXDartClass {}
export { ChipAttributes };
abstract class DeletableChipAttributes extends MXDartClass {}
export { DeletableChipAttributes };
abstract class CheckmarkableChipAttributes extends MXDartClass {}
export { CheckmarkableChipAttributes };
abstract class SelectableChipAttributes extends MXDartClass {}
export { SelectableChipAttributes };
abstract class DisabledChipAttributes extends MXDartClass {}
export { DisabledChipAttributes };
abstract class TappableChipAttributes extends MXDartClass {}
export { TappableChipAttributes };
class Chip extends StatelessWidget$ {
  avatar: MXWidget;
  label: MXWidget;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  deleteIcon: MXWidget;
  onDeleted: any;
  deleteIconColor: Color;
  deleteButtonTooltipMessage: string;
  materialTapTargetSize: MaterialTapTargetSize;
  elevation: number;
  shadowColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      avatar?: MXWidget;
      label?: MXWidget;
      labelStyle?: TextStyle;
      labelPadding?: EdgeInsetsGeometry;
      deleteIcon?: MXWidget;
      onDeleted?: any;
      deleteIconColor?: Color;
      deleteButtonTooltipMessage?: string;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      backgroundColor?: Color;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      materialTapTargetSize?: MaterialTapTargetSize;
      elevation?: number;
      shadowColor?: Color;
    } = {},
  ) {
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
  avatar: MXWidget;
  label: MXWidget;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  selected: boolean;
  isEnabled: boolean;
  onSelected: any;
  deleteIcon: MXWidget;
  onDeleted: any;
  deleteIconColor: Color;
  deleteButtonTooltipMessage: string;
  onPressed: any;
  pressElevation: number;
  disabledColor: Color;
  selectedColor: Color;
  tooltip: string;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  materialTapTargetSize: MaterialTapTargetSize;
  elevation: number;
  shadowColor: Color;
  selectedShadowColor: Color;
  showCheckmark: boolean;
  checkmarkColor: Color;
  avatarBorder: ShapeBorder;
  public constructor(
    namedParameters: {
      key?: Key;
      avatar?: MXWidget;
      label?: MXWidget;
      labelStyle?: TextStyle;
      labelPadding?: EdgeInsetsGeometry;
      selected?: boolean;
      isEnabled?: boolean;
      onSelected?: any;
      deleteIcon?: MXWidget;
      onDeleted?: any;
      deleteIconColor?: Color;
      deleteButtonTooltipMessage?: string;
      onPressed?: any;
      pressElevation?: number;
      disabledColor?: Color;
      selectedColor?: Color;
      tooltip?: string;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      backgroundColor?: Color;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      materialTapTargetSize?: MaterialTapTargetSize;
      elevation?: number;
      shadowColor?: Color;
      selectedShadowColor?: Color;
      showCheckmark?: boolean;
      checkmarkColor?: Color;
      avatarBorder?: ShapeBorder;
    } = {},
  ) {
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
  avatar: MXWidget;
  label: MXWidget;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  onSelected: any;
  pressElevation: number;
  selected: boolean;
  disabledColor: Color;
  selectedColor: Color;
  tooltip: string;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  materialTapTargetSize: MaterialTapTargetSize;
  elevation: number;
  shadowColor: Color;
  selectedShadowColor: Color;
  avatarBorder: ShapeBorder;
  public constructor(
    namedParameters: {
      key?: Key;
      avatar?: MXWidget;
      label?: MXWidget;
      labelStyle?: TextStyle;
      labelPadding?: EdgeInsetsGeometry;
      onSelected?: any;
      pressElevation?: number;
      selected?: boolean;
      selectedColor?: Color;
      disabledColor?: Color;
      tooltip?: string;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      backgroundColor?: Color;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      materialTapTargetSize?: MaterialTapTargetSize;
      elevation?: number;
      shadowColor?: Color;
      selectedShadowColor?: Color;
      avatarBorder?: ShapeBorder;
    } = {},
  ) {
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
  avatar: MXWidget;
  label: MXWidget;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  selected: boolean;
  onSelected: any;
  pressElevation: number;
  disabledColor: Color;
  selectedColor: Color;
  tooltip: string;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  materialTapTargetSize: MaterialTapTargetSize;
  elevation: number;
  shadowColor: Color;
  selectedShadowColor: Color;
  showCheckmark: boolean;
  checkmarkColor: Color;
  avatarBorder: ShapeBorder;
  public constructor(
    namedParameters: {
      key?: Key;
      avatar?: MXWidget;
      label?: MXWidget;
      labelStyle?: TextStyle;
      labelPadding?: EdgeInsetsGeometry;
      selected?: boolean;
      onSelected?: any;
      pressElevation?: number;
      disabledColor?: Color;
      selectedColor?: Color;
      tooltip?: string;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      backgroundColor?: Color;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      materialTapTargetSize?: MaterialTapTargetSize;
      elevation?: number;
      shadowColor?: Color;
      selectedShadowColor?: Color;
      showCheckmark?: boolean;
      checkmarkColor?: Color;
      avatarBorder?: ShapeBorder;
    } = {},
  ) {
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
  avatar: MXWidget;
  label: MXWidget;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  onPressed: any;
  pressElevation: number;
  tooltip: string;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  materialTapTargetSize: MaterialTapTargetSize;
  elevation: number;
  shadowColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      avatar?: MXWidget;
      label?: MXWidget;
      labelStyle?: TextStyle;
      labelPadding?: EdgeInsetsGeometry;
      onPressed?: any;
      pressElevation?: number;
      tooltip?: string;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      backgroundColor?: Color;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      materialTapTargetSize?: MaterialTapTargetSize;
      elevation?: number;
      shadowColor?: Color;
    } = {},
  ) {
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
  avatar: MXWidget;
  label: MXWidget;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  deleteIcon: MXWidget;
  onDeleted: any;
  deleteIconColor: Color;
  deleteButtonTooltipMessage: string;
  onSelected: any;
  onPressed: any;
  pressElevation: number;
  selected: boolean;
  isEnabled: boolean;
  disabledColor: Color;
  selectedColor: Color;
  tooltip: string;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  materialTapTargetSize: MaterialTapTargetSize;
  elevation: number;
  shadowColor: Color;
  selectedShadowColor: Color;
  showCheckmark: boolean;
  checkmarkColor: Color;
  avatarBorder: ShapeBorder;
  tapEnabled: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      avatar?: MXWidget;
      label?: MXWidget;
      labelStyle?: TextStyle;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      labelPadding?: EdgeInsetsGeometry;
      deleteIcon?: MXWidget;
      onDeleted?: any;
      deleteIconColor?: Color;
      deleteButtonTooltipMessage?: string;
      onPressed?: any;
      onSelected?: any;
      pressElevation?: number;
      tapEnabled?: boolean;
      selected?: boolean;
      isEnabled?: boolean;
      disabledColor?: Color;
      selectedColor?: Color;
      tooltip?: string;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      backgroundColor?: Color;
      materialTapTargetSize?: MaterialTapTargetSize;
      elevation?: number;
      shadowColor?: Color;
      selectedShadowColor?: Color;
      showCheckmark?: boolean;
      checkmarkColor?: Color;
      avatarBorder?: ShapeBorder;
    } = {},
  ) {
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
  selectController: AnimationController;
  avatarDrawerController: AnimationController;
  deleteDrawerController: AnimationController;
  enableController: AnimationController;
  checkmarkAnimation: Animation;
  avatarDrawerAnimation: Animation;
  deleteDrawerAnimation: Animation;
  enableAnimation: Animation;
  selectionFade: Animation;
  states: Set<any>;
  deleteIconKey: GlobalKey;
  isTapping: boolean;
  static get pressedAnimationDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_RawChipState';
    jsObj['constructorName'] = 'pressedAnimationDuration';
    return jsObj;
  }
}
export { _RawChipState };
class _ChipRedirectingHitDetectionWidget extends SingleChildRenderObjectWidget {
  constraints: BoxConstraints;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; constraints?: BoxConstraints } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.constraints = namedParameters.constraints;
    this.className = '_ChipRedirectingHitDetectionWidget';
  }
}
export { _ChipRedirectingHitDetectionWidget };
class _RenderChipRedirectingHitDetection extends RenderConstrainedBox {
  public constructor(additionalConstraints?: BoxConstraints) {
    super();
    this['additionalConstraints'] = additionalConstraints;
    this.className = '_RenderChipRedirectingHitDetection';
  }
}
export { _RenderChipRedirectingHitDetection };
class _ChipRenderWidget extends RenderObjectWidget {
  theme: _ChipRenderTheme;
  value: boolean;
  isEnabled: boolean;
  checkmarkAnimation: Animation;
  avatarDrawerAnimation: Animation;
  deleteDrawerAnimation: Animation;
  enableAnimation: Animation;
  avatarBorder: ShapeBorder;
  public constructor(
    namedParameters: {
      key?: Key;
      theme?: _ChipRenderTheme;
      value?: boolean;
      isEnabled?: boolean;
      checkmarkAnimation?: Animation;
      avatarDrawerAnimation?: Animation;
      deleteDrawerAnimation?: Animation;
      enableAnimation?: Animation;
      avatarBorder?: ShapeBorder;
    } = {},
  ) {
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
enum _ChipSlot {
  label = '{ "_name": "_ChipSlot.label", "index": 0 }',
  avatar = '{ "_name": "_ChipSlot.avatar", "index": 1 }',
  deleteIcon = '{ "_name": "_ChipSlot.deleteIcon", "index": 2 }',
}

export { _ChipSlot };
class _RenderChipElement extends RenderObjectElement {
  slotToChild: Map<any, any>;
  childToSlot: Map<any, any>;
  public constructor(chip?: _ChipRenderWidget) {
    super();
    this['chip'] = chip;
    this.className = '_RenderChipElement';
  }
}
export { _RenderChipElement };
class _ChipRenderTheme extends MXDartClass {
  avatar: MXWidget;
  label: MXWidget;
  deleteIcon: MXWidget;
  brightness: Brightness;
  padding: EdgeInsets;
  visualDensity: VisualDensity;
  labelPadding: EdgeInsets;
  showAvatar: boolean;
  showCheckmark: boolean;
  checkmarkColor: Color;
  canTapBody: boolean;
  public constructor(
    namedParameters: {
      avatar?: MXWidget;
      label?: MXWidget;
      deleteIcon?: MXWidget;
      brightness?: Brightness;
      padding?: EdgeInsets;
      visualDensity?: VisualDensity;
      labelPadding?: EdgeInsets;
      showAvatar?: boolean;
      showCheckmark?: boolean;
      checkmarkColor?: Color;
      canTapBody?: boolean;
    } = {},
  ) {
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
  slotToChild: Map<any, any>;
  childToSlot: Map<any, any>;
  value: boolean;
  isEnabled: boolean;
  deleteButtonRect: Rect;
  pressRect: Rect;
  checkmarkAnimation: Animation;
  avatarDrawerAnimation: Animation;
  deleteDrawerAnimation: Animation;
  enableAnimation: Animation;
  avatarBorder: ShapeBorder;
  avatar: RenderBox;
  deleteIcon: RenderBox;
  label: RenderBox;
  theme: _ChipRenderTheme;
  textDirection: TextDirection;
  public constructor(
    namedParameters: {
      theme?: _ChipRenderTheme;
      textDirection?: TextDirection;
      value?: boolean;
      isEnabled?: boolean;
      checkmarkAnimation?: Animation;
      avatarDrawerAnimation?: Animation;
      deleteDrawerAnimation?: Animation;
      enableAnimation?: Animation;
      avatarBorder?: ShapeBorder;
    } = {},
  ) {
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
  hasDeleteButton: boolean;
  chipContext: BuildContext$;
  deleteIconKey: GlobalKey;
  public constructor(hasDeleteButton?: boolean, chipContext?: BuildContext$, deleteIconKey?: GlobalKey) {
    super();
    this.hasDeleteButton = hasDeleteButton;
    this.chipContext = chipContext;
    this.deleteIconKey = deleteIconKey;
    this.className = '_LocationAwareInkRippleFactory';
  }
}
export { _LocationAwareInkRippleFactory };
