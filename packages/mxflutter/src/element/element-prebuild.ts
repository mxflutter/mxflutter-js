//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXJSElement } from './element';
import { MXJSLazyStatefulWapperWidget } from '../widget/widget';

// 方式1 特殊处理的MAP
export const specialPreBuild = {
  TabBarView: (widget: any, element: MXJSElement) => {
    let currentIndex: number;
    if (widget.controller) {
      currentIndex = widget.controller.initialIndex;
    }
    const warpChildren = widget.children.map((value: any, index: number) => {
      if (value instanceof MXJSLazyStatefulWapperWidget) {
        return value;
      }
      const lazyWidget = new MXJSLazyStatefulWapperWidget(value);
      lazyWidget.isLazyWidgetDelayBuild = currentIndex !== index;
      return lazyWidget;
    });
    widget.children = warpChildren;
  },
  Test: (widget: any, element: MXJSElement) => {
    console.log('test elementPreBuild');
  },
};
