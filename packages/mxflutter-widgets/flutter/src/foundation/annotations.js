//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Category extends MXDartClass {
    constructor(sections) {
        super();
        this.sections = sections;
        this.className = 'Category';
    }
}
export { Category };
class DocumentationIcon extends MXDartClass {
    constructor(url) {
        super();
        this.url = url;
        this.className = 'DocumentationIcon';
    }
}
export { DocumentationIcon };
class Summary extends MXDartClass {
    constructor(text) {
        super();
        this.text = text;
        this.className = 'Summary';
    }
}
export { Summary };
