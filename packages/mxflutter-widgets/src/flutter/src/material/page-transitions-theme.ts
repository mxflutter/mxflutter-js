//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { TargetPlatform } from '../foundation/platform';
import { PageRoute } from '../widgets/pages';
import { BoxConstraints } from '../rendering/box';
import { Key } from '../foundation/key';
import { Animation } from '../animation/animation';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _FadeUpwardsPageTransition extends StatelessWidget$ {
  positionAnimation: Animation;
  opacityAnimation: Animation;
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; routeAnimation?: Animation; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this['routeAnimation'] = namedParameters.routeAnimation;
    this.child = namedParameters.child;
    this.className = '_FadeUpwardsPageTransition';
  }
}
export { _FadeUpwardsPageTransition };
class _OpenUpwardsPageTransition extends StatelessWidget$ {
  animation: Animation;
  secondaryAnimation: Animation;
  child: MXWidget;
  public constructor(
    namedParameters: { key?: Key; animation?: Animation; secondaryAnimation?: Animation; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.animation = namedParameters.animation;
    this.secondaryAnimation = namedParameters.secondaryAnimation;
    this.child = namedParameters.child;
    this.className = '_OpenUpwardsPageTransition';
  }
}
export { _OpenUpwardsPageTransition };
class _ZoomPageTransition extends StatelessWidget$ {
  animation: Animation;
  secondaryAnimation: Animation;
  child: MXWidget;
  public constructor(
    namedParameters: { key?: Key; animation?: Animation; secondaryAnimation?: Animation; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.animation = namedParameters.animation;
    this.secondaryAnimation = namedParameters.secondaryAnimation;
    this.child = namedParameters.child;
    this.className = '_ZoomPageTransition';
  }
}
export { _ZoomPageTransition };
class _ZoomEnterTransition extends StatelessWidget$ {
  animation: Animation;
  child: MXWidget;
  reverse: boolean;
  public constructor(namedParameters: { key?: Key; animation?: Animation; reverse?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.animation = namedParameters.animation;
    this.reverse = namedParameters.reverse;
    this.child = namedParameters.child;
    this.className = '_ZoomEnterTransition';
  }
}
export { _ZoomEnterTransition };
class _ZoomExitTransition extends StatelessWidget$ {
  animation: Animation;
  reverse: boolean;
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; animation?: Animation; reverse?: boolean; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.animation = namedParameters.animation;
    this.reverse = namedParameters.reverse;
    this.child = namedParameters.child;
    this.className = '_ZoomExitTransition';
  }
}
export { _ZoomExitTransition };
abstract class PageTransitionsBuilder extends MXDartClass {}
export { PageTransitionsBuilder };
class FadeUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {}
export { FadeUpwardsPageTransitionsBuilder };
class OpenUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {}
export { OpenUpwardsPageTransitionsBuilder };
class ZoomPageTransitionsBuilder extends PageTransitionsBuilder {}
export { ZoomPageTransitionsBuilder };
class CupertinoPageTransitionsBuilder extends PageTransitionsBuilder {}
export { CupertinoPageTransitionsBuilder };
class PageTransitionsTheme extends MXDartClass {
  builders: Map<any, any>;
  public constructor(namedParameters: { builders?: Map<any, any> } = {}) {
    super();
    this.builders = namedParameters.builders;
    this.className = 'PageTransitionsTheme';
  }
}
export { PageTransitionsTheme };
