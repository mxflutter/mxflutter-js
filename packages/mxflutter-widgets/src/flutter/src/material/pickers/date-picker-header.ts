// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../../foundation/key';
import { IconData } from '../../widgets/icon-data';
import { Orientation } from '../../widgets/media-query';
import { TextStyle } from '../../painting/text-style';
import { StatelessWidget } from '../../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DatePickerHeader extends StatelessWidget {
  helpText: string;
  titleText: string;
  titleSemanticsLabel: string;
  titleStyle: TextStyle;
  orientation: Orientation;
  isShort: boolean;
  icon: IconData;
  iconTooltip: string;
  onIconPressed: any;
  public constructor(namedParameters: {key?: Key, helpText?: string, titleText?: string, titleSemanticsLabel?: string, titleStyle?: TextStyle, orientation?: Orientation, isShort?: boolean, icon?: IconData, iconTooltip?: string, onIconPressed?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.helpText = namedParameters.helpText;
    this.titleText = namedParameters.titleText;
    this.titleSemanticsLabel = namedParameters.titleSemanticsLabel;
    this.titleStyle = namedParameters.titleStyle;
    this.orientation = namedParameters.orientation;
    this.isShort = namedParameters.isShort;
    this.icon = namedParameters.icon;
    this.iconTooltip = namedParameters.iconTooltip;
    this.onIconPressed = namedParameters.onIconPressed;
    this.className = 'DatePickerHeader';
  }
}
export { DatePickerHeader };
