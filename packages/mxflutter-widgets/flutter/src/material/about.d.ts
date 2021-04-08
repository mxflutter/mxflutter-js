import { FloatingActionButtonLocation } from './floating-action-button-location';
import { FloatingActionButton } from './floating-action-button';
import { TextTheme } from './text-theme';
import { ScrollController } from '../widgets/scroll-controller';
import { ValueNotifier } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { StatelessWidget, StatefulWidget, State, GlobalKey } from '../widgets/framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class AboutListTile extends StatelessWidget {
    icon: MXWidget;
    child: MXWidget;
    applicationName: string;
    applicationVersion: string;
    applicationIcon: MXWidget;
    applicationLegalese: string;
    aboutBoxChildren: Array<any>;
    dense: boolean;
    constructor(namedParameters?: {
        key?: Key;
        icon?: MXWidget;
        child?: MXWidget;
        applicationName?: string;
        applicationVersion?: string;
        applicationIcon?: MXWidget;
        applicationLegalese?: string;
        aboutBoxChildren?: Array<any>;
        dense?: boolean;
    });
}
export { AboutListTile };
declare class AboutDialog extends StatelessWidget {
    applicationName: string;
    applicationVersion: string;
    applicationIcon: MXWidget;
    applicationLegalese: string;
    children: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        applicationName?: string;
        applicationVersion?: string;
        applicationIcon?: MXWidget;
        applicationLegalese?: string;
        children?: Array<any>;
    });
}
export { AboutDialog };
declare class LicensePage extends StatefulWidget {
    applicationName: string;
    applicationVersion: string;
    applicationIcon: MXWidget;
    applicationLegalese: string;
    constructor(namedParameters?: {
        key?: Key;
        applicationName?: string;
        applicationVersion?: string;
        applicationIcon?: MXWidget;
        applicationLegalese?: string;
    });
}
export { LicensePage };
declare class _LicensePageState extends State {
    selectedId: ValueNotifier;
}
export { _LicensePageState };
declare class _AboutProgram extends StatelessWidget {
    name: string;
    version: string;
    icon: MXWidget;
    legalese: string;
    constructor(namedParameters?: {
        key?: Key;
        name?: string;
        version?: string;
        icon?: MXWidget;
        legalese?: string;
    });
}
export { _AboutProgram };
declare class _PackagesView extends StatefulWidget {
    about: MXWidget;
    isLateral: boolean;
    selectedId: ValueNotifier;
    constructor(namedParameters?: {
        key?: Key;
        about?: MXWidget;
        isLateral?: boolean;
        selectedId?: ValueNotifier;
    });
}
export { _PackagesView };
declare class _PackagesViewState extends State {
    licenses: any;
}
export { _PackagesViewState };
declare class _PackageListTile extends StatelessWidget {
    packageName: string;
    index: number;
    isSelected: boolean;
    numberLicenses: number;
    onTap: any;
    constructor(namedParameters?: {
        key?: Key;
        packageName?: string;
        index?: number;
        isSelected?: boolean;
        numberLicenses?: number;
        onTap?: any;
    });
}
export { _PackageListTile };
declare class _LicenseData extends MXDartClass {
    licenses: Array<any>;
    packageLicenseBindings: Map<any, any>;
    packages: Array<any>;
    firstPackage: string;
}
export { _LicenseData };
declare class _DetailArguments extends MXDartClass {
    packageName: string;
    licenseEntries: Array<any>;
    constructor(packageName?: string, licenseEntries?: Array<any>);
}
export { _DetailArguments };
declare class _PackageLicensePage extends StatefulWidget {
    packageName: string;
    licenseEntries: Array<any>;
    scrollController: ScrollController;
    constructor(namedParameters?: {
        key?: Key;
        packageName?: string;
        licenseEntries?: Array<any>;
        scrollController?: ScrollController;
    });
}
export { _PackageLicensePage };
declare class _PackageLicensePageState extends State {
    licenses: Array<any>;
    loaded: boolean;
}
export { _PackageLicensePageState };
declare class _PackageLicensePageTitle extends StatelessWidget {
    title: string;
    subtitle: string;
    theme: TextTheme;
    constructor(title?: string, subtitle?: string, theme?: TextTheme, namedParameters?: {
        key?: Key;
    });
}
export { _PackageLicensePageTitle };
declare enum _ActionLevel {
    top = "{ \"_name\": \"_ActionLevel.top\", \"index\": 0 }",
    view = "{ \"_name\": \"_ActionLevel.view\", \"index\": 1 }",
    composite = "{ \"_name\": \"_ActionLevel.composite\", \"index\": 2 }"
}
export { _ActionLevel };
declare enum _LayoutMode {
    auto = "{ \"_name\": \"_LayoutMode.auto\", \"index\": 0 }",
    lateral = "{ \"_name\": \"_LayoutMode.lateral\", \"index\": 1 }",
    nested = "{ \"_name\": \"_LayoutMode.nested\", \"index\": 2 }"
}
export { _LayoutMode };
declare enum _Focus {
    master = "{ \"_name\": \"_Focus.master\", \"index\": 0 }",
    detail = "{ \"_name\": \"_Focus.detail\", \"index\": 1 }"
}
export { _Focus };
declare class _MasterDetailFlow extends StatefulWidget {
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
    constructor(namedParameters?: {
        key?: Key;
        detailPageBuilder?: any;
        masterViewBuilder?: any;
        actionBuilder?: any;
        automaticallyImplyLeading?: boolean;
        breakpoint?: number;
        centerTitle?: boolean;
        detailPageFABGutterWidth?: number;
        detailPageFABlessGutterWidth?: number;
        displayMode?: _LayoutMode;
        flexibleSpace?: MXWidget;
        floatingActionButton?: FloatingActionButton;
        floatingActionButtonLocation?: FloatingActionButtonLocation;
        floatingActionButtonMasterPageLocation?: FloatingActionButtonLocation;
        leading?: MXWidget;
        masterPageBuilder?: any;
        masterViewWidth?: number;
        title?: MXWidget;
    });
}
export { _MasterDetailFlow };
declare class _MasterDetailFlowProxy extends MXDartClass {
    pageOpener: _PageOpener;
}
export { _MasterDetailFlowProxy };
declare abstract class _PageOpener extends MXDartClass {
}
export { _PageOpener };
declare class _MasterDetailFlowState extends State {
    focus: _Focus;
    cachedDetailArguments: any;
    builtLayout: _LayoutMode;
    navigatorKey: GlobalKey;
}
export { _MasterDetailFlowState };
declare class _MasterPage extends StatelessWidget {
    masterViewBuilder: any;
    title: MXWidget;
    leading: MXWidget;
    automaticallyImplyLeading: boolean;
    centerTitle: boolean;
    flexibleSpace: MXWidget;
    actionBuilder: any;
    floatingActionButton: FloatingActionButton;
    floatingActionButtonLocation: FloatingActionButtonLocation;
    constructor(namedParameters?: {
        key?: Key;
        leading?: MXWidget;
        title?: MXWidget;
        actionBuilder?: any;
        centerTitle?: boolean;
        flexibleSpace?: MXWidget;
        floatingActionButton?: FloatingActionButton;
        floatingActionButtonLocation?: FloatingActionButtonLocation;
        masterViewBuilder?: any;
        automaticallyImplyLeading?: boolean;
    });
}
export { _MasterPage };
declare class _MasterDetailScaffold extends StatefulWidget {
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
    constructor(namedParameters?: {
        key?: Key;
        detailPageBuilder?: any;
        masterViewBuilder?: any;
        actionBuilder?: any;
        floatingActionButton?: FloatingActionButton;
        floatingActionButtonLocation?: FloatingActionButtonLocation;
        initialArguments?: any;
        leading?: MXWidget;
        title?: MXWidget;
        automaticallyImplyLeading?: boolean;
        centerTitle?: boolean;
        detailPageFABlessGutterWidth?: number;
        detailPageFABGutterWidth?: number;
        masterViewWidth?: number;
    });
}
export { _MasterDetailScaffold };
declare class _MasterDetailScaffoldState extends State {
    floatingActionButtonLocation: FloatingActionButtonLocation;
    detailPageFABGutterWidth: number;
    detailPageFABlessGutterWidth: number;
    masterViewWidth: number;
    detailArguments: ValueNotifier;
}
export { _MasterDetailScaffoldState };
declare class _DetailView extends StatelessWidget {
    builder: any;
    mx_arguments: any;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
        mx_arguments?: any;
    });
}
export { _DetailView };
