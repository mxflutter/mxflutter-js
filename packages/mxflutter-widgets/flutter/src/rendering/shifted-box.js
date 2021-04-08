"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderBaseline = exports.RenderCustomSingleChildLayoutBox = exports.SingleChildLayoutDelegate = exports.RenderFractionallySizedOverflowBox = exports.RenderSizedOverflowBox = exports.RenderUnconstrainedBox = exports.RenderConstrainedOverflowBox = exports.RenderPositionedBox = exports.RenderAligningShiftedBox = exports.RenderPadding = exports.RenderShiftedBox = void 0;
const box_1 = require("./box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RenderShiftedBox extends box_1.RenderBox {
}
exports.RenderShiftedBox = RenderShiftedBox;
class RenderPadding extends RenderShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this.padding = namedParameters.padding;
        this.textDirection = namedParameters.textDirection;
        this['child'] = namedParameters.child;
        this.className = 'RenderPadding';
    }
}
exports.RenderPadding = RenderPadding;
class RenderAligningShiftedBox extends RenderShiftedBox {
}
exports.RenderAligningShiftedBox = RenderAligningShiftedBox;
class RenderPositionedBox extends RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.widthFactor = namedParameters.widthFactor;
        this.heightFactor = namedParameters.heightFactor;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.className = 'RenderPositionedBox';
    }
}
exports.RenderPositionedBox = RenderPositionedBox;
class RenderConstrainedOverflowBox extends RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.minWidth = namedParameters.minWidth;
        this.maxWidth = namedParameters.maxWidth;
        this.minHeight = namedParameters.minHeight;
        this.maxHeight = namedParameters.maxHeight;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.className = 'RenderConstrainedOverflowBox';
    }
}
exports.RenderConstrainedOverflowBox = RenderConstrainedOverflowBox;
class RenderUnconstrainedBox extends RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.constrainedAxis = namedParameters.constrainedAxis;
        this['child'] = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderUnconstrainedBox';
    }
}
exports.RenderUnconstrainedBox = RenderUnconstrainedBox;
class RenderSizedOverflowBox extends RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.requestedSize = namedParameters.requestedSize;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.className = 'RenderSizedOverflowBox';
    }
}
exports.RenderSizedOverflowBox = RenderSizedOverflowBox;
class RenderFractionallySizedOverflowBox extends RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.widthFactor = namedParameters.widthFactor;
        this.heightFactor = namedParameters.heightFactor;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this.className = 'RenderFractionallySizedOverflowBox';
    }
}
exports.RenderFractionallySizedOverflowBox = RenderFractionallySizedOverflowBox;
class SingleChildLayoutDelegate extends mxflutter_base_1.MXDartClass {
}
exports.SingleChildLayoutDelegate = SingleChildLayoutDelegate;
class RenderCustomSingleChildLayoutBox extends RenderShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.delegate = namedParameters.delegate;
        this.className = 'RenderCustomSingleChildLayoutBox';
    }
}
exports.RenderCustomSingleChildLayoutBox = RenderCustomSingleChildLayoutBox;
class RenderBaseline extends RenderShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.baseline = namedParameters.baseline;
        this.baselineType = namedParameters.baselineType;
        this.className = 'RenderBaseline';
    }
}
exports.RenderBaseline = RenderBaseline;
