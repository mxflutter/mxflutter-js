//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class FlowPaintingContext extends MXDartClass {
}
export { FlowPaintingContext };
class FlowDelegate extends MXDartClass {
}
export { FlowDelegate };
class FlowParentData extends ContainerBoxParentData {
}
export { FlowParentData };
class RenderFlow extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.delegate = namedParameters.delegate;
        this.className = 'RenderFlow';
    }
}
export { RenderFlow };
