// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Paragraph } from '../../../mx-dart-sdk';
import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RenderErrorBox extends RenderBox {
  message: string;
  paragraph: Paragraph;
  public constructor(message?: string) {
    super();
    this.message = message;
    this.className = 'RenderErrorBox';
  }
}
export { RenderErrorBox };
