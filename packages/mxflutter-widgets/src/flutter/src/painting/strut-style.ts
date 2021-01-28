//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { TextStyle } from './text-style';
import { FontWeight, FontStyle } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class StrutStyle extends MXDartClass {
  fontFamily: string;
  fontFamilyFallback: Array<any>;
  __mx_package: string;
  fontSize: number;
  height: number;
  fontWeight: FontWeight;
  fontStyle: FontStyle;
  leading: number;
  forceStrutHeight: boolean;
  debugLabel: string;
  public constructor(
    namedParameters: {
      fontFamily?: string;
      fontFamilyFallback?: Array<any>;
      fontSize?: number;
      height?: number;
      leading?: number;
      fontWeight?: FontWeight;
      fontStyle?: FontStyle;
      forceStrutHeight?: boolean;
      debugLabel?: string;
      __mx_package?: string;
    } = {},
  ) {
    super();
    this.fontFamily = namedParameters.fontFamily;
    this.fontFamilyFallback = namedParameters.fontFamilyFallback;
    this.fontSize = namedParameters.fontSize;
    this.height = namedParameters.height;
    this.leading = namedParameters.leading;
    this.fontWeight = namedParameters.fontWeight;
    this.fontStyle = namedParameters.fontStyle;
    this.forceStrutHeight = namedParameters.forceStrutHeight;
    this.debugLabel = namedParameters.debugLabel;
    this.__mx_package = namedParameters.__mx_package;
    this.className = 'StrutStyle';
  }
  static get disabled() {
    var jsObj = new StrutStyle();
    jsObj['className'] = 'StrutStyle';
    jsObj['constructorName'] = 'disabled';
    return jsObj;
  }
  static fromTextStyle(
    textStyle?: TextStyle,
    namedParameters: {
      fontFamily?: string;
      fontFamilyFallback?: Array<any>;
      fontSize?: number;
      height?: number;
      leading?: number;
      fontWeight?: FontWeight;
      fontStyle?: FontStyle;
      forceStrutHeight?: boolean;
      debugLabel?: string;
      __mx_package?: string;
    } = {},
  ) {
    var jsObj = new StrutStyle();
    jsObj['textStyle'] = textStyle;
    jsObj.fontFamily = namedParameters.fontFamily;
    jsObj.fontFamilyFallback = namedParameters.fontFamilyFallback;
    jsObj.fontSize = namedParameters.fontSize;
    jsObj.height = namedParameters.height;
    jsObj.leading = namedParameters.leading;
    jsObj.fontWeight = namedParameters.fontWeight;
    jsObj.fontStyle = namedParameters.fontStyle;
    jsObj.forceStrutHeight = namedParameters.forceStrutHeight;
    jsObj.debugLabel = namedParameters.debugLabel;
    jsObj.__mx_package = namedParameters.__mx_package;
    jsObj['constructorName'] = 'fromTextStyle';
    return jsObj;
  }
}
export { StrutStyle };
