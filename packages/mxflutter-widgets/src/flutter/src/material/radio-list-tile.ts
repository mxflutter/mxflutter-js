// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { ListTileControlAffinity } from './list-tile';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget, Widget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RadioListTile extends StatelessWidget {
  value: any;
  groupValue: any;
  onChanged: any;
  toggleable: boolean;
  activeColor: Color;
  title: MXWidget;
  subtitle: MXWidget;
  secondary: MXWidget;
  isThreeLine: boolean;
  dense: boolean;
  selected: boolean;
  controlAffinity: ListTileControlAffinity;
  autofocus: boolean;
  public constructor(namedParameters: {key?: Key, value?: any, groupValue?: any, onChanged?: any, toggleable?: boolean, activeColor?: Color, title?: MXWidget, subtitle?: MXWidget, isThreeLine?: boolean, dense?: boolean, secondary?: MXWidget, selected?: boolean, controlAffinity?: ListTileControlAffinity, autofocus?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.groupValue = namedParameters.groupValue;
    this.onChanged = namedParameters.onChanged;
    this.toggleable = namedParameters.toggleable;
    this.activeColor = namedParameters.activeColor;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.isThreeLine = namedParameters.isThreeLine;
    this.dense = namedParameters.dense;
    this.secondary = namedParameters.secondary;
    this.selected = namedParameters.selected;
    this.controlAffinity = namedParameters.controlAffinity;
    this.autofocus = namedParameters.autofocus;
    this.className = 'RadioListTile';
  }

  // MX modified begin
  mx_f_toDSL() {
    // MX modified begin
    let onChangedProxy = (value: any) => {
      if (this.onChanged) {
        this.onChanged(this.value);
      }
    };

    return {
      key: this.key,
      value: JSON.stringify(this.value),
      groupValue: JSON.stringify(this.groupValue),
      onChanged: onChangedProxy,
      toggleable: this.toggleable,
      activeColor: this.activeColor,
      title: this.title,
      subtitle: this.subtitle,
      isThreeLine: this.isThreeLine,
      dense: this.dense,
      secondary: this.secondary,
      selected: this.selected,
      controlAffinity: this.controlAffinity,
      autofocus: this.autofocus,
      className: 'Radio',
    };
  }
}
export { RadioListTile };
