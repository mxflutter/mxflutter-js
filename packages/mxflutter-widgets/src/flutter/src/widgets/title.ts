// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Title extends StatelessWidget {
  title: string;
  color: Color;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, title?: string, color?: Color, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.title = namedParameters.title;
    this.color = namedParameters.color;
    this.child = namedParameters.child;
    this.className = 'Title';
  }
}
export { Title };
