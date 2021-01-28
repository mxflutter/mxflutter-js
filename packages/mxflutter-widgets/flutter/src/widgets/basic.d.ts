import { SemanticsProperties, SemanticsSortKey } from '../semantics/semantics';
import { MouseCursor } from '../rendering/mouse-cursor';
import { AssetBundle } from '../services/asset-bundle';
import { ImageRepeat } from '../painting/decoration-image';
import { TextWidthBasis } from '../painting/text-painter';
import { StrutStyle } from '../painting/strut-style';
import { TextOverflow } from '../rendering/paragraph';
import { InlineSpan } from '../painting/inline-span';
import { FlowDelegate } from '../rendering/flow';
import { WrapAlignment, WrapCrossAlignment } from '../rendering/wrap';
import { MainAxisAlignment, MainAxisSize, CrossAxisAlignment, FlexFit } from '../rendering/flex';
import { StackFit, Overflow, RelativeRect } from '../rendering/stack';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { BoxFit } from '../painting/box-fit';
import { LayerLink } from '../rendering/layer';
import { AlignmentGeometry } from '../painting/alignment';
import { Matrix4 } from '../../../vector-math-64';
import { BoxShape } from '../painting/box-border';
import { BorderRadius } from '../painting/border-radius';
import { CustomPainter } from '../rendering/custom-paint';
import { CustomClipper, HitTestBehavior, RenderProxyBoxWithHitTestBehavior } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { TextDirection, BlendMode, ImageFilter, Size, Clip, Color, Offset, TextBaseline, Rect, TextAlign, Locale, TextHeightBehavior, Image, FilterQuality } from '../../../mx-dart-sdk';
import { InheritedWidget, SingleChildRenderObjectWidget, ParentDataWidget, MultiChildRenderObjectWidget, SingleChildRenderObjectElement, StatelessWidget$, LeafRenderObjectWidget, StatefulWidget$, State$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Directionality extends InheritedWidget {
    textDirection: TextDirection;
    constructor(namedParameters?: {
        key?: Key;
        textDirection?: TextDirection;
        child?: MXWidget;
    });
}
export { Directionality };
declare class Opacity extends SingleChildRenderObjectWidget {
    opacity: number;
    alwaysIncludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        opacity?: number;
        alwaysIncludeSemantics?: boolean;
        child?: MXWidget;
    });
}
export { Opacity };
declare class ShaderMask extends SingleChildRenderObjectWidget {
    shaderCallback: any;
    blendMode: BlendMode;
    constructor(namedParameters?: {
        key?: Key;
        shaderCallback?: any;
        blendMode?: BlendMode;
        child?: MXWidget;
    });
}
export { ShaderMask };
declare class BackdropFilter extends SingleChildRenderObjectWidget {
    filter: ImageFilter;
    constructor(namedParameters?: {
        key?: Key;
        filter?: ImageFilter;
        child?: MXWidget;
    });
}
export { BackdropFilter };
declare class CustomPaint extends SingleChildRenderObjectWidget {
    painter: CustomPainter;
    foregroundPainter: CustomPainter;
    size: Size;
    isComplex: boolean;
    willChange: boolean;
    constructor(namedParameters?: {
        key?: Key;
        painter?: CustomPainter;
        foregroundPainter?: CustomPainter;
        size?: Size;
        isComplex?: boolean;
        willChange?: boolean;
        child?: MXWidget;
    });
}
export { CustomPaint };
declare class ClipRect extends SingleChildRenderObjectWidget {
    clipper: CustomClipper;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
        child?: MXWidget;
    });
}
export { ClipRect };
declare class ClipRRect extends SingleChildRenderObjectWidget {
    borderRadius: BorderRadius;
    clipper: CustomClipper;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        borderRadius?: BorderRadius;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
        child?: MXWidget;
    });
}
export { ClipRRect };
declare class ClipOval extends SingleChildRenderObjectWidget {
    clipper: CustomClipper;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
        child?: MXWidget;
    });
}
export { ClipOval };
declare class ClipPath extends SingleChildRenderObjectWidget {
    clipper: CustomClipper;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
        child?: MXWidget;
    });
}
export { ClipPath };
declare class PhysicalModel extends SingleChildRenderObjectWidget {
    shape: BoxShape;
    clipBehavior: Clip;
    borderRadius: BorderRadius;
    elevation: number;
    color: Color;
    shadowColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        shape?: BoxShape;
        clipBehavior?: Clip;
        borderRadius?: BorderRadius;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
        child?: MXWidget;
    });
}
export { PhysicalModel };
declare class PhysicalShape extends SingleChildRenderObjectWidget {
    clipper: CustomClipper;
    clipBehavior: Clip;
    elevation: number;
    color: Color;
    shadowColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        clipper?: CustomClipper;
        clipBehavior?: Clip;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
        child?: MXWidget;
    });
}
export { PhysicalShape };
declare class Transform extends SingleChildRenderObjectWidget {
    transform: Matrix4;
    origin: Offset;
    alignment: AlignmentGeometry;
    transformHitTests: boolean;
    constructor(namedParameters?: {
        key?: Key;
        transform?: Matrix4;
        origin?: Offset;
        alignment?: AlignmentGeometry;
        transformHitTests?: boolean;
        child?: MXWidget;
    });
    static rotate(namedParameters?: {
        key?: Key;
        angle?: number;
        origin?: Offset;
        alignment?: AlignmentGeometry;
        transformHitTests?: boolean;
        child?: MXWidget;
    }): Transform;
    static translate(namedParameters?: {
        key?: Key;
        offset?: Offset;
        transformHitTests?: boolean;
        child?: MXWidget;
    }): Transform;
    static scale(namedParameters?: {
        key?: Key;
        scale?: number;
        origin?: Offset;
        alignment?: AlignmentGeometry;
        transformHitTests?: boolean;
        child?: MXWidget;
    }): Transform;
}
export { Transform };
declare class CompositedTransformTarget extends SingleChildRenderObjectWidget {
    link: LayerLink;
    constructor(namedParameters?: {
        key?: Key;
        link?: LayerLink;
        child?: MXWidget;
    });
}
export { CompositedTransformTarget };
declare class CompositedTransformFollower extends SingleChildRenderObjectWidget {
    link: LayerLink;
    showWhenUnlinked: boolean;
    offset: Offset;
    constructor(namedParameters?: {
        key?: Key;
        link?: LayerLink;
        showWhenUnlinked?: boolean;
        offset?: Offset;
        child?: MXWidget;
    });
}
export { CompositedTransformFollower };
declare class FittedBox extends SingleChildRenderObjectWidget {
    fit: BoxFit;
    alignment: AlignmentGeometry;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        clipBehavior?: Clip;
        child?: MXWidget;
    });
}
export { FittedBox };
declare class FractionalTranslation extends SingleChildRenderObjectWidget {
    translation: Offset;
    transformHitTests: boolean;
    constructor(namedParameters?: {
        key?: Key;
        translation?: Offset;
        transformHitTests?: boolean;
        child?: MXWidget;
    });
}
export { FractionalTranslation };
declare class RotatedBox extends SingleChildRenderObjectWidget {
    quarterTurns: number;
    constructor(namedParameters?: {
        key?: Key;
        quarterTurns?: number;
        child?: MXWidget;
    });
}
export { RotatedBox };
declare class Padding extends SingleChildRenderObjectWidget {
    padding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        padding?: EdgeInsetsGeometry;
        child?: MXWidget;
    });
}
export { Padding };
declare class Align extends SingleChildRenderObjectWidget {
    alignment: AlignmentGeometry;
    widthFactor: number;
    heightFactor: number;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        widthFactor?: number;
        heightFactor?: number;
        child?: MXWidget;
    });
}
export { Align };
declare class Center extends Align {
    constructor(namedParameters?: {
        key?: Key;
        widthFactor?: number;
        heightFactor?: number;
        child?: MXWidget;
    });
}
export { Center };
declare class CustomSingleChildLayout extends SingleChildRenderObjectWidget {
    delegate: SingleChildLayoutDelegate;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: SingleChildLayoutDelegate;
        child?: MXWidget;
    });
}
export { CustomSingleChildLayout };
declare class LayoutId extends ParentDataWidget {
    id: any;
    constructor(namedParameters?: {
        key?: Key;
        id?: any;
        child?: MXWidget;
    });
}
export { LayoutId };
declare class CustomMultiChildLayout extends MultiChildRenderObjectWidget {
    delegate: MultiChildLayoutDelegate;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: MultiChildLayoutDelegate;
        children?: Array<any>;
    });
}
export { CustomMultiChildLayout };
declare class SizedBox extends SingleChildRenderObjectWidget {
    width: number;
    height: number;
    constructor(namedParameters?: {
        key?: Key;
        width?: number;
        height?: number;
        child?: MXWidget;
    });
    static expand(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    }): SizedBox;
    static shrink(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    }): SizedBox;
    static fromSize(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        size?: Size;
    }): SizedBox;
}
export { SizedBox };
declare class ConstrainedBox extends SingleChildRenderObjectWidget {
    constraints: BoxConstraints;
    constructor(namedParameters?: {
        key?: Key;
        constraints?: BoxConstraints;
        child?: MXWidget;
    });
}
export { ConstrainedBox };
declare class UnconstrainedBox extends SingleChildRenderObjectWidget {
    textDirection: TextDirection;
    alignment: AlignmentGeometry;
    constrainedAxis: Axis;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        textDirection?: TextDirection;
        alignment?: AlignmentGeometry;
        constrainedAxis?: Axis;
        clipBehavior?: Clip;
    });
}
export { UnconstrainedBox };
declare class FractionallySizedBox extends SingleChildRenderObjectWidget {
    widthFactor: number;
    heightFactor: number;
    alignment: AlignmentGeometry;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        widthFactor?: number;
        heightFactor?: number;
        child?: MXWidget;
    });
}
export { FractionallySizedBox };
declare class LimitedBox extends SingleChildRenderObjectWidget {
    maxWidth: number;
    maxHeight: number;
    constructor(namedParameters?: {
        key?: Key;
        maxWidth?: number;
        maxHeight?: number;
        child?: MXWidget;
    });
}
export { LimitedBox };
declare class OverflowBox extends SingleChildRenderObjectWidget {
    alignment: AlignmentGeometry;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        child?: MXWidget;
    });
}
export { OverflowBox };
declare class SizedOverflowBox extends SingleChildRenderObjectWidget {
    alignment: AlignmentGeometry;
    size: Size;
    constructor(namedParameters?: {
        key?: Key;
        size?: Size;
        alignment?: AlignmentGeometry;
        child?: MXWidget;
    });
}
export { SizedOverflowBox };
declare class Offstage extends SingleChildRenderObjectWidget {
    offstage: boolean;
    constructor(namedParameters?: {
        key?: Key;
        offstage?: boolean;
        child?: MXWidget;
    });
}
export { Offstage };
declare class _OffstageElement extends SingleChildRenderObjectElement {
    constructor(widget?: Offstage);
}
export { _OffstageElement };
declare class AspectRatio extends SingleChildRenderObjectWidget {
    aspectRatio: number;
    constructor(namedParameters?: {
        key?: Key;
        aspectRatio?: number;
        child?: MXWidget;
    });
}
export { AspectRatio };
declare class IntrinsicWidth extends SingleChildRenderObjectWidget {
    stepWidth: number;
    stepHeight: number;
    constructor(namedParameters?: {
        key?: Key;
        stepWidth?: number;
        stepHeight?: number;
        child?: MXWidget;
    });
}
export { IntrinsicWidth };
declare class IntrinsicHeight extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { IntrinsicHeight };
declare class Baseline extends SingleChildRenderObjectWidget {
    baseline: number;
    baselineType: TextBaseline;
    constructor(namedParameters?: {
        key?: Key;
        baseline?: number;
        baselineType?: TextBaseline;
        child?: MXWidget;
    });
}
export { Baseline };
declare class SliverToBoxAdapter extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { SliverToBoxAdapter };
declare class SliverPadding extends SingleChildRenderObjectWidget {
    padding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        padding?: EdgeInsetsGeometry;
        sliver?: MXWidget;
    });
}
export { SliverPadding };
declare class ListBody extends MultiChildRenderObjectWidget {
    mainAxis: Axis;
    reverse: boolean;
    constructor(namedParameters?: {
        key?: Key;
        mainAxis?: Axis;
        reverse?: boolean;
        children?: Array<any>;
    });
}
export { ListBody };
declare class Stack extends MultiChildRenderObjectWidget {
    alignment: AlignmentGeometry;
    textDirection: TextDirection;
    fit: StackFit;
    overflow: Overflow;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        fit?: StackFit;
        overflow?: Overflow;
        clipBehavior?: Clip;
        children?: Array<any>;
    });
}
export { Stack };
declare class IndexedStack extends Stack {
    index: number;
    constructor(namedParameters?: {
        key?: Key;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        sizing?: StackFit;
        index?: number;
        children?: Array<any>;
    });
}
export { IndexedStack };
declare class Positioned extends ParentDataWidget {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    constructor(namedParameters?: {
        key?: Key;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
        width?: number;
        height?: number;
        child?: MXWidget;
    });
    static directional(namedParameters?: {
        key?: Key;
        textDirection?: TextDirection;
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
        width?: number;
        height?: number;
        child?: MXWidget;
    }): Positioned;
    static fromRect(namedParameters?: {
        key?: Key;
        rect?: Rect;
        child?: MXWidget;
    }): Positioned;
    static fromRelativeRect(namedParameters?: {
        key?: Key;
        rect?: RelativeRect;
        child?: MXWidget;
    }): Positioned;
    static fill(namedParameters?: {
        key?: Key;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
        child?: MXWidget;
    }): Positioned;
}
export { Positioned };
declare class PositionedDirectional extends StatelessWidget$ {
    start: number;
    top: number;
    end: number;
    bottom: number;
    width: number;
    height: number;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
        width?: number;
        height?: number;
        child?: MXWidget;
    });
}
export { PositionedDirectional };
declare class Flex extends MultiChildRenderObjectWidget {
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    crossAxisAlignment: CrossAxisAlignment;
    textDirection: TextDirection;
    verticalDirection: VerticalDirection;
    textBaseline: TextBaseline;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        direction?: Axis;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        clipBehavior?: Clip;
        children?: Array<any>;
    });
}
export { Flex };
declare class Row extends Flex {
    constructor(namedParameters?: {
        key?: Key;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        children?: Array<any>;
    });
}
export { Row };
declare class Column extends Flex {
    constructor(namedParameters?: {
        key?: Key;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        children?: Array<any>;
    });
}
export { Column };
declare class Flexible extends ParentDataWidget {
    flex: number;
    fit: FlexFit;
    constructor(namedParameters?: {
        key?: Key;
        flex?: number;
        fit?: FlexFit;
        child?: MXWidget;
    });
}
export { Flexible };
declare class Expanded extends Flexible {
    constructor(namedParameters?: {
        key?: Key;
        flex?: number;
        child?: MXWidget;
    });
}
export { Expanded };
declare class Wrap extends MultiChildRenderObjectWidget {
    direction: Axis;
    alignment: WrapAlignment;
    spacing: number;
    runAlignment: WrapAlignment;
    runSpacing: number;
    crossAxisAlignment: WrapCrossAlignment;
    textDirection: TextDirection;
    verticalDirection: VerticalDirection;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        direction?: Axis;
        alignment?: WrapAlignment;
        spacing?: number;
        runAlignment?: WrapAlignment;
        runSpacing?: number;
        crossAxisAlignment?: WrapCrossAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        clipBehavior?: Clip;
        children?: Array<any>;
    });
}
export { Wrap };
declare class Flow extends MultiChildRenderObjectWidget {
    delegate: FlowDelegate;
    constructor(namedParameters?: {
        key?: Key;
        delegate?: FlowDelegate;
        children?: Array<any>;
    });
    static unwrapped(namedParameters?: {
        key?: Key;
        delegate?: FlowDelegate;
        children?: Array<any>;
    }): Flow;
}
export { Flow };
declare class RichText extends MultiChildRenderObjectWidget {
    text: InlineSpan;
    textAlign: TextAlign;
    textDirection: TextDirection;
    softWrap: boolean;
    overflow: TextOverflow;
    textScaleFactor: number;
    maxLines: number;
    locale: Locale;
    strutStyle: StrutStyle;
    textWidthBasis: TextWidthBasis;
    textHeightBehavior: TextHeightBehavior;
    applyTextScaleFactorToWidgetSpan: boolean;
    constructor(namedParameters?: {
        key?: Key;
        text?: InlineSpan;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        locale?: Locale;
        strutStyle?: StrutStyle;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
        applyTextScaleFactorToWidgetSpan?: boolean;
    });
}
export { RichText };
declare class RawImage extends LeafRenderObjectWidget {
    image: Image;
    debugImageLabel: string;
    width: number;
    height: number;
    scale: number;
    color: Color;
    filterQuality: FilterQuality;
    colorBlendMode: BlendMode;
    fit: BoxFit;
    alignment: AlignmentGeometry;
    repeat: ImageRepeat;
    centerSlice: Rect;
    matchTextDirection: boolean;
    invertColors: boolean;
    isAntiAlias: boolean;
    constructor(namedParameters?: {
        key?: Key;
        image?: Image;
        debugImageLabel?: string;
        width?: number;
        height?: number;
        scale?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: AlignmentGeometry;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        invertColors?: boolean;
        filterQuality?: FilterQuality;
        isAntiAlias?: boolean;
    });
}
export { RawImage };
declare class DefaultAssetBundle extends InheritedWidget {
    bundle: AssetBundle;
    constructor(namedParameters?: {
        key?: Key;
        bundle?: AssetBundle;
        child?: MXWidget;
    });
}
export { DefaultAssetBundle };
declare class WidgetToRenderBoxAdapter extends LeafRenderObjectWidget {
    renderBox: RenderBox;
    onBuild: any;
    constructor(namedParameters?: {
        renderBox?: RenderBox;
        onBuild?: any;
    });
}
export { WidgetToRenderBoxAdapter };
declare class Listener extends StatelessWidget$ {
    onPointerDown: any;
    onPointerMove: any;
    onPointerEnter: any;
    onPointerHover: any;
    onPointerExit: any;
    onPointerUp: any;
    onPointerCancel: any;
    onPointerSignal: any;
    behavior: HitTestBehavior;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        onPointerDown?: any;
        onPointerMove?: any;
        onPointerEnter?: any;
        onPointerExit?: any;
        onPointerHover?: any;
        onPointerUp?: any;
        onPointerCancel?: any;
        onPointerSignal?: any;
        behavior?: HitTestBehavior;
        child?: MXWidget;
    });
}
export { Listener };
declare class _PointerListener extends SingleChildRenderObjectWidget {
    onPointerDown: any;
    onPointerMove: any;
    onPointerUp: any;
    onPointerCancel: any;
    onPointerSignal: any;
    behavior: HitTestBehavior;
    constructor(namedParameters?: {
        key?: Key;
        onPointerDown?: any;
        onPointerMove?: any;
        onPointerUp?: any;
        onPointerCancel?: any;
        onPointerSignal?: any;
        behavior?: HitTestBehavior;
        child?: MXWidget;
    });
}
export { _PointerListener };
declare class MouseRegion extends StatefulWidget$ {
    onEnter: any;
    onHover: any;
    onExit: any;
    cursor: MouseCursor;
    opaque: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        onEnter?: any;
        onExit?: any;
        onHover?: any;
        cursor?: MouseCursor;
        opaque?: boolean;
        child?: MXWidget;
    });
}
export { MouseRegion };
declare class _MouseRegionState extends State$ {
}
export { _MouseRegionState };
declare class _RawMouseRegion extends SingleChildRenderObjectWidget {
    owner: _MouseRegionState;
    constructor(owner?: _MouseRegionState);
}
export { _RawMouseRegion };
declare class RepaintBoundary extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
    static wrap(child?: MXWidget, childIndex?: number): RepaintBoundary;
}
export { RepaintBoundary };
declare class IgnorePointer extends SingleChildRenderObjectWidget {
    ignoring: boolean;
    ignoringSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        ignoring?: boolean;
        ignoringSemantics?: boolean;
        child?: MXWidget;
    });
}
export { IgnorePointer };
declare class AbsorbPointer extends SingleChildRenderObjectWidget {
    absorbing: boolean;
    ignoringSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        absorbing?: boolean;
        child?: MXWidget;
        ignoringSemantics?: boolean;
    });
}
export { AbsorbPointer };
declare class MetaData extends SingleChildRenderObjectWidget {
    metaData: any;
    behavior: HitTestBehavior;
    constructor(namedParameters?: {
        key?: Key;
        metaData?: any;
        behavior?: HitTestBehavior;
        child?: MXWidget;
    });
}
export { MetaData };
declare class Semantics extends SingleChildRenderObjectWidget {
    properties: SemanticsProperties;
    container: boolean;
    explicitChildNodes: boolean;
    excludeSemantics: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        container?: boolean;
        explicitChildNodes?: boolean;
        excludeSemantics?: boolean;
        enabled?: boolean;
        checked?: boolean;
        selected?: boolean;
        toggled?: boolean;
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
        onTapHint?: string;
        onLongPressHint?: string;
        textDirection?: TextDirection;
        sortKey?: SemanticsSortKey;
        onTap?: any;
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
        onDismiss?: any;
        onMoveCursorForwardByCharacter?: any;
        onMoveCursorBackwardByCharacter?: any;
        onSetSelection?: any;
        onDidGainAccessibilityFocus?: any;
        onDidLoseAccessibilityFocus?: any;
        customSemanticsActions?: Map<any, any>;
    });
    static fromProperties(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        container?: boolean;
        explicitChildNodes?: boolean;
        excludeSemantics?: boolean;
        properties?: SemanticsProperties;
    }): Semantics;
}
export { Semantics };
declare class MergeSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { MergeSemantics };
declare class BlockSemantics extends SingleChildRenderObjectWidget {
    blocking: boolean;
    constructor(namedParameters?: {
        key?: Key;
        blocking?: boolean;
        child?: MXWidget;
    });
}
export { BlockSemantics };
declare class ExcludeSemantics extends SingleChildRenderObjectWidget {
    excluding: boolean;
    constructor(namedParameters?: {
        key?: Key;
        excluding?: boolean;
        child?: MXWidget;
    });
}
export { ExcludeSemantics };
declare class IndexedSemantics extends SingleChildRenderObjectWidget {
    index: number;
    constructor(namedParameters?: {
        key?: Key;
        index?: number;
        child?: MXWidget;
    });
}
export { IndexedSemantics };
declare class KeyedSubtree extends StatelessWidget$ {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
    static wrap(child?: MXWidget, childIndex?: number): KeyedSubtree;
}
export { KeyedSubtree };
declare class Builder extends StatelessWidget$ {
    builder: any;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
    });
    preBuild(buildContext: any): void;
}
export { Builder };
declare class StatefulBuilder extends StatefulWidget$ {
    builder: any;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
    });
}
export { StatefulBuilder };
declare class _StatefulBuilderState extends State$ {
}
export { _StatefulBuilderState };
declare class ColoredBox extends SingleChildRenderObjectWidget {
    color: Color;
    constructor(namedParameters?: {
        color?: Color;
        child?: MXWidget;
        key?: Key;
    });
}
export { ColoredBox };
declare class _RenderColoredBox extends RenderProxyBoxWithHitTestBehavior {
    color: Color;
    constructor(namedParameters?: {
        color?: Color;
    });
}
export { _RenderColoredBox };
