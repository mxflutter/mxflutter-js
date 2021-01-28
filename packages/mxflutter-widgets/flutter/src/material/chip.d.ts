import { InteractiveInkFeatureFactory } from './ink-well';
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { Duration } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { FocusNode } from '../widgets/focus-manager';
import { Clip, Color, Brightness, Rect, TextDirection } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry, EdgeInsets } from '../painting/edge-insets';
import { TextStyle } from '../painting/text-style';
import { StatelessWidget$, BuildContext$, StatefulWidget$, State$, GlobalKey, SingleChildRenderObjectWidget, RenderObjectWidget, RenderObjectElement } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class ChipAttributes extends MXDartClass {
}
export { ChipAttributes };
declare abstract class DeletableChipAttributes extends MXDartClass {
}
export { DeletableChipAttributes };
declare abstract class CheckmarkableChipAttributes extends MXDartClass {
}
export { CheckmarkableChipAttributes };
declare abstract class SelectableChipAttributes extends MXDartClass {
}
export { SelectableChipAttributes };
declare abstract class DisabledChipAttributes extends MXDartClass {
}
export { DisabledChipAttributes };
declare abstract class TappableChipAttributes extends MXDartClass {
}
export { TappableChipAttributes };
declare class Chip extends StatelessWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { Chip };
declare class InputChip extends StatelessWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { InputChip };
declare class ChoiceChip extends StatelessWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { ChoiceChip };
declare class FilterChip extends StatelessWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { FilterChip };
declare class ActionChip extends StatelessWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { ActionChip };
declare class RawChip extends StatefulWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { RawChip };
declare class _RawChipState extends State$ {
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
    static get pressedAnimationDuration(): Duration;
}
export { _RawChipState };
declare class _ChipRedirectingHitDetectionWidget extends SingleChildRenderObjectWidget {
    constraints: BoxConstraints;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        constraints?: BoxConstraints;
    });
}
export { _ChipRedirectingHitDetectionWidget };
declare class _RenderChipRedirectingHitDetection extends RenderConstrainedBox {
    constructor(additionalConstraints?: BoxConstraints);
}
export { _RenderChipRedirectingHitDetection };
declare class _ChipRenderWidget extends RenderObjectWidget {
    theme: _ChipRenderTheme;
    value: boolean;
    isEnabled: boolean;
    checkmarkAnimation: Animation;
    avatarDrawerAnimation: Animation;
    deleteDrawerAnimation: Animation;
    enableAnimation: Animation;
    avatarBorder: ShapeBorder;
    constructor(namedParameters?: {
        key?: Key;
        theme?: _ChipRenderTheme;
        value?: boolean;
        isEnabled?: boolean;
        checkmarkAnimation?: Animation;
        avatarDrawerAnimation?: Animation;
        deleteDrawerAnimation?: Animation;
        enableAnimation?: Animation;
        avatarBorder?: ShapeBorder;
    });
}
export { _ChipRenderWidget };
declare enum _ChipSlot {
    label = "{ \"_name\": \"_ChipSlot.label\", \"index\": 0 }",
    avatar = "{ \"_name\": \"_ChipSlot.avatar\", \"index\": 1 }",
    deleteIcon = "{ \"_name\": \"_ChipSlot.deleteIcon\", \"index\": 2 }"
}
export { _ChipSlot };
declare class _RenderChipElement extends RenderObjectElement {
    slotToChild: Map<any, any>;
    childToSlot: Map<any, any>;
    constructor(chip?: _ChipRenderWidget);
}
export { _RenderChipElement };
declare class _ChipRenderTheme extends MXDartClass {
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
    constructor(namedParameters?: {
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
    });
}
export { _ChipRenderTheme };
declare class _RenderChip extends RenderBox {
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
    constructor(namedParameters?: {
        theme?: _ChipRenderTheme;
        textDirection?: TextDirection;
        value?: boolean;
        isEnabled?: boolean;
        checkmarkAnimation?: Animation;
        avatarDrawerAnimation?: Animation;
        deleteDrawerAnimation?: Animation;
        enableAnimation?: Animation;
        avatarBorder?: ShapeBorder;
    });
}
export { _RenderChip };
declare class _LocationAwareInkRippleFactory extends InteractiveInkFeatureFactory {
    hasDeleteButton: boolean;
    chipContext: BuildContext$;
    deleteIconKey: GlobalKey;
    constructor(hasDeleteButton?: boolean, chipContext?: BuildContext$, deleteIconKey?: GlobalKey);
}
export { _LocationAwareInkRippleFactory };
