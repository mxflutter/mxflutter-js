//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliverMultiBoxAdaptor } from './sliver-multi-box-adaptor';
class RenderSliverList extends RenderSliverMultiBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this['childManager'] = namedParameters.childManager;
        this.className = 'RenderSliverList';
    }
}
export { RenderSliverList };
