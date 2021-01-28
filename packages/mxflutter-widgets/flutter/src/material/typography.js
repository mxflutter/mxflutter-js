//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { TextTheme } from './text-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var ScriptCategory;
(function (ScriptCategory) {
    ScriptCategory["englishLike"] = "{ \"_name\": \"ScriptCategory.englishLike\", \"index\": 0 }";
    ScriptCategory["dense"] = "{ \"_name\": \"ScriptCategory.dense\", \"index\": 1 }";
    ScriptCategory["tall"] = "{ \"_name\": \"ScriptCategory.tall\", \"index\": 2 }";
})(ScriptCategory || (ScriptCategory = {}));
export { ScriptCategory };
class Typography extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['platform'] = namedParameters.platform;
        this.black = namedParameters.black;
        this.white = namedParameters.white;
        this.englishLike = namedParameters.englishLike;
        this.dense = namedParameters.dense;
        this.tall = namedParameters.tall;
        this.className = 'Typography';
    }
    static get blackMountainView() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'blackMountainView';
        return jsObj;
    }
    static get whiteMountainView() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'whiteMountainView';
        return jsObj;
    }
    static get blackRedmond() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'blackRedmond';
        return jsObj;
    }
    static get whiteRedmond() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'whiteRedmond';
        return jsObj;
    }
    static get blackHelsinki() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'blackHelsinki';
        return jsObj;
    }
    static get whiteHelsinki() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'whiteHelsinki';
        return jsObj;
    }
    static get blackCupertino() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'blackCupertino';
        return jsObj;
    }
    static get whiteCupertino() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'whiteCupertino';
        return jsObj;
    }
    static get englishLike2014() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'englishLike2014';
        return jsObj;
    }
    static get englishLike2018() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'englishLike2018';
        return jsObj;
    }
    static get dense2014() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'dense2014';
        return jsObj;
    }
    static get dense2018() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'dense2018';
        return jsObj;
    }
    static get tall2014() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'tall2014';
        return jsObj;
    }
    static get tall2018() {
        var jsObj = new TextTheme();
        jsObj['className'] = 'Typography';
        jsObj['constructorName'] = 'tall2018';
        return jsObj;
    }
    static material2014(namedParameters = {}) {
        var jsObj = new Typography();
        jsObj['platform'] = namedParameters.platform;
        jsObj.black = namedParameters.black;
        jsObj.white = namedParameters.white;
        jsObj.englishLike = namedParameters.englishLike;
        jsObj.dense = namedParameters.dense;
        jsObj.tall = namedParameters.tall;
        jsObj['constructorName'] = 'material2014';
        return jsObj;
    }
    static material2018(namedParameters = {}) {
        var jsObj = new Typography();
        jsObj['platform'] = namedParameters.platform;
        jsObj.black = namedParameters.black;
        jsObj.white = namedParameters.white;
        jsObj.englishLike = namedParameters.englishLike;
        jsObj.dense = namedParameters.dense;
        jsObj.tall = namedParameters.tall;
        jsObj['constructorName'] = 'material2018';
        return jsObj;
    }
}
export { Typography };
