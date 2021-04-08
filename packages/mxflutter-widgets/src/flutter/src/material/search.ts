// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { StatefulWidget, State } from '../widgets/framework';
import { PageRoute } from '../widgets/pages';
import { ValueNotifier } from '../foundation/change-notifier';
import { ProxyAnimation } from '../animation/animations';
import { TextEditingController } from '../widgets/editable-text';
import { FocusNode } from '../widgets/focus-manager';
import { TextInputType, TextInputAction } from '../services/text-input';
import { TextStyle } from '../painting/text-style';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class SearchDelegate extends MXDartClass {
  searchFieldLabel: string;
  searchFieldStyle: TextStyle;
  keyboardType: TextInputType;
  textInputAction: TextInputAction;
  focusNode: FocusNode;
  queryTextController: TextEditingController;
  proxyAnimation: ProxyAnimation;
  currentBodyNotifier: ValueNotifier;
  route: _SearchPageRoute;
}
export { SearchDelegate };
enum _SearchBody {
  suggestions = '{ "_name": "_SearchBody.suggestions", "index": 0 }',
  results = '{ "_name": "_SearchBody.results", "index": 1 }',
};

export { _SearchBody };
class _SearchPageRoute extends PageRoute {
  delegate: SearchDelegate;
  public constructor(namedParameters: {delegate?: SearchDelegate} = {}) {
    super();
    this.delegate = namedParameters.delegate;
    this.className = '_SearchPageRoute';
  }
}
export { _SearchPageRoute };
class _SearchPage extends StatefulWidget {
  delegate: SearchDelegate;
  animation: Animation;
  public constructor(namedParameters: {delegate?: SearchDelegate, animation?: Animation} = {}) {
    super();
    this.delegate = namedParameters.delegate;
    this.animation = namedParameters.animation;
    this.className = '_SearchPage';
  }
}
export { _SearchPage };
class _SearchPageState extends State {
  focusNode: FocusNode;
}
export { _SearchPageState };
