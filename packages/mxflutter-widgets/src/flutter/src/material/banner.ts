// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { StatelessWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MaterialBanner extends StatelessWidget {
  content: MXWidget;
  contentTextStyle: TextStyle;
  actions: Array<any>;
  leading: MXWidget;
  backgroundColor: Color;
  padding: EdgeInsetsGeometry;
  leadingPadding: EdgeInsetsGeometry;
  forceActionsBelow: boolean;
  public constructor(namedParameters: {key?: Key, content?: MXWidget, contentTextStyle?: TextStyle, actions?: Array<any>, leading?: MXWidget, backgroundColor?: Color, padding?: EdgeInsetsGeometry, leadingPadding?: EdgeInsetsGeometry, forceActionsBelow?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.content = namedParameters.content;
    this.contentTextStyle = namedParameters.contentTextStyle;
    this.actions = namedParameters.actions;
    this.leading = namedParameters.leading;
    this.backgroundColor = namedParameters.backgroundColor;
    this.padding = namedParameters.padding;
    this.leadingPadding = namedParameters.leadingPadding;
    this.forceActionsBelow = namedParameters.forceActionsBelow;
    this.className = 'MaterialBanner';
  }
}
export { MaterialBanner };
