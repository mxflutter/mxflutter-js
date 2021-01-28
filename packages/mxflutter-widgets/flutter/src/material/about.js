//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class AboutListTile extends StatelessWidget$ {
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
export { AboutListTile };
class AboutDialog extends StatelessWidget$ {
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
export { AboutDialog };
class LicensePage extends StatefulWidget$ {
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
export { LicensePage };
class _LicensePageState extends State$ {
}
export { _LicensePageState };
class _AboutProgram extends StatelessWidget$ {
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
export { _AboutProgram };
class _PackagesView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.about = namedParameters.about;
        this.isLateral = namedParameters.isLateral;
        this.selectedId = namedParameters.selectedId;
        this.className = '_PackagesView';
    }
}
export { _PackagesView };
class _PackagesViewState extends State$ {
}
export { _PackagesViewState };
class _PackageListTile extends StatelessWidget$ {
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
export { _PackageListTile };
class _LicenseData extends MXDartClass {
}
export { _LicenseData };
class _DetailArguments extends MXDartClass {
    constructor(packageName, licenseEntries) {
        super();
        this.packageName = packageName;
        this.licenseEntries = licenseEntries;
        this.className = '_DetailArguments';
    }
}
export { _DetailArguments };
class _PackageLicensePage extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.packageName = namedParameters.packageName;
        this.licenseEntries = namedParameters.licenseEntries;
        this.scrollController = namedParameters.scrollController;
        this.className = '_PackageLicensePage';
    }
}
export { _PackageLicensePage };
class _PackageLicensePageState extends State$ {
}
export { _PackageLicensePageState };
class _PackageLicensePageTitle extends StatelessWidget$ {
    constructor(title, subtitle, theme, namedParameters = {}) {
        super();
        this.title = title;
        this.subtitle = subtitle;
        this.theme = theme;
        this.key = namedParameters.key;
        this.className = '_PackageLicensePageTitle';
    }
}
export { _PackageLicensePageTitle };
var _ActionLevel;
(function (_ActionLevel) {
    _ActionLevel["top"] = "{ \"_name\": \"_ActionLevel.top\", \"index\": 0 }";
    _ActionLevel["view"] = "{ \"_name\": \"_ActionLevel.view\", \"index\": 1 }";
    _ActionLevel["composite"] = "{ \"_name\": \"_ActionLevel.composite\", \"index\": 2 }";
})(_ActionLevel || (_ActionLevel = {}));
export { _ActionLevel };
var _LayoutMode;
(function (_LayoutMode) {
    _LayoutMode["auto"] = "{ \"_name\": \"_LayoutMode.auto\", \"index\": 0 }";
    _LayoutMode["lateral"] = "{ \"_name\": \"_LayoutMode.lateral\", \"index\": 1 }";
    _LayoutMode["nested"] = "{ \"_name\": \"_LayoutMode.nested\", \"index\": 2 }";
})(_LayoutMode || (_LayoutMode = {}));
export { _LayoutMode };
var _Focus;
(function (_Focus) {
    _Focus["master"] = "{ \"_name\": \"_Focus.master\", \"index\": 0 }";
    _Focus["detail"] = "{ \"_name\": \"_Focus.detail\", \"index\": 1 }";
})(_Focus || (_Focus = {}));
export { _Focus };
class _MasterDetailFlow extends StatefulWidget$ {
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
export { _MasterDetailFlow };
class _MasterDetailFlowProxy extends MXDartClass {
}
export { _MasterDetailFlowProxy };
class _PageOpener extends MXDartClass {
}
export { _PageOpener };
class _MasterDetailFlowState extends State$ {
}
export { _MasterDetailFlowState };
class _MasterPage extends StatelessWidget$ {
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
export { _MasterPage };
class _MasterDetailScaffold extends StatefulWidget$ {
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
export { _MasterDetailScaffold };
class _MasterDetailScaffoldState extends State$ {
}
export { _MasterDetailScaffoldState };
class _DetailView extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.__mx_arguments = namedParameters.__mx_arguments;
        this.className = '_DetailView';
    }
}
export { _DetailView };
