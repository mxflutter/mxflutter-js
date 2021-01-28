//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from './box';
class ListBodyParentData extends ContainerBoxParentData {
}
export { ListBodyParentData };
class RenderListBody extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.axisDirection = namedParameters.axisDirection;
        this.className = 'RenderListBody';
    }
}
export { RenderListBody };
