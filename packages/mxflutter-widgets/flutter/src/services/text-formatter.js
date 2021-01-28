//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TextInputFormatter extends MXDartClass {
}
export { TextInputFormatter };
class _SimpleTextInputFormatter extends TextInputFormatter {
    constructor(formatFunction) {
        super();
        this.formatFunction = formatFunction;
        this.className = '_SimpleTextInputFormatter';
    }
}
export { _SimpleTextInputFormatter };
class FilteringTextInputFormatter extends TextInputFormatter {
    constructor(filterPattern, namedParameters = {}) {
        super();
        this.filterPattern = filterPattern;
        this.allow = namedParameters.allow;
        this.replacementString = namedParameters.replacementString;
        this.className = 'FilteringTextInputFormatter';
    }
    static allow(filterPattern, namedParameters = {}) {
        var jsObj = new FilteringTextInputFormatter();
        jsObj.filterPattern = filterPattern;
        jsObj.replacementString = namedParameters.replacementString;
        jsObj['constructorName'] = 'allow';
        return jsObj;
    }
    static deny(filterPattern, namedParameters = {}) {
        var jsObj = new FilteringTextInputFormatter();
        jsObj.filterPattern = filterPattern;
        jsObj.replacementString = namedParameters.replacementString;
        jsObj['constructorName'] = 'deny';
        return jsObj;
    }
}
export { FilteringTextInputFormatter };
class BlacklistingTextInputFormatter extends FilteringTextInputFormatter {
    constructor(blacklistedPattern, namedParameters = {}) {
        super();
        this['blacklistedPattern'] = blacklistedPattern;
        this['replacementString'] = namedParameters.replacementString;
        this.className = 'BlacklistingTextInputFormatter';
    }
}
export { BlacklistingTextInputFormatter };
class WhitelistingTextInputFormatter extends FilteringTextInputFormatter {
    constructor(whitelistedPattern) {
        super();
        this['whitelistedPattern'] = whitelistedPattern;
        this.className = 'WhitelistingTextInputFormatter';
    }
}
export { WhitelistingTextInputFormatter };
class LengthLimitingTextInputFormatter extends TextInputFormatter {
    constructor(maxLength) {
        super();
        this.maxLength = maxLength;
        this.className = 'LengthLimitingTextInputFormatter';
    }
}
export { LengthLimitingTextInputFormatter };
