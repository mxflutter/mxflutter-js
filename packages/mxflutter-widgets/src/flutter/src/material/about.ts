// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { FloatingActionButtonLocation } from './floating-action-button-location';
import { FloatingActionButton } from './floating-action-button';
import { TextTheme } from './text-theme';
import { ScrollController } from '../widgets/scroll-controller';
import { ValueNotifier } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { StatelessWidget, Widget, StatefulWidget, State, GlobalKey } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AboutListTile extends StatelessWidget {
  icon: MXWidget;
  child: MXWidget;
  applicationName: string;
  applicationVersion: string;
  applicationIcon: MXWidget;
  applicationLegalese: string;
  aboutBoxChildren: Array<any>;
  dense: boolean;
  public constructor(namedParameters: {key?: Key, icon?: MXWidget, child?: MXWidget, applicationName?: string, applicationVersion?: string, applicationIcon?: MXWidget, applicationLegalese?: string, aboutBoxChildren?: Array<any>, dense?: boolean} = {}) {
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
class AboutDialog extends StatelessWidget {
  applicationName: string;
  applicationVersion: string;
  applicationIcon: MXWidget;
  applicationLegalese: string;
  children: Array<any>;
  public constructor(namedParameters: {key?: Key, applicationName?: string, applicationVersion?: string, applicationIcon?: MXWidget, applicationLegalese?: string, children?: Array<any>} = {}) {
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
class LicensePage extends StatefulWidget {
  applicationName: string;
  applicationVersion: string;
  applicationIcon: MXWidget;
  applicationLegalese: string;
  public constructor(namedParameters: {key?: Key, applicationName?: string, applicationVersion?: string, applicationIcon?: MXWidget, applicationLegalese?: string} = {}) {
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
class _LicensePageState extends State {
  selectedId: ValueNotifier;
}
export { _LicensePageState };
class _AboutProgram extends StatelessWidget {
  name: string;
  version: string;
  icon: MXWidget;
  legalese: string;
  public constructor(namedParameters: {key?: Key, name?: string, version?: string, icon?: MXWidget, legalese?: string} = {}) {
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
class _PackagesView extends StatefulWidget {
  about: MXWidget;
  isLateral: boolean;
  selectedId: ValueNotifier;
  public constructor(namedParameters: {key?: Key, about?: MXWidget, isLateral?: boolean, selectedId?: ValueNotifier} = {}) {
    super();
    this.key = namedParameters.key;
    this.about = namedParameters.about;
    this.isLateral = namedParameters.isLateral;
    this.selectedId = namedParameters.selectedId;
    this.className = '_PackagesView';
  }
}
export { _PackagesView };
class _PackagesViewState extends State {
  licenses: any;
}
export { _PackagesViewState };
class _PackageListTile extends StatelessWidget {
  packageName: string;
  index: number;
  isSelected: boolean;
  numberLicenses: number;
  onTap: any;
  public constructor(namedParameters: {key?: Key, packageName?: string, index?: number, isSelected?: boolean, numberLicenses?: number, onTap?: any} = {}) {
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
  licenses: Array<any>;
  packageLicenseBindings: Map<any, any>;
  packages: Array<any>;
  firstPackage: string;
}
export { _LicenseData };
class _DetailArguments extends MXDartClass {
  packageName: string;
  licenseEntries: Array<any>;
  public constructor(packageName?: string, licenseEntries?: Array<any>) {
    super();
    this.packageName = packageName;
    this.licenseEntries = licenseEntries;
    this.className = '_DetailArguments';
  }
}
export { _DetailArguments };
class _PackageLicensePage extends StatefulWidget {
  packageName: string;
  licenseEntries: Array<any>;
  scrollController: ScrollController;
  public constructor(namedParameters: {key?: Key, packageName?: string, licenseEntries?: Array<any>, scrollController?: ScrollController} = {}) {
    super();
    this.key = namedParameters.key;
    this.packageName = namedParameters.packageName;
    this.licenseEntries = namedParameters.licenseEntries;
    this.scrollController = namedParameters.scrollController;
    this.className = '_PackageLicensePage';
  }
}
export { _PackageLicensePage };
class _PackageLicensePageState extends State {
  licenses: Array<any>;
  loaded: boolean;
}
export { _PackageLicensePageState };
class _PackageLicensePageTitle extends StatelessWidget {
  title: string;
  subtitle: string;
  theme: TextTheme;
  public constructor(title?: string, subtitle?: string, theme?: TextTheme, namedParameters: {key?: Key} = {}) {
    super();
    this.title = title;
    this.subtitle = subtitle;
    this.theme = theme;
    this.key = namedParameters.key;
    this.className = '_PackageLicensePageTitle';
  }
}
export { _PackageLicensePageTitle };
enum _ActionLevel {
  top = '{ "_name": "_ActionLevel.top", "index": 0 }',
  view = '{ "_name": "_ActionLevel.view", "index": 1 }',
  composite = '{ "_name": "_ActionLevel.composite", "index": 2 }',
};

export { _ActionLevel };
enum _LayoutMode {
  auto = '{ "_name": "_LayoutMode.auto", "index": 0 }',
  lateral = '{ "_name": "_LayoutMode.lateral", "index": 1 }',
  nested = '{ "_name": "_LayoutMode.nested", "index": 2 }',
};

export { _LayoutMode };
enum _Focus {
  master = '{ "_name": "_Focus.master", "index": 0 }',
  detail = '{ "_name": "_Focus.detail", "index": 1 }',
};

export { _Focus };
class _MasterDetailFlow extends StatefulWidget {
  masterViewBuilder: any;
  masterPageBuilder: any;
  detailPageBuilder: any;
  masterViewWidth: number;
  detailPageFABGutterWidth: number;
  detailPageFABlessGutterWidth: number;
  floatingActionButton: FloatingActionButton;
  title: MXWidget;
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  centerTitle: boolean;
  flexibleSpace: MXWidget;
  actionBuilder: any;
  floatingActionButtonLocation: FloatingActionButtonLocation;
  floatingActionButtonMasterPageLocation: FloatingActionButtonLocation;
  displayMode: _LayoutMode;
  breakpoint: number;
  public constructor(namedParameters: {key?: Key, detailPageBuilder?: any, masterViewBuilder?: any, actionBuilder?: any, automaticallyImplyLeading?: boolean, breakpoint?: number, centerTitle?: boolean, detailPageFABGutterWidth?: number, detailPageFABlessGutterWidth?: number, displayMode?: _LayoutMode, flexibleSpace?: MXWidget, floatingActionButton?: FloatingActionButton, floatingActionButtonLocation?: FloatingActionButtonLocation, floatingActionButtonMasterPageLocation?: FloatingActionButtonLocation, leading?: MXWidget, masterPageBuilder?: any, masterViewWidth?: number, title?: MXWidget} = {}) {
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
  pageOpener: _PageOpener;
}
export { _MasterDetailFlowProxy };
abstract class _PageOpener extends MXDartClass {}
export { _PageOpener };
class _MasterDetailFlowState extends State {
  focus: _Focus;
  cachedDetailArguments: any;
  builtLayout: _LayoutMode;
  navigatorKey: GlobalKey;
}
export { _MasterDetailFlowState };
class _MasterPage extends StatelessWidget {
  masterViewBuilder: any;
  title: MXWidget;
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  centerTitle: boolean;
  flexibleSpace: MXWidget;
  actionBuilder: any;
  floatingActionButton: FloatingActionButton;
  floatingActionButtonLocation: FloatingActionButtonLocation;
  public constructor(namedParameters: {key?: Key, leading?: MXWidget, title?: MXWidget, actionBuilder?: any, centerTitle?: boolean, flexibleSpace?: MXWidget, floatingActionButton?: FloatingActionButton, floatingActionButtonLocation?: FloatingActionButtonLocation, masterViewBuilder?: any, automaticallyImplyLeading?: boolean} = {}) {
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
class _MasterDetailScaffold extends StatefulWidget {
  masterViewBuilder: any;
  detailPageBuilder: any;
  actionBuilder: any;
  floatingActionButton: FloatingActionButton;
  floatingActionButtonLocation: FloatingActionButtonLocation;
  initialArguments: any;
  leading: MXWidget;
  title: MXWidget;
  automaticallyImplyLeading: boolean;
  centerTitle: boolean;
  detailPageFABlessGutterWidth: number;
  detailPageFABGutterWidth: number;
  masterViewWidth: number;
  public constructor(namedParameters: {key?: Key, detailPageBuilder?: any, masterViewBuilder?: any, actionBuilder?: any, floatingActionButton?: FloatingActionButton, floatingActionButtonLocation?: FloatingActionButtonLocation, initialArguments?: any, leading?: MXWidget, title?: MXWidget, automaticallyImplyLeading?: boolean, centerTitle?: boolean, detailPageFABlessGutterWidth?: number, detailPageFABGutterWidth?: number, masterViewWidth?: number} = {}) {
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
class _MasterDetailScaffoldState extends State {
  floatingActionButtonLocation: FloatingActionButtonLocation;
  detailPageFABGutterWidth: number;
  detailPageFABlessGutterWidth: number;
  masterViewWidth: number;
  detailArguments: ValueNotifier;
}
export { _MasterDetailScaffoldState };
class _DetailView extends StatelessWidget {
  builder: any;
  mx_arguments: any;
  public constructor(namedParameters: {key?: Key, builder?: any, mx_arguments?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.builder = namedParameters.builder;
    this.mx_arguments = namedParameters.mx_arguments;
    this.className = '_DetailView';
  }
}
export { _DetailView };
