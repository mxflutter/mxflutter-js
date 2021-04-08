// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class GridTileBar extends StatelessWidget {
  backgroundColor: Color;
  leading: MXWidget;
  title: MXWidget;
  subtitle: MXWidget;
  trailing: MXWidget;
  public constructor(namedParameters: {key?: Key, backgroundColor?: Color, leading?: MXWidget, title?: MXWidget, subtitle?: MXWidget, trailing?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.backgroundColor = namedParameters.backgroundColor;
    this.leading = namedParameters.leading;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.trailing = namedParameters.trailing;
    this.className = 'GridTileBar';
  }
}
export { GridTileBar };
