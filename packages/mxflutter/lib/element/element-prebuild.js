"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialPreBuild = void 0;
const widget_1 = require("../widget/widget");
// 方式1 特殊处理的MAP
exports.specialPreBuild = {
    TabBarView: (widget, element) => {
        let currentIndex;
        if (widget.controller) {
            currentIndex = widget.controller.initialIndex;
        }
        const warpChildren = widget.children.map((value, index) => {
            // 如果不是嵌套的StatefulWidget 节点，返回原值
            if (!(value instanceof widget_1.MXJSStatefulWidget) && !(value instanceof widget_1.MXJSStatelessWidget)) {
                return value;
            }
            value.isJSLazyWidget = true;
            value.isLazyWidgetDelayBuild = currentIndex !== index;
            return value;
        });
        widget.children = warpChildren;
    },
    Test: (widget, element) => {
        console.log('test elementPreBuild');
    },
};
