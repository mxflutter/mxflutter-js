// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextDirection, TextBaseline } from '../../../mx-dart-sdk';
import { Flex } from '../widgets/basic';
import { Key } from '../foundation/key';
import { VerticalDirection, Axis } from '../painting/basic-types';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ButtonTextTheme, ButtonBarLayoutBehavior } from './button-theme';
import { MainAxisAlignment, MainAxisSize, CrossAxisAlignment, RenderFlex } from '../rendering/flex';
import { StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ButtonBar extends StatelessWidget {
  alignment: MainAxisAlignment;
  mainAxisSize: MainAxisSize;
  buttonTextTheme: ButtonTextTheme;
  buttonMinWidth: number;
  buttonHeight: number;
  buttonPadding: EdgeInsetsGeometry;
  buttonAlignedDropdown: boolean;
  layoutBehavior: ButtonBarLayoutBehavior;
  overflowDirection: VerticalDirection;
  overflowButtonSpacing: number;
  children: Array<any>;
  public constructor(namedParameters: {key?: Key, alignment?: MainAxisAlignment, mainAxisSize?: MainAxisSize, buttonTextTheme?: ButtonTextTheme, buttonMinWidth?: number, buttonHeight?: number, buttonPadding?: EdgeInsetsGeometry, buttonAlignedDropdown?: boolean, layoutBehavior?: ButtonBarLayoutBehavior, overflowDirection?: VerticalDirection, overflowButtonSpacing?: number, children?: Array<any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.alignment = namedParameters.alignment;
    this.mainAxisSize = namedParameters.mainAxisSize;
    this.buttonTextTheme = namedParameters.buttonTextTheme;
    this.buttonMinWidth = namedParameters.buttonMinWidth;
    this.buttonHeight = namedParameters.buttonHeight;
    this.buttonPadding = namedParameters.buttonPadding;
    this.buttonAlignedDropdown = namedParameters.buttonAlignedDropdown;
    this.layoutBehavior = namedParameters.layoutBehavior;
    this.overflowDirection = namedParameters.overflowDirection;
    this.overflowButtonSpacing = namedParameters.overflowButtonSpacing;
    this.children = namedParameters.children;
    this.className = 'ButtonBar';
  }
}
export { ButtonBar };
class _ButtonBarRow extends Flex {
  overflowButtonSpacing: number;
  public constructor(namedParameters: {children?: Array<any>, direction?: Axis, mainAxisSize?: MainAxisSize, mainAxisAlignment?: MainAxisAlignment, crossAxisAlignment?: CrossAxisAlignment, textDirection?: TextDirection, overflowDirection?: VerticalDirection, textBaseline?: TextBaseline, overflowButtonSpacing?: number} = {}) {
    super();
    this.children = namedParameters.children;
    this.direction = namedParameters.direction;
    this.mainAxisSize = namedParameters.mainAxisSize;
    this.mainAxisAlignment = namedParameters.mainAxisAlignment;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this['overflowDirection'] = namedParameters.overflowDirection;
    this.textBaseline = namedParameters.textBaseline;
    this.overflowButtonSpacing = namedParameters.overflowButtonSpacing;
    this.className = '_ButtonBarRow';
  }
}
export { _ButtonBarRow };
class _RenderButtonBarRow extends RenderFlex {
  hasCheckedLayoutWidth: boolean;
  overflowButtonSpacing: number;
  public constructor(namedParameters: {children?: Array<any>, direction?: Axis, mainAxisSize?: MainAxisSize, mainAxisAlignment?: MainAxisAlignment, crossAxisAlignment?: CrossAxisAlignment, textDirection?: TextDirection, verticalDirection?: VerticalDirection, textBaseline?: TextBaseline, overflowButtonSpacing?: number} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.direction = namedParameters.direction;
    this.mainAxisSize = namedParameters.mainAxisSize;
    this.mainAxisAlignment = namedParameters.mainAxisAlignment;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this.verticalDirection = namedParameters.verticalDirection;
    this.textBaseline = namedParameters.textBaseline;
    this.overflowButtonSpacing = namedParameters.overflowButtonSpacing;
    this.className = '_RenderButtonBarRow';
  }
}
export { _RenderButtonBarRow };
