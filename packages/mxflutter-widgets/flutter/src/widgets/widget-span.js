//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PlaceholderSpan } from '../painting/placeholder-span';
class WidgetSpan extends PlaceholderSpan {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.alignment = namedParameters.alignment;
        this.baseline = namedParameters.baseline;
        this.style = namedParameters.style;
        this.className = 'WidgetSpan';
    }
}
export { WidgetSpan };
