//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Intent } from '../widgets/actions';
import { SemanticsConfiguration } from '../semantics/semantics';
import { PointerEvent } from '../gestures/events';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { PipelineOwner, PaintingContext } from '../rendering/object';
import { ThemeData } from './theme-data';
import { TargetPlatform } from '../foundation/platform';
import { TapGestureRecognizer, TapDownDetails, TapUpDetails } from '../gestures/tap';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TextPainter } from '../painting/text-painter';
import { Animation } from '../animation/animation';
import { RenderBox, BoxHitTestEntry } from '../rendering/box';
import { SliderThemeData } from './slider-theme';
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from '../widgets/overlay';
import { LayerLink } from '../rendering/layer';
import { AnimationController } from '../animation/animation-controller';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Color, Size, TextDirection, Offset } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, GlobalKey, BuildContext$, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _SliderType {
  material = '{ "_name": "_SliderType.material", "index": 0 }',
  adaptive = '{ "_name": "_SliderType.adaptive", "index": 1 }',
}

export { _SliderType };
class Slider extends StatefulWidget$ {
  value: number;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  min: number;
  max: number;
  divisions: number;
  label: string;
  activeColor: Color;
  inactiveColor: Color;
  mouseCursor: MouseCursor;
  semanticFormatterCallback: any;
  focusNode: FocusNode;
  autofocus: boolean;
  sliderType: _SliderType;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      onChanged?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      min?: number;
      max?: number;
      divisions?: number;
      label?: string;
      activeColor?: Color;
      inactiveColor?: Color;
      mouseCursor?: MouseCursor;
      semanticFormatterCallback?: any;
      focusNode?: FocusNode;
      autofocus?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.min = namedParameters.min;
    this.max = namedParameters.max;
    this.divisions = namedParameters.divisions;
    this.label = namedParameters.label;
    this.activeColor = namedParameters.activeColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.mouseCursor = namedParameters.mouseCursor;
    this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.className = 'Slider';
  }
  static adaptive(
    namedParameters: {
      key?: Key;
      value?: number;
      onChanged?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      min?: number;
      max?: number;
      divisions?: number;
      label?: string;
      mouseCursor?: MouseCursor;
      activeColor?: Color;
      inactiveColor?: Color;
      semanticFormatterCallback?: any;
      focusNode?: FocusNode;
      autofocus?: boolean;
    } = {},
  ) {
    var jsObj = new Slider();
    jsObj.key = namedParameters.key;
    jsObj.value = namedParameters.value;
    jsObj.onChanged = namedParameters.onChanged;
    jsObj.onChangeStart = namedParameters.onChangeStart;
    jsObj.onChangeEnd = namedParameters.onChangeEnd;
    jsObj.min = namedParameters.min;
    jsObj.max = namedParameters.max;
    jsObj.divisions = namedParameters.divisions;
    jsObj.label = namedParameters.label;
    jsObj.mouseCursor = namedParameters.mouseCursor;
    jsObj.activeColor = namedParameters.activeColor;
    jsObj.inactiveColor = namedParameters.inactiveColor;
    jsObj.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    jsObj.focusNode = namedParameters.focusNode;
    jsObj.autofocus = namedParameters.autofocus;
    jsObj['constructorName'] = 'adaptive';
    return jsObj;
  }
}
export { Slider };
class _SliderState extends State$ {
  overlayController: AnimationController;
  valueIndicatorController: AnimationController;
  enableController: AnimationController;
  positionController: AnimationController;
  interactionTimer: any;
  renderObjectKey: GlobalKey;
  shortcutMap: Map<any, any>;
  actionMap: Map<any, any>;
  paintValueIndicator: any;
  focused: boolean;
  hovering: boolean;
  layerLink: LayerLink;
  overlayEntry: OverlayEntry;
  static get enableAnimationDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_SliderState';
    jsObj['constructorName'] = 'enableAnimationDuration';
    return jsObj;
  }
  static get valueIndicatorAnimationDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_SliderState';
    jsObj['constructorName'] = 'valueIndicatorAnimationDuration';
    return jsObj;
  }
}
export { _SliderState };
class _SliderRenderObjectWidget extends LeafRenderObjectWidget {
  value: number;
  divisions: number;
  label: string;
  sliderTheme: SliderThemeData;
  textScaleFactor: number;
  screenSize: Size;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  semanticFormatterCallback: any;
  state: _SliderState;
  hasFocus: boolean;
  hovering: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      divisions?: number;
      label?: string;
      sliderTheme?: SliderThemeData;
      textScaleFactor?: number;
      screenSize?: Size;
      onChanged?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      state?: _SliderState;
      semanticFormatterCallback?: any;
      hasFocus?: boolean;
      hovering?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.divisions = namedParameters.divisions;
    this.label = namedParameters.label;
    this.sliderTheme = namedParameters.sliderTheme;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.screenSize = namedParameters.screenSize;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.state = namedParameters.state;
    this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.className = '_SliderRenderObjectWidget';
  }
}
export { _SliderRenderObjectWidget };
class _RenderSlider extends RenderBox {
  state: _SliderState;
  overlayAnimation: Animation;
  valueIndicatorAnimation: Animation;
  enableAnimation: Animation;
  labelPainter: TextPainter;
  drag: HorizontalDragGestureRecognizer;
  tap: TapGestureRecognizer;
  active: boolean;
  currentDragValue: number;
  value: number;
  platform: TargetPlatform;
  semanticFormatterCallback: any;
  divisions: number;
  label: string;
  sliderTheme: SliderThemeData;
  theme: ThemeData;
  textScaleFactor: number;
  screenSize: Size;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  textDirection: TextDirection;
  hasFocus: boolean;
  hovering: boolean;
  public constructor(
    namedParameters: {
      value?: number;
      divisions?: number;
      label?: string;
      sliderTheme?: SliderThemeData;
      textScaleFactor?: number;
      screenSize?: Size;
      platform?: TargetPlatform;
      onChanged?: any;
      semanticFormatterCallback?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      state?: _SliderState;
      textDirection?: TextDirection;
      hasFocus?: boolean;
      hovering?: boolean;
    } = {},
  ) {
    super();
    this.value = namedParameters.value;
    this.divisions = namedParameters.divisions;
    this.label = namedParameters.label;
    this.sliderTheme = namedParameters.sliderTheme;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.screenSize = namedParameters.screenSize;
    this.platform = namedParameters.platform;
    this.onChanged = namedParameters.onChanged;
    this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.state = namedParameters.state;
    this.textDirection = namedParameters.textDirection;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.className = '_RenderSlider';
  }
}
export { _RenderSlider };
class _AdjustSliderIntent extends Intent {
  type: _SliderAdjustmentType;
  public constructor(namedParameters: { type?: _SliderAdjustmentType } = {}) {
    super();
    this.type = namedParameters.type;
    this.className = '_AdjustSliderIntent';
  }
  static right() {
    var jsObj = new _AdjustSliderIntent();
    jsObj['constructorName'] = 'right';
    return jsObj;
  }
  static left() {
    var jsObj = new _AdjustSliderIntent();
    jsObj['constructorName'] = 'left';
    return jsObj;
  }
  static up() {
    var jsObj = new _AdjustSliderIntent();
    jsObj['constructorName'] = 'up';
    return jsObj;
  }
  static down() {
    var jsObj = new _AdjustSliderIntent();
    jsObj['constructorName'] = 'down';
    return jsObj;
  }
}
export { _AdjustSliderIntent };
enum _SliderAdjustmentType {
  right = '{ "_name": "_SliderAdjustmentType.right", "index": 0 }',
  left = '{ "_name": "_SliderAdjustmentType.left", "index": 1 }',
  up = '{ "_name": "_SliderAdjustmentType.up", "index": 2 }',
  down = '{ "_name": "_SliderAdjustmentType.down", "index": 3 }',
}

export { _SliderAdjustmentType };
class _ValueIndicatorRenderObjectWidget extends LeafRenderObjectWidget {
  state: _SliderState;
  public constructor(namedParameters: { state?: _SliderState } = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_ValueIndicatorRenderObjectWidget';
  }
}
export { _ValueIndicatorRenderObjectWidget };
class _RenderValueIndicator extends RenderBox {
  valueIndicatorAnimation: Animation;
  state: _SliderState;
  public constructor(namedParameters: { state?: _SliderState } = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_RenderValueIndicator';
  }
}
export { _RenderValueIndicator };
