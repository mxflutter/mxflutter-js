//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class RenderShiftedBox extends RenderBox {
}
export { RenderShiftedBox };
class RenderPadding extends RenderShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this.padding = namedParameters.padding;
        this.textDirection = namedParameters.textDirection;
        this['child'] = namedParameters.child;
        this.className = 'RenderPadding';
    }
}
export { RenderPadding };
class RenderAligningShiftedBox extends RenderShiftedBox {
}
export { RenderAligningShiftedBox };
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
export { RenderPositionedBox };
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
export { RenderConstrainedOverflowBox };
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
export { RenderUnconstrainedBox };
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
export { RenderSizedOverflowBox };
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
export { RenderFractionallySizedOverflowBox };
class SingleChildLayoutDelegate extends MXDartClass {
}
export { SingleChildLayoutDelegate };
class RenderCustomSingleChildLayoutBox extends RenderShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.delegate = namedParameters.delegate;
        this.className = 'RenderCustomSingleChildLayoutBox';
    }
}
export { RenderCustomSingleChildLayoutBox };
class RenderBaseline extends RenderShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.baseline = namedParameters.baseline;
        this.baselineType = namedParameters.baselineType;
        this.className = 'RenderBaseline';
    }
}
export { RenderBaseline };
