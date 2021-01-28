//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget } from './framework';
import { EdgeInsets } from '../painting/edge-insets';
import { Size } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var Orientation;
(function (Orientation) {
    Orientation["portrait"] = "{ \"_name\": \"Orientation.portrait\", \"index\": 0 }";
    Orientation["landscape"] = "{ \"_name\": \"Orientation.landscape\", \"index\": 1 }";
})(Orientation || (Orientation = {}));
export { Orientation };
class MediaQueryData extends MXDartClass {
    constructor(namedParameters = {}) {
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
    static fromWindow(window) {
        var jsObj = new MediaQueryData();
        jsObj['window'] = window;
        jsObj['constructorName'] = 'fromWindow';
        return jsObj;
    }
    // MX modified begin
    static fromJson(mapObj) {
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
}
export { MediaQueryData };
class MediaQuery extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'MediaQuery';
    }
    static removePadding(namedParameters = {}) {
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
    static removeViewInsets(namedParameters = {}) {
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
    static removeViewPadding(namedParameters = {}) {
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
    static of(context) {
        let widgetOfData = context.dependOnInheritedWidget('MediaQuery', (jsonMap) => {
            return MediaQueryData.fromJson(jsonMap);
        });
        return widgetOfData;
    }
}
export { MediaQuery };
var NavigationMode;
(function (NavigationMode) {
    NavigationMode["traditional"] = "{ \"_name\": \"NavigationMode.traditional\", \"index\": 0 }";
    NavigationMode["directional"] = "{ \"_name\": \"NavigationMode.directional\", \"index\": 1 }";
})(NavigationMode || (NavigationMode = {}));
export { NavigationMode };
