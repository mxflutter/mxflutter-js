//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PopupRoute } from '../widgets/routes';
import { ParametricCurve } from '../animation/curves';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { StatefulWidget$, State$ } from '../widgets/framework';
class BottomSheet extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animationController = namedParameters.animationController;
        this.enableDrag = namedParameters.enableDrag;
        this.onDragStart = namedParameters.onDragStart;
        this.onDragEnd = namedParameters.onDragEnd;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.onClosing = namedParameters.onClosing;
        this.builder = namedParameters.builder;
        this.className = 'BottomSheet';
    }
}
export { BottomSheet };
class _BottomSheetState extends State$ {
}
export { _BottomSheetState };
class _ModalBottomSheetLayout extends SingleChildLayoutDelegate {
    constructor(progress, isScrollControlled) {
        super();
        this.progress = progress;
        this.isScrollControlled = isScrollControlled;
        this.className = '_ModalBottomSheetLayout';
    }
}
export { _ModalBottomSheetLayout };
class _ModalBottomSheet extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.isScrollControlled = namedParameters.isScrollControlled;
        this.enableDrag = namedParameters.enableDrag;
        this.className = '_ModalBottomSheet';
    }
}
export { _ModalBottomSheet };
class _ModalBottomSheetState extends State$ {
}
export { _ModalBottomSheetState };
class _ModalBottomSheetRoute extends PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.theme = namedParameters.theme;
        this.barrierLabel = namedParameters.barrierLabel;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.modalBarrierColor = namedParameters.modalBarrierColor;
        this.isDismissible = namedParameters.isDismissible;
        this.enableDrag = namedParameters.enableDrag;
        this.isScrollControlled = namedParameters.isScrollControlled;
        this.settings = namedParameters.settings;
        this.className = '_ModalBottomSheetRoute';
    }
}
export { _ModalBottomSheetRoute };
class _BottomSheetSuspendedCurve extends ParametricCurve {
    constructor(startingPoint, namedParameters = {}) {
        super();
        this.startingPoint = startingPoint;
        this.curve = namedParameters.curve;
        this.className = '_BottomSheetSuspendedCurve';
    }
}
export { _BottomSheetSuspendedCurve };
