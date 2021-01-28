//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { ValueListenable } from '../foundation/change-notifier';
import { StatefulWidget$, Widget, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ValueListenableBuilder extends StatefulWidget$ {
  valueListenable: ValueListenable;
  builder: any;
  child: MXWidget;
  public constructor(
    namedParameters: { key?: Key; valueListenable?: ValueListenable; builder?: any; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.valueListenable = namedParameters.valueListenable;
    this.builder = namedParameters.builder;
    this.child = namedParameters.child;
    this.className = 'ValueListenableBuilder';
  }
}
export { ValueListenableBuilder };
class _ValueListenableBuilderState extends State$ {
  value: any;
}
export { _ValueListenableBuilderState };
