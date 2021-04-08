"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridPaper = exports._GridPaperPainter = void 0;
const framework_1 = require("./framework");
const custom_paint_1 = require("../rendering/custom-paint");
class _GridPaperPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.interval = namedParameters.interval;
        this.divisions = namedParameters.divisions;
        this.subdivisions = namedParameters.subdivisions;
        this.className = '_GridPaperPainter';
    }
}
exports._GridPaperPainter = _GridPaperPainter;
class GridPaper extends framework_1.StatelessWidget {
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
exports.GridPaper = GridPaper;
