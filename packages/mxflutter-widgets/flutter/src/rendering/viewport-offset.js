//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ChangeNotifier } from '../foundation/change-notifier';
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection["idle"] = "{ \"_name\": \"ScrollDirection.idle\", \"index\": 0 }";
    ScrollDirection["forward"] = "{ \"_name\": \"ScrollDirection.forward\", \"index\": 1 }";
    ScrollDirection["reverse"] = "{ \"_name\": \"ScrollDirection.reverse\", \"index\": 2 }";
})(ScrollDirection || (ScrollDirection = {}));
export { ScrollDirection };
class ViewportOffset extends ChangeNotifier {
    static fixed(value) {
        var jsObj = new (class MXViewportOffset extends ViewportOffset {
        })();
        jsObj['value'] = value;
        jsObj['constructorName'] = 'fixed';
        return jsObj;
    }
    static zero() {
        var jsObj = new (class MXViewportOffset extends ViewportOffset {
        })();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
export { ViewportOffset };
class _FixedViewportOffset extends ViewportOffset {
    constructor(_pixels) {
        super();
        this.pixels = _pixels;
        this.className = '_FixedViewportOffset';
    }
    static zero() {
        var jsObj = new _FixedViewportOffset();
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
export { _FixedViewportOffset };
