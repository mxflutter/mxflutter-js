"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ReorderableListViewChildGlobalKey = exports._ReorderableListContentState = exports._ReorderableListContent = exports._ReorderableListViewState = exports.ReorderableListView = void 0;
const framework_1 = require("../widgets/framework");
class ReorderableListView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.header = namedParameters.header;
        this.children = namedParameters.children;
        this.onReorder = namedParameters.onReorder;
        this.scrollController = namedParameters.scrollController;
        this.scrollDirection = namedParameters.scrollDirection;
        this.padding = namedParameters.padding;
        this.reverse = namedParameters.reverse;
        this.className = 'ReorderableListView';
    }
}
exports.ReorderableListView = ReorderableListView;
class _ReorderableListViewState extends framework_1.State {
}
exports._ReorderableListViewState = _ReorderableListViewState;
class _ReorderableListContent extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.header = namedParameters.header;
        this.children = namedParameters.children;
        this.scrollController = namedParameters.scrollController;
        this.scrollDirection = namedParameters.scrollDirection;
        this.padding = namedParameters.padding;
        this.onReorder = namedParameters.onReorder;
        this.reverse = namedParameters.reverse;
        this.className = '_ReorderableListContent';
    }
}
exports._ReorderableListContent = _ReorderableListContent;
class _ReorderableListContentState extends framework_1.State {
}
exports._ReorderableListContentState = _ReorderableListContentState;
class _ReorderableListViewChildGlobalKey extends framework_1.GlobalObjectKey {
    constructor(subKey, state) {
        super();
        this.subKey = subKey;
        this.state = state;
        this.className = '_ReorderableListViewChildGlobalKey';
    }
}
exports._ReorderableListViewChildGlobalKey = _ReorderableListViewChildGlobalKey;
