//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderProxyBox } from '../rendering/proxy-box';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget } from '../widgets/framework';
class CupertinoPicker extends StatefulWidget$ {
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
export { CupertinoPicker };
class _CupertinoPickerState extends State$ {
}
export { _CupertinoPickerState };
class _CupertinoPickerSemantics extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.scrollController = namedParameters.scrollController;
        this.className = '_CupertinoPickerSemantics';
    }
}
export { _CupertinoPickerSemantics };
class _RenderCupertinoPickerSemantics extends RenderProxyBox {
    constructor(controller, _textDirection) {
        super();
        this.controller = controller;
        this.textDirection = _textDirection;
        this.className = '_RenderCupertinoPickerSemantics';
    }
}
export { _RenderCupertinoPickerSemantics };
