import { Matrix4 } from '../../../vector-math-64';
import { TextAlignVertical } from '../painting/alignment';
import { RenderBox, BoxConstraints } from '../rendering/box';
import { VisualDensity } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { TextStyle } from '../painting/text-style';
import { AnimatedWidget } from '../widgets/transitions';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { StatefulWidget, State, RenderObjectElement, RenderObjectWidget, StatelessWidget } from '../widgets/framework';
import { TextDirection, Color, TextAlign, TextBaseline } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { CustomPainter } from '../rendering/custom-paint';
import { InputBorder } from './input-border';
import { Tween, ColorTween } from '../animation/tween';
import { ChangeNotifier, Listenable } from '../foundation/change-notifier';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _InputBorderGap extends ChangeNotifier {
    start: number;
    extent: number;
}
export { _InputBorderGap };
declare class _InputBorderTween extends Tween {
    constructor(namedParameters?: {
        begin?: InputBorder;
        end?: InputBorder;
    });
}
export { _InputBorderTween };
declare class _InputBorderPainter extends CustomPainter {
    borderAnimation: Animation;
    border: _InputBorderTween;
    gapAnimation: Animation;
    gap: _InputBorderGap;
    textDirection: TextDirection;
    fillColor: Color;
    hoverColorTween: ColorTween;
    hoverAnimation: Animation;
    constructor(namedParameters?: {
        repaint?: Listenable;
        borderAnimation?: Animation;
        border?: _InputBorderTween;
        gapAnimation?: Animation;
        gap?: _InputBorderGap;
        textDirection?: TextDirection;
        fillColor?: Color;
        hoverAnimation?: Animation;
        hoverColorTween?: ColorTween;
    });
}
export { _InputBorderPainter };
declare class _BorderContainer extends StatefulWidget {
    border: InputBorder;
    gap: _InputBorderGap;
    gapAnimation: Animation;
    fillColor: Color;
    hoverColor: Color;
    isHovering: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        border?: InputBorder;
        gap?: _InputBorderGap;
        gapAnimation?: Animation;
        fillColor?: Color;
        hoverColor?: Color;
        isHovering?: boolean;
        child?: MXWidget;
    });
}
export { _BorderContainer };
declare class _BorderContainerState extends State {
    controller: AnimationController;
    hoverColorController: AnimationController;
    borderAnimation: Animation;
    border: _InputBorderTween;
    hoverAnimation: Animation;
    hoverColorTween: ColorTween;
}
export { _BorderContainerState };
declare class _Shaker extends AnimatedWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        child?: MXWidget;
    });
}
export { _Shaker };
declare class _HelperError extends StatefulWidget {
    textAlign: TextAlign;
    helperText: string;
    helperStyle: TextStyle;
    helperMaxLines: number;
    errorText: string;
    errorStyle: TextStyle;
    errorMaxLines: number;
    constructor(namedParameters?: {
        key?: Key;
        textAlign?: TextAlign;
        helperText?: string;
        helperStyle?: TextStyle;
        helperMaxLines?: number;
        errorText?: string;
        errorStyle?: TextStyle;
        errorMaxLines?: number;
    });
}
export { _HelperError };
declare class _HelperErrorState extends State {
    controller: AnimationController;
    helper: MXWidget;
    error: MXWidget;
    static get empty(): {
        key: Key;
        readonly pathComponent: string;
        preBuild(buildContext: any): void;
        className: string;
        mirrorID: string;
    };
}
export { _HelperErrorState };
declare enum FloatingLabelBehavior {
    never = "{ \"_name\": \"FloatingLabelBehavior.never\", \"index\": 0 }",
    auto = "{ \"_name\": \"FloatingLabelBehavior.auto\", \"index\": 1 }",
    always = "{ \"_name\": \"FloatingLabelBehavior.always\", \"index\": 2 }"
}
export { FloatingLabelBehavior };
declare enum _DecorationSlot {
    icon = "{ \"_name\": \"_DecorationSlot.icon\", \"index\": 0 }",
    input = "{ \"_name\": \"_DecorationSlot.input\", \"index\": 1 }",
    label = "{ \"_name\": \"_DecorationSlot.label\", \"index\": 2 }",
    hint = "{ \"_name\": \"_DecorationSlot.hint\", \"index\": 3 }",
    prefix = "{ \"_name\": \"_DecorationSlot.prefix\", \"index\": 4 }",
    suffix = "{ \"_name\": \"_DecorationSlot.suffix\", \"index\": 5 }",
    prefixIcon = "{ \"_name\": \"_DecorationSlot.prefixIcon\", \"index\": 6 }",
    suffixIcon = "{ \"_name\": \"_DecorationSlot.suffixIcon\", \"index\": 7 }",
    helperError = "{ \"_name\": \"_DecorationSlot.helperError\", \"index\": 8 }",
    counter = "{ \"_name\": \"_DecorationSlot.counter\", \"index\": 9 }",
    container = "{ \"_name\": \"_DecorationSlot.container\", \"index\": 10 }"
}
export { _DecorationSlot };
declare class _Decoration extends MXDartClass {
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
    constructor(namedParameters?: {
        contentPadding?: EdgeInsetsGeometry;
        isCollapsed?: boolean;
        floatingLabelHeight?: number;
        floatingLabelProgress?: number;
        border?: InputBorder;
        borderGap?: _InputBorderGap;
        alignLabelWithHint?: boolean;
        isDense?: boolean;
        visualDensity?: VisualDensity;
        icon?: MXWidget;
        input?: MXWidget;
        label?: MXWidget;
        hint?: MXWidget;
        prefix?: MXWidget;
        suffix?: MXWidget;
        prefixIcon?: MXWidget;
        suffixIcon?: MXWidget;
        helperError?: MXWidget;
        counter?: MXWidget;
        container?: MXWidget;
        fixTextFieldOutlineLabel?: boolean;
    });
}
export { _Decoration };
declare class _RenderDecorationLayout extends MXDartClass {
    boxToBaseline: Map<any, any>;
    inputBaseline: number;
    outlineBaseline: number;
    subtextBaseline: number;
    containerHeight: number;
    subtextHeight: number;
    constructor(namedParameters?: {
        boxToBaseline?: Map<any, any>;
        inputBaseline?: number;
        outlineBaseline?: number;
        subtextBaseline?: number;
        containerHeight?: number;
        subtextHeight?: number;
    });
}
export { _RenderDecorationLayout };
declare class _RenderDecoration extends RenderBox {
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
    constructor(namedParameters?: {
        decoration?: _Decoration;
        textDirection?: TextDirection;
        textBaseline?: TextBaseline;
        isFocused?: boolean;
        expands?: boolean;
        textAlignVertical?: TextAlignVertical;
    });
    static get subtextGap(): number;
}
export { _RenderDecoration };
declare class _DecorationElement extends RenderObjectElement {
    slotToChild: Map<any, any>;
    constructor(widget?: _Decorator);
}
export { _DecorationElement };
declare class _Decorator extends RenderObjectWidget {
    decoration: _Decoration;
    textDirection: TextDirection;
    textBaseline: TextBaseline;
    textAlignVertical: TextAlignVertical;
    isFocused: boolean;
    expands: boolean;
    constructor(namedParameters?: {
        key?: Key;
        textAlignVertical?: TextAlignVertical;
        decoration?: _Decoration;
        textDirection?: TextDirection;
        textBaseline?: TextBaseline;
        isFocused?: boolean;
        expands?: boolean;
    });
}
export { _Decorator };
declare class _AffixText extends StatelessWidget {
    labelIsFloating: boolean;
    text: string;
    style: TextStyle;
    child: MXWidget;
    constructor(namedParameters?: {
        labelIsFloating?: boolean;
        text?: string;
        style?: TextStyle;
        child?: MXWidget;
    });
}
export { _AffixText };
declare class InputDecorator extends StatefulWidget {
    decoration: InputDecoration;
    baseStyle: TextStyle;
    textAlign: TextAlign;
    textAlignVertical: TextAlignVertical;
    isFocused: boolean;
    isHovering: boolean;
    expands: boolean;
    isEmpty: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        decoration?: InputDecoration;
        baseStyle?: TextStyle;
        textAlign?: TextAlign;
        textAlignVertical?: TextAlignVertical;
        isFocused?: boolean;
        isHovering?: boolean;
        expands?: boolean;
        isEmpty?: boolean;
        child?: MXWidget;
    });
}
export { InputDecorator };
declare class _InputDecoratorState extends State {
    floatingLabelController: AnimationController;
    shakingLabelController: AnimationController;
    borderGap: _InputBorderGap;
    effectiveDecoration: InputDecoration;
}
export { _InputDecoratorState };
declare class InputDecoration extends MXDartClass {
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
    constructor(namedParameters?: {
        icon?: MXWidget;
        labelText?: string;
        labelStyle?: TextStyle;
        helperText?: string;
        helperStyle?: TextStyle;
        helperMaxLines?: number;
        hintText?: string;
        hintStyle?: TextStyle;
        hintMaxLines?: number;
        errorText?: string;
        errorStyle?: TextStyle;
        errorMaxLines?: number;
        hasFloatingPlaceholder?: boolean;
        floatingLabelBehavior?: FloatingLabelBehavior;
        isCollapsed?: boolean;
        isDense?: boolean;
        contentPadding?: EdgeInsetsGeometry;
        prefixIcon?: MXWidget;
        prefixIconConstraints?: BoxConstraints;
        prefix?: MXWidget;
        prefixText?: string;
        prefixStyle?: TextStyle;
        suffixIcon?: MXWidget;
        suffix?: MXWidget;
        suffixText?: string;
        suffixStyle?: TextStyle;
        suffixIconConstraints?: BoxConstraints;
        counter?: MXWidget;
        counterText?: string;
        counterStyle?: TextStyle;
        filled?: boolean;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        errorBorder?: InputBorder;
        focusedBorder?: InputBorder;
        focusedErrorBorder?: InputBorder;
        disabledBorder?: InputBorder;
        enabledBorder?: InputBorder;
        border?: InputBorder;
        enabled?: boolean;
        semanticCounterText?: string;
        alignLabelWithHint?: boolean;
    });
    static collapsed(namedParameters?: {
        hintText?: string;
        hasFloatingPlaceholder?: boolean;
        floatingLabelBehavior?: FloatingLabelBehavior;
        hintStyle?: TextStyle;
        filled?: boolean;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        border?: InputBorder;
        enabled?: boolean;
    }): InputDecoration;
}
export { InputDecoration };
declare class InputDecorationTheme extends MXDartClass {
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
    constructor(namedParameters?: {
        labelStyle?: TextStyle;
        helperStyle?: TextStyle;
        helperMaxLines?: number;
        hintStyle?: TextStyle;
        errorStyle?: TextStyle;
        errorMaxLines?: number;
        hasFloatingPlaceholder?: boolean;
        floatingLabelBehavior?: FloatingLabelBehavior;
        isDense?: boolean;
        contentPadding?: EdgeInsetsGeometry;
        isCollapsed?: boolean;
        prefixStyle?: TextStyle;
        suffixStyle?: TextStyle;
        counterStyle?: TextStyle;
        filled?: boolean;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        errorBorder?: InputBorder;
        focusedBorder?: InputBorder;
        focusedErrorBorder?: InputBorder;
        disabledBorder?: InputBorder;
        enabledBorder?: InputBorder;
        border?: InputBorder;
        alignLabelWithHint?: boolean;
    });
}
export { InputDecorationTheme };
