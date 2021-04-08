//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSElement } from './element';
import { MXJSLazyStatefulWapperWidget, MXJSStatefulWidget, MXJSStatelessWidget } from '../widget/widget';

// 方式1 特殊处理的MAP
export const specialPreBuild = {
  TabBarView: (widget: any, element: MXJSElement) => {
    let currentIndex: number;
    if (widget.controller) {
      currentIndex = widget.controller.initialIndex;
    }
    const warpChildren = widget.children.map((value: any, index: number) => {
      // 如果不是嵌套的StatefulWidget 节点，返回原值
      if (!(value instanceof MXJSStatefulWidget) && !(value instanceof MXJSStatelessWidget)) {
        return value;
      }

      value.isJSLazyWidget = true;
      value.isLazyWidgetDelayBuild = currentIndex !== index;
      return value;
    });
    widget.children = warpChildren;
  },
  Test: (widget: any, element: MXJSElement) => {
    console.log('test elementPreBuild');
  },
};
