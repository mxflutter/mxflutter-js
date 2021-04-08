// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MX Modified begin
import {
  MXLifecycleWidgetBase,
  MXMirrorObjMethodCall,
  invokeMirrorObjMethod,
} from '@mxflutter/mxflutter-base';
  // MX Modified end
import { Color, Brightness } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DeviceOrientation {
  portraitUp = '{ "_name": "DeviceOrientation.portraitUp", "index": 0 }',
  landscapeLeft = '{ "_name": "DeviceOrientation.landscapeLeft", "index": 1 }',
  portraitDown = '{ "_name": "DeviceOrientation.portraitDown", "index": 2 }',
  landscapeRight = '{ "_name": "DeviceOrientation.landscapeRight", "index": 3 }',
};

export { DeviceOrientation };
class ApplicationSwitcherDescription extends MXDartClass {
  label: string;
  primaryColor: number;
  public constructor(namedParameters: {label?: string, primaryColor?: number} = {}) {
    super();
    this.label = namedParameters.label;
    this.primaryColor = namedParameters.primaryColor;
    this.className = 'ApplicationSwitcherDescription';
  }
}
export { ApplicationSwitcherDescription };
enum SystemUiOverlay {
  top = '{ "_name": "SystemUiOverlay.top", "index": 0 }',
  bottom = '{ "_name": "SystemUiOverlay.bottom", "index": 1 }',
};

export { SystemUiOverlay };
class SystemUiOverlayStyle extends MXDartClass {
  systemNavigationBarColor: Color;
  systemNavigationBarDividerColor: Color;
  systemNavigationBarIconBrightness: Brightness;
  statusBarColor: Color;
  statusBarBrightness: Brightness;
  statusBarIconBrightness: Brightness;
  public constructor(namedParameters: {systemNavigationBarColor?: Color, systemNavigationBarDividerColor?: Color, systemNavigationBarIconBrightness?: Brightness, statusBarColor?: Color, statusBarBrightness?: Brightness, statusBarIconBrightness?: Brightness} = {}) {
    super();
    this.systemNavigationBarColor = namedParameters.systemNavigationBarColor;
    this.systemNavigationBarDividerColor = namedParameters.systemNavigationBarDividerColor;
    this.systemNavigationBarIconBrightness = namedParameters.systemNavigationBarIconBrightness;
    this.statusBarColor = namedParameters.statusBarColor;
    this.statusBarBrightness = namedParameters.statusBarBrightness;
    this.statusBarIconBrightness = namedParameters.statusBarIconBrightness;
    this.className = 'SystemUiOverlayStyle';
  }
  static get light() {
    var jsObj = new SystemUiOverlayStyle();
    jsObj['className'] = 'SystemUiOverlayStyle';
    jsObj['constructorName'] = 'light';
    return jsObj;
  }
  static get dark() {
    var jsObj = new SystemUiOverlayStyle();
    jsObj['className'] = 'SystemUiOverlayStyle';
    jsObj['constructorName'] = 'dark';
    return jsObj;
  }
}
export { SystemUiOverlayStyle };
// MX Modified begin
class SystemChrome extends MXLifecycleWidgetBase {
  public static setSystemUIOverlayStyle(style?: SystemUiOverlayStyle) {
    const argument = new MXMirrorObjMethodCall({
      funcName: 'SystemChrome.setSystemUIOverlayStyle',
      args: {
        style,
      },
    });
    invokeMirrorObjMethod(argument);
  }
}
// MX Modified end

export { SystemChrome };
