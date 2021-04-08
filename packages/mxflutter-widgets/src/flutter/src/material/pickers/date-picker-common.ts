// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { DateTime } from '../../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DatePickerEntryMode {
  calendar = '{ "_name": "DatePickerEntryMode.calendar", "index": 0 }',
  input = '{ "_name": "DatePickerEntryMode.input", "index": 1 }',
};

export { DatePickerEntryMode };
enum DatePickerMode {
  day = '{ "_name": "DatePickerMode.day", "index": 0 }',
  year = '{ "_name": "DatePickerMode.year", "index": 1 }',
};

export { DatePickerMode };
class DateTimeRange extends MXDartClass {
  start: DateTime;
  end: DateTime;
  public constructor(namedParameters: {start?: DateTime, end?: DateTime} = {}) {
    super();
    this.start = namedParameters.start;
    this.end = namedParameters.end;
    this.className = 'DateTimeRange';
  }
}
export { DateTimeRange };
