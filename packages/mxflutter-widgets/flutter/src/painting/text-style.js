//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { Shadow } from '../../../mx-dart-sdk';
import { Color, Locale, } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TextStyle extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.inherit = namedParameters.inherit;
        this.color = namedParameters.color;
        this.backgroundColor = namedParameters.backgroundColor;
        this.fontSize = namedParameters.fontSize;
        this.fontWeight = namedParameters.fontWeight;
        this.fontStyle = namedParameters.fontStyle;
        this.letterSpacing = namedParameters.letterSpacing;
        this.wordSpacing = namedParameters.wordSpacing;
        this.textBaseline = namedParameters.textBaseline;
        this.height = namedParameters.height;
        this.locale = namedParameters.locale;
        this.foreground = namedParameters.foreground;
        this.background = namedParameters.background;
        this.shadows = namedParameters.shadows;
        this.fontFeatures = namedParameters.fontFeatures;
        this.decoration = namedParameters.decoration;
        this.decorationColor = namedParameters.decorationColor;
        this.decorationStyle = namedParameters.decorationStyle;
        this.decorationThickness = namedParameters.decorationThickness;
        this.debugLabel = namedParameters.debugLabel;
        this.fontFamily = namedParameters.fontFamily;
        this.fontFamilyFallback = namedParameters.fontFamilyFallback;
        this.__mx_package = namedParameters.__mx_package;
        this.className = 'TextStyle';
    }
    // MX modified begin
    static fromJson(mapObj) {
        if (mapObj === null || mapObj === undefined) {
            return null;
        }
        const obj = new TextStyle();
        for (const p in mapObj) {
            if (mapObj.hasOwnProperty(p)) {
                const v = mapObj[p];
                if (v == null || v == undefined) {
                    obj[p] = v;
                    continue;
                }
                switch (p) {
                    case 'color':
                    case 'decorationColor':
                        obj[p] = new Color(v);
                        break;
                    case 'locale':
                        obj[p] = Locale.fromJson(v);
                        break;
                    case 'shadows':
                        {
                            let shadowArray = [];
                            for (const shadow of v) {
                                shadowArray.push(Shadow.fromJson(shadow));
                            }
                            obj[p] = shadowArray;
                        }
                        break;
                    default:
                        obj[p] = v;
                        break;
                }
            }
        }
        return obj;
    }
}
export { TextStyle };
