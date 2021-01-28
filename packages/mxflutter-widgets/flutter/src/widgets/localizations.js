//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget, StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _Pending extends MXDartClass {
    constructor(delegate, futureValue) {
        super();
        this.delegate = delegate;
        this.futureValue = futureValue;
        this.className = '_Pending';
    }
}
export { _Pending };
class LocalizationsDelegate extends MXDartClass {
}
export { LocalizationsDelegate };
class WidgetsLocalizations extends MXDartClass {
}
export { WidgetsLocalizations };
class _WidgetsLocalizationsDelegate extends LocalizationsDelegate {
}
export { _WidgetsLocalizationsDelegate };
class DefaultWidgetsLocalizations extends MXDartClass {
    static get delegate() {
        var jsObj = new (class MXLocalizationsDelegate extends LocalizationsDelegate {
        })();
        jsObj['className'] = 'DefaultWidgetsLocalizations';
        jsObj['constructorName'] = 'delegate';
        return jsObj;
    }
}
export { DefaultWidgetsLocalizations };
class _LocalizationsScope extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.locale = namedParameters.locale;
        this.localizationsState = namedParameters.localizationsState;
        this.typeToResources = namedParameters.typeToResources;
        this.child = namedParameters.child;
        this.className = '_LocalizationsScope';
    }
}
export { _LocalizationsScope };
class Localizations extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.locale = namedParameters.locale;
        this.delegates = namedParameters.delegates;
        this.child = namedParameters.child;
        this.className = 'Localizations';
    }
    static override(namedParameters = {}) {
        var jsObj = new Localizations();
        jsObj.key = namedParameters.key;
        jsObj['context'] = namedParameters.context;
        jsObj.locale = namedParameters.locale;
        jsObj.delegates = namedParameters.delegates;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'override';
        return jsObj;
    }
}
export { Localizations };
class _LocalizationsState extends State$ {
}
export { _LocalizationsState };
