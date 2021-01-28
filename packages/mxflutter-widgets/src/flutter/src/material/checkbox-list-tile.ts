//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ListTileControlAffinity } from './list-tile';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CheckboxListTile extends StatelessWidget$ {
  value: boolean;
  onChanged: any;
  activeColor: Color;
  checkColor: Color;
  title: MXWidget;
  subtitle: MXWidget;
  secondary: MXWidget;
  isThreeLine: boolean;
  dense: boolean;
  selected: boolean;
  controlAffinity: ListTileControlAffinity;
  autofocus: boolean;
  contentPadding: EdgeInsetsGeometry;
  tristate: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: boolean;
      onChanged?: any;
      activeColor?: Color;
      checkColor?: Color;
      title?: MXWidget;
      subtitle?: MXWidget;
      isThreeLine?: boolean;
      dense?: boolean;
      secondary?: MXWidget;
      selected?: boolean;
      controlAffinity?: ListTileControlAffinity;
      autofocus?: boolean;
      contentPadding?: EdgeInsetsGeometry;
      tristate?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.onChanged = namedParameters.onChanged;
    this.activeColor = namedParameters.activeColor;
    this.checkColor = namedParameters.checkColor;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.isThreeLine = namedParameters.isThreeLine;
    this.dense = namedParameters.dense;
    this.secondary = namedParameters.secondary;
    this.selected = namedParameters.selected;
    this.controlAffinity = namedParameters.controlAffinity;
    this.autofocus = namedParameters.autofocus;
    this.contentPadding = namedParameters.contentPadding;
    this.tristate = namedParameters.tristate;
    this.className = 'CheckboxListTile';
  }
}
export { CheckboxListTile };
