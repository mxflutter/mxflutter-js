"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flow = exports.Wrap = exports.Expanded = exports.Flexible = exports.Column = exports.Row = exports.Flex = exports.PositionedDirectional = exports.Positioned = exports.IndexedStack = exports.Stack = exports.ListBody = exports.SliverPadding = exports.SliverToBoxAdapter = exports.Baseline = exports.IntrinsicHeight = exports.IntrinsicWidth = exports.AspectRatio = exports._OffstageElement = exports.Offstage = exports.SizedOverflowBox = exports.OverflowBox = exports.LimitedBox = exports.FractionallySizedBox = exports.UnconstrainedBox = exports.ConstrainedBox = exports.SizedBox = exports.CustomMultiChildLayout = exports.LayoutId = exports.CustomSingleChildLayout = exports.Center = exports.Align = exports.Padding = exports.RotatedBox = exports.FractionalTranslation = exports.FittedBox = exports.CompositedTransformFollower = exports.CompositedTransformTarget = exports.Transform = exports.PhysicalShape = exports.PhysicalModel = exports.ClipPath = exports.ClipOval = exports.ClipRRect = exports.ClipRect = exports.CustomPaint = exports.BackdropFilter = exports.ShaderMask = exports.Opacity = exports.Directionality = void 0;
exports._RenderColoredBox = exports.ColoredBox = exports._StatefulBuilderState = exports.StatefulBuilder = exports.Builder = exports.KeyedSubtree = exports.IndexedSemantics = exports.ExcludeSemantics = exports.BlockSemantics = exports.MergeSemantics = exports.Semantics = exports.MetaData = exports.AbsorbPointer = exports.IgnorePointer = exports.RepaintBoundary = exports._RawMouseRegion = exports._MouseRegionState = exports.MouseRegion = exports._PointerListener = exports.Listener = exports.WidgetToRenderBoxAdapter = exports.DefaultAssetBundle = exports.RawImage = exports.RichText = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
class Directionality extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textDirection = namedParameters.textDirection;
        this.child = namedParameters.child;
        this.className = 'Directionality';
    }
}
exports.Directionality = Directionality;
class Opacity extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this.child = namedParameters.child;
        this.className = 'Opacity';
    }
}
exports.Opacity = Opacity;
class ShaderMask extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.shaderCallback = namedParameters.shaderCallback;
        this.blendMode = namedParameters.blendMode;
        this.child = namedParameters.child;
        this.className = 'ShaderMask';
    }
}
exports.ShaderMask = ShaderMask;
class BackdropFilter extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.filter = namedParameters.filter;
        this.child = namedParameters.child;
        this.className = 'BackdropFilter';
    }
}
exports.BackdropFilter = BackdropFilter;
class CustomPaint extends framework_1.SingleChildRenderObjectWidget {
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
exports.CustomPaint = CustomPaint;
class ClipRect extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipRect';
    }
}
exports.ClipRect = ClipRect;
class ClipRRect extends framework_1.SingleChildRenderObjectWidget {
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
exports.ClipRRect = ClipRRect;
class ClipOval extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipOval';
    }
}
exports.ClipOval = ClipOval;
class ClipPath extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.child = namedParameters.child;
        this.className = 'ClipPath';
    }
}
exports.ClipPath = ClipPath;
class PhysicalModel extends framework_1.SingleChildRenderObjectWidget {
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
exports.PhysicalModel = PhysicalModel;
class PhysicalShape extends framework_1.SingleChildRenderObjectWidget {
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
exports.PhysicalShape = PhysicalShape;
class Transform extends framework_1.SingleChildRenderObjectWidget {
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
exports.Transform = Transform;
class CompositedTransformTarget extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.link = namedParameters.link;
        this.child = namedParameters.child;
        this.className = 'CompositedTransformTarget';
    }
}
exports.CompositedTransformTarget = CompositedTransformTarget;
class CompositedTransformFollower extends framework_1.SingleChildRenderObjectWidget {
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
exports.CompositedTransformFollower = CompositedTransformFollower;
class FittedBox extends framework_1.SingleChildRenderObjectWidget {
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
exports.FittedBox = FittedBox;
class FractionalTranslation extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.translation = namedParameters.translation;
        this.transformHitTests = namedParameters.transformHitTests;
        this.child = namedParameters.child;
        this.className = 'FractionalTranslation';
    }
}
exports.FractionalTranslation = FractionalTranslation;
class RotatedBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.quarterTurns = namedParameters.quarterTurns;
        this.child = namedParameters.child;
        this.className = 'RotatedBox';
    }
}
exports.RotatedBox = RotatedBox;
class Padding extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this.child = namedParameters.child;
        this.className = 'Padding';
    }
}
exports.Padding = Padding;
class Align extends framework_1.SingleChildRenderObjectWidget {
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
exports.Align = Align;
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
exports.Center = Center;
class CustomSingleChildLayout extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.child = namedParameters.child;
        this.className = 'CustomSingleChildLayout';
    }
}
exports.CustomSingleChildLayout = CustomSingleChildLayout;
class LayoutId extends framework_1.ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.id = namedParameters.id;
        this.child = namedParameters.child;
        this.className = 'LayoutId';
    }
}
exports.LayoutId = LayoutId;
class CustomMultiChildLayout extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.children = namedParameters.children;
        this.className = 'CustomMultiChildLayout';
    }
}
exports.CustomMultiChildLayout = CustomMultiChildLayout;
class SizedBox extends framework_1.SingleChildRenderObjectWidget {
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
exports.SizedBox = SizedBox;
class ConstrainedBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.constraints = namedParameters.constraints;
        this.child = namedParameters.child;
        this.className = 'ConstrainedBox';
    }
}
exports.ConstrainedBox = ConstrainedBox;
class UnconstrainedBox extends framework_1.SingleChildRenderObjectWidget {
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
exports.UnconstrainedBox = UnconstrainedBox;
class FractionallySizedBox extends framework_1.SingleChildRenderObjectWidget {
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
exports.FractionallySizedBox = FractionallySizedBox;
class LimitedBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.maxWidth = namedParameters.maxWidth;
        this.maxHeight = namedParameters.maxHeight;
        this.child = namedParameters.child;
        this.className = 'LimitedBox';
    }
}
exports.LimitedBox = LimitedBox;
class OverflowBox extends framework_1.SingleChildRenderObjectWidget {
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
exports.OverflowBox = OverflowBox;
class SizedOverflowBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.alignment = namedParameters.alignment;
        this.child = namedParameters.child;
        this.className = 'SizedOverflowBox';
    }
}
exports.SizedOverflowBox = SizedOverflowBox;
class Offstage extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.offstage = namedParameters.offstage;
        this.child = namedParameters.child;
        this.className = 'Offstage';
    }
}
exports.Offstage = Offstage;
class _OffstageElement extends framework_1.SingleChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_OffstageElement';
    }
}
exports._OffstageElement = _OffstageElement;
class AspectRatio extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.aspectRatio = namedParameters.aspectRatio;
        this.child = namedParameters.child;
        this.className = 'AspectRatio';
    }
}
exports.AspectRatio = AspectRatio;
class IntrinsicWidth extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.stepWidth = namedParameters.stepWidth;
        this.stepHeight = namedParameters.stepHeight;
        this.child = namedParameters.child;
        this.className = 'IntrinsicWidth';
    }
}
exports.IntrinsicWidth = IntrinsicWidth;
class IntrinsicHeight extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'IntrinsicHeight';
    }
}
exports.IntrinsicHeight = IntrinsicHeight;
class Baseline extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.baseline = namedParameters.baseline;
        this.baselineType = namedParameters.baselineType;
        this.child = namedParameters.child;
        this.className = 'Baseline';
    }
}
exports.Baseline = Baseline;
class SliverToBoxAdapter extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'SliverToBoxAdapter';
    }
}
exports.SliverToBoxAdapter = SliverToBoxAdapter;
class SliverPadding extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverPadding';
    }
}
exports.SliverPadding = SliverPadding;
class ListBody extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.mainAxis = namedParameters.mainAxis;
        this.reverse = namedParameters.reverse;
        this.children = namedParameters.children;
        this.className = 'ListBody';
    }
}
exports.ListBody = ListBody;
class Stack extends framework_1.MultiChildRenderObjectWidget {
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
exports.Stack = Stack;
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
exports.IndexedStack = IndexedStack;
class Positioned extends framework_1.ParentDataWidget {
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
exports.Positioned = Positioned;
class PositionedDirectional extends framework_1.StatelessWidget {
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
exports.PositionedDirectional = PositionedDirectional;
class Flex extends framework_1.MultiChildRenderObjectWidget {
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
exports.Flex = Flex;
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
exports.Row = Row;
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
exports.Column = Column;
class Flexible extends framework_1.ParentDataWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.flex = namedParameters.flex;
        this.fit = namedParameters.fit;
        this.child = namedParameters.child;
        this.className = 'Flexible';
    }
}
exports.Flexible = Flexible;
class Expanded extends Flexible {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['flex'] = namedParameters.flex;
        this['child'] = namedParameters.child;
        this.className = 'Expanded';
    }
}
exports.Expanded = Expanded;
class Wrap extends framework_1.MultiChildRenderObjectWidget {
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
exports.Wrap = Wrap;
class Flow extends framework_1.MultiChildRenderObjectWidget {
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
exports.Flow = Flow;
class RichText extends framework_1.MultiChildRenderObjectWidget {
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
        this.className = 'RichText';
    }
}
exports.RichText = RichText;
class RawImage extends framework_1.LeafRenderObjectWidget {
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
exports.RawImage = RawImage;
class DefaultAssetBundle extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.bundle = namedParameters.bundle;
        this.child = namedParameters.child;
        this.className = 'DefaultAssetBundle';
    }
}
exports.DefaultAssetBundle = DefaultAssetBundle;
class WidgetToRenderBoxAdapter extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.renderBox = namedParameters.renderBox;
        this.onBuild = namedParameters.onBuild;
        this.className = 'WidgetToRenderBoxAdapter';
    }
}
exports.WidgetToRenderBoxAdapter = WidgetToRenderBoxAdapter;
class Listener extends framework_1.StatelessWidget {
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
exports.Listener = Listener;
class _PointerListener extends framework_1.SingleChildRenderObjectWidget {
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
exports._PointerListener = _PointerListener;
class MouseRegion extends framework_1.StatefulWidget {
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
exports.MouseRegion = MouseRegion;
class _MouseRegionState extends framework_1.State {
}
exports._MouseRegionState = _MouseRegionState;
class _RawMouseRegion extends framework_1.SingleChildRenderObjectWidget {
    constructor(owner) {
        super();
        this.owner = owner;
        this.className = '_RawMouseRegion';
    }
}
exports._RawMouseRegion = _RawMouseRegion;
class RepaintBoundary extends framework_1.SingleChildRenderObjectWidget {
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
exports.RepaintBoundary = RepaintBoundary;
class IgnorePointer extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.child = namedParameters.child;
        this.className = 'IgnorePointer';
    }
}
exports.IgnorePointer = IgnorePointer;
class AbsorbPointer extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.absorbing = namedParameters.absorbing;
        this.child = namedParameters.child;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'AbsorbPointer';
    }
}
exports.AbsorbPointer = AbsorbPointer;
class MetaData extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.metaData = namedParameters.metaData;
        this.behavior = namedParameters.behavior;
        this.child = namedParameters.child;
        this.className = 'MetaData';
    }
}
exports.MetaData = MetaData;
class Semantics extends framework_1.SingleChildRenderObjectWidget {
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
exports.Semantics = Semantics;
class MergeSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'MergeSemantics';
    }
}
exports.MergeSemantics = MergeSemantics;
class BlockSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.blocking = namedParameters.blocking;
        this.child = namedParameters.child;
        this.className = 'BlockSemantics';
    }
}
exports.BlockSemantics = BlockSemantics;
class ExcludeSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.excluding = namedParameters.excluding;
        this.child = namedParameters.child;
        this.className = 'ExcludeSemantics';
    }
}
exports.ExcludeSemantics = ExcludeSemantics;
class IndexedSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.index = namedParameters.index;
        this.child = namedParameters.child;
        this.className = 'IndexedSemantics';
    }
}
exports.IndexedSemantics = IndexedSemantics;
class KeyedSubtree extends framework_1.StatelessWidget {
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
exports.KeyedSubtree = KeyedSubtree;
class Builder extends framework_1.StatelessWidget {
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
exports.Builder = Builder;
class StatefulBuilder extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.className = 'StatefulBuilder';
    }
}
exports.StatefulBuilder = StatefulBuilder;
class _StatefulBuilderState extends framework_1.State {
}
exports._StatefulBuilderState = _StatefulBuilderState;
class ColoredBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.child = namedParameters.child;
        this.key = namedParameters.key;
        this.className = 'ColoredBox';
    }
}
exports.ColoredBox = ColoredBox;
class _RenderColoredBox extends proxy_box_1.RenderProxyBoxWithHitTestBehavior {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.className = '_RenderColoredBox';
    }
}
exports._RenderColoredBox = _RenderColoredBox;
