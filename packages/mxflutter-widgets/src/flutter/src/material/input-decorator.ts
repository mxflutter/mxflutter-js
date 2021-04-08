// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { TextAlignVertical } from '../painting/alignment';
import { RenderBox, BoxConstraints } from '../rendering/box';
import { VisualDensity } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { TextStyle } from '../painting/text-style';
import { AnimatedWidget } from '../widgets/transitions';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget, Widget, State, RenderObjectElement, RenderObjectWidget, StatelessWidget } from '../widgets/framework';
import { TextDirection, Color, TextAlign, TextBaseline } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { CustomPainter } from '../rendering/custom-paint';
import { InputBorder } from './input-border';
import { Tween, ColorTween } from '../animation/tween';
import { ChangeNotifier, Listenable } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _InputBorderGap extends ChangeNotifier {
  start: number;
  extent: number;
}
export { _InputBorderGap };
class _InputBorderTween extends Tween {
  public constructor(namedParameters: {begin?: InputBorder, end?: InputBorder} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = '_InputBorderTween';
  }
}
export { _InputBorderTween };
class _InputBorderPainter extends CustomPainter {
  borderAnimation: Animation;
  border: _InputBorderTween;
  gapAnimation: Animation;
  gap: _InputBorderGap;
  textDirection: TextDirection;
  fillColor: Color;
  hoverColorTween: ColorTween;
  hoverAnimation: Animation;
  public constructor(namedParameters: {repaint?: Listenable, borderAnimation?: Animation, border?: _InputBorderTween, gapAnimation?: Animation, gap?: _InputBorderGap, textDirection?: TextDirection, fillColor?: Color, hoverAnimation?: Animation, hoverColorTween?: ColorTween} = {}) {
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
class _BorderContainer extends StatefulWidget {
  border: InputBorder;
  gap: _InputBorderGap;
  gapAnimation: Animation;
  fillColor: Color;
  hoverColor: Color;
  isHovering: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, border?: InputBorder, gap?: _InputBorderGap, gapAnimation?: Animation, fillColor?: Color, hoverColor?: Color, isHovering?: boolean, child?: MXWidget} = {}) {
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
class _BorderContainerState extends State {
  controller: AnimationController;
  hoverColorController: AnimationController;
  borderAnimation: Animation;
  border: _InputBorderTween;
  hoverAnimation: Animation;
  hoverColorTween: ColorTween;
}
export { _BorderContainerState };
class _Shaker extends AnimatedWidget {
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, animation?: Animation, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this['animation'] = namedParameters.animation;
    this.child = namedParameters.child;
    this.className = '_Shaker';
  }
}
export { _Shaker };
class _HelperError extends StatefulWidget {
  textAlign: TextAlign;
  helperText: string;
  helperStyle: TextStyle;
  helperMaxLines: number;
  errorText: string;
  errorStyle: TextStyle;
  errorMaxLines: number;
  public constructor(namedParameters: {key?: Key, textAlign?: TextAlign, helperText?: string, helperStyle?: TextStyle, helperMaxLines?: number, errorText?: string, errorStyle?: TextStyle, errorMaxLines?: number} = {}) {
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
class _HelperErrorState extends State {
  controller: AnimationController;
  helper: MXWidget;
  error: MXWidget;
  static get empty() {
    var jsObj = new class MXWidget extends Widget {}();
    jsObj['className'] = '_HelperErrorState';
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
}
export { _HelperErrorState };
enum FloatingLabelBehavior {
  never = '{ "_name": "FloatingLabelBehavior.never", "index": 0 }',
  auto = '{ "_name": "FloatingLabelBehavior.auto", "index": 1 }',
  always = '{ "_name": "FloatingLabelBehavior.always", "index": 2 }',
};

export { FloatingLabelBehavior };
enum _DecorationSlot {
  icon = '{ "_name": "_DecorationSlot.icon", "index": 0 }',
  input = '{ "_name": "_DecorationSlot.input", "index": 1 }',
  label = '{ "_name": "_DecorationSlot.label", "index": 2 }',
  hint = '{ "_name": "_DecorationSlot.hint", "index": 3 }',
  prefix = '{ "_name": "_DecorationSlot.prefix", "index": 4 }',
  suffix = '{ "_name": "_DecorationSlot.suffix", "index": 5 }',
  prefixIcon = '{ "_name": "_DecorationSlot.prefixIcon", "index": 6 }',
  suffixIcon = '{ "_name": "_DecorationSlot.suffixIcon", "index": 7 }',
  helperError = '{ "_name": "_DecorationSlot.helperError", "index": 8 }',
  counter = '{ "_name": "_DecorationSlot.counter", "index": 9 }',
  container = '{ "_name": "_DecorationSlot.container", "index": 10 }',
};

export { _DecorationSlot };
class _Decoration extends MXDartClass {
  contentPadding: EdgeInsetsGeometry;
  isCollapsed: boolean;
  floatingLabelHeight: number;
  floatingLabelProgress: number;
  border: InputBorder;
  borderGap: _InputBorderGap;
  alignLabelWithHint: boolean;
  isDense: boolean;
  visualDensity: VisualDensity;
  icon: MXWidget;
  input: MXWidget;
  label: MXWidget;
  hint: MXWidget;
  prefix: MXWidget;
  suffix: MXWidget;
  prefixIcon: MXWidget;
  suffixIcon: MXWidget;
  helperError: MXWidget;
  counter: MXWidget;
  container: MXWidget;
  fixTextFieldOutlineLabel: boolean;
  public constructor(namedParameters: {contentPadding?: EdgeInsetsGeometry, isCollapsed?: boolean, floatingLabelHeight?: number, floatingLabelProgress?: number, border?: InputBorder, borderGap?: _InputBorderGap, alignLabelWithHint?: boolean, isDense?: boolean, visualDensity?: VisualDensity, icon?: MXWidget, input?: MXWidget, label?: MXWidget, hint?: MXWidget, prefix?: MXWidget, suffix?: MXWidget, prefixIcon?: MXWidget, suffixIcon?: MXWidget, helperError?: MXWidget, counter?: MXWidget, container?: MXWidget, fixTextFieldOutlineLabel?: boolean} = {}) {
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
  boxToBaseline: Map<any, any>;
  inputBaseline: number;
  outlineBaseline: number;
  subtextBaseline: number;
  containerHeight: number;
  subtextHeight: number;
  public constructor(namedParameters: {boxToBaseline?: Map<any, any>, inputBaseline?: number, outlineBaseline?: number, subtextBaseline?: number, containerHeight?: number, subtextHeight?: number} = {}) {
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
  children: Map<any, any>;
  icon: RenderBox;
  input: RenderBox;
  label: RenderBox;
  hint: RenderBox;
  prefix: RenderBox;
  suffix: RenderBox;
  prefixIcon: RenderBox;
  suffixIcon: RenderBox;
  helperError: RenderBox;
  counter: RenderBox;
  container: RenderBox;
  decoration: _Decoration;
  textDirection: TextDirection;
  textBaseline: TextBaseline;
  textAlignVertical: TextAlignVertical;
  isFocused: boolean;
  expands: boolean;
  labelTransform: Matrix4;
  public constructor(namedParameters: {decoration?: _Decoration, textDirection?: TextDirection, textBaseline?: TextBaseline, isFocused?: boolean, expands?: boolean, textAlignVertical?: TextAlignVertical} = {}) {
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
class _DecorationElement extends RenderObjectElement {
  slotToChild: Map<any, any>;
  public constructor(widget?: _Decorator) {
    super();
    this['mx_widget'] = widget;
    this.className = '_DecorationElement';
  }
}
export { _DecorationElement };
class _Decorator extends RenderObjectWidget {
  decoration: _Decoration;
  textDirection: TextDirection;
  textBaseline: TextBaseline;
  textAlignVertical: TextAlignVertical;
  isFocused: boolean;
  expands: boolean;
  public constructor(namedParameters: {key?: Key, textAlignVertical?: TextAlignVertical, decoration?: _Decoration, textDirection?: TextDirection, textBaseline?: TextBaseline, isFocused?: boolean, expands?: boolean} = {}) {
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
class _AffixText extends StatelessWidget {
  labelIsFloating: boolean;
  text: string;
  style: TextStyle;
  child: MXWidget;
  public constructor(namedParameters: {labelIsFloating?: boolean, text?: string, style?: TextStyle, child?: MXWidget} = {}) {
    super();
    this.labelIsFloating = namedParameters.labelIsFloating;
    this.text = namedParameters.text;
    this.style = namedParameters.style;
    this.child = namedParameters.child;
    this.className = '_AffixText';
  }
}
export { _AffixText };
class InputDecorator extends StatefulWidget {
  decoration: InputDecoration;
  baseStyle: TextStyle;
  textAlign: TextAlign;
  textAlignVertical: TextAlignVertical;
  isFocused: boolean;
  isHovering: boolean;
  expands: boolean;
  isEmpty: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, decoration?: InputDecoration, baseStyle?: TextStyle, textAlign?: TextAlign, textAlignVertical?: TextAlignVertical, isFocused?: boolean, isHovering?: boolean, expands?: boolean, isEmpty?: boolean, child?: MXWidget} = {}) {
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
class _InputDecoratorState extends State {
  floatingLabelController: AnimationController;
  shakingLabelController: AnimationController;
  borderGap: _InputBorderGap;
  effectiveDecoration: InputDecoration;
}
export { _InputDecoratorState };
class InputDecoration extends MXDartClass {
  icon: MXWidget;
  labelText: string;
  labelStyle: TextStyle;
  helperText: string;
  helperStyle: TextStyle;
  helperMaxLines: number;
  hintText: string;
  hintStyle: TextStyle;
  hintMaxLines: number;
  errorText: string;
  errorStyle: TextStyle;
  errorMaxLines: number;
  hasFloatingPlaceholder: boolean;
  floatingLabelBehavior: FloatingLabelBehavior;
  isDense: boolean;
  contentPadding: EdgeInsetsGeometry;
  isCollapsed: boolean;
  prefixIcon: MXWidget;
  prefixIconConstraints: BoxConstraints;
  prefix: MXWidget;
  prefixText: string;
  prefixStyle: TextStyle;
  suffixIcon: MXWidget;
  suffix: MXWidget;
  suffixText: string;
  suffixStyle: TextStyle;
  suffixIconConstraints: BoxConstraints;
  counterText: string;
  counter: MXWidget;
  counterStyle: TextStyle;
  filled: boolean;
  fillColor: Color;
  focusColor: Color;
  hoverColor: Color;
  errorBorder: InputBorder;
  focusedBorder: InputBorder;
  focusedErrorBorder: InputBorder;
  disabledBorder: InputBorder;
  enabledBorder: InputBorder;
  border: InputBorder;
  enabled: boolean;
  semanticCounterText: string;
  alignLabelWithHint: boolean;
  public constructor(namedParameters: {icon?: MXWidget, labelText?: string, labelStyle?: TextStyle, helperText?: string, helperStyle?: TextStyle, helperMaxLines?: number, hintText?: string, hintStyle?: TextStyle, hintMaxLines?: number, errorText?: string, errorStyle?: TextStyle, errorMaxLines?: number, hasFloatingPlaceholder?: boolean, floatingLabelBehavior?: FloatingLabelBehavior, isCollapsed?: boolean, isDense?: boolean, contentPadding?: EdgeInsetsGeometry, prefixIcon?: MXWidget, prefixIconConstraints?: BoxConstraints, prefix?: MXWidget, prefixText?: string, prefixStyle?: TextStyle, suffixIcon?: MXWidget, suffix?: MXWidget, suffixText?: string, suffixStyle?: TextStyle, suffixIconConstraints?: BoxConstraints, counter?: MXWidget, counterText?: string, counterStyle?: TextStyle, filled?: boolean, fillColor?: Color, focusColor?: Color, hoverColor?: Color, errorBorder?: InputBorder, focusedBorder?: InputBorder, focusedErrorBorder?: InputBorder, disabledBorder?: InputBorder, enabledBorder?: InputBorder, border?: InputBorder, enabled?: boolean, semanticCounterText?: string, alignLabelWithHint?: boolean} = {}) {
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
  static collapsed(namedParameters: {hintText?: string, hasFloatingPlaceholder?: boolean, floatingLabelBehavior?: FloatingLabelBehavior, hintStyle?: TextStyle, filled?: boolean, fillColor?: Color, focusColor?: Color, hoverColor?: Color, border?: InputBorder, enabled?: boolean} = {}) {
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
  labelStyle: TextStyle;
  helperStyle: TextStyle;
  helperMaxLines: number;
  hintStyle: TextStyle;
  errorStyle: TextStyle;
  errorMaxLines: number;
  hasFloatingPlaceholder: boolean;
  floatingLabelBehavior: FloatingLabelBehavior;
  isDense: boolean;
  contentPadding: EdgeInsetsGeometry;
  isCollapsed: boolean;
  prefixStyle: TextStyle;
  suffixStyle: TextStyle;
  counterStyle: TextStyle;
  filled: boolean;
  fillColor: Color;
  focusColor: Color;
  hoverColor: Color;
  errorBorder: InputBorder;
  focusedBorder: InputBorder;
  focusedErrorBorder: InputBorder;
  disabledBorder: InputBorder;
  enabledBorder: InputBorder;
  border: InputBorder;
  alignLabelWithHint: boolean;
  public constructor(namedParameters: {labelStyle?: TextStyle, helperStyle?: TextStyle, helperMaxLines?: number, hintStyle?: TextStyle, errorStyle?: TextStyle, errorMaxLines?: number, hasFloatingPlaceholder?: boolean, floatingLabelBehavior?: FloatingLabelBehavior, isDense?: boolean, contentPadding?: EdgeInsetsGeometry, isCollapsed?: boolean, prefixStyle?: TextStyle, suffixStyle?: TextStyle, counterStyle?: TextStyle, filled?: boolean, fillColor?: Color, focusColor?: Color, hoverColor?: Color, errorBorder?: InputBorder, focusedBorder?: InputBorder, focusedErrorBorder?: InputBorder, disabledBorder?: InputBorder, enabledBorder?: InputBorder, border?: InputBorder, alignLabelWithHint?: boolean} = {}) {
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
