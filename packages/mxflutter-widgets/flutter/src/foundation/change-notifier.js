"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueNotifier = exports._MergingListenable = exports.ChangeNotifier = exports.ValueListenable = exports.Listenable = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Listenable extends mxflutter_base_1.MXLifecycleWidgetBase {
    static merge(listenables) {
        var jsObj = new class MXListenable extends Listenable {
        }();
        jsObj['listenables'] = listenables;
        jsObj['constructorName'] = 'merge';
        return jsObj;
    }
}
exports.Listenable = Listenable;
class ValueListenable extends Listenable {
}
exports.ValueListenable = ValueListenable;
class ChangeNotifier extends mxflutter_base_1.MXLifecycleWidgetBase {
}
exports.ChangeNotifier = ChangeNotifier;
class _MergingListenable extends Listenable {
    constructor(_children) {
        super();
        this.children = _children;
        this.className = '_MergingListenable';
    }
}
exports._MergingListenable = _MergingListenable;
class ValueNotifier extends ChangeNotifier {
    constructor(_value) {
        super();
        this.value = _value;
        this.className = 'ValueNotifier';
    }
}
exports.ValueNotifier = ValueNotifier;
