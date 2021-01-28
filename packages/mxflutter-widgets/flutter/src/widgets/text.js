//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatelessWidget$ } from './framework';
import { InheritedTheme } from './inherited-theme';
class DefaultTextStyle extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.style = namedParameters.style;
        this.textAlign = namedParameters.textAlign;
        this.softWrap = namedParameters.softWrap;
        this.overflow = namedParameters.overflow;
        this.maxLines = namedParameters.maxLines;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.child = namedParameters.child;
        this.className = 'DefaultTextStyle';
    }
    static fallback(namedParameters = {}) {
        var jsObj = new DefaultTextStyle();
        jsObj.key = namedParameters.key;
        jsObj['constructorName'] = 'fallback';
        return jsObj;
    }
}
export { DefaultTextStyle };
class DefaultTextHeightBehavior extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.child = namedParameters.child;
        this.className = 'DefaultTextHeightBehavior';
    }
}
export { DefaultTextHeightBehavior };
class Text extends StatelessWidget$ {
    constructor(data, namedParameters = {}) {
        super();
        this.data = data;
        this.key = namedParameters.key;
        this.style = namedParameters.style;
        this.strutStyle = namedParameters.strutStyle;
        this.textAlign = namedParameters.textAlign;
        this.textDirection = namedParameters.textDirection;
        this.locale = namedParameters.locale;
        this.softWrap = namedParameters.softWrap;
        this.overflow = namedParameters.overflow;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.maxLines = namedParameters.maxLines;
        this.semanticsLabel = namedParameters.semanticsLabel;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.className = 'Text';
    }
    static rich(textSpan, namedParameters = {}) {
        var jsObj = new Text();
        jsObj.textSpan = textSpan;
        jsObj.key = namedParameters.key;
        jsObj.style = namedParameters.style;
        jsObj.strutStyle = namedParameters.strutStyle;
        jsObj.textAlign = namedParameters.textAlign;
        jsObj.textDirection = namedParameters.textDirection;
        jsObj.locale = namedParameters.locale;
        jsObj.softWrap = namedParameters.softWrap;
        jsObj.overflow = namedParameters.overflow;
        jsObj.textScaleFactor = namedParameters.textScaleFactor;
        jsObj.maxLines = namedParameters.maxLines;
        jsObj.semanticsLabel = namedParameters.semanticsLabel;
        jsObj.textWidthBasis = namedParameters.textWidthBasis;
        jsObj.textHeightBehavior = namedParameters.textHeightBehavior;
        jsObj.applyTextScaleFactorToWidgetSpan = namedParameters.applyTextScaleFactorToWidgetSpan;
        jsObj['constructorName'] = 'rich';
        return jsObj;
    }
}
export { Text };
