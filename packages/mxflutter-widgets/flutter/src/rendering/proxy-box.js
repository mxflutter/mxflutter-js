//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Listenable } from '../foundation/change-notifier';
import { RenderObjectWithChildMixin } from './object';
import { RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class RenderProxyBox extends RenderBox {
    constructor(child) {
        super();
        this['child'] = child;
        this.className = 'RenderProxyBox';
    }
}
export { RenderProxyBox };
class RenderProxyBoxMixin extends MXDartClass {
}
export { RenderProxyBoxMixin };
var HitTestBehavior;
(function (HitTestBehavior) {
    HitTestBehavior["deferToChild"] = "{ \"_name\": \"HitTestBehavior.deferToChild\", \"index\": 0 }";
    HitTestBehavior["opaque"] = "{ \"_name\": \"HitTestBehavior.opaque\", \"index\": 1 }";
    HitTestBehavior["translucent"] = "{ \"_name\": \"HitTestBehavior.translucent\", \"index\": 2 }";
})(HitTestBehavior || (HitTestBehavior = {}));
export { HitTestBehavior };
class RenderProxyBoxWithHitTestBehavior extends RenderProxyBox {
}
export { RenderProxyBoxWithHitTestBehavior };
class RenderConstrainedBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.className = 'RenderConstrainedBox';
    }
}
export { RenderConstrainedBox };
class RenderLimitedBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.maxWidth = namedParameters.maxWidth;
        this.maxHeight = namedParameters.maxHeight;
        this.className = 'RenderLimitedBox';
    }
}
export { RenderLimitedBox };
class RenderAspectRatio extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.aspectRatio = namedParameters.aspectRatio;
        this.className = 'RenderAspectRatio';
    }
}
export { RenderAspectRatio };
class RenderIntrinsicWidth extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.stepWidth = namedParameters.stepWidth;
        this.stepHeight = namedParameters.stepHeight;
        this['child'] = namedParameters.child;
        this.className = 'RenderIntrinsicWidth';
    }
}
export { RenderIntrinsicWidth };
class RenderIntrinsicHeight extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderIntrinsicHeight';
    }
}
export { RenderIntrinsicHeight };
class RenderOpacity extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['child'] = namedParameters.child;
        this.className = 'RenderOpacity';
    }
}
export { RenderOpacity };
class RenderAnimatedOpacityMixin extends RenderObjectWithChildMixin {
}
export { RenderAnimatedOpacityMixin };
class RenderAnimatedOpacity extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['opacity'] = namedParameters.opacity;
        this['alwaysIncludeSemantics'] = namedParameters.alwaysIncludeSemantics;
        this['child'] = namedParameters.child;
        this.className = 'RenderAnimatedOpacity';
    }
}
export { RenderAnimatedOpacity };
class RenderShaderMask extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.shaderCallback = namedParameters.shaderCallback;
        this.blendMode = namedParameters.blendMode;
        this.className = 'RenderShaderMask';
    }
}
export { RenderShaderMask };
class RenderBackdropFilter extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.filter = namedParameters.filter;
        this.className = 'RenderBackdropFilter';
    }
}
export { RenderBackdropFilter };
class CustomClipper extends Listenable {
}
export { CustomClipper };
class ShapeBorderClipper extends CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.shape = namedParameters.shape;
        this.textDirection = namedParameters.textDirection;
        this.className = 'ShapeBorderClipper';
    }
}
export { ShapeBorderClipper };
class _RenderCustomClip extends RenderProxyBox {
}
export { _RenderCustomClip };
class RenderClipRect extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['clipper'] = namedParameters.clipper;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this.className = 'RenderClipRect';
    }
}
export { RenderClipRect };
class RenderClipRRect extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.borderRadius = namedParameters.borderRadius;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderClipRRect';
    }
}
export { RenderClipRRect };
class RenderClipOval extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderClipOval';
    }
}
export { RenderClipOval };
class RenderClipPath extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['clipper'] = namedParameters.clipper;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this.className = 'RenderClipPath';
    }
}
export { RenderClipPath };
class _RenderPhysicalModelBase extends _RenderCustomClip {
}
export { _RenderPhysicalModelBase };
class RenderPhysicalModel extends _RenderPhysicalModelBase {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.borderRadius = namedParameters.borderRadius;
        this.elevation = namedParameters.elevation;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.className = 'RenderPhysicalModel';
    }
}
export { RenderPhysicalModel };
class RenderPhysicalShape extends _RenderPhysicalModelBase {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['clipper'] = namedParameters.clipper;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this['elevation'] = namedParameters.elevation;
        this['color'] = namedParameters.color;
        this['shadowColor'] = namedParameters.shadowColor;
        this.className = 'RenderPhysicalShape';
    }
}
export { RenderPhysicalShape };
var DecorationPosition;
(function (DecorationPosition) {
    DecorationPosition["background"] = "{ \"_name\": \"DecorationPosition.background\", \"index\": 0 }";
    DecorationPosition["foreground"] = "{ \"_name\": \"DecorationPosition.foreground\", \"index\": 1 }";
})(DecorationPosition || (DecorationPosition = {}));
export { DecorationPosition };
class RenderDecoratedBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.decoration = namedParameters.decoration;
        this.position = namedParameters.position;
        this.configuration = namedParameters.configuration;
        this['child'] = namedParameters.child;
        this.className = 'RenderDecoratedBox';
    }
}
export { RenderDecoratedBox };
class RenderTransform extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.transform = namedParameters.transform;
        this.origin = namedParameters.origin;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.transformHitTests = namedParameters.transformHitTests;
        this['child'] = namedParameters.child;
        this.className = 'RenderTransform';
    }
}
export { RenderTransform };
class RenderFittedBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.fit = namedParameters.fit;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this['child'] = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderFittedBox';
    }
}
export { RenderFittedBox };
class RenderFractionalTranslation extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.translation = namedParameters.translation;
        this.transformHitTests = namedParameters.transformHitTests;
        this['child'] = namedParameters.child;
        this.className = 'RenderFractionalTranslation';
    }
}
export { RenderFractionalTranslation };
class RenderPointerListener extends RenderProxyBoxWithHitTestBehavior {
    constructor(namedParameters = {}) {
        super();
        this.onPointerDown = namedParameters.onPointerDown;
        this.onPointerMove = namedParameters.onPointerMove;
        this.onPointerUp = namedParameters.onPointerUp;
        this.onPointerCancel = namedParameters.onPointerCancel;
        this.onPointerSignal = namedParameters.onPointerSignal;
        this.behavior = namedParameters.behavior;
        this['child'] = namedParameters.child;
        this.className = 'RenderPointerListener';
    }
}
export { RenderPointerListener };
class RenderMouseRegion extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.onEnter = namedParameters.onEnter;
        this.onHover = namedParameters.onHover;
        this.onExit = namedParameters.onExit;
        this.cursor = namedParameters.cursor;
        this.opaque = namedParameters.opaque;
        this['child'] = namedParameters.child;
        this.className = 'RenderMouseRegion';
    }
}
export { RenderMouseRegion };
class RenderRepaintBoundary extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderRepaintBoundary';
    }
}
export { RenderRepaintBoundary };
class RenderIgnorePointer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'RenderIgnorePointer';
    }
}
export { RenderIgnorePointer };
class RenderOffstage extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.offstage = namedParameters.offstage;
        this['child'] = namedParameters.child;
        this.className = 'RenderOffstage';
    }
}
export { RenderOffstage };
class RenderAbsorbPointer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.absorbing = namedParameters.absorbing;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'RenderAbsorbPointer';
    }
}
export { RenderAbsorbPointer };
class RenderMetaData extends RenderProxyBoxWithHitTestBehavior {
    constructor(namedParameters = {}) {
        super();
        this.metaData = namedParameters.metaData;
        this.behavior = namedParameters.behavior;
        this['child'] = namedParameters.child;
        this.className = 'RenderMetaData';
    }
}
export { RenderMetaData };
class RenderSemanticsGestureHandler extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.onTap = namedParameters.onTap;
        this.onLongPress = namedParameters.onLongPress;
        this.onHorizontalDragUpdate = namedParameters.onHorizontalDragUpdate;
        this.onVerticalDragUpdate = namedParameters.onVerticalDragUpdate;
        this.scrollFactor = namedParameters.scrollFactor;
        this.className = 'RenderSemanticsGestureHandler';
    }
}
export { RenderSemanticsGestureHandler };
class RenderSemanticsAnnotations extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.container = namedParameters.container;
        this.explicitChildNodes = namedParameters.explicitChildNodes;
        this.excludeSemantics = namedParameters.excludeSemantics;
        this.enabled = namedParameters.enabled;
        this.checked = namedParameters.checked;
        this.toggled = namedParameters.toggled;
        this.selected = namedParameters.selected;
        this.button = namedParameters.button;
        this.link = namedParameters.link;
        this.header = namedParameters.header;
        this.textField = namedParameters.textField;
        this.readOnly = namedParameters.readOnly;
        this.focusable = namedParameters.focusable;
        this.focused = namedParameters.focused;
        this.inMutuallyExclusiveGroup = namedParameters.inMutuallyExclusiveGroup;
        this.obscured = namedParameters.obscured;
        this.multiline = namedParameters.multiline;
        this.scopesRoute = namedParameters.scopesRoute;
        this.namesRoute = namedParameters.namesRoute;
        this.hidden = namedParameters.hidden;
        this.image = namedParameters.image;
        this.liveRegion = namedParameters.liveRegion;
        this.maxValueLength = namedParameters.maxValueLength;
        this.currentValueLength = namedParameters.currentValueLength;
        this.label = namedParameters.label;
        this.value = namedParameters.value;
        this.increasedValue = namedParameters.increasedValue;
        this.decreasedValue = namedParameters.decreasedValue;
        this.hint = namedParameters.hint;
        this.hintOverrides = namedParameters.hintOverrides;
        this.textDirection = namedParameters.textDirection;
        this.sortKey = namedParameters.sortKey;
        this.onTap = namedParameters.onTap;
        this.onDismiss = namedParameters.onDismiss;
        this.onLongPress = namedParameters.onLongPress;
        this.onScrollLeft = namedParameters.onScrollLeft;
        this.onScrollRight = namedParameters.onScrollRight;
        this.onScrollUp = namedParameters.onScrollUp;
        this.onScrollDown = namedParameters.onScrollDown;
        this.onIncrease = namedParameters.onIncrease;
        this.onDecrease = namedParameters.onDecrease;
        this.onCopy = namedParameters.onCopy;
        this.onCut = namedParameters.onCut;
        this.onPaste = namedParameters.onPaste;
        this.onMoveCursorForwardByCharacter = namedParameters.onMoveCursorForwardByCharacter;
        this.onMoveCursorBackwardByCharacter = namedParameters.onMoveCursorBackwardByCharacter;
        this.onMoveCursorForwardByWord = namedParameters.onMoveCursorForwardByWord;
        this.onMoveCursorBackwardByWord = namedParameters.onMoveCursorBackwardByWord;
        this.onSetSelection = namedParameters.onSetSelection;
        this.onDidGainAccessibilityFocus = namedParameters.onDidGainAccessibilityFocus;
        this.onDidLoseAccessibilityFocus = namedParameters.onDidLoseAccessibilityFocus;
        this.customSemanticsActions = namedParameters.customSemanticsActions;
        this.className = 'RenderSemanticsAnnotations';
    }
}
export { RenderSemanticsAnnotations };
class RenderBlockSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.blocking = namedParameters.blocking;
        this.className = 'RenderBlockSemantics';
    }
}
export { RenderBlockSemantics };
class RenderMergeSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderMergeSemantics';
    }
}
export { RenderMergeSemantics };
class RenderExcludeSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.excluding = namedParameters.excluding;
        this.className = 'RenderExcludeSemantics';
    }
}
export { RenderExcludeSemantics };
class RenderIndexedSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.index = namedParameters.index;
        this.className = 'RenderIndexedSemantics';
    }
}
export { RenderIndexedSemantics };
class RenderLeaderLayer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.link = namedParameters.link;
        this['child'] = namedParameters.child;
        this.className = 'RenderLeaderLayer';
    }
}
export { RenderLeaderLayer };
class RenderFollowerLayer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.link = namedParameters.link;
        this.showWhenUnlinked = namedParameters.showWhenUnlinked;
        this.offset = namedParameters.offset;
        this['child'] = namedParameters.child;
        this.className = 'RenderFollowerLayer';
    }
}
export { RenderFollowerLayer };
class RenderAnnotatedRegion extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.sized = namedParameters.sized;
        this['child'] = namedParameters.child;
        this.className = 'RenderAnnotatedRegion';
    }
}
export { RenderAnnotatedRegion };
