"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DetailView = exports._MasterDetailScaffoldState = exports._MasterDetailScaffold = exports._MasterPage = exports._MasterDetailFlowState = exports._PageOpener = exports._MasterDetailFlowProxy = exports._MasterDetailFlow = exports._Focus = exports._LayoutMode = exports._ActionLevel = exports._PackageLicensePageTitle = exports._PackageLicensePageState = exports._PackageLicensePage = exports._DetailArguments = exports._LicenseData = exports._PackageListTile = exports._PackagesViewState = exports._PackagesView = exports._AboutProgram = exports._LicensePageState = exports.LicensePage = exports.AboutDialog = exports.AboutListTile = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class AboutListTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.icon = namedParameters.icon;
        this.child = namedParameters.child;
        this.applicationName = namedParameters.applicationName;
        this.applicationVersion = namedParameters.applicationVersion;
        this.applicationIcon = namedParameters.applicationIcon;
        this.applicationLegalese = namedParameters.applicationLegalese;
        this.aboutBoxChildren = namedParameters.aboutBoxChildren;
        this.dense = namedParameters.dense;
        this.className = 'AboutListTile';
    }
}
exports.AboutListTile = AboutListTile;
class AboutDialog extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.applicationName = namedParameters.applicationName;
        this.applicationVersion = namedParameters.applicationVersion;
        this.applicationIcon = namedParameters.applicationIcon;
        this.applicationLegalese = namedParameters.applicationLegalese;
        this.children = namedParameters.children;
        this.className = 'AboutDialog';
    }
}
exports.AboutDialog = AboutDialog;
class LicensePage extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.applicationName = namedParameters.applicationName;
        this.applicationVersion = namedParameters.applicationVersion;
        this.applicationIcon = namedParameters.applicationIcon;
        this.applicationLegalese = namedParameters.applicationLegalese;
        this.className = 'LicensePage';
    }
}
exports.LicensePage = LicensePage;
class _LicensePageState extends framework_1.State {
}
exports._LicensePageState = _LicensePageState;
class _AboutProgram extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.name = namedParameters.name;
        this.version = namedParameters.version;
        this.icon = namedParameters.icon;
        this.legalese = namedParameters.legalese;
        this.className = '_AboutProgram';
    }
}
exports._AboutProgram = _AboutProgram;
class _PackagesView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.about = namedParameters.about;
        this.isLateral = namedParameters.isLateral;
        this.selectedId = namedParameters.selectedId;
        this.className = '_PackagesView';
    }
}
exports._PackagesView = _PackagesView;
class _PackagesViewState extends framework_1.State {
}
exports._PackagesViewState = _PackagesViewState;
class _PackageListTile extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.packageName = namedParameters.packageName;
        this.index = namedParameters.index;
        this.isSelected = namedParameters.isSelected;
        this.numberLicenses = namedParameters.numberLicenses;
        this.onTap = namedParameters.onTap;
        this.className = '_PackageListTile';
    }
}
exports._PackageListTile = _PackageListTile;
class _LicenseData extends mxflutter_base_1.MXDartClass {
}
exports._LicenseData = _LicenseData;
class _DetailArguments extends mxflutter_base_1.MXDartClass {
    constructor(packageName, licenseEntries) {
        super();
        this.packageName = packageName;
        this.licenseEntries = licenseEntries;
        this.className = '_DetailArguments';
    }
}
exports._DetailArguments = _DetailArguments;
class _PackageLicensePage extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.packageName = namedParameters.packageName;
        this.licenseEntries = namedParameters.licenseEntries;
        this.scrollController = namedParameters.scrollController;
        this.className = '_PackageLicensePage';
    }
}
exports._PackageLicensePage = _PackageLicensePage;
class _PackageLicensePageState extends framework_1.State {
}
exports._PackageLicensePageState = _PackageLicensePageState;
class _PackageLicensePageTitle extends framework_1.StatelessWidget {
    constructor(title, subtitle, theme, namedParameters = {}) {
        super();
        this.title = title;
        this.subtitle = subtitle;
        this.theme = theme;
        this.key = namedParameters.key;
        this.className = '_PackageLicensePageTitle';
    }
}
exports._PackageLicensePageTitle = _PackageLicensePageTitle;
var _ActionLevel;
(function (_ActionLevel) {
    _ActionLevel["top"] = "{ \"_name\": \"_ActionLevel.top\", \"index\": 0 }";
    _ActionLevel["view"] = "{ \"_name\": \"_ActionLevel.view\", \"index\": 1 }";
    _ActionLevel["composite"] = "{ \"_name\": \"_ActionLevel.composite\", \"index\": 2 }";
})(_ActionLevel || (_ActionLevel = {}));
exports._ActionLevel = _ActionLevel;
;
var _LayoutMode;
(function (_LayoutMode) {
    _LayoutMode["auto"] = "{ \"_name\": \"_LayoutMode.auto\", \"index\": 0 }";
    _LayoutMode["lateral"] = "{ \"_name\": \"_LayoutMode.lateral\", \"index\": 1 }";
    _LayoutMode["nested"] = "{ \"_name\": \"_LayoutMode.nested\", \"index\": 2 }";
})(_LayoutMode || (_LayoutMode = {}));
exports._LayoutMode = _LayoutMode;
;
var _Focus;
(function (_Focus) {
    _Focus["master"] = "{ \"_name\": \"_Focus.master\", \"index\": 0 }";
    _Focus["detail"] = "{ \"_name\": \"_Focus.detail\", \"index\": 1 }";
})(_Focus || (_Focus = {}));
exports._Focus = _Focus;
;
class _MasterDetailFlow extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.detailPageBuilder = namedParameters.detailPageBuilder;
        this.masterViewBuilder = namedParameters.masterViewBuilder;
        this.actionBuilder = namedParameters.actionBuilder;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.breakpoint = namedParameters.breakpoint;
        this.centerTitle = namedParameters.centerTitle;
        this.detailPageFABGutterWidth = namedParameters.detailPageFABGutterWidth;
        this.detailPageFABlessGutterWidth = namedParameters.detailPageFABlessGutterWidth;
        this.displayMode = namedParameters.displayMode;
        this.flexibleSpace = namedParameters.flexibleSpace;
        this.floatingActionButton = namedParameters.floatingActionButton;
        this.floatingActionButtonLocation = namedParameters.floatingActionButtonLocation;
        this.floatingActionButtonMasterPageLocation = namedParameters.floatingActionButtonMasterPageLocation;
        this.leading = namedParameters.leading;
        this.masterPageBuilder = namedParameters.masterPageBuilder;
        this.masterViewWidth = namedParameters.masterViewWidth;
        this.title = namedParameters.title;
        this.className = '_MasterDetailFlow';
    }
}
exports._MasterDetailFlow = _MasterDetailFlow;
class _MasterDetailFlowProxy extends mxflutter_base_1.MXDartClass {
}
exports._MasterDetailFlowProxy = _MasterDetailFlowProxy;
class _PageOpener extends mxflutter_base_1.MXDartClass {
}
exports._PageOpener = _PageOpener;
class _MasterDetailFlowState extends framework_1.State {
}
exports._MasterDetailFlowState = _MasterDetailFlowState;
class _MasterPage extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.title = namedParameters.title;
        this.actionBuilder = namedParameters.actionBuilder;
        this.centerTitle = namedParameters.centerTitle;
        this.flexibleSpace = namedParameters.flexibleSpace;
        this.floatingActionButton = namedParameters.floatingActionButton;
        this.floatingActionButtonLocation = namedParameters.floatingActionButtonLocation;
        this.masterViewBuilder = namedParameters.masterViewBuilder;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.className = '_MasterPage';
    }
}
exports._MasterPage = _MasterPage;
class _MasterDetailScaffold extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.detailPageBuilder = namedParameters.detailPageBuilder;
        this.masterViewBuilder = namedParameters.masterViewBuilder;
        this.actionBuilder = namedParameters.actionBuilder;
        this.floatingActionButton = namedParameters.floatingActionButton;
        this.floatingActionButtonLocation = namedParameters.floatingActionButtonLocation;
        this.initialArguments = namedParameters.initialArguments;
        this.leading = namedParameters.leading;
        this.title = namedParameters.title;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.centerTitle = namedParameters.centerTitle;
        this.detailPageFABlessGutterWidth = namedParameters.detailPageFABlessGutterWidth;
        this.detailPageFABGutterWidth = namedParameters.detailPageFABGutterWidth;
        this.masterViewWidth = namedParameters.masterViewWidth;
        this.className = '_MasterDetailScaffold';
    }
}
exports._MasterDetailScaffold = _MasterDetailScaffold;
class _MasterDetailScaffoldState extends framework_1.State {
}
exports._MasterDetailScaffoldState = _MasterDetailScaffoldState;
class _DetailView extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.mx_arguments = namedParameters.mx_arguments;
        this.className = '_DetailView';
    }
}
exports._DetailView = _DetailView;
