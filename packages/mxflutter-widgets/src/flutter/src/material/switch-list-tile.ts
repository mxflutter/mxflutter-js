//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { ListTileControlAffinity } from './list-tile';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ImageProvider } from '../painting/image-provider';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _SwitchListTileType {
  material = '{ "_name": "_SwitchListTileType.material", "index": 0 }',
  adaptive = '{ "_name": "_SwitchListTileType.adaptive", "index": 1 }',
}

export { _SwitchListTileType };
class SwitchListTile extends StatelessWidget$ {
  value: boolean;
  onChanged: any;
  activeColor: Color;
  activeTrackColor: Color;
  inactiveThumbColor: Color;
  inactiveTrackColor: Color;
  activeThumbImage: ImageProvider;
  inactiveThumbImage: ImageProvider;
  title: MXWidget;
  subtitle: MXWidget;
  secondary: MXWidget;
  isThreeLine: boolean;
  dense: boolean;
  contentPadding: EdgeInsetsGeometry;
  selected: boolean;
  autofocus: boolean;
  switchListTileType: _SwitchListTileType;
  controlAffinity: ListTileControlAffinity;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: boolean;
      onChanged?: any;
      activeColor?: Color;
      activeTrackColor?: Color;
      inactiveThumbColor?: Color;
      inactiveTrackColor?: Color;
      activeThumbImage?: ImageProvider;
      inactiveThumbImage?: ImageProvider;
      title?: MXWidget;
      subtitle?: MXWidget;
      isThreeLine?: boolean;
      dense?: boolean;
      contentPadding?: EdgeInsetsGeometry;
      secondary?: MXWidget;
      selected?: boolean;
      autofocus?: boolean;
      controlAffinity?: ListTileControlAffinity;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.onChanged = namedParameters.onChanged;
    this.activeColor = namedParameters.activeColor;
    this.activeTrackColor = namedParameters.activeTrackColor;
    this.inactiveThumbColor = namedParameters.inactiveThumbColor;
    this.inactiveTrackColor = namedParameters.inactiveTrackColor;
    this.activeThumbImage = namedParameters.activeThumbImage;
    this.inactiveThumbImage = namedParameters.inactiveThumbImage;
    this.title = namedParameters.title;
    this.subtitle = namedParameters.subtitle;
    this.isThreeLine = namedParameters.isThreeLine;
    this.dense = namedParameters.dense;
    this.contentPadding = namedParameters.contentPadding;
    this.secondary = namedParameters.secondary;
    this.selected = namedParameters.selected;
    this.autofocus = namedParameters.autofocus;
    this.controlAffinity = namedParameters.controlAffinity;
    this.className = 'SwitchListTile';
  }
  static adaptive(
    namedParameters: {
      key?: Key;
      value?: boolean;
      onChanged?: any;
      activeColor?: Color;
      activeTrackColor?: Color;
      inactiveThumbColor?: Color;
      inactiveTrackColor?: Color;
      activeThumbImage?: ImageProvider;
      inactiveThumbImage?: ImageProvider;
      title?: MXWidget;
      subtitle?: MXWidget;
      isThreeLine?: boolean;
      dense?: boolean;
      contentPadding?: EdgeInsetsGeometry;
      secondary?: MXWidget;
      selected?: boolean;
      autofocus?: boolean;
      controlAffinity?: ListTileControlAffinity;
    } = {},
  ) {
    var jsObj = new SwitchListTile();
    jsObj.key = namedParameters.key;
    jsObj.value = namedParameters.value;
    jsObj.onChanged = namedParameters.onChanged;
    jsObj.activeColor = namedParameters.activeColor;
    jsObj.activeTrackColor = namedParameters.activeTrackColor;
    jsObj.inactiveThumbColor = namedParameters.inactiveThumbColor;
    jsObj.inactiveTrackColor = namedParameters.inactiveTrackColor;
    jsObj.activeThumbImage = namedParameters.activeThumbImage;
    jsObj.inactiveThumbImage = namedParameters.inactiveThumbImage;
    jsObj.title = namedParameters.title;
    jsObj.subtitle = namedParameters.subtitle;
    jsObj.isThreeLine = namedParameters.isThreeLine;
    jsObj.dense = namedParameters.dense;
    jsObj.contentPadding = namedParameters.contentPadding;
    jsObj.secondary = namedParameters.secondary;
    jsObj.selected = namedParameters.selected;
    jsObj.autofocus = namedParameters.autofocus;
    jsObj.controlAffinity = namedParameters.controlAffinity;
    jsObj['constructorName'] = 'adaptive';
    return jsObj;
  }
}
export { SwitchListTile };
