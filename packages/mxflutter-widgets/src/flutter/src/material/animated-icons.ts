//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { CustomPainter } from '../rendering/custom-paint';
import { Key } from '../foundation/key';
import { Color, TextDirection, Canvas, Size, Offset, Path } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { StatelessWidget$, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AnimatedIcon extends StatelessWidget$ {
  progress: Animation;
  color: Color;
  size: number;
  icon: AnimatedIconData;
  semanticLabel: string;
  textDirection: TextDirection;
  public constructor(
    namedParameters: {
      key?: Key;
      icon?: AnimatedIconData;
      progress?: Animation;
      color?: Color;
      size?: number;
      semanticLabel?: string;
      textDirection?: TextDirection;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.icon = namedParameters.icon;
    this.progress = namedParameters.progress;
    this.color = namedParameters.color;
    this.size = namedParameters.size;
    this.semanticLabel = namedParameters.semanticLabel;
    this.textDirection = namedParameters.textDirection;
    this.className = 'AnimatedIcon';
  }
}
export { AnimatedIcon };
class _AnimatedIconPainter extends CustomPainter {
  paths: Array<any>;
  progress: Animation;
  color: Color;
  scale: number;
  shouldMirror: boolean;
  uiPathFactory: any;
  public constructor(
    namedParameters: {
      paths?: Array<any>;
      progress?: Animation;
      color?: Color;
      scale?: number;
      shouldMirror?: boolean;
      uiPathFactory?: any;
    } = {},
  ) {
    super();
    this.paths = namedParameters.paths;
    this.progress = namedParameters.progress;
    this.color = namedParameters.color;
    this.scale = namedParameters.scale;
    this.shouldMirror = namedParameters.shouldMirror;
    this.uiPathFactory = namedParameters.uiPathFactory;
    this.className = '_AnimatedIconPainter';
  }
}
export { _AnimatedIconPainter };
class _PathFrames extends MXDartClass {
  commands: Array<any>;
  opacities: Array<any>;
  public constructor(namedParameters: { commands?: Array<any>; opacities?: Array<any> } = {}) {
    super();
    this.commands = namedParameters.commands;
    this.opacities = namedParameters.opacities;
    this.className = '_PathFrames';
  }
}
export { _PathFrames };
abstract class _PathCommand extends MXDartClass {}
export { _PathCommand };
class _PathMoveTo extends _PathCommand {
  points: Array<any>;
  public constructor(points?: Array<any>) {
    super();
    this.points = points;
    this.className = '_PathMoveTo';
  }
}
export { _PathMoveTo };
class _PathCubicTo extends _PathCommand {
  controlPoints2: Array<any>;
  controlPoints1: Array<any>;
  targetPoints: Array<any>;
  public constructor(controlPoints1?: Array<any>, controlPoints2?: Array<any>, targetPoints?: Array<any>) {
    super();
    this.controlPoints1 = controlPoints1;
    this.controlPoints2 = controlPoints2;
    this.targetPoints = targetPoints;
    this.className = '_PathCubicTo';
  }
}
export { _PathCubicTo };
class _PathLineTo extends _PathCommand {
  points: Array<any>;
  public constructor(points?: Array<any>) {
    super();
    this.points = points;
    this.className = '_PathLineTo';
  }
}
export { _PathLineTo };
class _PathClose extends _PathCommand {}
export { _PathClose };
abstract class AnimatedIcons extends MXDartClass {
  static get add_event() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'add_event';
    return jsObj;
  }
  static get arrow_menu() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'arrow_menu';
    return jsObj;
  }
  static get close_menu() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'close_menu';
    return jsObj;
  }
  static get ellipsis_search() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'ellipsis_search';
    return jsObj;
  }
  static get event_add() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'event_add';
    return jsObj;
  }
  static get home_menu() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'home_menu';
    return jsObj;
  }
  static get list_view() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'list_view';
    return jsObj;
  }
  static get menu_arrow() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'menu_arrow';
    return jsObj;
  }
  static get menu_close() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'menu_close';
    return jsObj;
  }
  static get menu_home() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'menu_home';
    return jsObj;
  }
  static get pause_play() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'pause_play';
    return jsObj;
  }
  static get play_pause() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'play_pause';
    return jsObj;
  }
  static get search_ellipsis() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'search_ellipsis';
    return jsObj;
  }
  static get view_list() {
    var jsObj = new (class MXAnimatedIconData extends AnimatedIconData {})();
    jsObj['className'] = 'AnimatedIcons';
    jsObj['constructorName'] = 'view_list';
    return jsObj;
  }
}
export { AnimatedIcons };
abstract class AnimatedIconData extends MXDartClass {}
export { AnimatedIconData };
class _AnimatedIconData extends AnimatedIconData {
  size: Size;
  paths: Array<any>;
  matchTextDirection: boolean;
  public constructor(size?: Size, paths?: Array<any>, namedParameters: { matchTextDirection?: boolean } = {}) {
    super();
    this.size = size;
    this.paths = paths;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.className = '_AnimatedIconData';
  }
}
export { _AnimatedIconData };
