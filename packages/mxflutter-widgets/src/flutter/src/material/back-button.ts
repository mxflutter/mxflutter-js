// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { StatelessWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BackButtonIcon extends StatelessWidget {
  public constructor(namedParameters: {key?: Key} = {}) {
    super();
    this['key'] = namedParameters.key;
    this.className = 'BackButtonIcon';
  }
}
export { BackButtonIcon };
class BackButton extends StatelessWidget {
  color: Color;
  onPressed: any;
  public constructor(namedParameters: {key?: Key, color?: Color, onPressed?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.onPressed = namedParameters.onPressed;
    this.className = 'BackButton';
  }
}
export { BackButton };
class CloseButton extends StatelessWidget {
  color: Color;
  onPressed: any;
  public constructor(namedParameters: {key?: Key, color?: Color, onPressed?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.onPressed = namedParameters.onPressed;
    this.className = 'CloseButton';
  }
}
export { CloseButton };
