"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = exports.DocumentationIcon = exports.Category = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Category extends mxflutter_base_1.MXDartClass {
    constructor(sections) {
        super();
        this.sections = sections;
        this.className = 'Category';
    }
}
exports.Category = Category;
class DocumentationIcon extends mxflutter_base_1.MXDartClass {
    constructor(url) {
        super();
        this.url = url;
        this.className = 'DocumentationIcon';
    }
}
exports.DocumentationIcon = DocumentationIcon;
class Summary extends mxflutter_base_1.MXDartClass {
    constructor(text) {
        super();
        this.text = text;
        this.className = 'Summary';
    }
}
exports.Summary = Summary;
