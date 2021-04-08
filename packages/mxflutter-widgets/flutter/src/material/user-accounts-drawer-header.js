"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._UserAccountsDrawerHeaderState = exports.UserAccountsDrawerHeader = exports._AccountDetailsLayout = exports._AccountDetailsState = exports._AccountDetails = exports._AccountPictures = void 0;
const custom_layout_1 = require("../rendering/custom-layout");
const framework_1 = require("../widgets/framework");
class _AccountPictures extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.currentAccountPicture = namedParameters.currentAccountPicture;
        this.otherAccountsPictures = namedParameters.otherAccountsPictures;
        this.className = '_AccountPictures';
    }
}
exports._AccountPictures = _AccountPictures;
class _AccountDetails extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.accountName = namedParameters.accountName;
        this.accountEmail = namedParameters.accountEmail;
        this.onTap = namedParameters.onTap;
        this.isOpen = namedParameters.isOpen;
        this.arrowColor = namedParameters.arrowColor;
        this.className = '_AccountDetails';
    }
}
exports._AccountDetails = _AccountDetails;
class _AccountDetailsState extends framework_1.State {
}
exports._AccountDetailsState = _AccountDetailsState;
class _AccountDetailsLayout extends custom_layout_1.MultiChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.textDirection = namedParameters.textDirection;
        this.className = '_AccountDetailsLayout';
    }
    static get accountName() {
        return 'accountName';
    }
    static get accountEmail() {
        return 'accountEmail';
    }
    static get dropdownIcon() {
        return 'dropdownIcon';
    }
}
exports._AccountDetailsLayout = _AccountDetailsLayout;
class UserAccountsDrawerHeader extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.margin = namedParameters.margin;
        this.currentAccountPicture = namedParameters.currentAccountPicture;
        this.otherAccountsPictures = namedParameters.otherAccountsPictures;
        this.accountName = namedParameters.accountName;
        this.accountEmail = namedParameters.accountEmail;
        this.onDetailsPressed = namedParameters.onDetailsPressed;
        this.arrowColor = namedParameters.arrowColor;
        this.className = 'UserAccountsDrawerHeader';
    }
}
exports.UserAccountsDrawerHeader = UserAccountsDrawerHeader;
class _UserAccountsDrawerHeaderState extends framework_1.State {
}
exports._UserAccountsDrawerHeaderState = _UserAccountsDrawerHeaderState;
