"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderAnnotatedRegion = exports.RenderFollowerLayer = exports.RenderLeaderLayer = exports.RenderIndexedSemantics = exports.RenderExcludeSemantics = exports.RenderMergeSemantics = exports.RenderBlockSemantics = exports.RenderSemanticsAnnotations = exports.RenderSemanticsGestureHandler = exports.RenderMetaData = exports.RenderAbsorbPointer = exports.RenderOffstage = exports.RenderIgnorePointer = exports.RenderRepaintBoundary = exports.RenderMouseRegion = exports.RenderPointerListener = exports.RenderFractionalTranslation = exports.RenderFittedBox = exports.RenderTransform = exports.RenderDecoratedBox = exports.DecorationPosition = exports.RenderPhysicalShape = exports.RenderPhysicalModel = exports._RenderPhysicalModelBase = exports.RenderClipPath = exports.RenderClipOval = exports.RenderClipRRect = exports.RenderClipRect = exports._RenderCustomClip = exports.ShapeBorderClipper = exports.CustomClipper = exports.RenderBackdropFilter = exports.RenderShaderMask = exports.RenderAnimatedOpacity = exports.RenderAnimatedOpacityMixin = exports.RenderOpacity = exports.RenderIntrinsicHeight = exports.RenderIntrinsicWidth = exports.RenderAspectRatio = exports.RenderLimitedBox = exports.RenderConstrainedBox = exports.RenderProxyBoxWithHitTestBehavior = exports.HitTestBehavior = exports.RenderProxyBoxMixin = exports.RenderProxyBox = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const object_1 = require("./object");
const box_1 = require("./box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RenderProxyBox extends box_1.RenderBox {
    constructor(child) {
        super();
        this['child'] = child;
        this.className = 'RenderProxyBox';
    }
}
exports.RenderProxyBox = RenderProxyBox;
class RenderProxyBoxMixin extends mxflutter_base_1.MXDartClass {
}
exports.RenderProxyBoxMixin = RenderProxyBoxMixin;
var HitTestBehavior;
(function (HitTestBehavior) {
    HitTestBehavior["deferToChild"] = "{ \"_name\": \"HitTestBehavior.deferToChild\", \"index\": 0 }";
    HitTestBehavior["opaque"] = "{ \"_name\": \"HitTestBehavior.opaque\", \"index\": 1 }";
    HitTestBehavior["translucent"] = "{ \"_name\": \"HitTestBehavior.translucent\", \"index\": 2 }";
})(HitTestBehavior || (HitTestBehavior = {}));
exports.HitTestBehavior = HitTestBehavior;
;
class RenderProxyBoxWithHitTestBehavior extends RenderProxyBox {
}
exports.RenderProxyBoxWithHitTestBehavior = RenderProxyBoxWithHitTestBehavior;
class RenderConstrainedBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.additionalConstraints = namedParameters.additionalConstraints;
        this.className = 'RenderConstrainedBox';
    }
}
exports.RenderConstrainedBox = RenderConstrainedBox;
class RenderLimitedBox extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.maxWidth = namedParameters.maxWidth;
        this.maxHeight = namedParameters.maxHeight;
        this.className = 'RenderLimitedBox';
    }
}
exports.RenderLimitedBox = RenderLimitedBox;
class RenderAspectRatio extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.aspectRatio = namedParameters.aspectRatio;
        this.className = 'RenderAspectRatio';
    }
}
exports.RenderAspectRatio = RenderAspectRatio;
class RenderIntrinsicWidth extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.stepWidth = namedParameters.stepWidth;
        this.stepHeight = namedParameters.stepHeight;
        this['child'] = namedParameters.child;
        this.className = 'RenderIntrinsicWidth';
    }
}
exports.RenderIntrinsicWidth = RenderIntrinsicWidth;
class RenderIntrinsicHeight extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderIntrinsicHeight';
    }
}
exports.RenderIntrinsicHeight = RenderIntrinsicHeight;
class RenderOpacity extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['child'] = namedParameters.child;
        this.className = 'RenderOpacity';
    }
}
exports.RenderOpacity = RenderOpacity;
class RenderAnimatedOpacityMixin extends object_1.RenderObjectWithChildMixin {
}
exports.RenderAnimatedOpacityMixin = RenderAnimatedOpacityMixin;
class RenderAnimatedOpacity extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['opacity'] = namedParameters.opacity;
        this['alwaysIncludeSemantics'] = namedParameters.alwaysIncludeSemantics;
        this['child'] = namedParameters.child;
        this.className = 'RenderAnimatedOpacity';
    }
}
exports.RenderAnimatedOpacity = RenderAnimatedOpacity;
class RenderShaderMask extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.shaderCallback = namedParameters.shaderCallback;
        this.blendMode = namedParameters.blendMode;
        this.className = 'RenderShaderMask';
    }
}
exports.RenderShaderMask = RenderShaderMask;
class RenderBackdropFilter extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.filter = namedParameters.filter;
        this.className = 'RenderBackdropFilter';
    }
}
exports.RenderBackdropFilter = RenderBackdropFilter;
class CustomClipper extends change_notifier_1.Listenable {
}
exports.CustomClipper = CustomClipper;
class ShapeBorderClipper extends CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.shape = namedParameters.shape;
        this.textDirection = namedParameters.textDirection;
        this.className = 'ShapeBorderClipper';
    }
}
exports.ShapeBorderClipper = ShapeBorderClipper;
class _RenderCustomClip extends RenderProxyBox {
}
exports._RenderCustomClip = _RenderCustomClip;
class RenderClipRect extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['clipper'] = namedParameters.clipper;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this.className = 'RenderClipRect';
    }
}
exports.RenderClipRect = RenderClipRect;
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
exports.RenderClipRRect = RenderClipRRect;
class RenderClipOval extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.clipper = namedParameters.clipper;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderClipOval';
    }
}
exports.RenderClipOval = RenderClipOval;
class RenderClipPath extends _RenderCustomClip {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['clipper'] = namedParameters.clipper;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this.className = 'RenderClipPath';
    }
}
exports.RenderClipPath = RenderClipPath;
class _RenderPhysicalModelBase extends _RenderCustomClip {
}
exports._RenderPhysicalModelBase = _RenderPhysicalModelBase;
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
exports.RenderPhysicalModel = RenderPhysicalModel;
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
exports.RenderPhysicalShape = RenderPhysicalShape;
var DecorationPosition;
(function (DecorationPosition) {
    DecorationPosition["background"] = "{ \"_name\": \"DecorationPosition.background\", \"index\": 0 }";
    DecorationPosition["foreground"] = "{ \"_name\": \"DecorationPosition.foreground\", \"index\": 1 }";
})(DecorationPosition || (DecorationPosition = {}));
exports.DecorationPosition = DecorationPosition;
;
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
exports.RenderDecoratedBox = RenderDecoratedBox;
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
exports.RenderTransform = RenderTransform;
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
exports.RenderFittedBox = RenderFittedBox;
class RenderFractionalTranslation extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.translation = namedParameters.translation;
        this.transformHitTests = namedParameters.transformHitTests;
        this['child'] = namedParameters.child;
        this.className = 'RenderFractionalTranslation';
    }
}
exports.RenderFractionalTranslation = RenderFractionalTranslation;
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
exports.RenderPointerListener = RenderPointerListener;
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
exports.RenderMouseRegion = RenderMouseRegion;
class RenderRepaintBoundary extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderRepaintBoundary';
    }
}
exports.RenderRepaintBoundary = RenderRepaintBoundary;
class RenderIgnorePointer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'RenderIgnorePointer';
    }
}
exports.RenderIgnorePointer = RenderIgnorePointer;
class RenderOffstage extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.offstage = namedParameters.offstage;
        this['child'] = namedParameters.child;
        this.className = 'RenderOffstage';
    }
}
exports.RenderOffstage = RenderOffstage;
class RenderAbsorbPointer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.absorbing = namedParameters.absorbing;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'RenderAbsorbPointer';
    }
}
exports.RenderAbsorbPointer = RenderAbsorbPointer;
class RenderMetaData extends RenderProxyBoxWithHitTestBehavior {
    constructor(namedParameters = {}) {
        super();
        this.metaData = namedParameters.metaData;
        this.behavior = namedParameters.behavior;
        this['child'] = namedParameters.child;
        this.className = 'RenderMetaData';
    }
}
exports.RenderMetaData = RenderMetaData;
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
exports.RenderSemanticsGestureHandler = RenderSemanticsGestureHandler;
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
exports.RenderSemanticsAnnotations = RenderSemanticsAnnotations;
class RenderBlockSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.blocking = namedParameters.blocking;
        this.className = 'RenderBlockSemantics';
    }
}
exports.RenderBlockSemantics = RenderBlockSemantics;
class RenderMergeSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderMergeSemantics';
    }
}
exports.RenderMergeSemantics = RenderMergeSemantics;
class RenderExcludeSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.excluding = namedParameters.excluding;
        this.className = 'RenderExcludeSemantics';
    }
}
exports.RenderExcludeSemantics = RenderExcludeSemantics;
class RenderIndexedSemantics extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.index = namedParameters.index;
        this.className = 'RenderIndexedSemantics';
    }
}
exports.RenderIndexedSemantics = RenderIndexedSemantics;
class RenderLeaderLayer extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.link = namedParameters.link;
        this['child'] = namedParameters.child;
        this.className = 'RenderLeaderLayer';
    }
}
exports.RenderLeaderLayer = RenderLeaderLayer;
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
exports.RenderFollowerLayer = RenderFollowerLayer;
class RenderAnnotatedRegion extends RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.sized = namedParameters.sized;
        this['child'] = namedParameters.child;
        this.className = 'RenderAnnotatedRegion';
    }
}
exports.RenderAnnotatedRegion = RenderAnnotatedRegion;
