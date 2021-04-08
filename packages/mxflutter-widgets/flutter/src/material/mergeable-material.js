"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderMergeableMaterialListBody = exports._MergeableMaterialListBody = exports._MergeableMaterialSliceKey = exports._MergeableMaterialState = exports._AnimationTuple = exports.MergeableMaterial = exports.MaterialGap = exports.MaterialSlice = exports.MergeableMaterialItem = void 0;
const list_body_1 = require("../rendering/list-body");
const basic_1 = require("../widgets/basic");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MergeableMaterialItem extends mxflutter_base_1.MXDartClass {
}
exports.MergeableMaterialItem = MergeableMaterialItem;
class MaterialSlice extends MergeableMaterialItem {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'MaterialSlice';
    }
}
exports.MaterialSlice = MaterialSlice;
class MaterialGap extends MergeableMaterialItem {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.className = 'MaterialGap';
    }
}
exports.MaterialGap = MaterialGap;
class MergeableMaterial extends framework_1.StatefulWidget {
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
exports.MergeableMaterial = MergeableMaterial;
class _AnimationTuple extends mxflutter_base_1.MXDartClass {
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
exports._AnimationTuple = _AnimationTuple;
class _MergeableMaterialState extends framework_1.State {
}
exports._MergeableMaterialState = _MergeableMaterialState;
class _MergeableMaterialSliceKey extends framework_1.GlobalKey {
    constructor(value) {
        super();
        this.value = value;
        this.className = '_MergeableMaterialSliceKey';
    }
}
exports._MergeableMaterialSliceKey = _MergeableMaterialSliceKey;
class _MergeableMaterialListBody extends basic_1.ListBody {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.mainAxis = namedParameters.mainAxis;
        this.items = namedParameters.items;
        this.boxShadows = namedParameters.boxShadows;
        this.className = '_MergeableMaterialListBody';
    }
}
exports._MergeableMaterialListBody = _MergeableMaterialListBody;
class _RenderMergeableMaterialListBody extends list_body_1.RenderListBody {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.axisDirection = namedParameters.axisDirection;
        this.boxShadows = namedParameters.boxShadows;
        this.className = '_RenderMergeableMaterialListBody';
    }
}
exports._RenderMergeableMaterialListBody = _RenderMergeableMaterialListBody;
