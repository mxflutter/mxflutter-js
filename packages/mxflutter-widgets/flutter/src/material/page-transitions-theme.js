//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _FadeUpwardsPageTransition extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['routeAnimation'] = namedParameters.routeAnimation;
        this.child = namedParameters.child;
        this.className = '_FadeUpwardsPageTransition';
    }
}
export { _FadeUpwardsPageTransition };
class _OpenUpwardsPageTransition extends StatelessWidget$ {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.reverse = namedParameters.reverse;
        this.child = namedParameters.child;
        this.className = '_ZoomExitTransition';
    }
}
export { _ZoomExitTransition };
class PageTransitionsBuilder extends MXDartClass {
}
export { PageTransitionsBuilder };
class FadeUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { FadeUpwardsPageTransitionsBuilder };
class OpenUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { OpenUpwardsPageTransitionsBuilder };
class ZoomPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { ZoomPageTransitionsBuilder };
class CupertinoPageTransitionsBuilder extends PageTransitionsBuilder {
}
export { CupertinoPageTransitionsBuilder };
class PageTransitionsTheme extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.builders = namedParameters.builders;
        this.className = 'PageTransitionsTheme';
    }
}
export { PageTransitionsTheme };
