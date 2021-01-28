//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { FocusNode } from '../widgets/focus-manager';
import { TextEditingController } from '../widgets/editable-text';
import { TextStyle } from '../painting/text-style';
import { TextTheme } from './text-theme';
import { TapUpDetails } from '../gestures/tap';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Tween } from '../animation/tween';
import { MaterialLocalizations } from './material-localizations';
import { ThemeData } from './theme-data';
import { CustomPainter } from '../rendering/custom-paint';
import { TextPainter } from '../painting/text-painter';
import { RenderBox, BoxHitTestResult } from '../rendering/box';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { Size, Offset, Color, TextDirection, Canvas } from '../../../mx-dart-sdk';
import { Orientation, MediaQueryData } from '../widgets/media-query';
import {
  StatelessWidget$,
  BuildContext$,
  SingleChildRenderObjectWidget,
  Widget,
  StatefulWidget$,
  State$,
  GlobalKey,
} from '../widgets/framework';
import { TimeOfDay, TimeOfDayFormat } from './time';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _TimePickerMode {
  hour = '{ "_name": "_TimePickerMode.hour", "index": 0 }',
  minute = '{ "_name": "_TimePickerMode.minute", "index": 1 }',
}

export { _TimePickerMode };
enum TimePickerEntryMode {
  dial = '{ "_name": "TimePickerEntryMode.dial", "index": 0 }',
  input = '{ "_name": "TimePickerEntryMode.input", "index": 1 }',
}

export { TimePickerEntryMode };
class _TimePickerFragmentContext extends MXDartClass {
  selectedTime: TimeOfDay;
  mode: _TimePickerMode;
  onTimeChange: any;
  onModeChange: any;
  use24HourDials: boolean;
  public constructor(
    namedParameters: {
      selectedTime?: TimeOfDay;
      mode?: _TimePickerMode;
      onTimeChange?: any;
      onModeChange?: any;
      use24HourDials?: boolean;
    } = {},
  ) {
    super();
    this.selectedTime = namedParameters.selectedTime;
    this.mode = namedParameters.mode;
    this.onTimeChange = namedParameters.onTimeChange;
    this.onModeChange = namedParameters.onModeChange;
    this.use24HourDials = namedParameters.use24HourDials;
    this.className = '_TimePickerFragmentContext';
  }
}
export { _TimePickerFragmentContext };
class _TimePickerHeader extends StatelessWidget$ {
  selectedTime: TimeOfDay;
  mode: _TimePickerMode;
  orientation: Orientation;
  onModeChanged: any;
  onChanged: any;
  use24HourDials: boolean;
  helpText: string;
  public constructor(
    namedParameters: {
      selectedTime?: TimeOfDay;
      mode?: _TimePickerMode;
      orientation?: Orientation;
      onModeChanged?: any;
      onChanged?: any;
      use24HourDials?: boolean;
      helpText?: string;
    } = {},
  ) {
    super();
    this.selectedTime = namedParameters.selectedTime;
    this.mode = namedParameters.mode;
    this.orientation = namedParameters.orientation;
    this.onModeChanged = namedParameters.onModeChanged;
    this.onChanged = namedParameters.onChanged;
    this.use24HourDials = namedParameters.use24HourDials;
    this.helpText = namedParameters.helpText;
    this.className = '_TimePickerHeader';
  }
}
export { _TimePickerHeader };
class _HourMinuteControl extends StatelessWidget$ {
  text: string;
  onTap: any;
  isSelected: boolean;
  public constructor(namedParameters: { text?: string; onTap?: any; isSelected?: boolean } = {}) {
    super();
    this.text = namedParameters.text;
    this.onTap = namedParameters.onTap;
    this.isSelected = namedParameters.isSelected;
    this.className = '_HourMinuteControl';
  }
}
export { _HourMinuteControl };
class _HourControl extends StatelessWidget$ {
  fragmentContext: _TimePickerFragmentContext;
  public constructor(namedParameters: { fragmentContext?: _TimePickerFragmentContext } = {}) {
    super();
    this.fragmentContext = namedParameters.fragmentContext;
    this.className = '_HourControl';
  }
}
export { _HourControl };
class _StringFragment extends StatelessWidget$ {
  timeOfDayFormat: TimeOfDayFormat;
  public constructor(namedParameters: { timeOfDayFormat?: TimeOfDayFormat } = {}) {
    super();
    this.timeOfDayFormat = namedParameters.timeOfDayFormat;
    this.className = '_StringFragment';
  }
}
export { _StringFragment };
class _MinuteControl extends StatelessWidget$ {
  fragmentContext: _TimePickerFragmentContext;
  public constructor(namedParameters: { fragmentContext?: _TimePickerFragmentContext } = {}) {
    super();
    this.fragmentContext = namedParameters.fragmentContext;
    this.className = '_MinuteControl';
  }
}
export { _MinuteControl };
class _DayPeriodControl extends StatelessWidget$ {
  selectedTime: TimeOfDay;
  orientation: Orientation;
  onChanged: any;
  public constructor(namedParameters: { selectedTime?: TimeOfDay; onChanged?: any; orientation?: Orientation } = {}) {
    super();
    this.selectedTime = namedParameters.selectedTime;
    this.onChanged = namedParameters.onChanged;
    this.orientation = namedParameters.orientation;
    this.className = '_DayPeriodControl';
  }
}
export { _DayPeriodControl };
class _DayPeriodInputPadding extends SingleChildRenderObjectWidget {
  minSize: Size;
  orientation: Orientation;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; minSize?: Size; orientation?: Orientation } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.minSize = namedParameters.minSize;
    this.orientation = namedParameters.orientation;
    this.className = '_DayPeriodInputPadding';
  }
}
export { _DayPeriodInputPadding };
class _RenderInputPadding extends RenderShiftedBox {
  orientation: Orientation;
  minSize: Size;
  public constructor(_minSize?: Size, orientation?: Orientation, child?: RenderBox) {
    super();
    this.minSize = _minSize;
    this.orientation = orientation;
    this['child'] = child;
    this.className = '_RenderInputPadding';
  }
}
export { _RenderInputPadding };
class _TappableLabel extends MXDartClass {
  value: number;
  painter: TextPainter;
  onTap: any;
  public constructor(namedParameters: { value?: number; painter?: TextPainter; onTap?: any } = {}) {
    super();
    this.value = namedParameters.value;
    this.painter = namedParameters.painter;
    this.onTap = namedParameters.onTap;
    this.className = '_TappableLabel';
  }
}
export { _TappableLabel };
class _DialPainter extends CustomPainter {
  primaryLabels: Array<any>;
  secondaryLabels: Array<any>;
  backgroundColor: Color;
  accentColor: Color;
  dotColor: Color;
  theta: number;
  textDirection: TextDirection;
  selectedValue: number;
  public constructor(
    namedParameters: {
      primaryLabels?: Array<any>;
      secondaryLabels?: Array<any>;
      backgroundColor?: Color;
      accentColor?: Color;
      dotColor?: Color;
      theta?: number;
      textDirection?: TextDirection;
      selectedValue?: number;
    } = {},
  ) {
    super();
    this.primaryLabels = namedParameters.primaryLabels;
    this.secondaryLabels = namedParameters.secondaryLabels;
    this.backgroundColor = namedParameters.backgroundColor;
    this.accentColor = namedParameters.accentColor;
    this.dotColor = namedParameters.dotColor;
    this.theta = namedParameters.theta;
    this.textDirection = namedParameters.textDirection;
    this.selectedValue = namedParameters.selectedValue;
    this.className = '_DialPainter';
  }
}
export { _DialPainter };
class _Dial extends StatefulWidget$ {
  selectedTime: TimeOfDay;
  mode: _TimePickerMode;
  use24HourDials: boolean;
  onChanged: any;
  onHourSelected: any;
  public constructor(
    namedParameters: {
      selectedTime?: TimeOfDay;
      mode?: _TimePickerMode;
      use24HourDials?: boolean;
      onChanged?: any;
      onHourSelected?: any;
    } = {},
  ) {
    super();
    this.selectedTime = namedParameters.selectedTime;
    this.mode = namedParameters.mode;
    this.use24HourDials = namedParameters.use24HourDials;
    this.onChanged = namedParameters.onChanged;
    this.onHourSelected = namedParameters.onHourSelected;
    this.className = '_Dial';
  }
}
export { _Dial };
class _DialState extends State$ {
  themeData: ThemeData;
  localizations: MaterialLocalizations;
  media: MediaQueryData;
  thetaTween: Tween;
  theta: Animation;
  thetaController: AnimationController;
  dragging: boolean;
  position: Offset;
  center: Offset;
}
export { _DialState };
class _TimePickerInput extends StatefulWidget$ {
  initialSelectedTime: TimeOfDay;
  helpText: string;
  onChanged: any;
  public constructor(
    namedParameters: { key?: Key; initialSelectedTime?: TimeOfDay; helpText?: string; onChanged?: any } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.initialSelectedTime = namedParameters.initialSelectedTime;
    this.helpText = namedParameters.helpText;
    this.onChanged = namedParameters.onChanged;
    this.className = '_TimePickerInput';
  }
}
export { _TimePickerInput };
class _TimePickerInputState extends State$ {
  selectedTime: TimeOfDay;
  hourHasError: boolean;
  minuteHasError: boolean;
}
export { _TimePickerInputState };
class _HourTextField extends StatelessWidget$ {
  selectedTime: TimeOfDay;
  style: TextStyle;
  validator: any;
  onSavedSubmitted: any;
  onChanged: any;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedTime?: TimeOfDay;
      style?: TextStyle;
      validator?: any;
      onSavedSubmitted?: any;
      onChanged?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selectedTime = namedParameters.selectedTime;
    this.style = namedParameters.style;
    this.validator = namedParameters.validator;
    this.onSavedSubmitted = namedParameters.onSavedSubmitted;
    this.onChanged = namedParameters.onChanged;
    this.className = '_HourTextField';
  }
}
export { _HourTextField };
class _MinuteTextField extends StatelessWidget$ {
  selectedTime: TimeOfDay;
  style: TextStyle;
  validator: any;
  onSavedSubmitted: any;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedTime?: TimeOfDay;
      style?: TextStyle;
      validator?: any;
      onSavedSubmitted?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selectedTime = namedParameters.selectedTime;
    this.style = namedParameters.style;
    this.validator = namedParameters.validator;
    this.onSavedSubmitted = namedParameters.onSavedSubmitted;
    this.className = '_MinuteTextField';
  }
}
export { _MinuteTextField };
class _HourMinuteTextField extends StatefulWidget$ {
  selectedTime: TimeOfDay;
  isHour: boolean;
  style: TextStyle;
  validator: any;
  onSavedSubmitted: any;
  onChanged: any;
  public constructor(
    namedParameters: {
      key?: Key;
      selectedTime?: TimeOfDay;
      isHour?: boolean;
      style?: TextStyle;
      validator?: any;
      onSavedSubmitted?: any;
      onChanged?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selectedTime = namedParameters.selectedTime;
    this.isHour = namedParameters.isHour;
    this.style = namedParameters.style;
    this.validator = namedParameters.validator;
    this.onSavedSubmitted = namedParameters.onSavedSubmitted;
    this.onChanged = namedParameters.onChanged;
    this.className = '_HourMinuteTextField';
  }
}
export { _HourMinuteTextField };
class _HourMinuteTextFieldState extends State$ {
  controller: TextEditingController;
  focusNode: FocusNode;
}
export { _HourMinuteTextFieldState };
class _TimePickerDialog extends StatefulWidget$ {
  initialTime: TimeOfDay;
  initialEntryMode: TimePickerEntryMode;
  cancelText: string;
  confirmText: string;
  helpText: string;
  public constructor(
    namedParameters: {
      key?: Key;
      initialTime?: TimeOfDay;
      cancelText?: string;
      confirmText?: string;
      helpText?: string;
      initialEntryMode?: TimePickerEntryMode;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.initialTime = namedParameters.initialTime;
    this.cancelText = namedParameters.cancelText;
    this.confirmText = namedParameters.confirmText;
    this.helpText = namedParameters.helpText;
    this.initialEntryMode = namedParameters.initialEntryMode;
    this.className = '_TimePickerDialog';
  }
}
export { _TimePickerDialog };
class _TimePickerDialogState extends State$ {
  formKey: GlobalKey;
  entryMode: TimePickerEntryMode;
  mode: _TimePickerMode;
  lastModeAnnounced: _TimePickerMode;
  autoValidate: boolean;
  selectedTime: TimeOfDay;
  vibrateTimer: any;
  localizations: MaterialLocalizations;
  announcedInitialTime: boolean;
}
export { _TimePickerDialogState };
