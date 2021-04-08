import { Key } from '../foundation/key';
import { Locale } from '../../../mx-dart-sdk';
import { InheritedWidget, StatefulWidget, BuildContext, State, GlobalKey } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _Pending extends MXDartClass {
    delegate: LocalizationsDelegate;
    futureValue: any;
    constructor(delegate?: LocalizationsDelegate, futureValue?: any);
}
export { _Pending };
declare abstract class LocalizationsDelegate extends MXDartClass {
}
export { LocalizationsDelegate };
declare abstract class WidgetsLocalizations extends MXDartClass {
}
export { WidgetsLocalizations };
declare class _WidgetsLocalizationsDelegate extends LocalizationsDelegate {
}
export { _WidgetsLocalizationsDelegate };
declare class DefaultWidgetsLocalizations extends MXDartClass {
    static get delegate(): {
        className: string;
        mirrorID: string;
    };
}
export { DefaultWidgetsLocalizations };
declare class _LocalizationsScope extends InheritedWidget {
    locale: Locale;
    localizationsState: _LocalizationsState;
    typeToResources: Map<any, any>;
    constructor(namedParameters?: {
        key?: Key;
        locale?: Locale;
        localizationsState?: _LocalizationsState;
        typeToResources?: Map<any, any>;
        child?: MXWidget;
    });
}
export { _LocalizationsScope };
declare class Localizations extends StatefulWidget {
    locale: Locale;
    delegates: Array<any>;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        locale?: Locale;
        delegates?: Array<any>;
        child?: MXWidget;
    });
    static override(namedParameters?: {
        key?: Key;
        context?: BuildContext;
        locale?: Locale;
        delegates?: Array<any>;
        child?: MXWidget;
    }): Localizations;
}
export { Localizations };
declare class _LocalizationsState extends State {
    localizedResourcesScopeKey: GlobalKey;
    typeToResources: Map<any, any>;
    locale: Locale;
}
export { _LocalizationsState };
