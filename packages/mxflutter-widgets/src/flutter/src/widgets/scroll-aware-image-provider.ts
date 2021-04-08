// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { DisposableBuildContext } from './disposable-build-context';
import { ImageProvider } from '../painting/image-provider';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ScrollAwareImageProvider extends ImageProvider {
  context: DisposableBuildContext;
  imageProvider: ImageProvider;
  public constructor(namedParameters: {context?: DisposableBuildContext, imageProvider?: ImageProvider} = {}) {
    super();
    this.context = namedParameters.context;
    this.imageProvider = namedParameters.imageProvider;
    this.className = 'ScrollAwareImageProvider';
  }
}
export { ScrollAwareImageProvider };
