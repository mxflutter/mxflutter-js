"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimatedIconData = exports.AnimatedIconData = exports.AnimatedIcons = exports._PathClose = exports._PathLineTo = exports._PathCubicTo = exports._PathMoveTo = exports._PathCommand = exports._PathFrames = exports._AnimatedIconPainter = exports.AnimatedIcon = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class AnimatedIcon extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
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
exports.AnimatedIcon = AnimatedIcon;
class _AnimatedIconPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
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
exports._AnimatedIconPainter = _AnimatedIconPainter;
class _PathFrames extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.commands = namedParameters.commands;
        this.opacities = namedParameters.opacities;
        this.className = '_PathFrames';
    }
}
exports._PathFrames = _PathFrames;
class _PathCommand extends mxflutter_base_1.MXDartClass {
}
exports._PathCommand = _PathCommand;
class _PathMoveTo extends _PathCommand {
    constructor(points) {
        super();
        this.points = points;
        this.className = '_PathMoveTo';
    }
}
exports._PathMoveTo = _PathMoveTo;
class _PathCubicTo extends _PathCommand {
    constructor(controlPoints1, controlPoints2, targetPoints) {
        super();
        this.controlPoints1 = controlPoints1;
        this.controlPoints2 = controlPoints2;
        this.targetPoints = targetPoints;
        this.className = '_PathCubicTo';
    }
}
exports._PathCubicTo = _PathCubicTo;
class _PathLineTo extends _PathCommand {
    constructor(points) {
        super();
        this.points = points;
        this.className = '_PathLineTo';
    }
}
exports._PathLineTo = _PathLineTo;
class _PathClose extends _PathCommand {
}
exports._PathClose = _PathClose;
class AnimatedIcons extends mxflutter_base_1.MXDartClass {
    static get add_event() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'add_event';
        return jsObj;
    }
    static get arrow_menu() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'arrow_menu';
        return jsObj;
    }
    static get close_menu() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'close_menu';
        return jsObj;
    }
    static get ellipsis_search() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'ellipsis_search';
        return jsObj;
    }
    static get event_add() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'event_add';
        return jsObj;
    }
    static get home_menu() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'home_menu';
        return jsObj;
    }
    static get list_view() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'list_view';
        return jsObj;
    }
    static get menu_arrow() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'menu_arrow';
        return jsObj;
    }
    static get menu_close() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'menu_close';
        return jsObj;
    }
    static get menu_home() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'menu_home';
        return jsObj;
    }
    static get pause_play() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'pause_play';
        return jsObj;
    }
    static get play_pause() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'play_pause';
        return jsObj;
    }
    static get search_ellipsis() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'search_ellipsis';
        return jsObj;
    }
    static get view_list() {
        var jsObj = new class MXAnimatedIconData extends AnimatedIconData {
        }();
        jsObj['className'] = 'AnimatedIcons';
        jsObj['constructorName'] = 'view_list';
        return jsObj;
    }
}
exports.AnimatedIcons = AnimatedIcons;
class AnimatedIconData extends mxflutter_base_1.MXDartClass {
}
exports.AnimatedIconData = AnimatedIconData;
class _AnimatedIconData extends AnimatedIconData {
    constructor(size, paths, namedParameters = {}) {
        super();
        this.size = size;
        this.paths = paths;
        this.matchTextDirection = namedParameters.matchTextDirection;
        this.className = '_AnimatedIconData';
    }
}
exports._AnimatedIconData = _AnimatedIconData;
