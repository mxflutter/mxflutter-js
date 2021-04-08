// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextStyle } from '../painting/text-style';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextTheme extends MXDartClass {
  headline1: TextStyle;
  headline2: TextStyle;
  headline3: TextStyle;
  headline4: TextStyle;
  headline5: TextStyle;
  headline6: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  bodyText1: TextStyle;
  bodyText2: TextStyle;
  caption: TextStyle;
  button: TextStyle;
  overline: TextStyle;
  public constructor(namedParameters: {headline1?: TextStyle, headline2?: TextStyle, headline3?: TextStyle, headline4?: TextStyle, headline5?: TextStyle, headline6?: TextStyle, subtitle1?: TextStyle, subtitle2?: TextStyle, bodyText1?: TextStyle, bodyText2?: TextStyle, caption?: TextStyle, button?: TextStyle, overline?: TextStyle, display4?: TextStyle, display3?: TextStyle, display2?: TextStyle, display1?: TextStyle, headline?: TextStyle, title?: TextStyle, subhead?: TextStyle, subtitle?: TextStyle, body2?: TextStyle, body1?: TextStyle} = {}) {
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
  public static fromJson(mapObj: any) {
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
  // MX modified end
}
export { TextTheme };
