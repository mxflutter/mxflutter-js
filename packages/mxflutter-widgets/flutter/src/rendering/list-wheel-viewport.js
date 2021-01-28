//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ListWheelChildManager extends MXDartClass {
}
export { ListWheelChildManager };
class ListWheelParentData extends ContainerBoxParentData {
}
export { ListWheelParentData };
class RenderListWheelViewport extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.childManager = namedParameters.childManager;
        this.offset = namedParameters.offset;
        this.diameterRatio = namedParameters.diameterRatio;
        this.perspective = namedParameters.perspective;
        this.offAxisFraction = namedParameters.offAxisFraction;
        this.useMagnifier = namedParameters.useMagnifier;
        this.magnification = namedParameters.magnification;
        this.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        this.itemExtent = namedParameters.itemExtent;
        this.squeeze = namedParameters.squeeze;
        this.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        this.clipBehavior = namedParameters.clipBehavior;
        this['children'] = namedParameters.children;
        this.className = 'RenderListWheelViewport';
    }
    static get defaultDiameterRatio() {
        return 2.0;
    }
    static get defaultPerspective() {
        return 0.003;
    }
    static get diameterRatioZeroMessage() {
        return "You can't set a diameterRatio of 0 or of a negative number. It would imply a cylinder of 0 in diameter in which case nothing will be drawn.";
    }
    static get perspectiveTooHighMessage() {
        return 'A perspective too high will be clipped in the z-axis and therefore not renderable. Value must be between 0 and 0.01.';
    }
    static get clipBehaviorAndRenderChildrenOutsideViewportConflict() {
        return 'Cannot renderChildrenOutsideViewport and clip since children rendered outside will be clipped anyway.';
    }
}
export { RenderListWheelViewport };
