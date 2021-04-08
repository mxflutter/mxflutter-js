// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Category extends MXDartClass {
  sections: Array<any>;
  public constructor(sections?: Array<any>) {
    super();
    this.sections = sections;
    this.className = 'Category';
  }
}
export { Category };
class DocumentationIcon extends MXDartClass {
  url: string;
  public constructor(url?: string) {
    super();
    this.url = url;
    this.className = 'DocumentationIcon';
  }
}
export { DocumentationIcon };
class Summary extends MXDartClass {
  text: string;
  public constructor(text?: string) {
    super();
    this.text = text;
    this.className = 'Summary';
  }
}
export { Summary };
