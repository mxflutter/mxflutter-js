//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedNotifier } from './inherited-notifier';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { ScrollController } from './scroll-controller';
import { ChangeNotifier } from '../foundation/change-notifier';
import { Notification } from './notification-listener';
import { StatefulWidget$, State$, StatelessWidget$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class DraggableScrollableSheet extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialChildSize = namedParameters.initialChildSize;
        this.minChildSize = namedParameters.minChildSize;
        this.maxChildSize = namedParameters.maxChildSize;
        this.expand = namedParameters.expand;
        this.builder = namedParameters.builder;
        this.className = 'DraggableScrollableSheet';
    }
}
export { DraggableScrollableSheet };
class DraggableScrollableNotification extends Notification {
    constructor(namedParameters = {}) {
        super();
        this.extent = namedParameters.extent;
        this.minExtent = namedParameters.minExtent;
        this.maxExtent = namedParameters.maxExtent;
        this.initialExtent = namedParameters.initialExtent;
        this.context = namedParameters.context;
        this.className = 'DraggableScrollableNotification';
    }
}
export { DraggableScrollableNotification };
class _DraggableSheetExtent extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.minExtent = namedParameters.minExtent;
        this.maxExtent = namedParameters.maxExtent;
        this.initialExtent = namedParameters.initialExtent;
        this['listener'] = namedParameters.listener;
        this.className = '_DraggableSheetExtent';
    }
}
export { _DraggableSheetExtent };
class _DraggableScrollableSheetState extends State$ {
}
export { _DraggableScrollableSheetState };
class _DraggableScrollableSheetScrollController extends ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.extent = namedParameters.extent;
        this.className = '_DraggableScrollableSheetScrollController';
    }
}
export { _DraggableScrollableSheetScrollController };
class _DraggableScrollableSheetScrollPosition extends ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['initialPixels'] = namedParameters.initialPixels;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this['oldPosition'] = namedParameters.oldPosition;
        this.debugLabel = namedParameters.debugLabel;
        this.extent = namedParameters.extent;
        this.className = '_DraggableScrollableSheetScrollPosition';
    }
}
export { _DraggableScrollableSheetScrollPosition };
class DraggableScrollableActuator extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = 'DraggableScrollableActuator';
    }
}
export { DraggableScrollableActuator };
class _ResetNotifier extends ChangeNotifier {
}
export { _ResetNotifier };
class _InheritedResetNotifier extends InheritedNotifier {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this['notifier'] = namedParameters.notifier;
        this.className = '_InheritedResetNotifier';
    }
}
export { _InheritedResetNotifier };
