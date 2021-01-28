//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { IconThemeData } from './icon-theme-data';
import { InheritedTheme } from './inherited-theme';
class IconTheme extends InheritedTheme {
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
            return IconThemeData.fromJson(jsonMap);
        });
        return widgetOfData;
    }
}
export { IconTheme };
