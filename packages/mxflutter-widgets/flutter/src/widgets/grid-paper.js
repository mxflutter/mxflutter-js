//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
import { CustomPainter } from '../rendering/custom-paint';
class _GridPaperPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.interval = namedParameters.interval;
        this.divisions = namedParameters.divisions;
        this.subdivisions = namedParameters.subdivisions;
        this.className = '_GridPaperPainter';
    }
}
export { _GridPaperPainter };
class GridPaper extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.interval = namedParameters.interval;
        this.divisions = namedParameters.divisions;
        this.subdivisions = namedParameters.subdivisions;
        this.child = namedParameters.child;
        this.className = 'GridPaper';
    }
}
export { GridPaper };
