//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget, StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { InkFeature } from './material';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class InteractiveInkFeature extends InkFeature {
}
export { InteractiveInkFeature };
class InteractiveInkFeatureFactory extends MXDartClass {
}
export { InteractiveInkFeatureFactory };
class _ParentInkResponseState extends MXDartClass {
}
export { _ParentInkResponseState };
class _ParentInkResponseProvider extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.child = namedParameters.child;
        this.className = '_ParentInkResponseProvider';
    }
}
export { _ParentInkResponseProvider };
class InkResponse extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.onTap = namedParameters.onTap;
        this.onTapDown = namedParameters.onTapDown;
        this.onTapCancel = namedParameters.onTapCancel;
        this.onDoubleTap = namedParameters.onDoubleTap;
        this.onLongPress = namedParameters.onLongPress;
        this.onHighlightChanged = namedParameters.onHighlightChanged;
        this.onHover = namedParameters.onHover;
        this.mouseCursor = namedParameters.mouseCursor;
        this.containedInkWell = namedParameters.containedInkWell;
        this.highlightShape = namedParameters.highlightShape;
        this.radius = namedParameters.radius;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.overlayColor = namedParameters.overlayColor;
        this.splashColor = namedParameters.splashColor;
        this.splashFactory = namedParameters.splashFactory;
        this.enableFeedback = namedParameters.enableFeedback;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.focusNode = namedParameters.focusNode;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.onFocusChange = namedParameters.onFocusChange;
        this.autofocus = namedParameters.autofocus;
        this.className = 'InkResponse';
    }
}
export { InkResponse };
class _InkResponseStateWidget extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.onTap = namedParameters.onTap;
        this.onTapDown = namedParameters.onTapDown;
        this.onTapCancel = namedParameters.onTapCancel;
        this.onDoubleTap = namedParameters.onDoubleTap;
        this.onLongPress = namedParameters.onLongPress;
        this.onHighlightChanged = namedParameters.onHighlightChanged;
        this.onHover = namedParameters.onHover;
        this.mouseCursor = namedParameters.mouseCursor;
        this.containedInkWell = namedParameters.containedInkWell;
        this.highlightShape = namedParameters.highlightShape;
        this.radius = namedParameters.radius;
        this.borderRadius = namedParameters.borderRadius;
        this.customBorder = namedParameters.customBorder;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.overlayColor = namedParameters.overlayColor;
        this.splashColor = namedParameters.splashColor;
        this.splashFactory = namedParameters.splashFactory;
        this.enableFeedback = namedParameters.enableFeedback;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.focusNode = namedParameters.focusNode;
        this.canRequestFocus = namedParameters.canRequestFocus;
        this.onFocusChange = namedParameters.onFocusChange;
        this.autofocus = namedParameters.autofocus;
        this.parentState = namedParameters.parentState;
        this.getRectCallback = namedParameters.getRectCallback;
        this.debugCheckContext = namedParameters.debugCheckContext;
        this.className = '_InkResponseStateWidget';
    }
}
export { _InkResponseStateWidget };
var _HighlightType;
(function (_HighlightType) {
    _HighlightType["pressed"] = "{ \"_name\": \"_HighlightType.pressed\", \"index\": 0 }";
    _HighlightType["hover"] = "{ \"_name\": \"_HighlightType.hover\", \"index\": 1 }";
    _HighlightType["focus"] = "{ \"_name\": \"_HighlightType.focus\", \"index\": 2 }";
})(_HighlightType || (_HighlightType = {}));
export { _HighlightType };
class _InkResponseState extends State$ {
}
export { _InkResponseState };
class InkWell extends InkResponse {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this['onTap'] = namedParameters.onTap;
        this['onDoubleTap'] = namedParameters.onDoubleTap;
        this['onLongPress'] = namedParameters.onLongPress;
        this['onTapDown'] = namedParameters.onTapDown;
        this['onTapCancel'] = namedParameters.onTapCancel;
        this['onHighlightChanged'] = namedParameters.onHighlightChanged;
        this['onHover'] = namedParameters.onHover;
        this['mouseCursor'] = namedParameters.mouseCursor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['highlightColor'] = namedParameters.highlightColor;
        this['overlayColor'] = namedParameters.overlayColor;
        this['splashColor'] = namedParameters.splashColor;
        this['splashFactory'] = namedParameters.splashFactory;
        this['radius'] = namedParameters.radius;
        this['borderRadius'] = namedParameters.borderRadius;
        this['customBorder'] = namedParameters.customBorder;
        this['enableFeedback'] = namedParameters.enableFeedback;
        this['excludeFromSemantics'] = namedParameters.excludeFromSemantics;
        this['focusNode'] = namedParameters.focusNode;
        this['canRequestFocus'] = namedParameters.canRequestFocus;
        this['onFocusChange'] = namedParameters.onFocusChange;
        this['autofocus'] = namedParameters.autofocus;
        this.className = 'InkWell';
    }
}
export { InkWell };
