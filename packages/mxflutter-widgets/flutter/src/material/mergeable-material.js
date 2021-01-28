//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderListBody } from '../rendering/list-body';
import { ListBody } from '../widgets/basic';
import { StatefulWidget$, State$, GlobalKey } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class MergeableMaterialItem extends MXDartClass {
}
export { MergeableMaterialItem };
class MaterialSlice extends MergeableMaterialItem {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'MaterialSlice';
    }
}
export { MaterialSlice };
class MaterialGap extends MergeableMaterialItem {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.className = 'MaterialGap';
    }
}
export { MaterialGap };
class MergeableMaterial extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.mainAxis = namedParameters.mainAxis;
        this.elevation = namedParameters.elevation;
        this.hasDividers = namedParameters.hasDividers;
        this.children = namedParameters.children;
        this.dividerColor = namedParameters.dividerColor;
        this.className = 'MergeableMaterial';
    }
}
export { MergeableMaterial };
class _AnimationTuple extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.controller = namedParameters.controller;
        this.startAnimation = namedParameters.startAnimation;
        this.endAnimation = namedParameters.endAnimation;
        this.gapAnimation = namedParameters.gapAnimation;
        this.gapStart = namedParameters.gapStart;
        this.className = '_AnimationTuple';
    }
}
export { _AnimationTuple };
class _MergeableMaterialState extends State$ {
}
export { _MergeableMaterialState };
class _MergeableMaterialSliceKey extends GlobalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = '_MergeableMaterialSliceKey';
    }
}
export { _MergeableMaterialSliceKey };
class _MergeableMaterialListBody extends ListBody {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.mainAxis = namedParameters.mainAxis;
        this.items = namedParameters.items;
        this.boxShadows = namedParameters.boxShadows;
        this.className = '_MergeableMaterialListBody';
    }
}
export { _MergeableMaterialListBody };
class _RenderMergeableMaterialListBody extends RenderListBody {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.axisDirection = namedParameters.axisDirection;
        this.boxShadows = namedParameters.boxShadows;
        this.className = '_RenderMergeableMaterialListBody';
    }
}
export { _RenderMergeableMaterialListBody };
