//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
class RawKeyboardListener extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.includeSemantics = namedParameters.includeSemantics;
        this.onKey = namedParameters.onKey;
        this.child = namedParameters.child;
        this.className = 'RawKeyboardListener';
    }
}
export { RawKeyboardListener };
class _RawKeyboardListenerState extends State$ {
}
export { _RawKeyboardListenerState };
