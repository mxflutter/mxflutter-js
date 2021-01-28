//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CustomClipper } from '../rendering/proxy-box';
import { SingleChildRenderObjectWidget, StatelessWidget$ } from './framework';
class DecoratedBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.decoration = namedParameters.decoration;
        this.position = namedParameters.position;
        this.child = namedParameters.child;
        this.className = 'DecoratedBox';
    }
}
export { DecoratedBox };
class Container extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.alignment = namedParameters.alignment;
        this.padding = namedParameters.padding;
        this.color = namedParameters.color;
        this.decoration = namedParameters.decoration;
        this.foregroundDecoration = namedParameters.foregroundDecoration;
        this['width'] = namedParameters.width;
        this['height'] = namedParameters.height;
        this.constraints = namedParameters.constraints;
        this.margin = namedParameters.margin;
        this.transform = namedParameters.transform;
        this.child = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'Container';
    }
}
export { Container };
class _DecorationClipper extends CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.textDirection = namedParameters.textDirection;
        this.decoration = namedParameters.decoration;
        this.className = '_DecorationClipper';
    }
}
export { _DecorationClipper };
