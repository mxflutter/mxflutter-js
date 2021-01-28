//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from '../widgets/framework';
class CircleAvatar extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.backgroundColor = namedParameters.backgroundColor;
        this.backgroundImage = namedParameters.backgroundImage;
        this.onBackgroundImageError = namedParameters.onBackgroundImageError;
        this.foregroundColor = namedParameters.foregroundColor;
        this.radius = namedParameters.radius;
        this.minRadius = namedParameters.minRadius;
        this.maxRadius = namedParameters.maxRadius;
        this.className = 'CircleAvatar';
    }
}
export { CircleAvatar };
