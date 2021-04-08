"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTransitionsTheme = exports.CupertinoPageTransitionsBuilder = exports.ZoomPageTransitionsBuilder = exports.OpenUpwardsPageTransitionsBuilder = exports.FadeUpwardsPageTransitionsBuilder = exports.PageTransitionsBuilder = exports._ZoomExitTransition = exports._ZoomEnterTransition = exports._ZoomPageTransition = exports._OpenUpwardsPageTransition = exports._FadeUpwardsPageTransition = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _FadeUpwardsPageTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['routeAnimation'] = namedParameters.routeAnimation;
        this.child = namedParameters.child;
        this.className = '_FadeUpwardsPageTransition';
    }
}
exports._FadeUpwardsPageTransition = _FadeUpwardsPageTransition;
class _OpenUpwardsPageTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.secondaryAnimation = namedParameters.secondaryAnimation;
        this.child = namedParameters.child;
        this.className = '_OpenUpwardsPageTransition';
    }
}
exports._OpenUpwardsPageTransition = _OpenUpwardsPageTransition;
class _ZoomPageTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.secondaryAnimation = namedParameters.secondaryAnimation;
        this.child = namedParameters.child;
        this.className = '_ZoomPageTransition';
    }
}
exports._ZoomPageTransition = _ZoomPageTransition;
class _ZoomEnterTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.reverse = namedParameters.reverse;
        this.child = namedParameters.child;
        this.className = '_ZoomEnterTransition';
    }
}
exports._ZoomEnterTransition = _ZoomEnterTransition;
class _ZoomExitTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.reverse = namedParameters.reverse;
        this.child = namedParameters.child;
        this.className = '_ZoomExitTransition';
    }
}
exports._ZoomExitTransition = _ZoomExitTransition;
class PageTransitionsBuilder extends mxflutter_base_1.MXDartClass {
}
exports.PageTransitionsBuilder = PageTransitionsBuilder;
class FadeUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
}
exports.FadeUpwardsPageTransitionsBuilder = FadeUpwardsPageTransitionsBuilder;
class OpenUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
}
exports.OpenUpwardsPageTransitionsBuilder = OpenUpwardsPageTransitionsBuilder;
class ZoomPageTransitionsBuilder extends PageTransitionsBuilder {
}
exports.ZoomPageTransitionsBuilder = ZoomPageTransitionsBuilder;
class CupertinoPageTransitionsBuilder extends PageTransitionsBuilder {
}
exports.CupertinoPageTransitionsBuilder = CupertinoPageTransitionsBuilder;
class PageTransitionsTheme extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.builders = namedParameters.builders;
        this.className = 'PageTransitionsTheme';
    }
}
exports.PageTransitionsTheme = PageTransitionsTheme;
