"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSliverPrototypeExtentList = exports._SliverPrototypeExtentListElement = exports.SliverPrototypeExtentList = void 0;
const sliver_fixed_extent_list_1 = require("../rendering/sliver-fixed-extent-list");
const sliver_1 = require("./sliver");
class SliverPrototypeExtentList extends sliver_1.SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.prototypeItem = namedParameters.prototypeItem;
        this.className = 'SliverPrototypeExtentList';
    }
}
exports.SliverPrototypeExtentList = SliverPrototypeExtentList;
class _SliverPrototypeExtentListElement extends sliver_1.SliverMultiBoxAdaptorElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_SliverPrototypeExtentListElement';
    }
}
exports._SliverPrototypeExtentListElement = _SliverPrototypeExtentListElement;
class _RenderSliverPrototypeExtentList extends sliver_fixed_extent_list_1.RenderSliverFixedExtentBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this['mx_childManager'] = namedParameters.childManager;
        this.className = '_RenderSliverPrototypeExtentList';
    }
}
exports._RenderSliverPrototypeExtentList = _RenderSliverPrototypeExtentList;
