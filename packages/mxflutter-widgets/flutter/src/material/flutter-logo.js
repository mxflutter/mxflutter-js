//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class FlutterLogo extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.size = namedParameters.size;
        this.colors = namedParameters.colors;
        this.textColor = namedParameters.textColor;
        this.style = namedParameters.style;
        this.duration = namedParameters.duration;
        this.curve = namedParameters.curve;
        this.className = 'FlutterLogo';
    }
}
export { FlutterLogo };
