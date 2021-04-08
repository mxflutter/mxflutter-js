// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Locale } from '../../../mx-dart-sdk';
import { InheritedWidget, Widget, StatefulWidget, BuildContext, State, GlobalKey } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _Pending extends MXDartClass {
  delegate: LocalizationsDelegate;
  futureValue: any;
  public constructor(delegate?: LocalizationsDelegate, futureValue?: any) {
    super();
    this.delegate = delegate;
    this.futureValue = futureValue;
    this.className = '_Pending';
  }
}
export { _Pending };
abstract class LocalizationsDelegate extends MXDartClass {}
export { LocalizationsDelegate };
abstract class WidgetsLocalizations extends MXDartClass {}
export { WidgetsLocalizations };
class _WidgetsLocalizationsDelegate extends LocalizationsDelegate {}
export { _WidgetsLocalizationsDelegate };
class DefaultWidgetsLocalizations extends MXDartClass {
  static get delegate() {
    var jsObj = new class MXLocalizationsDelegate extends LocalizationsDelegate {}();
    jsObj['className'] = 'DefaultWidgetsLocalizations';
    jsObj['constructorName'] = 'delegate';
    return jsObj;
  }
}
export { DefaultWidgetsLocalizations };
class _LocalizationsScope extends InheritedWidget {
  locale: Locale;
  localizationsState: _LocalizationsState;
  typeToResources: Map<any, any>;
  public constructor(namedParameters: {key?: Key, locale?: Locale, localizationsState?: _LocalizationsState, typeToResources?: Map<any, any>, child?: MXWidget} = {}) {
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
class Localizations extends StatefulWidget {
  locale: Locale;
  delegates: Array<any>;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, locale?: Locale, delegates?: Array<any>, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.locale = namedParameters.locale;
    this.delegates = namedParameters.delegates;
    this.child = namedParameters.child;
    this.className = 'Localizations';
  }
  static override(namedParameters: {key?: Key, context?: BuildContext, locale?: Locale, delegates?: Array<any>, child?: MXWidget} = {}) {
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
class _LocalizationsState extends State {
  localizedResourcesScopeKey: GlobalKey;
  typeToResources: Map<any, any>;
  locale: Locale;
}
export { _LocalizationsState };
