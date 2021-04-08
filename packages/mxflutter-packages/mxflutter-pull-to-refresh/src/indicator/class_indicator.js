//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const { MXMirrorWidget ,MXLifecycleWidgetBase,MXMirrorObjMethodCall} = require('@mxflutter/mxflutter');

class ClassicHeader extends MXMirrorWidget {
    constructor({
        key,
        refreshStyle,
        height,
        completeDuration,
        outerBuilder,
        textStyle,
        releaseText,
        refreshingText,
        canTwoLevelIcon,
        twoLevelView,
        canTwoLevelText,
        completeText,
        failedText,
        idleText,
        iconPos,
        spacing,
        refreshingIcon,
        failedIcon,
        completeIcon,
        idleIcon,
        releaseIcon,
    } = {}) {
        super();

        this.key = key;
        this.refreshStyle = refreshStyle;
        this.height = height;
        this.completeDuration = completeDuration;
        this.outerBuilder = outerBuilder;
        this.textStyle = textStyle;
        this.releaseText = releaseText;
        this.refreshingText = refreshingText;
        this.canTwoLevelIcon = canTwoLevelIcon;
        this.twoLevelView = twoLevelView;
        this.canTwoLevelText = canTwoLevelText;
        this.completeText = completeText;
        this.failedText = failedText;
        this.idleText = idleText;
        this.iconPos = iconPos;
        this.spacing = spacing;
        this.refreshingIcon = refreshingIcon;
        this.failedIcon = failedIcon;
        this.completeIcon = completeIcon;
        this.idleIcon = idleIcon;
        this.releaseIcon = releaseIcon;
    }
}

ClassicHeader.new = function (arg) {
    return new ClassicHeader(arg);
};

class ClassicFooter extends MXMirrorWidget {
    constructor({
        key,
        onClick,
        loadStyle,
        height,
        outerBuilder,
        textStyle,
        loadingText,
        noDataText,
        noMoreIcon,
        idleText,
        failedText,
        canLoadingText,
        failedIcon,
        iconPos,
        spacing,
        completeDuration,
        loadingIcon,
        canLoadingIcon,
        idleIcon,
    } = {}) {
        super();

        this.key = key;
        this.onClick = onClick;
        this.loadStyle = loadStyle;
        this.height = height;
        this.outerBuilder = outerBuilder;
        this.textStyle = textStyle;
        this.loadingText = loadingText;
        this.noDataText = noDataText;
        this.noMoreIcon = noMoreIcon;
        this.idleText = idleText;
        this.failedText = failedText;
        this.canLoadingText = canLoadingText;
        this.failedIcon = failedIcon;
        this.iconPos = iconPos;
        this.spacing = spacing;
        this.completeDuration = completeDuration;
        this.loadingIcon = loadingIcon;
        this.canLoadingIcon = canLoadingIcon;
        this.idleIcon = idleIcon;
    }
}

ClassicFooter.new = function (arg) {
    return new ClassicFooter(arg);
};

// src__indicator__classic_indicator = Object.create(null);
// src__indicator__classic_indicator.ClassicHeader = ClassicHeader;
// src__indicator__classic_indicator.ClassicFooter = ClassicFooter;

// exports.src__indicator__classic_indicator = src__indicator__classic_indicator;

exports.ClassicHeader = ClassicHeader;
exports.ClassicFooter = ClassicFooter;