//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { StatefulWidget$, State$, LeafRenderObjectWidget } from '../widgets/framework';
class CupertinoSlider extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.min = namedParameters.min;
        this.max = namedParameters.max;
        this.divisions = namedParameters.divisions;
        this.activeColor = namedParameters.activeColor;
        this.thumbColor = namedParameters.thumbColor;
        this.className = 'CupertinoSlider';
    }
}
export { CupertinoSlider };
class _CupertinoSliderState extends State$ {
}
export { _CupertinoSliderState };
class _CupertinoSliderRenderObjectWidget extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.divisions = namedParameters.divisions;
        this.activeColor = namedParameters.activeColor;
        this.thumbColor = namedParameters.thumbColor;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.className = '_CupertinoSliderRenderObjectWidget';
    }
}
export { _CupertinoSliderRenderObjectWidget };
class _RenderCupertinoSlider extends RenderConstrainedBox {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.divisions = namedParameters.divisions;
        this.activeColor = namedParameters.activeColor;
        this.thumbColor = namedParameters.thumbColor;
        this.trackColor = namedParameters.trackColor;
        this.onChanged = namedParameters.onChanged;
        this.onChangeStart = namedParameters.onChangeStart;
        this.onChangeEnd = namedParameters.onChangeEnd;
        this.textDirection = namedParameters.textDirection;
        this.className = '_RenderCupertinoSlider';
    }
}
export { _RenderCupertinoSlider };
