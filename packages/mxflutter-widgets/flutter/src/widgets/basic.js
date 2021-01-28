//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderProxyBoxWithHitTestBehavior, } from '../rendering/proxy-box';
import { InheritedWidget, SingleChildRenderObjectWidget, ParentDataWidget, MultiChildRenderObjectWidget, SingleChildRenderObjectElement, StatelessWidget$, LeafRenderObjectWidget, StatefulWidget$, State$, } from './framework';
class Directionality extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textDirection = namedParameters.textDirection;
        this.child = namedParameters.child;
        this.className = 'Directionality';
    }
}
export { Directionality };
class Opacity extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this.child = namedParameters.child;
        this.className = 'Opacity';
    }
}
export { Opacity };
class ShaderMask extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.shaderCallback = namedParameters.shaderCallback;
        this.blendMode = namedParameters.blendMode;
        this.child = namedParameters.child;
        this.className = 'ShaderMask';
    }
}
export { ShaderMask };
class BackdropFilter extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.filter = namedParameters.filter;
        this.child = namedParameters.child;
        this.className = 'BackdropFilter';
    }
}
export { BackdropFilter };
class CustomPaint extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.painter = namedParameters.painter;
        this.foregroundPainter = namedParameters.foregroundPainter;
        this.size = namedParameters.size;
        this.isComplex = namedParameters.isComplex;
        this.willChange = namedParameters.willChange;
        this.child = namedParameters.child;
        this.className = 'CustomPaint';
    }
}
export { CustomPaint };
class ClipRect extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipRect';
    }
}
export { ClipRect };
class ClipRRect extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.borderRadius = namedParameters.borderRadius;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipRRect';
    }
}
export { ClipRRect };
class ClipOval extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipOval';
    }
}
export { ClipOval };
class ClipPath extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipPath';
    }
}
export { ClipPath };
class PhysicalModel extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.borderRadius = namedParameters.borderRadius;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.child = namedParameters.child;
        this.className = 'PhysicalModel';
    }
}
export { PhysicalModel };
class PhysicalShape extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.child = namedParameters.child;
        this.className = 'PhysicalShape';
    }
}
export { PhysicalShape };
class Transform extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.transform = namedParameters.transform;
        this.origin = namedParameters.origin;
        this.alignment = namedParameters.alignment;
        this.transformHitTests = namedParameters.transformHitTests;
        this.child = namedParameters.child;
        this.className = 'Transform';
    }
    static rotate(namedParameters = {}) {
        var jsObj = new Transform();
        jsObj.key = namedParameters.key;
        jsObj['angle'] = namedParameters.angle;
        jsObj.origin = namedParameters.origin;
        jsObj.alignment = namedParameters.alignment;
        jsObj.transformHitTests = namedParameters.transformHitTests;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'rotate';
        return jsObj;
    }
    static translate(namedParameters = {}) {
        var jsObj = new Transform();
        jsObj.key = namedParameters.key;
        jsObj['offset'] = namedParameters.offset;
        jsObj.transformHitTests = namedParameters.transformHitTests;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'translate';
        return jsObj;
    }
    static scale(namedParameters = {}) {
        var jsObj = new Transform();
        jsObj.key = namedParameters.key;
        jsObj['scale'] = namedParameters.scale;
        jsObj.origin = namedParameters.origin;
        jsObj.alignment = namedParameters.alignment;
        jsObj.transformHitTests = namedParameters.transformHitTests;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'scale';
        return jsObj;
    }
}
export { Transform };
class CompositedTransformTarget extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.link = namedParameters.link;
        this.child = namedParameters.child;
        this.className = 'CompositedTransformTarget';
    }
}
export { CompositedTransformTarget };
class CompositedTransformFollower extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.link = namedParameters.link;
        this.showWhenUnlinked = namedParameters.showWhenUnlinked;
        this.offset = namedParameters.offset;
        this.child = namedParameters.child;
        this.className = 'CompositedTransformFollower';
    }
}
export { CompositedTransformFollower };
class FittedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.fit = namedParameters.fit;
        this.alignment = namedParameters.alignment;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'FittedBox';
    }
}
export { FittedBox };
class FractionalTranslation extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.translation = namedParameters.translation;
        this.transformHitTests = namedParameters.transformHitTests;
        this.child = namedParameters.child;
        this.className = 'FractionalTranslation';
    }
}
export { FractionalTranslation };
class RotatedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.quarterTurns = namedParameters.quarterTurns;
        this.child = namedParameters.child;
        this.className = 'RotatedBox';
    }
}
export { RotatedBox };
class Padding extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this.child = namedParameters.child;
        this.className = 'Padding';
    }
}
export { Padding };
class Align extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.widthFactor = namedParameters.widthFactor;
        this.heightFactor = namedParameters.heightFactor;
        this.child = namedParameters.child;
        this.className = 'Align';
    }
}
export { Align };
class Center extends Align {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['widthFactor'] = namedParameters.widthFactor;
        this['heightFactor'] = namedParameters.heightFactor;
        this['child'] = namedParameters.child;
        this.className = 'Center';
    }
}
export { Center };
class CustomSingleChildLayout extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.child = namedParameters.child;
        this.className = 'CustomSingleChildLayout';
    }
}
export { CustomSingleChildLayout };
class LayoutId extends ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.id = namedParameters.id;
        this.child = namedParameters.child;
        this.className = 'LayoutId';
    }
}
export { LayoutId };
class CustomMultiChildLayout extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.children = namedParameters.children;
        this.className = 'CustomMultiChildLayout';
    }
}
export { CustomMultiChildLayout };
class SizedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.child = namedParameters.child;
        this.className = 'SizedBox';
    }
    static expand(namedParameters = {}) {
        var jsObj = new SizedBox();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'expand';
        return jsObj;
    }
    static shrink(namedParameters = {}) {
        var jsObj = new SizedBox();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'shrink';
        return jsObj;
    }
    static fromSize(namedParameters = {}) {
        var jsObj = new SizedBox();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj['size'] = namedParameters.size;
        jsObj['constructorName'] = 'fromSize';
        return jsObj;
    }
}
export { SizedBox };
class ConstrainedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.constraints = namedParameters.constraints;
        this.child = namedParameters.child;
        this.className = 'ConstrainedBox';
    }
}
export { ConstrainedBox };
class UnconstrainedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.textDirection = namedParameters.textDirection;
        this.alignment = namedParameters.alignment;
        this.constrainedAxis = namedParameters.constrainedAxis;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'UnconstrainedBox';
    }
}
export { UnconstrainedBox };
class FractionallySizedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.widthFactor = namedParameters.widthFactor;
        this.heightFactor = namedParameters.heightFactor;
        this.child = namedParameters.child;
        this.className = 'FractionallySizedBox';
    }
}
export { FractionallySizedBox };
class LimitedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.maxWidth = namedParameters.maxWidth;
        this.maxHeight = namedParameters.maxHeight;
        this.child = namedParameters.child;
        this.className = 'LimitedBox';
    }
}
export { LimitedBox };
class OverflowBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.minWidth = namedParameters.minWidth;
        this.maxWidth = namedParameters.maxWidth;
        this.minHeight = namedParameters.minHeight;
        this.maxHeight = namedParameters.maxHeight;
        this.child = namedParameters.child;
        this.className = 'OverflowBox';
    }
}
export { OverflowBox };
class SizedOverflowBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.alignment = namedParameters.alignment;
        this.child = namedParameters.child;
        this.className = 'SizedOverflowBox';
    }
}
export { SizedOverflowBox };
class Offstage extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.offstage = namedParameters.offstage;
        this.child = namedParameters.child;
        this.className = 'Offstage';
    }
}
export { Offstage };
class _OffstageElement extends SingleChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_OffstageElement';
    }
}
export { _OffstageElement };
class AspectRatio extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.aspectRatio = namedParameters.aspectRatio;
        this.child = namedParameters.child;
        this.className = 'AspectRatio';
    }
}
export { AspectRatio };
class IntrinsicWidth extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.stepWidth = namedParameters.stepWidth;
        this.stepHeight = namedParameters.stepHeight;
        this.child = namedParameters.child;
        this.className = 'IntrinsicWidth';
    }
}
export { IntrinsicWidth };
class IntrinsicHeight extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'IntrinsicHeight';
    }
}
export { IntrinsicHeight };
class Baseline extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.baseline = namedParameters.baseline;
        this.baselineType = namedParameters.baselineType;
        this.child = namedParameters.child;
        this.className = 'Baseline';
    }
}
export { Baseline };
class SliverToBoxAdapter extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'SliverToBoxAdapter';
    }
}
export { SliverToBoxAdapter };
class SliverPadding extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverPadding';
    }
}
export { SliverPadding };
class ListBody extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.mainAxis = namedParameters.mainAxis;
        this.reverse = namedParameters.reverse;
        this.children = namedParameters.children;
        this.className = 'ListBody';
    }
}
export { ListBody };
class Stack extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.fit = namedParameters.fit;
        this.overflow = namedParameters.overflow;
        this.clipBehavior = namedParameters.clipBehavior;
        this.children = namedParameters.children;
        this.className = 'Stack';
    }
}
export { Stack };
class IndexedStack extends Stack {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this['sizing'] = namedParameters.sizing;
        this.index = namedParameters.index;
        this.children = namedParameters.children;
        this.className = 'IndexedStack';
    }
}
export { IndexedStack };
class Positioned extends ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.left = namedParameters.left;
        this.top = namedParameters.top;
        this.right = namedParameters.right;
        this.bottom = namedParameters.bottom;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.child = namedParameters.child;
        this.className = 'Positioned';
    }
    static directional(namedParameters = {}) {
        var jsObj = new Positioned();
        jsObj.key = namedParameters.key;
        jsObj['textDirection'] = namedParameters.textDirection;
        jsObj['start'] = namedParameters.start;
        jsObj.top = namedParameters.top;
        jsObj['end'] = namedParameters.end;
        jsObj.bottom = namedParameters.bottom;
        jsObj.width = namedParameters.width;
        jsObj.height = namedParameters.height;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'directional';
        return jsObj;
    }
    static fromRect(namedParameters = {}) {
        var jsObj = new Positioned();
        jsObj.key = namedParameters.key;
        jsObj['rect'] = namedParameters.rect;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'fromRect';
        return jsObj;
    }
    static fromRelativeRect(namedParameters = {}) {
        var jsObj = new Positioned();
        jsObj.key = namedParameters.key;
        jsObj['rect'] = namedParameters.rect;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'fromRelativeRect';
        return jsObj;
    }
    static fill(namedParameters = {}) {
        var jsObj = new Positioned();
        jsObj.key = namedParameters.key;
        jsObj.left = namedParameters.left;
        jsObj.top = namedParameters.top;
        jsObj.right = namedParameters.right;
        jsObj.bottom = namedParameters.bottom;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'fill';
        return jsObj;
    }
}
export { Positioned };
class PositionedDirectional extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.start = namedParameters.start;
        this.top = namedParameters.top;
        this.end = namedParameters.end;
        this.bottom = namedParameters.bottom;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.child = namedParameters.child;
        this.className = 'PositionedDirectional';
    }
}
export { PositionedDirectional };
class Flex extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.direction = namedParameters.direction;
        this.mainAxisAlignment = namedParameters.mainAxisAlignment;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this.verticalDirection = namedParameters.verticalDirection;
        this.textBaseline = namedParameters.textBaseline;
        this.clipBehavior = namedParameters.clipBehavior;
        this.children = namedParameters.children;
        this.className = 'Flex';
    }
}
export { Flex };
class Row extends Flex {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['mainAxisAlignment'] = namedParameters.mainAxisAlignment;
        this['mainAxisSize'] = namedParameters.mainAxisSize;
        this['crossAxisAlignment'] = namedParameters.crossAxisAlignment;
        this['textDirection'] = namedParameters.textDirection;
        this['verticalDirection'] = namedParameters.verticalDirection;
        this['textBaseline'] = namedParameters.textBaseline;
        this['children'] = namedParameters.children;
        this.className = 'Row';
    }
}
export { Row };
class Column extends Flex {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['mainAxisAlignment'] = namedParameters.mainAxisAlignment;
        this['mainAxisSize'] = namedParameters.mainAxisSize;
        this['crossAxisAlignment'] = namedParameters.crossAxisAlignment;
        this['textDirection'] = namedParameters.textDirection;
        this['verticalDirection'] = namedParameters.verticalDirection;
        this['textBaseline'] = namedParameters.textBaseline;
        this['children'] = namedParameters.children;
        this.className = 'Column';
    }
}
export { Column };
class Flexible extends ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.flex = namedParameters.flex;
        this.fit = namedParameters.fit;
        this.child = namedParameters.child;
        this.className = 'Flexible';
    }
}
export { Flexible };
class Expanded extends Flexible {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['flex'] = namedParameters.flex;
        this['child'] = namedParameters.child;
        this.className = 'Expanded';
    }
}
export { Expanded };
class Wrap extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.direction = namedParameters.direction;
        this.alignment = namedParameters.alignment;
        this.spacing = namedParameters.spacing;
        this.runAlignment = namedParameters.runAlignment;
        this.runSpacing = namedParameters.runSpacing;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this.verticalDirection = namedParameters.verticalDirection;
        this.clipBehavior = namedParameters.clipBehavior;
        this.children = namedParameters.children;
        this.className = 'Wrap';
    }
}
export { Wrap };
class Flow extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.children = namedParameters.children;
        this.className = 'Flow';
    }
    static unwrapped(namedParameters = {}) {
        var jsObj = new Flow();
        jsObj.key = namedParameters.key;
        jsObj.delegate = namedParameters.delegate;
        jsObj.children = namedParameters.children;
        jsObj['constructorName'] = 'unwrapped';
        return jsObj;
    }
}
export { Flow };
class RichText extends MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.text = namedParameters.text;
        this.textAlign = namedParameters.textAlign;
        this.textDirection = namedParameters.textDirection;
        this.softWrap = namedParameters.softWrap;
        this.overflow = namedParameters.overflow;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.maxLines = namedParameters.maxLines;
        this.locale = namedParameters.locale;
        this.strutStyle = namedParameters.strutStyle;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.applyTextScaleFactorToWidgetSpan = namedParameters.applyTextScaleFactorToWidgetSpan;
        this.className = 'RichText';
    }
}
export { RichText };
class RawImage extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.image = namedParameters.image;
        this.debugImageLabel = namedParameters.debugImageLabel;
        this.width = namedParameters.width;
        this.height = namedParameters.height;
        this.scale = namedParameters.scale;
        this.color = namedParameters.color;
        this.colorBlendMode = namedParameters.colorBlendMode;
        this.fit = namedParameters.fit;
        this.alignment = namedParameters.alignment;
        this.repeat = namedParameters.repeat;
        this.centerSlice = namedParameters.centerSlice;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.invertColors = namedParameters.invertColors;
        this.filterQuality = namedParameters.filterQuality;
        this.isAntiAlias = namedParameters.isAntiAlias;
        this.className = 'RawImage';
    }
}
export { RawImage };
class DefaultAssetBundle extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.bundle = namedParameters.bundle;
        this.child = namedParameters.child;
        this.className = 'DefaultAssetBundle';
    }
}
export { DefaultAssetBundle };
class WidgetToRenderBoxAdapter extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.renderBox = namedParameters.renderBox;
        this.onBuild = namedParameters.onBuild;
        this.className = 'WidgetToRenderBoxAdapter';
    }
}
export { WidgetToRenderBoxAdapter };
class Listener extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPointerDown = namedParameters.onPointerDown;
        this.onPointerMove = namedParameters.onPointerMove;
        this.onPointerEnter = namedParameters.onPointerEnter;
        this.onPointerExit = namedParameters.onPointerExit;
        this.onPointerHover = namedParameters.onPointerHover;
        this.onPointerUp = namedParameters.onPointerUp;
        this.onPointerCancel = namedParameters.onPointerCancel;
        this.onPointerSignal = namedParameters.onPointerSignal;
        this.behavior = namedParameters.behavior;
        this.child = namedParameters.child;
        this.className = 'Listener';
    }
}
export { Listener };
class _PointerListener extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPointerDown = namedParameters.onPointerDown;
        this.onPointerMove = namedParameters.onPointerMove;
        this.onPointerUp = namedParameters.onPointerUp;
        this.onPointerCancel = namedParameters.onPointerCancel;
        this.onPointerSignal = namedParameters.onPointerSignal;
        this.behavior = namedParameters.behavior;
        this.child = namedParameters.child;
        this.className = '_PointerListener';
    }
}
export { _PointerListener };
class MouseRegion extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onEnter = namedParameters.onEnter;
        this.onExit = namedParameters.onExit;
        this.onHover = namedParameters.onHover;
        this.cursor = namedParameters.cursor;
        this.opaque = namedParameters.opaque;
        this.child = namedParameters.child;
        this.className = 'MouseRegion';
    }
}
export { MouseRegion };
class _MouseRegionState extends State$ {
}
export { _MouseRegionState };
class _RawMouseRegion extends SingleChildRenderObjectWidget {
    constructor(owner) {
        super();
        this.owner = owner;
        this.className = '_RawMouseRegion';
    }
}
export { _RawMouseRegion };
class RepaintBoundary extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'RepaintBoundary';
    }
    static wrap(child, childIndex) {
        var jsObj = new RepaintBoundary();
        jsObj['child'] = child;
        jsObj['childIndex'] = childIndex;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
export { RepaintBoundary };
class IgnorePointer extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.child = namedParameters.child;
        this.className = 'IgnorePointer';
    }
}
export { IgnorePointer };
class AbsorbPointer extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.absorbing = namedParameters.absorbing;
        this.child = namedParameters.child;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'AbsorbPointer';
    }
}
export { AbsorbPointer };
class MetaData extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.metaData = namedParameters.metaData;
        this.behavior = namedParameters.behavior;
        this.child = namedParameters.child;
        this.className = 'MetaData';
    }
}
export { MetaData };
class Semantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.container = namedParameters.container;
        this.explicitChildNodes = namedParameters.explicitChildNodes;
        this.excludeSemantics = namedParameters.excludeSemantics;
        this['enabled'] = namedParameters.enabled;
        this['checked'] = namedParameters.checked;
        this['selected'] = namedParameters.selected;
        this['toggled'] = namedParameters.toggled;
        this['button'] = namedParameters.button;
        this['link'] = namedParameters.link;
        this['header'] = namedParameters.header;
        this['textField'] = namedParameters.textField;
        this['readOnly'] = namedParameters.readOnly;
        this['focusable'] = namedParameters.focusable;
        this['focused'] = namedParameters.focused;
        this['inMutuallyExclusiveGroup'] = namedParameters.inMutuallyExclusiveGroup;
        this['obscured'] = namedParameters.obscured;
        this['multiline'] = namedParameters.multiline;
        this['scopesRoute'] = namedParameters.scopesRoute;
        this['namesRoute'] = namedParameters.namesRoute;
        this['hidden'] = namedParameters.hidden;
        this['image'] = namedParameters.image;
        this['liveRegion'] = namedParameters.liveRegion;
        this['maxValueLength'] = namedParameters.maxValueLength;
        this['currentValueLength'] = namedParameters.currentValueLength;
        this['label'] = namedParameters.label;
        this['value'] = namedParameters.value;
        this['increasedValue'] = namedParameters.increasedValue;
        this['decreasedValue'] = namedParameters.decreasedValue;
        this['hint'] = namedParameters.hint;
        this['onTapHint'] = namedParameters.onTapHint;
        this['onLongPressHint'] = namedParameters.onLongPressHint;
        this['textDirection'] = namedParameters.textDirection;
        this['sortKey'] = namedParameters.sortKey;
        this['onTap'] = namedParameters.onTap;
        this['onLongPress'] = namedParameters.onLongPress;
        this['onScrollLeft'] = namedParameters.onScrollLeft;
        this['onScrollRight'] = namedParameters.onScrollRight;
        this['onScrollUp'] = namedParameters.onScrollUp;
        this['onScrollDown'] = namedParameters.onScrollDown;
        this['onIncrease'] = namedParameters.onIncrease;
        this['onDecrease'] = namedParameters.onDecrease;
        this['onCopy'] = namedParameters.onCopy;
        this['onCut'] = namedParameters.onCut;
        this['onPaste'] = namedParameters.onPaste;
        this['onDismiss'] = namedParameters.onDismiss;
        this['onMoveCursorForwardByCharacter'] = namedParameters.onMoveCursorForwardByCharacter;
        this['onMoveCursorBackwardByCharacter'] = namedParameters.onMoveCursorBackwardByCharacter;
        this['onSetSelection'] = namedParameters.onSetSelection;
        this['onDidGainAccessibilityFocus'] = namedParameters.onDidGainAccessibilityFocus;
        this['onDidLoseAccessibilityFocus'] = namedParameters.onDidLoseAccessibilityFocus;
        this['customSemanticsActions'] = namedParameters.customSemanticsActions;
        this.className = 'Semantics';
    }
    static fromProperties(namedParameters = {}) {
        var jsObj = new Semantics();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj.container = namedParameters.container;
        jsObj.explicitChildNodes = namedParameters.explicitChildNodes;
        jsObj.excludeSemantics = namedParameters.excludeSemantics;
        jsObj.properties = namedParameters.properties;
        jsObj['constructorName'] = 'fromProperties';
        return jsObj;
    }
}
export { Semantics };
class MergeSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'MergeSemantics';
    }
}
export { MergeSemantics };
class BlockSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.blocking = namedParameters.blocking;
        this.child = namedParameters.child;
        this.className = 'BlockSemantics';
    }
}
export { BlockSemantics };
class ExcludeSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.excluding = namedParameters.excluding;
        this.child = namedParameters.child;
        this.className = 'ExcludeSemantics';
    }
}
export { ExcludeSemantics };
class IndexedSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.index = namedParameters.index;
        this.child = namedParameters.child;
        this.className = 'IndexedSemantics';
    }
}
export { IndexedSemantics };
class KeyedSubtree extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'KeyedSubtree';
    }
    static wrap(child, childIndex) {
        var jsObj = new KeyedSubtree();
        jsObj.child = child;
        jsObj['childIndex'] = childIndex;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
export { KeyedSubtree };
class Builder extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.className = 'Builder';
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this.builder) {
            this['child'] = this.builder(buildContext);
            delete this.builder;
        }
    }
}
export { Builder };
class StatefulBuilder extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.className = 'StatefulBuilder';
    }
}
export { StatefulBuilder };
class _StatefulBuilderState extends State$ {
}
export { _StatefulBuilderState };
class ColoredBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.child = namedParameters.child;
        this.key = namedParameters.key;
        this.className = 'ColoredBox';
    }
}
export { ColoredBox };
class _RenderColoredBox extends RenderProxyBoxWithHitTestBehavior {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.className = '_RenderColoredBox';
    }
}
export { _RenderColoredBox };
