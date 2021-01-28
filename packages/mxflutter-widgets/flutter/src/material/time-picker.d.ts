import { FocusNode } from '../widgets/focus-manager';
import { TextEditingController } from '../widgets/editable-text';
import { TextStyle } from '../painting/text-style';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Tween } from '../animation/tween';
import { MaterialLocalizations } from './material-localizations';
import { ThemeData } from './theme-data';
import { CustomPainter } from '../rendering/custom-paint';
import { TextPainter } from '../painting/text-painter';
import { RenderBox } from '../rendering/box';
import { RenderShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { Size, Offset, Color, TextDirection } from '../../../mx-dart-sdk';
import { Orientation, MediaQueryData } from '../widgets/media-query';
import { StatelessWidget$, SingleChildRenderObjectWidget, StatefulWidget$, State$, GlobalKey } from '../widgets/framework';
import { TimeOfDay, TimeOfDayFormat } from './time';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum _TimePickerMode {
    hour = "{ \"_name\": \"_TimePickerMode.hour\", \"index\": 0 }",
    minute = "{ \"_name\": \"_TimePickerMode.minute\", \"index\": 1 }"
}
export { _TimePickerMode };
declare enum TimePickerEntryMode {
    dial = "{ \"_name\": \"TimePickerEntryMode.dial\", \"index\": 0 }",
    input = "{ \"_name\": \"TimePickerEntryMode.input\", \"index\": 1 }"
}
export { TimePickerEntryMode };
declare class _TimePickerFragmentContext extends MXDartClass {
    selectedTime: TimeOfDay;
    mode: _TimePickerMode;
    onTimeChange: any;
    onModeChange: any;
    use24HourDials: boolean;
    constructor(namedParameters?: {
        selectedTime?: TimeOfDay;
        mode?: _TimePickerMode;
        onTimeChange?: any;
        onModeChange?: any;
        use24HourDials?: boolean;
    });
}
export { _TimePickerFragmentContext };
declare class _TimePickerHeader extends StatelessWidget$ {
    selectedTime: TimeOfDay;
    mode: _TimePickerMode;
    orientation: Orientation;
    onModeChanged: any;
    onChanged: any;
    use24HourDials: boolean;
    helpText: string;
    constructor(namedParameters?: {
        selectedTime?: TimeOfDay;
        mode?: _TimePickerMode;
        orientation?: Orientation;
        onModeChanged?: any;
        onChanged?: any;
        use24HourDials?: boolean;
        helpText?: string;
    });
}
export { _TimePickerHeader };
declare class _HourMinuteControl extends StatelessWidget$ {
    text: string;
    onTap: any;
    isSelected: boolean;
    constructor(namedParameters?: {
        text?: string;
        onTap?: any;
        isSelected?: boolean;
    });
}
export { _HourMinuteControl };
declare class _HourControl extends StatelessWidget$ {
    fragmentContext: _TimePickerFragmentContext;
    constructor(namedParameters?: {
        fragmentContext?: _TimePickerFragmentContext;
    });
}
export { _HourControl };
declare class _StringFragment extends StatelessWidget$ {
    timeOfDayFormat: TimeOfDayFormat;
    constructor(namedParameters?: {
        timeOfDayFormat?: TimeOfDayFormat;
    });
}
export { _StringFragment };
declare class _MinuteControl extends StatelessWidget$ {
    fragmentContext: _TimePickerFragmentContext;
    constructor(namedParameters?: {
        fragmentContext?: _TimePickerFragmentContext;
    });
}
export { _MinuteControl };
declare class _DayPeriodControl extends StatelessWidget$ {
    selectedTime: TimeOfDay;
    orientation: Orientation;
    onChanged: any;
    constructor(namedParameters?: {
        selectedTime?: TimeOfDay;
        onChanged?: any;
        orientation?: Orientation;
    });
}
export { _DayPeriodControl };
declare class _DayPeriodInputPadding extends SingleChildRenderObjectWidget {
    minSize: Size;
    orientation: Orientation;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        minSize?: Size;
        orientation?: Orientation;
    });
}
export { _DayPeriodInputPadding };
declare class _RenderInputPadding extends RenderShiftedBox {
    orientation: Orientation;
    minSize: Size;
    constructor(_minSize?: Size, orientation?: Orientation, child?: RenderBox);
}
export { _RenderInputPadding };
declare class _TappableLabel extends MXDartClass {
    value: number;
    painter: TextPainter;
    onTap: any;
    constructor(namedParameters?: {
        value?: number;
        painter?: TextPainter;
        onTap?: any;
    });
}
export { _TappableLabel };
declare class _DialPainter extends CustomPainter {
    primaryLabels: Array<any>;
    secondaryLabels: Array<any>;
    backgroundColor: Color;
    accentColor: Color;
    dotColor: Color;
    theta: number;
    textDirection: TextDirection;
    selectedValue: number;
    constructor(namedParameters?: {
        primaryLabels?: Array<any>;
        secondaryLabels?: Array<any>;
        backgroundColor?: Color;
        accentColor?: Color;
        dotColor?: Color;
        theta?: number;
        textDirection?: TextDirection;
        selectedValue?: number;
    });
}
export { _DialPainter };
declare class _Dial extends StatefulWidget$ {
    selectedTime: TimeOfDay;
    mode: _TimePickerMode;
    use24HourDials: boolean;
    onChanged: any;
    onHourSelected: any;
    constructor(namedParameters?: {
        selectedTime?: TimeOfDay;
        mode?: _TimePickerMode;
        use24HourDials?: boolean;
        onChanged?: any;
        onHourSelected?: any;
    });
}
export { _Dial };
declare class _DialState extends State$ {
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
declare class _TimePickerInput extends StatefulWidget$ {
    initialSelectedTime: TimeOfDay;
    helpText: string;
    onChanged: any;
    constructor(namedParameters?: {
        key?: Key;
        initialSelectedTime?: TimeOfDay;
        helpText?: string;
        onChanged?: any;
    });
}
export { _TimePickerInput };
declare class _TimePickerInputState extends State$ {
    selectedTime: TimeOfDay;
    hourHasError: boolean;
    minuteHasError: boolean;
}
export { _TimePickerInputState };
declare class _HourTextField extends StatelessWidget$ {
    selectedTime: TimeOfDay;
    style: TextStyle;
    validator: any;
    onSavedSubmitted: any;
    onChanged: any;
    constructor(namedParameters?: {
        key?: Key;
        selectedTime?: TimeOfDay;
        style?: TextStyle;
        validator?: any;
        onSavedSubmitted?: any;
        onChanged?: any;
    });
}
export { _HourTextField };
declare class _MinuteTextField extends StatelessWidget$ {
    selectedTime: TimeOfDay;
    style: TextStyle;
    validator: any;
    onSavedSubmitted: any;
    constructor(namedParameters?: {
        key?: Key;
        selectedTime?: TimeOfDay;
        style?: TextStyle;
        validator?: any;
        onSavedSubmitted?: any;
    });
}
export { _MinuteTextField };
declare class _HourMinuteTextField extends StatefulWidget$ {
    selectedTime: TimeOfDay;
    isHour: boolean;
    style: TextStyle;
    validator: any;
    onSavedSubmitted: any;
    onChanged: any;
    constructor(namedParameters?: {
        key?: Key;
        selectedTime?: TimeOfDay;
        isHour?: boolean;
        style?: TextStyle;
        validator?: any;
        onSavedSubmitted?: any;
        onChanged?: any;
    });
}
export { _HourMinuteTextField };
declare class _HourMinuteTextFieldState extends State$ {
    controller: TextEditingController;
    focusNode: FocusNode;
}
export { _HourMinuteTextFieldState };
declare class _TimePickerDialog extends StatefulWidget$ {
    initialTime: TimeOfDay;
    initialEntryMode: TimePickerEntryMode;
    cancelText: string;
    confirmText: string;
    helpText: string;
    constructor(namedParameters?: {
        key?: Key;
        initialTime?: TimeOfDay;
        cancelText?: string;
        confirmText?: string;
        helpText?: string;
        initialEntryMode?: TimePickerEntryMode;
    });
}
export { _TimePickerDialog };
declare class _TimePickerDialogState extends State$ {
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
