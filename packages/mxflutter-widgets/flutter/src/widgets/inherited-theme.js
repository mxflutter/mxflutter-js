//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget, StatelessWidget$ } from './framework';
class InheritedTheme extends InheritedWidget {
}
export { InheritedTheme };
class _CaptureAll extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.themes = namedParameters.themes;
        this.child = namedParameters.child;
        this.className = '_CaptureAll';
    }
}
export { _CaptureAll };
