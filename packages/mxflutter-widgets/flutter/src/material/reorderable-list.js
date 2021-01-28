//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
class ReorderableListView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.header = namedParameters.header;
        this.children = namedParameters.children;
        this.onReorder = namedParameters.onReorder;
        this.scrollController = namedParameters.scrollController;
        this.scrollDirection = namedParameters.scrollDirection;
        this.padding = namedParameters.padding;
        this.reverse = namedParameters.reverse;
        this.className = 'ReorderableListView';
    }
}
export { ReorderableListView };
class _ReorderableListViewState extends State$ {
}
export { _ReorderableListViewState };
class _ReorderableListContent extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.header = namedParameters.header;
        this.children = namedParameters.children;
        this.scrollController = namedParameters.scrollController;
        this.scrollDirection = namedParameters.scrollDirection;
        this.padding = namedParameters.padding;
        this.onReorder = namedParameters.onReorder;
        this.reverse = namedParameters.reverse;
        this.className = '_ReorderableListContent';
    }
}
export { _ReorderableListContent };
class _ReorderableListContentState extends State$ {
}
export { _ReorderableListContentState };
