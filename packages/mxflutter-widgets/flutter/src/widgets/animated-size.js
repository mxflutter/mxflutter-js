//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SingleChildRenderObjectWidget } from './framework';
class AnimatedSize extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.alignment = namedParameters.alignment;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.reverseDuration = namedParameters.reverseDuration;
        this.className = 'AnimatedSize';
    }
}
export { AnimatedSize };
