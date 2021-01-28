//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
import { CustomPainter } from '../rendering/custom-paint';
class _PlaceholderPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.strokeWidth = namedParameters.strokeWidth;
        this.className = '_PlaceholderPainter';
    }
}
export { _PlaceholderPainter };
class Placeholder extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.strokeWidth = namedParameters.strokeWidth;
        this.fallbackWidth = namedParameters.fallbackWidth;
        this.fallbackHeight = namedParameters.fallbackHeight;
        this.className = 'Placeholder';
    }
}
export { Placeholder };
