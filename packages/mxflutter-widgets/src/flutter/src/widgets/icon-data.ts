// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class IconData extends MXDartClass {
  codePoint: number;
  fontFamily: string;
  fontPackage: string;
  matchTextDirection: boolean;
  public constructor(codePoint?: number, namedParameters: {fontFamily?: string, fontPackage?: string, matchTextDirection?: boolean} = {}) {
    super();
    this.codePoint = codePoint;
    this.fontFamily = namedParameters.fontFamily;
    this.fontPackage = namedParameters.fontPackage;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.className = 'IconData';
  }
}
export { IconData };
