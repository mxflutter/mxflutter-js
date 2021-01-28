//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DateTime } from '../../../mx-dart-sdk';
import { BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DayPeriod {
  am = '{ "_name": "DayPeriod.am", "index": 0 }',
  pm = '{ "_name": "DayPeriod.pm", "index": 1 }',
}

export { DayPeriod };
class TimeOfDay extends MXDartClass {
  hour: number;
  minute: number;
  public constructor(namedParameters: { hour?: number; minute?: number } = {}) {
    super();
    this.hour = namedParameters.hour;
    this.minute = namedParameters.minute;
    this.className = 'TimeOfDay';
  }
  static get hoursPerDay() {
    return 24;
  }
  static get hoursPerPeriod() {
    return 12;
  }
  static get minutesPerHour() {
    return 60;
  }
  static now() {
    var jsObj = new TimeOfDay();
    jsObj['constructorName'] = 'now';
    return jsObj;
  }
  static fromDateTime(time?: DateTime) {
    var jsObj = new TimeOfDay();
    jsObj['time'] = time;
    jsObj['constructorName'] = 'fromDateTime';
    return jsObj;
  }
}
export { TimeOfDay };
enum TimeOfDayFormat {
  HH_colon_mm = '{ "_name": "TimeOfDayFormat.HH_colon_mm", "index": 0 }',
  HH_dot_mm = '{ "_name": "TimeOfDayFormat.HH_dot_mm", "index": 1 }',
  frenchCanadian = '{ "_name": "TimeOfDayFormat.frenchCanadian", "index": 2 }',
  H_colon_mm = '{ "_name": "TimeOfDayFormat.H_colon_mm", "index": 3 }',
  h_colon_mm_space_a = '{ "_name": "TimeOfDayFormat.h_colon_mm_space_a", "index": 4 }',
  a_space_h_colon_mm = '{ "_name": "TimeOfDayFormat.a_space_h_colon_mm", "index": 5 }',
}

export { TimeOfDayFormat };
enum HourFormat {
  HH = '{ "_name": "HourFormat.HH", "index": 0 }',
  H = '{ "_name": "HourFormat.H", "index": 1 }',
  h = '{ "_name": "HourFormat.h", "index": 2 }',
}

export { HourFormat };
