// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { ColorSwatch } from '../painting/colors';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MaterialColor extends ColorSwatch {
  public constructor(primary?: number, swatch?: Map<any, any>) {
    super();
    this['primary'] = primary;
    this['swatch'] = swatch;
    this.className = 'MaterialColor';
  }
}
export { MaterialColor };
class MaterialAccentColor extends ColorSwatch {
  public constructor(primary?: number, swatch?: Map<any, any>) {
    super();
    this['primary'] = primary;
    this['swatch'] = swatch;
    this.className = 'MaterialAccentColor';
  }
}
export { MaterialAccentColor };
class Colors extends MXDartClass {
  static get transparent() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'transparent';
    return jsObj;
  }
  static get black() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black';
    return jsObj;
  }
  static get black87() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black87';
    return jsObj;
  }
  static get black54() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black54';
    return jsObj;
  }
  static get black45() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black45';
    return jsObj;
  }
  static get black38() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black38';
    return jsObj;
  }
  static get black26() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black26';
    return jsObj;
  }
  static get black12() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'black12';
    return jsObj;
  }
  static get white() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white';
    return jsObj;
  }
  static get white70() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white70';
    return jsObj;
  }
  static get white60() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white60';
    return jsObj;
  }
  static get white54() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white54';
    return jsObj;
  }
  static get white38() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white38';
    return jsObj;
  }
  static get white30() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white30';
    return jsObj;
  }
  static get white24() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white24';
    return jsObj;
  }
  static get white12() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white12';
    return jsObj;
  }
  static get white10() {
    var jsObj = new Color();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'white10';
    return jsObj;
  }
  static get red() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'red';
    return jsObj;
  }
  static get redAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'redAccent';
    return jsObj;
  }
  static get pink() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'pink';
    return jsObj;
  }
  static get pinkAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'pinkAccent';
    return jsObj;
  }
  static get purple() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'purple';
    return jsObj;
  }
  static get purpleAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'purpleAccent';
    return jsObj;
  }
  static get deepPurple() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'deepPurple';
    return jsObj;
  }
  static get deepPurpleAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'deepPurpleAccent';
    return jsObj;
  }
  static get indigo() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'indigo';
    return jsObj;
  }
  static get indigoAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'indigoAccent';
    return jsObj;
  }
  static get blue() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'blue';
    return jsObj;
  }
  static get blueAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'blueAccent';
    return jsObj;
  }
  static get lightBlue() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'lightBlue';
    return jsObj;
  }
  static get lightBlueAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'lightBlueAccent';
    return jsObj;
  }
  static get cyan() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'cyan';
    return jsObj;
  }
  static get cyanAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'cyanAccent';
    return jsObj;
  }
  static get teal() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'teal';
    return jsObj;
  }
  static get tealAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'tealAccent';
    return jsObj;
  }
  static get green() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'green';
    return jsObj;
  }
  static get greenAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'greenAccent';
    return jsObj;
  }
  static get lightGreen() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'lightGreen';
    return jsObj;
  }
  static get lightGreenAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'lightGreenAccent';
    return jsObj;
  }
  static get lime() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'lime';
    return jsObj;
  }
  static get limeAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'limeAccent';
    return jsObj;
  }
  static get yellow() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'yellow';
    return jsObj;
  }
  static get yellowAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'yellowAccent';
    return jsObj;
  }
  static get amber() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'amber';
    return jsObj;
  }
  static get amberAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'amberAccent';
    return jsObj;
  }
  static get orange() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'orange';
    return jsObj;
  }
  static get orangeAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'orangeAccent';
    return jsObj;
  }
  static get deepOrange() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'deepOrange';
    return jsObj;
  }
  static get deepOrangeAccent() {
    var jsObj = new MaterialAccentColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'deepOrangeAccent';
    return jsObj;
  }
  static get brown() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'brown';
    return jsObj;
  }
  static get grey() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'grey';
    return jsObj;
  }
  static get blueGrey() {
    var jsObj = new MaterialColor();
    jsObj['className'] = 'Colors';
    jsObj['constructorName'] = 'blueGrey';
    return jsObj;
  }
  static get primaries() {
    return [Colors.red, Colors.pink, Colors.purple, Colors.deepPurple, Colors.indigo, Colors.blue, Colors.lightBlue, Colors.cyan, Colors.teal, Colors.green, Colors.lightGreen, Colors.lime, Colors.yellow, Colors.amber, Colors.orange, Colors.deepOrange, Colors.brown, Colors.blueGrey];
  }
  static get accents() {
    return [Colors.redAccent, Colors.pinkAccent, Colors.purpleAccent, Colors.deepPurpleAccent, Colors.indigoAccent, Colors.blueAccent, Colors.lightBlueAccent, Colors.cyanAccent, Colors.tealAccent, Colors.greenAccent, Colors.lightGreenAccent, Colors.limeAccent, Colors.yellowAccent, Colors.amberAccent, Colors.orangeAccent, Colors.deepOrangeAccent];
  }
}
export { Colors };
