//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { TextStyle } from '../painting/text-style';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TextTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.headline1 = namedParameters.headline1;
        this.headline2 = namedParameters.headline2;
        this.headline3 = namedParameters.headline3;
        this.headline4 = namedParameters.headline4;
        this.headline5 = namedParameters.headline5;
        this.headline6 = namedParameters.headline6;
        this.subtitle1 = namedParameters.subtitle1;
        this.subtitle2 = namedParameters.subtitle2;
        this.bodyText1 = namedParameters.bodyText1;
        this.bodyText2 = namedParameters.bodyText2;
        this.caption = namedParameters.caption;
        this.button = namedParameters.button;
        this.overline = namedParameters.overline;
        this.className = 'TextTheme';
    }
    // MX modified begin
    static fromJson(mapObj) {
        if (mapObj === null || mapObj === undefined) {
            return null;
        }
        const obj = new TextTheme({
            headline1: TextStyle.fromJson(mapObj['headline1']),
            headline2: TextStyle.fromJson(mapObj['headline2']),
            headline3: TextStyle.fromJson(mapObj['headline3']),
            headline4: TextStyle.fromJson(mapObj['headline4']),
            headline5: TextStyle.fromJson(mapObj['headline5']),
            headline6: TextStyle.fromJson(mapObj['headline6']),
            subtitle1: TextStyle.fromJson(mapObj['subtitle1']),
            subtitle2: TextStyle.fromJson(mapObj['subtitle2']),
            bodyText1: TextStyle.fromJson(mapObj['bodyText1']),
            bodyText2: TextStyle.fromJson(mapObj['bodyText2']),
            caption: TextStyle.fromJson(mapObj['caption']),
            button: TextStyle.fromJson(mapObj['button']),
            overline: TextStyle.fromJson(mapObj.overline),
        });
        return obj;
    }
}
export { TextTheme };