//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { ImageProvider } from '../painting/image-provider';
import { StatelessWidget$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ImageIcon extends StatelessWidget$ {
  image: ImageProvider;
  size: number;
  color: Color;
  semanticLabel: string;
  public constructor(
    image?: ImageProvider,
    namedParameters: { key?: Key; size?: number; color?: Color; semanticLabel?: string } = {},
  ) {
    super();
    this.image = image;
    this.key = namedParameters.key;
    this.size = namedParameters.size;
    this.color = namedParameters.color;
    this.semanticLabel = namedParameters.semanticLabel;
    this.className = 'ImageIcon';
  }
}
export { ImageIcon };
