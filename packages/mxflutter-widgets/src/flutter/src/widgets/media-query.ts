// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { InheritedWidget, Widget, BuildContext } from './framework';
import { EdgeInsets } from '../painting/edge-insets';
import { Size, Brightness, Window } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum Orientation {
  portrait = '{ "_name": "Orientation.portrait", "index": 0 }',
  landscape = '{ "_name": "Orientation.landscape", "index": 1 }',
};

export { Orientation };
class MediaQueryData extends MXDartClass {
  size: Size;
  devicePixelRatio: number;
  textScaleFactor: number;
  platformBrightness: Brightness;
  viewInsets: EdgeInsets;
  padding: EdgeInsets;
  viewPadding: EdgeInsets;
  systemGestureInsets: EdgeInsets;
  alwaysUse24HourFormat: boolean;
  accessibleNavigation: boolean;
  invertColors: boolean;
  highContrast: boolean;
  disableAnimations: boolean;
  boldText: boolean;
  navigationMode: NavigationMode;
  public constructor(namedParameters: {size?: Size, devicePixelRatio?: number, textScaleFactor?: number, platformBrightness?: Brightness, padding?: EdgeInsets, viewInsets?: EdgeInsets, systemGestureInsets?: EdgeInsets, viewPadding?: EdgeInsets, alwaysUse24HourFormat?: boolean, accessibleNavigation?: boolean, invertColors?: boolean, highContrast?: boolean, disableAnimations?: boolean, boldText?: boolean, navigationMode?: NavigationMode} = {}) {
    super();
    this.size = namedParameters.size;
    this.devicePixelRatio = namedParameters.devicePixelRatio;
    this.textScaleFactor = namedParameters.textScaleFactor;
    this.platformBrightness = namedParameters.platformBrightness;
    this.padding = namedParameters.padding;
    this.viewInsets = namedParameters.viewInsets;
    this.systemGestureInsets = namedParameters.systemGestureInsets;
    this.viewPadding = namedParameters.viewPadding;
    this.alwaysUse24HourFormat = namedParameters.alwaysUse24HourFormat;
    this.accessibleNavigation = namedParameters.accessibleNavigation;
    this.invertColors = namedParameters.invertColors;
    this.highContrast = namedParameters.highContrast;
    this.disableAnimations = namedParameters.disableAnimations;
    this.boldText = namedParameters.boldText;
    this.navigationMode = namedParameters.navigationMode;
    this.className = 'MediaQueryData';
  }
  static fromWindow(window?: Window) {
    var jsObj = new MediaQueryData();
    jsObj['window'] = window;
    jsObj['constructorName'] = 'fromWindow';
    return jsObj;
  }
  // MX modified begin
  public static fromJson(mapObj: any) {
    if (mapObj === null || mapObj === undefined) {
      return null;
    }
    const obj = new MediaQueryData();

    for (const p in mapObj) {
      if (mapObj.hasOwnProperty(p)) {
        const v = mapObj[p];
        switch (p) {
          case 'size':
            obj[p] = Size.fromJson(v);
            break;
          case 'pAdd_Aftering':
          case 'viewInsets':
            obj[p] = EdgeInsets.fromJson(v);
            break;
          default:
            obj[p] = v;
        }
      }
    }

    return obj;
  }
  // MX modified end
}
export { MediaQueryData };
class MediaQuery extends InheritedWidget {
  data: MediaQueryData;
  public constructor(namedParameters: {key?: Key, data?: MediaQueryData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'MediaQuery';
  }
  static removePadding(namedParameters: {key?: Key, context?: BuildContext, removeLeft?: boolean, removeTop?: boolean, removeRight?: boolean, removeBottom?: boolean, child?: MXWidget} = {}) {
    var jsObj = new MediaQuery();
    jsObj.key = namedParameters.key;
    jsObj['context'] = namedParameters.context;
    jsObj['removeLeft'] = namedParameters.removeLeft;
    jsObj['removeTop'] = namedParameters.removeTop;
    jsObj['removeRight'] = namedParameters.removeRight;
    jsObj['removeBottom'] = namedParameters.removeBottom;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'removePadding';
    return jsObj;
  }
  static removeViewInsets(namedParameters: {key?: Key, context?: BuildContext, removeLeft?: boolean, removeTop?: boolean, removeRight?: boolean, removeBottom?: boolean, child?: MXWidget} = {}) {
    var jsObj = new MediaQuery();
    jsObj.key = namedParameters.key;
    jsObj['context'] = namedParameters.context;
    jsObj['removeLeft'] = namedParameters.removeLeft;
    jsObj['removeTop'] = namedParameters.removeTop;
    jsObj['removeRight'] = namedParameters.removeRight;
    jsObj['removeBottom'] = namedParameters.removeBottom;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'removeViewInsets';
    return jsObj;
  }
  static removeViewPadding(namedParameters: {key?: Key, context?: BuildContext, removeLeft?: boolean, removeTop?: boolean, removeRight?: boolean, removeBottom?: boolean, child?: MXWidget} = {}) {
    var jsObj = new MediaQuery();
    jsObj.key = namedParameters.key;
    jsObj['context'] = namedParameters.context;
    jsObj['removeLeft'] = namedParameters.removeLeft;
    jsObj['removeTop'] = namedParameters.removeTop;
    jsObj['removeRight'] = namedParameters.removeRight;
    jsObj['removeBottom'] = namedParameters.removeBottom;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'removeViewPadding';
    return jsObj;
  }
  // MX modified begin
  public static of(context: any) :MediaQueryData{
    let widgetOfData = context.dependOnInheritedWidget('MediaQuery', (jsonMap: any) => {
      return MediaQueryData.fromJson(jsonMap);
    });
    return widgetOfData;
  }
  // MX modified end
}
export { MediaQuery };
enum NavigationMode {
  traditional = '{ "_name": "NavigationMode.traditional", "index": 0 }',
  directional = '{ "_name": "NavigationMode.directional", "index": 1 }',
};

export { NavigationMode };
