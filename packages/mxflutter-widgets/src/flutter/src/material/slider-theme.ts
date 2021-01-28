//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PaintingContext } from '../rendering/object';
import { Animation } from '../animation/animation';
import { TextPainter } from '../painting/text-painter';
import { RenderBox } from '../rendering/box';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { TextStyle } from '../painting/text-style';
import { Color, Offset, Size, TextDirection, Canvas, Paint } from '../../../mx-dart-sdk';
import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SliderTheme extends InheritedTheme {
  data: SliderThemeData;
  public constructor(namedParameters: { key?: Key; data?: SliderThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'SliderTheme';
  }
}
export { SliderTheme };
enum ShowValueIndicator {
  onlyForDiscrete = '{ "_name": "ShowValueIndicator.onlyForDiscrete", "index": 0 }',
  onlyForContinuous = '{ "_name": "ShowValueIndicator.onlyForContinuous", "index": 1 }',
  always = '{ "_name": "ShowValueIndicator.always", "index": 2 }',
  never = '{ "_name": "ShowValueIndicator.never", "index": 3 }',
}

export { ShowValueIndicator };
enum Thumb {
  start = '{ "_name": "Thumb.start", "index": 0 }',
  end = '{ "_name": "Thumb.end", "index": 1 }',
}

export { Thumb };
class SliderThemeData extends MXDartClass {
  trackHeight: number;
  activeTrackColor: Color;
  inactiveTrackColor: Color;
  disabledActiveTrackColor: Color;
  disabledInactiveTrackColor: Color;
  activeTickMarkColor: Color;
  inactiveTickMarkColor: Color;
  disabledActiveTickMarkColor: Color;
  disabledInactiveTickMarkColor: Color;
  thumbColor: Color;
  overlappingShapeStrokeColor: Color;
  disabledThumbColor: Color;
  overlayColor: Color;
  valueIndicatorColor: Color;
  overlayShape: SliderComponentShape;
  tickMarkShape: SliderTickMarkShape;
  thumbShape: SliderComponentShape;
  trackShape: SliderTrackShape;
  valueIndicatorShape: SliderComponentShape;
  rangeTickMarkShape: RangeSliderTickMarkShape;
  rangeThumbShape: RangeSliderThumbShape;
  rangeTrackShape: RangeSliderTrackShape;
  rangeValueIndicatorShape: RangeSliderValueIndicatorShape;
  showValueIndicator: ShowValueIndicator;
  valueIndicatorTextStyle: TextStyle;
  minThumbSeparation: number;
  thumbSelector: any;
  public constructor(
    namedParameters: {
      trackHeight?: number;
      activeTrackColor?: Color;
      inactiveTrackColor?: Color;
      disabledActiveTrackColor?: Color;
      disabledInactiveTrackColor?: Color;
      activeTickMarkColor?: Color;
      inactiveTickMarkColor?: Color;
      disabledActiveTickMarkColor?: Color;
      disabledInactiveTickMarkColor?: Color;
      thumbColor?: Color;
      overlappingShapeStrokeColor?: Color;
      disabledThumbColor?: Color;
      overlayColor?: Color;
      valueIndicatorColor?: Color;
      overlayShape?: SliderComponentShape;
      tickMarkShape?: SliderTickMarkShape;
      thumbShape?: SliderComponentShape;
      trackShape?: SliderTrackShape;
      valueIndicatorShape?: SliderComponentShape;
      rangeTickMarkShape?: RangeSliderTickMarkShape;
      rangeThumbShape?: RangeSliderThumbShape;
      rangeTrackShape?: RangeSliderTrackShape;
      rangeValueIndicatorShape?: RangeSliderValueIndicatorShape;
      showValueIndicator?: ShowValueIndicator;
      valueIndicatorTextStyle?: TextStyle;
      minThumbSeparation?: number;
      thumbSelector?: any;
    } = {},
  ) {
    super();
    this.trackHeight = namedParameters.trackHeight;
    this.activeTrackColor = namedParameters.activeTrackColor;
    this.inactiveTrackColor = namedParameters.inactiveTrackColor;
    this.disabledActiveTrackColor = namedParameters.disabledActiveTrackColor;
    this.disabledInactiveTrackColor = namedParameters.disabledInactiveTrackColor;
    this.activeTickMarkColor = namedParameters.activeTickMarkColor;
    this.inactiveTickMarkColor = namedParameters.inactiveTickMarkColor;
    this.disabledActiveTickMarkColor = namedParameters.disabledActiveTickMarkColor;
    this.disabledInactiveTickMarkColor = namedParameters.disabledInactiveTickMarkColor;
    this.thumbColor = namedParameters.thumbColor;
    this.overlappingShapeStrokeColor = namedParameters.overlappingShapeStrokeColor;
    this.disabledThumbColor = namedParameters.disabledThumbColor;
    this.overlayColor = namedParameters.overlayColor;
    this.valueIndicatorColor = namedParameters.valueIndicatorColor;
    this.overlayShape = namedParameters.overlayShape;
    this.tickMarkShape = namedParameters.tickMarkShape;
    this.thumbShape = namedParameters.thumbShape;
    this.trackShape = namedParameters.trackShape;
    this.valueIndicatorShape = namedParameters.valueIndicatorShape;
    this.rangeTickMarkShape = namedParameters.rangeTickMarkShape;
    this.rangeThumbShape = namedParameters.rangeThumbShape;
    this.rangeTrackShape = namedParameters.rangeTrackShape;
    this.rangeValueIndicatorShape = namedParameters.rangeValueIndicatorShape;
    this.showValueIndicator = namedParameters.showValueIndicator;
    this.valueIndicatorTextStyle = namedParameters.valueIndicatorTextStyle;
    this.minThumbSeparation = namedParameters.minThumbSeparation;
    this.thumbSelector = namedParameters.thumbSelector;
    this.className = 'SliderThemeData';
  }
  static fromPrimaryColors(
    namedParameters: {
      primaryColor?: Color;
      primaryColorDark?: Color;
      primaryColorLight?: Color;
      valueIndicatorTextStyle?: TextStyle;
    } = {},
  ) {
    var jsObj = new SliderThemeData();
    jsObj['primaryColor'] = namedParameters.primaryColor;
    jsObj['primaryColorDark'] = namedParameters.primaryColorDark;
    jsObj['primaryColorLight'] = namedParameters.primaryColorLight;
    jsObj.valueIndicatorTextStyle = namedParameters.valueIndicatorTextStyle;
    jsObj['constructorName'] = 'fromPrimaryColors';
    return jsObj;
  }
}
export { SliderThemeData };
abstract class SliderComponentShape extends MXDartClass {}
export { SliderComponentShape };
abstract class SliderTickMarkShape extends MXDartClass {}
export { SliderTickMarkShape };
abstract class SliderTrackShape extends MXDartClass {}
export { SliderTrackShape };
abstract class RangeSliderThumbShape extends MXDartClass {}
export { RangeSliderThumbShape };
abstract class RangeSliderValueIndicatorShape extends MXDartClass {}
export { RangeSliderValueIndicatorShape };
abstract class RangeSliderTickMarkShape extends MXDartClass {}
export { RangeSliderTickMarkShape };
abstract class RangeSliderTrackShape extends MXDartClass {}
export { RangeSliderTrackShape };
abstract class BaseSliderTrackShape extends MXDartClass {}
export { BaseSliderTrackShape };
class RectangularSliderTrackShape extends SliderTrackShape {
  disabledThumbGapWidth: number;
  public constructor(namedParameters: { disabledThumbGapWidth?: number } = {}) {
    super();
    this.disabledThumbGapWidth = namedParameters.disabledThumbGapWidth;
    this.className = 'RectangularSliderTrackShape';
  }
}
export { RectangularSliderTrackShape };
class RoundedRectSliderTrackShape extends SliderTrackShape {}
export { RoundedRectSliderTrackShape };
class RectangularRangeSliderTrackShape extends RangeSliderTrackShape {}
export { RectangularRangeSliderTrackShape };
class RoundedRectRangeSliderTrackShape extends RangeSliderTrackShape {}
export { RoundedRectRangeSliderTrackShape };
class RoundSliderTickMarkShape extends SliderTickMarkShape {
  tickMarkRadius: number;
  public constructor(namedParameters: { tickMarkRadius?: number } = {}) {
    super();
    this.tickMarkRadius = namedParameters.tickMarkRadius;
    this.className = 'RoundSliderTickMarkShape';
  }
}
export { RoundSliderTickMarkShape };
class RoundRangeSliderTickMarkShape extends RangeSliderTickMarkShape {
  tickMarkRadius: number;
  public constructor(namedParameters: { tickMarkRadius?: number } = {}) {
    super();
    this.tickMarkRadius = namedParameters.tickMarkRadius;
    this.className = 'RoundRangeSliderTickMarkShape';
  }
}
export { RoundRangeSliderTickMarkShape };
class _EmptySliderTickMarkShape extends SliderTickMarkShape {}
export { _EmptySliderTickMarkShape };
class _EmptySliderComponentShape extends SliderComponentShape {}
export { _EmptySliderComponentShape };
class RoundSliderThumbShape extends SliderComponentShape {
  enabledThumbRadius: number;
  disabledThumbRadius: number;
  elevation: number;
  pressedElevation: number;
  public constructor(
    namedParameters: {
      enabledThumbRadius?: number;
      disabledThumbRadius?: number;
      elevation?: number;
      pressedElevation?: number;
    } = {},
  ) {
    super();
    this.enabledThumbRadius = namedParameters.enabledThumbRadius;
    this.disabledThumbRadius = namedParameters.disabledThumbRadius;
    this.elevation = namedParameters.elevation;
    this.pressedElevation = namedParameters.pressedElevation;
    this.className = 'RoundSliderThumbShape';
  }
}
export { RoundSliderThumbShape };
class RoundRangeSliderThumbShape extends RangeSliderThumbShape {
  enabledThumbRadius: number;
  disabledThumbRadius: number;
  elevation: number;
  pressedElevation: number;
  public constructor(
    namedParameters: {
      enabledThumbRadius?: number;
      disabledThumbRadius?: number;
      elevation?: number;
      pressedElevation?: number;
    } = {},
  ) {
    super();
    this.enabledThumbRadius = namedParameters.enabledThumbRadius;
    this.disabledThumbRadius = namedParameters.disabledThumbRadius;
    this.elevation = namedParameters.elevation;
    this.pressedElevation = namedParameters.pressedElevation;
    this.className = 'RoundRangeSliderThumbShape';
  }
}
export { RoundRangeSliderThumbShape };
class RoundSliderOverlayShape extends SliderComponentShape {
  overlayRadius: number;
  public constructor(namedParameters: { overlayRadius?: number } = {}) {
    super();
    this.overlayRadius = namedParameters.overlayRadius;
    this.className = 'RoundSliderOverlayShape';
  }
}
export { RoundSliderOverlayShape };
class RectangularSliderValueIndicatorShape extends SliderComponentShape {}
export { RectangularSliderValueIndicatorShape };
class RectangularRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {}
export { RectangularRangeSliderValueIndicatorShape };
class _RectangularSliderValueIndicatorPathPainter extends MXDartClass {}
export { _RectangularSliderValueIndicatorPathPainter };
class PaddleSliderValueIndicatorShape extends SliderComponentShape {}
export { PaddleSliderValueIndicatorShape };
class PaddleRangeSliderValueIndicatorShape extends RangeSliderValueIndicatorShape {}
export { PaddleRangeSliderValueIndicatorShape };
class _PaddleSliderValueIndicatorPathPainter extends MXDartClass {}
export { _PaddleSliderValueIndicatorPathPainter };
class RangeValues extends MXDartClass {
  start: number;
  end: number;
  public constructor(start?: number, end?: number) {
    super();
    this.start = start;
    this.end = end;
    this.className = 'RangeValues';
  }
}
export { RangeValues };
class RangeLabels extends MXDartClass {
  start: string;
  end: string;
  public constructor(start?: string, end?: string) {
    super();
    this.start = start;
    this.end = end;
    this.className = 'RangeLabels';
  }
}
export { RangeLabels };
