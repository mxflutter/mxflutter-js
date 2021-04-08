"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TimePickerDialogState = exports._TimePickerDialog = exports._HourMinuteTextFieldState = exports._HourMinuteTextField = exports._MinuteTextField = exports._HourTextField = exports._TimePickerInputState = exports._TimePickerInput = exports._DialState = exports._Dial = exports._DialPainter = exports._TappableLabel = exports._RenderInputPadding = exports._DayPeriodInputPadding = exports._DayPeriodControl = exports._MinuteControl = exports._StringFragment = exports._HourControl = exports._HourMinuteControl = exports._TimePickerHeader = exports._TimePickerFragmentContext = exports.TimePickerEntryMode = exports._TimePickerMode = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const shifted_box_1 = require("../rendering/shifted-box");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var _TimePickerMode;
(function (_TimePickerMode) {
    _TimePickerMode["hour"] = "{ \"_name\": \"_TimePickerMode.hour\", \"index\": 0 }";
    _TimePickerMode["minute"] = "{ \"_name\": \"_TimePickerMode.minute\", \"index\": 1 }";
})(_TimePickerMode || (_TimePickerMode = {}));
exports._TimePickerMode = _TimePickerMode;
;
var TimePickerEntryMode;
(function (TimePickerEntryMode) {
    TimePickerEntryMode["dial"] = "{ \"_name\": \"TimePickerEntryMode.dial\", \"index\": 0 }";
    TimePickerEntryMode["input"] = "{ \"_name\": \"TimePickerEntryMode.input\", \"index\": 1 }";
})(TimePickerEntryMode || (TimePickerEntryMode = {}));
exports.TimePickerEntryMode = TimePickerEntryMode;
;
class _TimePickerFragmentContext extends mxflutter_base_1.MXDartClass {
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
exports._TimePickerFragmentContext = _TimePickerFragmentContext;
class _TimePickerHeader extends framework_1.StatelessWidget {
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
exports._TimePickerHeader = _TimePickerHeader;
class _HourMinuteControl extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.text = namedParameters.text;
        this.onTap = namedParameters.onTap;
        this.isSelected = namedParameters.isSelected;
        this.className = '_HourMinuteControl';
    }
}
exports._HourMinuteControl = _HourMinuteControl;
class _HourControl extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.fragmentContext = namedParameters.fragmentContext;
        this.className = '_HourControl';
    }
}
exports._HourControl = _HourControl;
class _StringFragment extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.timeOfDayFormat = namedParameters.timeOfDayFormat;
        this.className = '_StringFragment';
    }
}
exports._StringFragment = _StringFragment;
class _MinuteControl extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.fragmentContext = namedParameters.fragmentContext;
        this.className = '_MinuteControl';
    }
}
exports._MinuteControl = _MinuteControl;
class _DayPeriodControl extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.selectedTime = namedParameters.selectedTime;
        this.onChanged = namedParameters.onChanged;
        this.orientation = namedParameters.orientation;
        this.className = '_DayPeriodControl';
    }
}
exports._DayPeriodControl = _DayPeriodControl;
class _DayPeriodInputPadding extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.minSize = namedParameters.minSize;
        this.orientation = namedParameters.orientation;
        this.className = '_DayPeriodInputPadding';
    }
}
exports._DayPeriodInputPadding = _DayPeriodInputPadding;
class _RenderInputPadding extends shifted_box_1.RenderShiftedBox {
    constructor(_minSize, orientation, child) {
        super();
        this.minSize = _minSize;
        this.orientation = orientation;
        this['child'] = child;
        this.className = '_RenderInputPadding';
    }
}
exports._RenderInputPadding = _RenderInputPadding;
class _TappableLabel extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.painter = namedParameters.painter;
        this.onTap = namedParameters.onTap;
        this.className = '_TappableLabel';
    }
}
exports._TappableLabel = _TappableLabel;
class _DialPainter extends custom_paint_1.CustomPainter {
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
exports._DialPainter = _DialPainter;
class _Dial extends framework_1.StatefulWidget {
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
exports._Dial = _Dial;
class _DialState extends framework_1.State {
}
exports._DialState = _DialState;
class _TimePickerInput extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialSelectedTime = namedParameters.initialSelectedTime;
        this.helpText = namedParameters.helpText;
        this.onChanged = namedParameters.onChanged;
        this.className = '_TimePickerInput';
    }
}
exports._TimePickerInput = _TimePickerInput;
class _TimePickerInputState extends framework_1.State {
}
exports._TimePickerInputState = _TimePickerInputState;
class _HourTextField extends framework_1.StatelessWidget {
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
exports._HourTextField = _HourTextField;
class _MinuteTextField extends framework_1.StatelessWidget {
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
exports._MinuteTextField = _MinuteTextField;
class _HourMinuteTextField extends framework_1.StatefulWidget {
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
exports._HourMinuteTextField = _HourMinuteTextField;
class _HourMinuteTextFieldState extends framework_1.State {
}
exports._HourMinuteTextFieldState = _HourMinuteTextFieldState;
class _TimePickerDialog extends framework_1.StatefulWidget {
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
exports._TimePickerDialog = _TimePickerDialog;
class _TimePickerDialogState extends framework_1.State {
}
exports._TimePickerDialogState = _TimePickerDialogState;
