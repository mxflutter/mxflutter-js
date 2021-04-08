"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTheme = void 0;
const icon_theme_data_1 = require("./icon-theme-data");
const inherited_theme_1 = require("./inherited-theme");
class IconTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'IconTheme';
    }
    // MX modified begin
    static of(context) {
        let widgetOfData = context.dependOnInheritedWidget('IconTheme', (jsonMap) => {
            return icon_theme_data_1.IconThemeData.fromJson(jsonMap);
        });
        return widgetOfData;
    }
}
exports.IconTheme = IconTheme;
