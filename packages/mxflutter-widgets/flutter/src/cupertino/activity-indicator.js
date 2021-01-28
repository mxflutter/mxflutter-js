//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomPainter } from '../rendering/custom-paint';
import { StatefulWidget$, State$ } from '../widgets/framework';
class CupertinoActivityIndicator extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animating = namedParameters.animating;
        this.radius = namedParameters.radius;
        this.className = 'CupertinoActivityIndicator';
    }
    static partiallyRevealed(namedParameters = {}) {
        var jsObj = new CupertinoActivityIndicator();
        jsObj.key = namedParameters.key;
        jsObj.radius = namedParameters.radius;
        jsObj.progress = namedParameters.progress;
        jsObj['constructorName'] = 'partiallyRevealed';
        return jsObj;
    }
}
export { CupertinoActivityIndicator };
class _CupertinoActivityIndicatorState extends State$ {
}
export { _CupertinoActivityIndicatorState };
class _CupertinoActivityIndicatorPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.activeColor = namedParameters.activeColor;
        this.radius = namedParameters.radius;
        this.progress = namedParameters.progress;
        this.className = '_CupertinoActivityIndicatorPainter';
    }
}
export { _CupertinoActivityIndicatorPainter };
