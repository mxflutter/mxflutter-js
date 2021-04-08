// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Decoration } from '../painting/decoration';
import { MultiChildLayoutDelegate } from '../rendering/custom-layout';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { StatelessWidget, Widget, StatefulWidget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _AccountPictures extends StatelessWidget {
  currentAccountPicture: MXWidget;
  otherAccountsPictures: Array<any>;
  public constructor(namedParameters: {key?: Key, currentAccountPicture?: MXWidget, otherAccountsPictures?: Array<any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.currentAccountPicture = namedParameters.currentAccountPicture;
    this.otherAccountsPictures = namedParameters.otherAccountsPictures;
    this.className = '_AccountPictures';
  }
}
export { _AccountPictures };
class _AccountDetails extends StatefulWidget {
  accountName: MXWidget;
  accountEmail: MXWidget;
  onTap: any;
  isOpen: boolean;
  arrowColor: Color;
  public constructor(namedParameters: {key?: Key, accountName?: MXWidget, accountEmail?: MXWidget, onTap?: any, isOpen?: boolean, arrowColor?: Color} = {}) {
    super();
    this.key = namedParameters.key;
    this.accountName = namedParameters.accountName;
    this.accountEmail = namedParameters.accountEmail;
    this.onTap = namedParameters.onTap;
    this.isOpen = namedParameters.isOpen;
    this.arrowColor = namedParameters.arrowColor;
    this.className = '_AccountDetails';
  }
}
export { _AccountDetails };
class _AccountDetailsState extends State {
  animation: Animation;
  controller: AnimationController;
}
export { _AccountDetailsState };
class _AccountDetailsLayout extends MultiChildLayoutDelegate {
  textDirection: TextDirection;
  public constructor(namedParameters: {textDirection?: TextDirection} = {}) {
    super();
    this.textDirection = namedParameters.textDirection;
    this.className = '_AccountDetailsLayout';
  }
  static get accountName() {
    return 'accountName';
  }
  static get accountEmail() {
    return 'accountEmail';
  }
  static get dropdownIcon() {
    return 'dropdownIcon';
  }
}
export { _AccountDetailsLayout };
class UserAccountsDrawerHeader extends StatefulWidget {
  decoration: Decoration;
  margin: EdgeInsetsGeometry;
  currentAccountPicture: MXWidget;
  otherAccountsPictures: Array<any>;
  accountName: MXWidget;
  accountEmail: MXWidget;
  onDetailsPressed: any;
  arrowColor: Color;
  public constructor(namedParameters: {key?: Key, decoration?: Decoration, margin?: EdgeInsetsGeometry, currentAccountPicture?: MXWidget, otherAccountsPictures?: Array<any>, accountName?: MXWidget, accountEmail?: MXWidget, onDetailsPressed?: any, arrowColor?: Color} = {}) {
    super();
    this.key = namedParameters.key;
    this.decoration = namedParameters.decoration;
    this.margin = namedParameters.margin;
    this.currentAccountPicture = namedParameters.currentAccountPicture;
    this.otherAccountsPictures = namedParameters.otherAccountsPictures;
    this.accountName = namedParameters.accountName;
    this.accountEmail = namedParameters.accountEmail;
    this.onDetailsPressed = namedParameters.onDetailsPressed;
    this.arrowColor = namedParameters.arrowColor;
    this.className = 'UserAccountsDrawerHeader';
  }
}
export { UserAccountsDrawerHeader };
class _UserAccountsDrawerHeaderState extends State {
  isOpen: boolean;
}
export { _UserAccountsDrawerHeaderState };
