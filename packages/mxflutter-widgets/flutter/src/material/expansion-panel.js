"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ExpansionPanelListState = exports.ExpansionPanelList = exports.ExpansionPanelRadio = exports.ExpansionPanel = exports._SaltedKey = void 0;
const framework_1 = require("../widgets/framework");
const key_1 = require("../foundation/key");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _SaltedKey extends key_1.LocalKey {
    constructor(salt, value) {
        super();
        this.salt = salt;
        this.value = value;
        this.className = '_SaltedKey';
    }
}
exports._SaltedKey = _SaltedKey;
class ExpansionPanel extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.headerBuilder = namedParameters.headerBuilder;
        this.body = namedParameters.body;
        this.isExpanded = namedParameters.isExpanded;
        this.canTapOnHeader = namedParameters.canTapOnHeader;
        this.className = 'ExpansionPanel';
    }
}
exports.ExpansionPanel = ExpansionPanel;
class ExpansionPanelRadio extends ExpansionPanel {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.headerBuilder = namedParameters.headerBuilder;
        this.body = namedParameters.body;
        this.canTapOnHeader = namedParameters.canTapOnHeader;
        this.className = 'ExpansionPanelRadio';
    }
}
exports.ExpansionPanelRadio = ExpansionPanelRadio;
class ExpansionPanelList extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.expansionCallback = namedParameters.expansionCallback;
        this.animationDuration = namedParameters.animationDuration;
        this.expandedHeaderPadding = namedParameters.expandedHeaderPadding;
        this.dividerColor = namedParameters.dividerColor;
        this.elevation = namedParameters.elevation;
        this.className = 'ExpansionPanelList';
    }
    static radio(namedParameters = {}) {
        var jsObj = new ExpansionPanelList();
        jsObj.key = namedParameters.key;
        jsObj.children = namedParameters.children;
        jsObj.expansionCallback = namedParameters.expansionCallback;
        jsObj.animationDuration = namedParameters.animationDuration;
        jsObj.initialOpenPanelValue = namedParameters.initialOpenPanelValue;
        jsObj.expandedHeaderPadding = namedParameters.expandedHeaderPadding;
        jsObj.dividerColor = namedParameters.dividerColor;
        jsObj.elevation = namedParameters.elevation;
        jsObj['constructorName'] = 'radio';
        return jsObj;
    }
}
exports.ExpansionPanelList = ExpansionPanelList;
class _ExpansionPanelListState extends framework_1.State {
}
exports._ExpansionPanelListState = _ExpansionPanelListState;
