"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ExpansionTileState = exports.ExpansionTile = void 0;
const framework_1 = require("../widgets/framework");
class ExpansionTile extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.title = namedParameters.title;
        this.subtitle = namedParameters.subtitle;
        this.backgroundColor = namedParameters.backgroundColor;
        this.onExpansionChanged = namedParameters.onExpansionChanged;
        this.children = namedParameters.children;
        this.trailing = namedParameters.trailing;
        this.initiallyExpanded = namedParameters.initiallyExpanded;
        this.maintainState = namedParameters.maintainState;
        this.tilePadding = namedParameters.tilePadding;
        this.expandedCrossAxisAlignment = namedParameters.expandedCrossAxisAlignment;
        this.expandedAlignment = namedParameters.expandedAlignment;
        this.childrenPadding = namedParameters.childrenPadding;
        this.className = 'ExpansionTile';
    }
}
exports.ExpansionTile = ExpansionTile;
class _ExpansionTileState extends framework_1.State {
}
exports._ExpansionTileState = _ExpansionTileState;
