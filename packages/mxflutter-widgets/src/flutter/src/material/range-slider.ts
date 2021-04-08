// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { SemanticsNode } from '../semantics/semantics';
import { ThemeData } from './theme-data';
import { TargetPlatform } from '../foundation/platform';
import { TapGestureRecognizer } from '../gestures/tap';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TextPainter } from '../painting/text-painter';
import { Animation } from '../animation/animation';
import { RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from '../widgets/overlay';
import { LayerLink } from '../rendering/layer';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Color, Size, TextDirection } from '../../../mx-dart-sdk';
import { RangeValues, RangeLabels, SliderThemeData, Thumb } from './slider-theme';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RangeSlider extends StatefulWidget {
  values: RangeValues;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  min: number;
  max: number;
  divisions: number;
  labels: RangeLabels;
  activeColor: Color;
  inactiveColor: Color;
  semanticFormatterCallback: any;
  public constructor(namedParameters: {key?: Key, values?: RangeValues, onChanged?: any, onChangeStart?: any, onChangeEnd?: any, min?: number, max?: number, divisions?: number, labels?: RangeLabels, activeColor?: Color, inactiveColor?: Color, semanticFormatterCallback?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.values = namedParameters.values;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.min = namedParameters.min;
    this.max = namedParameters.max;
    this.divisions = namedParameters.divisions;
    this.labels = namedParameters.labels;
    this.activeColor = namedParameters.activeColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    this.className = 'RangeSlider';
  }
}
export { RangeSlider };
class _RangeSliderState extends State {
  overlayController: AnimationController;
  valueIndicatorController: AnimationController;
  enableController: AnimationController;
  startPositionController: AnimationController;
  endPositionController: AnimationController;
  interactionTimer: any;
  paintTopValueIndicator: any;
  paintBottomValueIndicator: any;
  layerLink: LayerLink;
  overlayEntry: OverlayEntry;
  static get enableAnimationDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_RangeSliderState';
    jsObj['constructorName'] = 'enableAnimationDuration';
    return jsObj;
  }
  static get valueIndicatorAnimationDuration() {
    var jsObj = new Duration();
    jsObj['className'] = '_RangeSliderState';
    jsObj['constructorName'] = 'valueIndicatorAnimationDuration';
    return jsObj;
  }
}
export { _RangeSliderState };
class _RangeSliderRenderObjectWidget extends LeafRenderObjectWidget {
  values: RangeValues;
  divisions: number;
  labels: RangeLabels;
  sliderTheme: SliderThemeData;
  textScaleFactor: number;
  screenSize: Size;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  semanticFormatterCallback: any;
  state: _RangeSliderState;
  public constructor(namedParameters: {key?: Key, values?: RangeValues, divisions?: number, labels?: RangeLabels, sliderTheme?: SliderThemeData, textScaleFactor?: number, screenSize?: Size, onChanged?: any, onChangeStart?: any, onChangeEnd?: any, state?: _RangeSliderState, semanticFormatterCallback?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.values = namedParameters.values;
    this.divisions = namedParameters.divisions;
    this.labels = namedParameters.labels;
    this.sliderTheme = namedParameters.sliderTheme;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.screenSize = namedParameters.screenSize;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.state = namedParameters.state;
    this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    this.className = '_RangeSliderRenderObjectWidget';
  }
}
export { _RangeSliderRenderObjectWidget };
class _RenderRangeSlider extends RenderBox {
  lastThumbSelection: Thumb;
  state: _RangeSliderState;
  overlayAnimation: Animation;
  valueIndicatorAnimation: Animation;
  enableAnimation: Animation;
  startLabelPainter: TextPainter;
  endLabelPainter: TextPainter;
  drag: HorizontalDragGestureRecognizer;
  tap: TapGestureRecognizer;
  active: boolean;
  newValues: RangeValues;
  values: RangeValues;
  platform: TargetPlatform;
  semanticFormatterCallback: any;
  divisions: number;
  labels: RangeLabels;
  sliderTheme: SliderThemeData;
  theme: ThemeData;
  textScaleFactor: number;
  screenSize: Size;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  textDirection: TextDirection;
  startSemanticsNode: SemanticsNode;
  endSemanticsNode: SemanticsNode;
  public constructor(namedParameters: {values?: RangeValues, divisions?: number, labels?: RangeLabels, sliderTheme?: SliderThemeData, theme?: ThemeData, textScaleFactor?: number, screenSize?: Size, platform?: TargetPlatform, onChanged?: any, semanticFormatterCallback?: any, onChangeStart?: any, onChangeEnd?: any, state?: _RangeSliderState, textDirection?: TextDirection} = {}) {
    super();
    this.values = namedParameters.values;
    this.divisions = namedParameters.divisions;
    this.labels = namedParameters.labels;
    this.sliderTheme = namedParameters.sliderTheme;
    this.theme = namedParameters.theme;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.screenSize = namedParameters.screenSize;
    this.platform = namedParameters.platform;
    this.onChanged = namedParameters.onChanged;
    this.semanticFormatterCallback = namedParameters.semanticFormatterCallback;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.state = namedParameters.state;
    this.textDirection = namedParameters.textDirection;
    this.className = '_RenderRangeSlider';
  }
}
export { _RenderRangeSlider };
class _ValueIndicatorRenderObjectWidget extends LeafRenderObjectWidget {
  state: _RangeSliderState;
  public constructor(namedParameters: {state?: _RangeSliderState} = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_ValueIndicatorRenderObjectWidget';
  }
}
export { _ValueIndicatorRenderObjectWidget };
class _RenderValueIndicator extends RenderBox {
  valueIndicatorAnimation: Animation;
  state: _RangeSliderState;
  public constructor(namedParameters: {state?: _RangeSliderState} = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_RenderValueIndicator';
  }
}
export { _RenderValueIndicator };
