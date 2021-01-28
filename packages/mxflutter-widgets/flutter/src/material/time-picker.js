//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { StatelessWidget$, SingleChildRenderObjectWidget, StatefulWidget$, State$, } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var _TimePickerMode;
(function (_TimePickerMode) {
    _TimePickerMode["hour"] = "{ \"_name\": \"_TimePickerMode.hour\", \"index\": 0 }";
    _TimePickerMode["minute"] = "{ \"_name\": \"_TimePickerMode.minute\", \"index\": 1 }";
})(_TimePickerMode || (_TimePickerMode = {}));
export { _TimePickerMode };
var TimePickerEntryMode;
(function (TimePickerEntryMode) {
    TimePickerEntryMode["dial"] = "{ \"_name\": \"TimePickerEntryMode.dial\", \"index\": 0 }";
    TimePickerEntryMode["input"] = "{ \"_name\": \"TimePickerEntryMode.input\", \"index\": 1 }";
})(TimePickerEntryMode || (TimePickerEntryMode = {}));
export { TimePickerEntryMode };
class _TimePickerFragmentContext extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.text = namedParameters.text;
        this.onTap = namedParameters.onTap;
        this.isSelected = namedParameters.isSelected;
        this.className = '_HourMinuteControl';
    }
}
export { _HourMinuteControl };
class _HourControl extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.fragmentContext = namedParameters.fragmentContext;
        this.className = '_HourControl';
    }
}
export { _HourControl };
class _StringFragment extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.timeOfDayFormat = namedParameters.timeOfDayFormat;
        this.className = '_StringFragment';
    }
}
export { _StringFragment };
class _MinuteControl extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.fragmentContext = namedParameters.fragmentContext;
        this.className = '_MinuteControl';
    }
}
export { _MinuteControl };
class _DayPeriodControl extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.selectedTime = namedParameters.selectedTime;
        this.onChanged = namedParameters.onChanged;
        this.orientation = namedParameters.orientation;
        this.className = '_DayPeriodControl';
    }
}
export { _DayPeriodControl };
class _DayPeriodInputPadding extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
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
    constructor(_minSize, orientation, child) {
        super();
        this.minSize = _minSize;
        this.orientation = orientation;
        this['child'] = child;
        this.className = '_RenderInputPadding';
    }
}
export { _RenderInputPadding };
class _TappableLabel extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.painter = namedParameters.painter;
        this.onTap = namedParameters.onTap;
        this.className = '_TappableLabel';
    }
}
export { _TappableLabel };
class _DialPainter extends CustomPainter {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { _DialState };
class _TimePickerInput extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { _TimePickerInputState };
class _HourTextField extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
}
export { _HourMinuteTextFieldState };
class _TimePickerDialog extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { _TimePickerDialogState };
