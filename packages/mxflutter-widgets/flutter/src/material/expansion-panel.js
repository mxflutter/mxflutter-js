//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
import { LocalKey } from '../foundation/key';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _SaltedKey extends LocalKey {
    constructor(salt, value) {
        super();
        this.salt = salt;
        this.value = value;
        this.className = '_SaltedKey';
    }
}
export { _SaltedKey };
class ExpansionPanel extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.headerBuilder = namedParameters.headerBuilder;
        this.body = namedParameters.body;
        this.isExpanded = namedParameters.isExpanded;
        this.canTapOnHeader = namedParameters.canTapOnHeader;
        this.className = 'ExpansionPanel';
    }
}
export { ExpansionPanel };
class ExpansionPanelRadio extends ExpansionPanel {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.headerBuilder = namedParameters.headerBuilder;
        this.body = namedParameters.body;
        this.canTapOnHeader = namedParameters.canTapOnHeader;
        this.className = 'ExpansionPanelRadio';
    }
}
export { ExpansionPanelRadio };
class ExpansionPanelList extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.expansionCallback = namedParameters.expansionCallback;
        this.animationDuration = namedParameters.animationDuration;
        this.expandedHeaderPadding = namedParameters.expandedHeaderPadding;
        this.dividerColor = namedParameters.dividerColor;
        this.className = 'ExpansionPanelList';
    }
    static radio(namedParameters = {}) {
        var jsObj = new ExpansionPanelList();
        jsObj.key = namedParameters.key;
        jsObj.children = namedParameters.children;
        jsObj.expansionCallback = namedParameters.expansionCallback;
        jsObj.animationDuration = namedParameters.animationDuration;
        jsObj.initialOpenPanelValue = namedParameters.initialOpenPanelValue;
        jsObj.expandedHeaderPadding = namedParameters.expandedHeaderPadding;
        jsObj.dividerColor = namedParameters.dividerColor;
        jsObj['constructorName'] = 'radio';
        return jsObj;
    }
}
export { ExpansionPanelList };
class _ExpansionPanelListState extends State$ {
}
export { _ExpansionPanelListState };
