// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { EdgeInsets } from '../painting/edge-insets';
import { Duration } from '../../../mx-dart-sdk';
import { Widget, StatefulWidget, State } from '../widgets/framework';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _SaltedKey extends LocalKey {
  salt: any;
  value: any;
  public constructor(salt?: any, value?: any) {
    super();
    this.salt = salt;
    this.value = value;
    this.className = '_SaltedKey';
  }
}
export { _SaltedKey };
class ExpansionPanel extends MXDartClass {
  headerBuilder: any;
  body: MXWidget;
  isExpanded: boolean;
  canTapOnHeader: boolean;
  public constructor(namedParameters: {headerBuilder?: any, body?: MXWidget, isExpanded?: boolean, canTapOnHeader?: boolean} = {}) {
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
  value: any;
  public constructor(namedParameters: {value?: any, headerBuilder?: any, body?: MXWidget, canTapOnHeader?: boolean} = {}) {
    super();
    this.value = namedParameters.value;
    this.headerBuilder = namedParameters.headerBuilder;
    this.body = namedParameters.body;
    this.canTapOnHeader = namedParameters.canTapOnHeader;
    this.className = 'ExpansionPanelRadio';
  }
}
export { ExpansionPanelRadio };
class ExpansionPanelList extends StatefulWidget {
  children: Array<any>;
  expansionCallback: any;
  animationDuration: Duration;
  allowOnlyOnePanelOpen: boolean;
  initialOpenPanelValue: any;
  expandedHeaderPadding: EdgeInsets;
  dividerColor: Color;
  elevation: number;
  public constructor(namedParameters: {key?: Key, children?: Array<any>, expansionCallback?: any, animationDuration?: Duration, expandedHeaderPadding?: EdgeInsets, dividerColor?: Color, elevation?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.expansionCallback = namedParameters.expansionCallback;
    this.animationDuration = namedParameters.animationDuration;
    this.expandedHeaderPadding = namedParameters.expandedHeaderPadding;
    this.dividerColor = namedParameters.dividerColor;
    this.elevation = namedParameters.elevation;
    this.className = 'ExpansionPanelList';
  }
  static radio(namedParameters: {key?: Key, children?: Array<any>, expansionCallback?: any, animationDuration?: Duration, initialOpenPanelValue?: any, expandedHeaderPadding?: EdgeInsets, dividerColor?: Color, elevation?: number} = {}) {
    var jsObj = new ExpansionPanelList();
    jsObj.key = namedParameters.key;
    jsObj.children = namedParameters.children;
    jsObj.expansionCallback = namedParameters.expansionCallback;
    jsObj.animationDuration = namedParameters.animationDuration;
    jsObj.initialOpenPanelValue = namedParameters.initialOpenPanelValue;
    jsObj.expandedHeaderPadding = namedParameters.expandedHeaderPadding;
    jsObj.dividerColor = namedParameters.dividerColor;
    jsObj.elevation = namedParameters.elevation;
    jsObj['constructorName'] = 'radio';
    return jsObj;
  }
}
export { ExpansionPanelList };
class _ExpansionPanelListState extends State {
  currentOpenPanel: ExpansionPanelRadio;
}
export { _ExpansionPanelListState };
