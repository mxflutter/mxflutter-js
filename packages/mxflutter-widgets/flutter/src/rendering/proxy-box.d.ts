import { LayerLink } from './layer';
import { MouseCursor } from './mouse-cursor';
import { BoxFit } from '../painting/box-fit';
import { AlignmentGeometry, Alignment } from '../painting/alignment';
import { ImageConfiguration } from '../painting/image-provider';
import { BoxPainter, Decoration } from '../painting/decoration';
import { BoxShape } from '../painting/box-border';
import { SemanticsHintOverrides, SemanticsSortKey } from '../semantics/semantics';
import { BorderRadius } from '../painting/border-radius';
import { TextPainter } from '../painting/text-painter';
import { ShapeBorder } from '../painting/borders';
import { Listenable } from '../foundation/change-notifier';
import { Animation } from '../animation/animation';
import { Matrix4 } from '../../../vector-math-64';
import { Offset, BlendMode, ImageFilter, TextDirection, Clip, Paint, Rect, Path, Color } from '../../../mx-dart-sdk';
import { RenderObjectWithChildMixin } from './object';
import { RenderBox, BoxConstraints } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class RenderProxyBox extends RenderBox {
    constructor(child?: RenderBox);
}
export { RenderProxyBox };
declare abstract class RenderProxyBoxMixin extends MXDartClass {
}
export { RenderProxyBoxMixin };
declare enum HitTestBehavior {
    deferToChild = "{ \"_name\": \"HitTestBehavior.deferToChild\", \"index\": 0 }",
    opaque = "{ \"_name\": \"HitTestBehavior.opaque\", \"index\": 1 }",
    translucent = "{ \"_name\": \"HitTestBehavior.translucent\", \"index\": 2 }"
}
export { HitTestBehavior };
declare abstract class RenderProxyBoxWithHitTestBehavior extends RenderProxyBox {
    behavior: HitTestBehavior;
}
export { RenderProxyBoxWithHitTestBehavior };
declare class RenderConstrainedBox extends RenderProxyBox {
    additionalConstraints: BoxConstraints;
    constructor(namedParameters?: {
        child?: RenderBox;
        additionalConstraints?: BoxConstraints;
    });
}
export { RenderConstrainedBox };
declare class RenderLimitedBox extends RenderProxyBox {
    maxWidth: number;
    maxHeight: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        maxWidth?: number;
        maxHeight?: number;
    });
}
export { RenderLimitedBox };
declare class RenderAspectRatio extends RenderProxyBox {
    aspectRatio: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        aspectRatio?: number;
    });
}
export { RenderAspectRatio };
declare class RenderIntrinsicWidth extends RenderProxyBox {
    stepWidth: number;
    stepHeight: number;
    constructor(namedParameters?: {
        stepWidth?: number;
        stepHeight?: number;
        child?: RenderBox;
    });
}
export { RenderIntrinsicWidth };
declare class RenderIntrinsicHeight extends RenderProxyBox {
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderIntrinsicHeight };
declare class RenderOpacity extends RenderProxyBox {
    alpha: number;
    opacity: number;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        opacity?: number;
        alwaysIncludeSemantics?: boolean;
        child?: RenderBox;
    });
}
export { RenderOpacity };
declare abstract class RenderAnimatedOpacityMixin extends RenderObjectWithChildMixin {
    alpha: number;
    currentlyNeedsCompositing: boolean;
    opacity: Animation;
    alwaysIncludeSemantics: boolean;
}
export { RenderAnimatedOpacityMixin };
declare class RenderAnimatedOpacity extends RenderProxyBox {
    constructor(namedParameters?: {
        opacity?: Animation;
        alwaysIncludeSemantics?: boolean;
        child?: RenderBox;
    });
}
export { RenderAnimatedOpacity };
declare class RenderShaderMask extends RenderProxyBox {
    shaderCallback: any;
    blendMode: BlendMode;
    constructor(namedParameters?: {
        child?: RenderBox;
        shaderCallback?: any;
        blendMode?: BlendMode;
    });
}
export { RenderShaderMask };
declare class RenderBackdropFilter extends RenderProxyBox {
    filter: ImageFilter;
    constructor(namedParameters?: {
        child?: RenderBox;
        filter?: ImageFilter;
    });
}
export { RenderBackdropFilter };
declare abstract class CustomClipper extends Listenable {
    reclip: Listenable;
}
export { CustomClipper };
declare class ShapeBorderClipper extends CustomClipper {
    shape: ShapeBorder;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        shape?: ShapeBorder;
        textDirection?: TextDirection;
    });
}
export { ShapeBorderClipper };
declare abstract class _RenderCustomClip extends RenderProxyBox {
    clipper: CustomClipper;
    clip: any;
    clipBehavior: Clip;
    debugPaint: Paint;
    debugText: TextPainter;
}
export { _RenderCustomClip };
declare class RenderClipRect extends _RenderCustomClip {
    constructor(namedParameters?: {
        child?: RenderBox;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
    });
}
export { RenderClipRect };
declare class RenderClipRRect extends _RenderCustomClip {
    borderRadius: BorderRadius;
    constructor(namedParameters?: {
        child?: RenderBox;
        borderRadius?: BorderRadius;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
    });
}
export { RenderClipRRect };
declare class RenderClipOval extends _RenderCustomClip {
    cachedRect: Rect;
    cachedPath: Path;
    constructor(namedParameters?: {
        child?: RenderBox;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
    });
}
export { RenderClipOval };
declare class RenderClipPath extends _RenderCustomClip {
    constructor(namedParameters?: {
        child?: RenderBox;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
    });
}
export { RenderClipPath };
declare abstract class _RenderPhysicalModelBase extends _RenderCustomClip {
    elevation: number;
    shadowColor: Color;
    color: Color;
}
export { _RenderPhysicalModelBase };
declare class RenderPhysicalModel extends _RenderPhysicalModelBase {
    shape: BoxShape;
    borderRadius: BorderRadius;
    constructor(namedParameters?: {
        child?: RenderBox;
        shape?: BoxShape;
        clipBehavior?: Clip;
        borderRadius?: BorderRadius;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
    });
}
export { RenderPhysicalModel };
declare class RenderPhysicalShape extends _RenderPhysicalModelBase {
    constructor(namedParameters?: {
        child?: RenderBox;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
    });
}
export { RenderPhysicalShape };
declare enum DecorationPosition {
    background = "{ \"_name\": \"DecorationPosition.background\", \"index\": 0 }",
    foreground = "{ \"_name\": \"DecorationPosition.foreground\", \"index\": 1 }"
}
export { DecorationPosition };
declare class RenderDecoratedBox extends RenderProxyBox {
    painter: BoxPainter;
    decoration: Decoration;
    position: DecorationPosition;
    configuration: ImageConfiguration;
    constructor(namedParameters?: {
        decoration?: Decoration;
        position?: DecorationPosition;
        configuration?: ImageConfiguration;
        child?: RenderBox;
    });
}
export { RenderDecoratedBox };
declare class RenderTransform extends RenderProxyBox {
    origin: Offset;
    alignment: AlignmentGeometry;
    textDirection: TextDirection;
    transformHitTests: boolean;
    transform: Matrix4;
    constructor(namedParameters?: {
        transform?: Matrix4;
        origin?: Offset;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        transformHitTests?: boolean;
        child?: RenderBox;
    });
}
export { RenderTransform };
declare class RenderFittedBox extends RenderProxyBox {
    resolvedAlignment: Alignment;
    fit: BoxFit;
    alignment: AlignmentGeometry;
    textDirection: TextDirection;
    hasVisualOverflow: boolean;
    transform: Matrix4;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        child?: RenderBox;
        clipBehavior?: Clip;
    });
}
export { RenderFittedBox };
declare class RenderFractionalTranslation extends RenderProxyBox {
    translation: Offset;
    transformHitTests: boolean;
    constructor(namedParameters?: {
        translation?: Offset;
        transformHitTests?: boolean;
        child?: RenderBox;
    });
}
export { RenderFractionalTranslation };
declare class RenderPointerListener extends RenderProxyBoxWithHitTestBehavior {
    onPointerDown: any;
    onPointerMove: any;
    onPointerUp: any;
    onPointerCancel: any;
    onPointerSignal: any;
    constructor(namedParameters?: {
        onPointerDown?: any;
        onPointerMove?: any;
        onPointerUp?: any;
        onPointerCancel?: any;
        onPointerSignal?: any;
        behavior?: HitTestBehavior;
        child?: RenderBox;
    });
}
export { RenderPointerListener };
declare class RenderMouseRegion extends RenderProxyBox {
    opaque: boolean;
    onEnter: any;
    onHover: any;
    onExit: any;
    cursor: MouseCursor;
    annotationIsActive: boolean;
    constructor(namedParameters?: {
        onEnter?: any;
        onHover?: any;
        onExit?: any;
        cursor?: MouseCursor;
        opaque?: boolean;
        child?: RenderBox;
    });
}
export { RenderMouseRegion };
declare class RenderRepaintBoundary extends RenderProxyBox {
    debugSymmetricPaintCount: number;
    debugAsymmetricPaintCount: number;
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderRepaintBoundary };
declare class RenderIgnorePointer extends RenderProxyBox {
    ignoring: boolean;
    ignoringSemantics: boolean;
    constructor(namedParameters?: {
        child?: RenderBox;
        ignoring?: boolean;
        ignoringSemantics?: boolean;
    });
}
export { RenderIgnorePointer };
declare class RenderOffstage extends RenderProxyBox {
    offstage: boolean;
    constructor(namedParameters?: {
        offstage?: boolean;
        child?: RenderBox;
    });
}
export { RenderOffstage };
declare class RenderAbsorbPointer extends RenderProxyBox {
    absorbing: boolean;
    ignoringSemantics: boolean;
    constructor(namedParameters?: {
        child?: RenderBox;
        absorbing?: boolean;
        ignoringSemantics?: boolean;
    });
}
export { RenderAbsorbPointer };
declare class RenderMetaData extends RenderProxyBoxWithHitTestBehavior {
    metaData: any;
    constructor(namedParameters?: {
        metaData?: any;
        behavior?: HitTestBehavior;
        child?: RenderBox;
    });
}
export { RenderMetaData };
declare class RenderSemanticsGestureHandler extends RenderProxyBox {
    validActions: Set<any>;
    onTap: any;
    onLongPress: any;
    onHorizontalDragUpdate: any;
    onVerticalDragUpdate: any;
    scrollFactor: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        onTap?: any;
        onLongPress?: any;
        onHorizontalDragUpdate?: any;
        onVerticalDragUpdate?: any;
        scrollFactor?: number;
    });
}
export { RenderSemanticsGestureHandler };
declare class RenderSemanticsAnnotations extends RenderProxyBox {
    container: boolean;
    explicitChildNodes: boolean;
    excludeSemantics: boolean;
    checked: boolean;
    enabled: boolean;
    selected: boolean;
    button: boolean;
    link: boolean;
    header: boolean;
    textField: boolean;
    readOnly: boolean;
    focusable: boolean;
    focused: boolean;
    inMutuallyExclusiveGroup: boolean;
    obscured: boolean;
    multiline: boolean;
    scopesRoute: boolean;
    namesRoute: boolean;
    hidden: boolean;
    image: boolean;
    liveRegion: boolean;
    maxValueLength: number;
    currentValueLength: number;
    toggled: boolean;
    label: string;
    value: string;
    increasedValue: string;
    decreasedValue: string;
    hint: string;
    hintOverrides: SemanticsHintOverrides;
    textDirection: TextDirection;
    sortKey: SemanticsSortKey;
    onTap: any;
    onDismiss: any;
    onLongPress: any;
    onScrollLeft: any;
    onScrollRight: any;
    onScrollUp: any;
    onScrollDown: any;
    onIncrease: any;
    onDecrease: any;
    onCopy: any;
    onCut: any;
    onPaste: any;
    onMoveCursorForwardByCharacter: any;
    onMoveCursorBackwardByCharacter: any;
    onMoveCursorForwardByWord: any;
    onMoveCursorBackwardByWord: any;
    onSetSelection: any;
    onDidGainAccessibilityFocus: any;
    onDidLoseAccessibilityFocus: any;
    customSemanticsActions: Map<any, any>;
    constructor(namedParameters?: {
        child?: RenderBox;
        container?: boolean;
        explicitChildNodes?: boolean;
        excludeSemantics?: boolean;
        enabled?: boolean;
        checked?: boolean;
        toggled?: boolean;
        selected?: boolean;
        button?: boolean;
        link?: boolean;
        header?: boolean;
        textField?: boolean;
        readOnly?: boolean;
        focusable?: boolean;
        focused?: boolean;
        inMutuallyExclusiveGroup?: boolean;
        obscured?: boolean;
        multiline?: boolean;
        scopesRoute?: boolean;
        namesRoute?: boolean;
        hidden?: boolean;
        image?: boolean;
        liveRegion?: boolean;
        maxValueLength?: number;
        currentValueLength?: number;
        label?: string;
        value?: string;
        increasedValue?: string;
        decreasedValue?: string;
        hint?: string;
        hintOverrides?: SemanticsHintOverrides;
        textDirection?: TextDirection;
        sortKey?: SemanticsSortKey;
        onTap?: any;
        onDismiss?: any;
        onLongPress?: any;
        onScrollLeft?: any;
        onScrollRight?: any;
        onScrollUp?: any;
        onScrollDown?: any;
        onIncrease?: any;
        onDecrease?: any;
        onCopy?: any;
        onCut?: any;
        onPaste?: any;
        onMoveCursorForwardByCharacter?: any;
        onMoveCursorBackwardByCharacter?: any;
        onMoveCursorForwardByWord?: any;
        onMoveCursorBackwardByWord?: any;
        onSetSelection?: any;
        onDidGainAccessibilityFocus?: any;
        onDidLoseAccessibilityFocus?: any;
        customSemanticsActions?: Map<any, any>;
    });
}
export { RenderSemanticsAnnotations };
declare class RenderBlockSemantics extends RenderProxyBox {
    blocking: boolean;
    constructor(namedParameters?: {
        child?: RenderBox;
        blocking?: boolean;
    });
}
export { RenderBlockSemantics };
declare class RenderMergeSemantics extends RenderProxyBox {
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderMergeSemantics };
declare class RenderExcludeSemantics extends RenderProxyBox {
    excluding: boolean;
    constructor(namedParameters?: {
        child?: RenderBox;
        excluding?: boolean;
    });
}
export { RenderExcludeSemantics };
declare class RenderIndexedSemantics extends RenderProxyBox {
    index: number;
    constructor(namedParameters?: {
        child?: RenderBox;
        index?: number;
    });
}
export { RenderIndexedSemantics };
declare class RenderLeaderLayer extends RenderProxyBox {
    link: LayerLink;
    constructor(namedParameters?: {
        link?: LayerLink;
        child?: RenderBox;
    });
}
export { RenderLeaderLayer };
declare class RenderFollowerLayer extends RenderProxyBox {
    link: LayerLink;
    showWhenUnlinked: boolean;
    offset: Offset;
    constructor(namedParameters?: {
        link?: LayerLink;
        showWhenUnlinked?: boolean;
        offset?: Offset;
        child?: RenderBox;
    });
}
export { RenderFollowerLayer };
declare class RenderAnnotatedRegion extends RenderProxyBox {
    value: any;
    sized: boolean;
    alwaysNeedsCompositing: boolean;
    constructor(namedParameters?: {
        value?: any;
        sized?: boolean;
        child?: RenderBox;
    });
}
export { RenderAnnotatedRegion };
