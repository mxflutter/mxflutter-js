//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DateTime } from '../../../mx-dart-sdk';
import { Locale } from '../../../mx-dart-sdk';
import { LocalizationsDelegate } from '../widgets/localizations';
import { BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DatePickerDateTimeOrder {
  date_time_dayPeriod = '{ "_name": "DatePickerDateTimeOrder.date_time_dayPeriod", "index": 0 }',
  date_dayPeriod_time = '{ "_name": "DatePickerDateTimeOrder.date_dayPeriod_time", "index": 1 }',
  time_dayPeriod_date = '{ "_name": "DatePickerDateTimeOrder.time_dayPeriod_date", "index": 2 }',
  dayPeriod_time_date = '{ "_name": "DatePickerDateTimeOrder.dayPeriod_time_date", "index": 3 }',
}

export { DatePickerDateTimeOrder };
enum DatePickerDateOrder {
  dmy = '{ "_name": "DatePickerDateOrder.dmy", "index": 0 }',
  mdy = '{ "_name": "DatePickerDateOrder.mdy", "index": 1 }',
  ymd = '{ "_name": "DatePickerDateOrder.ymd", "index": 2 }',
  ydm = '{ "_name": "DatePickerDateOrder.ydm", "index": 3 }',
}

export { DatePickerDateOrder };
abstract class CupertinoLocalizations extends MXDartClass {}
export { CupertinoLocalizations };
class _CupertinoLocalizationsDelegate extends LocalizationsDelegate {}
export { _CupertinoLocalizationsDelegate };
class DefaultCupertinoLocalizations extends MXDartClass {
  static get delegate() {
    var jsObj = new (class MXLocalizationsDelegate extends LocalizationsDelegate {})();
    jsObj['className'] = 'DefaultCupertinoLocalizations';
    jsObj['constructorName'] = 'delegate';
    return jsObj;
  }
}
export { DefaultCupertinoLocalizations };
