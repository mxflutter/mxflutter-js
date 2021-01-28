//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Unicode extends MXDartClass {
    static get LRE() {
        return '‪';
    }
    static get RLE() {
        return '‫';
    }
    static get PDF() {
        return '‬';
    }
    static get LRO() {
        return '‭';
    }
    static get RLO() {
        return '‮';
    }
    static get LRI() {
        return '⁦';
    }
    static get RLI() {
        return '⁧';
    }
    static get FSI() {
        return '⁨';
    }
    static get PDI() {
        return '⁩';
    }
    static get LRM() {
        return '‎';
    }
    static get RLM() {
        return '‏';
    }
    static get ALM() {
        return '؜';
    }
}
export { Unicode };
