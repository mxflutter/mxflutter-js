//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
class _AccountPictures extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.currentAccountPicture = namedParameters.currentAccountPicture;
        this.otherAccountsPictures = namedParameters.otherAccountsPictures;
        this.className = '_AccountPictures';
    }
}
export { _AccountPictures };
class _AccountDetails extends StatefulWidget$ {
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
export { _AccountDetails };
class _AccountDetailsState extends State$ {
}
export { _AccountDetailsState };
class _AccountDetailsLayout extends MultiChildLayoutDelegate {
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
export { _AccountDetailsLayout };
class UserAccountsDrawerHeader extends StatefulWidget$ {
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
export { UserAccountsDrawerHeader };
class _UserAccountsDrawerHeaderState extends State$ {
}
export { _UserAccountsDrawerHeaderState };
