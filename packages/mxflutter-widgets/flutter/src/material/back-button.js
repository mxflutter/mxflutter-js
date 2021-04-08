"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButton = exports.BackButton = exports.BackButtonIcon = void 0;
const framework_1 = require("../widgets/framework");
class BackButtonIcon extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this.className = 'BackButtonIcon';
    }
}
exports.BackButtonIcon = BackButtonIcon;
class BackButton extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.onPressed = namedParameters.onPressed;
        this.className = 'BackButton';
    }
}
exports.BackButton = BackButton;
class CloseButton extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.onPressed = namedParameters.onPressed;
        this.className = 'CloseButton';
    }
}
exports.CloseButton = CloseButton;
