"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTheme = void 0;
const text_style_1 = require("../painting/text-style");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TextTheme extends mxflutter_base_1.MXDartClass {
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
        this['display4'] = namedParameters.display4;
        this['display3'] = namedParameters.display3;
        this['display2'] = namedParameters.display2;
        this['display1'] = namedParameters.display1;
        this['headline'] = namedParameters.headline;
        this['title'] = namedParameters.title;
        this['subhead'] = namedParameters.subhead;
        this['subtitle'] = namedParameters.subtitle;
        this['body2'] = namedParameters.body2;
        this['body1'] = namedParameters.body1;
        this.className = 'TextTheme';
    }
    // MX modified begin
    static fromJson(mapObj) {
        if (mapObj === null || mapObj === undefined) {
            return null;
        }
        const obj = new TextTheme({
            headline1: text_style_1.TextStyle.fromJson(mapObj['headline1']),
            headline2: text_style_1.TextStyle.fromJson(mapObj['headline2']),
            headline3: text_style_1.TextStyle.fromJson(mapObj['headline3']),
            headline4: text_style_1.TextStyle.fromJson(mapObj['headline4']),
            headline5: text_style_1.TextStyle.fromJson(mapObj['headline5']),
            headline6: text_style_1.TextStyle.fromJson(mapObj['headline6']),
            subtitle1: text_style_1.TextStyle.fromJson(mapObj['subtitle1']),
            subtitle2: text_style_1.TextStyle.fromJson(mapObj['subtitle2']),
            bodyText1: text_style_1.TextStyle.fromJson(mapObj['bodyText1']),
            bodyText2: text_style_1.TextStyle.fromJson(mapObj['bodyText2']),
            caption: text_style_1.TextStyle.fromJson(mapObj['caption']),
            button: text_style_1.TextStyle.fromJson(mapObj['button']),
            overline: text_style_1.TextStyle.fromJson(mapObj.overline),
        });
        return obj;
    }
}
exports.TextTheme = TextTheme;
