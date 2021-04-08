"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderCupertinoPickerSemantics = exports._CupertinoPickerSemantics = exports._CupertinoPickerState = exports.CupertinoPicker = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("../widgets/framework");
class CupertinoPicker extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.diameterRatio = namedParameters.diameterRatio;
        this.backgroundColor = namedParameters.backgroundColor;
        this.offAxisFraction = namedParameters.offAxisFraction;
        this.useMagnifier = namedParameters.useMagnifier;
        this.magnification = namedParameters.magnification;
        this.scrollController = namedParameters.scrollController;
        this.squeeze = namedParameters.squeeze;
        this.itemExtent = namedParameters.itemExtent;
        this.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
        this['children'] = namedParameters.children;
        this['looping'] = namedParameters.looping;
        this.className = 'CupertinoPicker';
    }
    static builder(namedParameters = {}) {
        var jsObj = new CupertinoPicker();
        jsObj.key = namedParameters.key;
        jsObj.diameterRatio = namedParameters.diameterRatio;
        jsObj.backgroundColor = namedParameters.backgroundColor;
        jsObj.offAxisFraction = namedParameters.offAxisFraction;
        jsObj.useMagnifier = namedParameters.useMagnifier;
        jsObj.magnification = namedParameters.magnification;
        jsObj.scrollController = namedParameters.scrollController;
        jsObj.squeeze = namedParameters.squeeze;
        jsObj.itemExtent = namedParameters.itemExtent;
        jsObj.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
        jsObj['itemBuilder'] = namedParameters.itemBuilder;
        jsObj['childCount'] = namedParameters.childCount;
        jsObj['constructorName'] = 'builder';
        return jsObj;
    }
}
exports.CupertinoPicker = CupertinoPicker;
class _CupertinoPickerState extends framework_1.State {
}
exports._CupertinoPickerState = _CupertinoPickerState;
class _CupertinoPickerSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.scrollController = namedParameters.scrollController;
        this.className = '_CupertinoPickerSemantics';
    }
}
exports._CupertinoPickerSemantics = _CupertinoPickerSemantics;
class _RenderCupertinoPickerSemantics extends proxy_box_1.RenderProxyBox {
    constructor(controller, _textDirection) {
        super();
        this.controller = controller;
        this.textDirection = _textDirection;
        this.className = '_RenderCupertinoPickerSemantics';
    }
}
exports._RenderCupertinoPickerSemantics = _RenderCupertinoPickerSemantics;
