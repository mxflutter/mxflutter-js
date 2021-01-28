//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextEditingValue } from './text-input';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class TextInputFormatter extends MXDartClass {}
export { TextInputFormatter };
class _SimpleTextInputFormatter extends TextInputFormatter {
  formatFunction: any;
  public constructor(formatFunction?: any) {
    super();
    this.formatFunction = formatFunction;
    this.className = '_SimpleTextInputFormatter';
  }
}
export { _SimpleTextInputFormatter };
class FilteringTextInputFormatter extends TextInputFormatter {
  filterPattern: any;
  allow: boolean;
  replacementString: string;
  public constructor(filterPattern?: any, namedParameters: { allow?: boolean; replacementString?: string } = {}) {
    super();
    this.filterPattern = filterPattern;
    this.allow = namedParameters.allow;
    this.replacementString = namedParameters.replacementString;
    this.className = 'FilteringTextInputFormatter';
  }
  static allow(filterPattern?: any, namedParameters: { replacementString?: string } = {}) {
    var jsObj = new FilteringTextInputFormatter();
    jsObj.filterPattern = filterPattern;
    jsObj.replacementString = namedParameters.replacementString;
    jsObj['constructorName'] = 'allow';
    return jsObj;
  }
  static deny(filterPattern?: any, namedParameters: { replacementString?: string } = {}) {
    var jsObj = new FilteringTextInputFormatter();
    jsObj.filterPattern = filterPattern;
    jsObj.replacementString = namedParameters.replacementString;
    jsObj['constructorName'] = 'deny';
    return jsObj;
  }
}
export { FilteringTextInputFormatter };
class BlacklistingTextInputFormatter extends FilteringTextInputFormatter {
  public constructor(blacklistedPattern?: any, namedParameters: { replacementString?: string } = {}) {
    super();
    this['blacklistedPattern'] = blacklistedPattern;
    this['replacementString'] = namedParameters.replacementString;
    this.className = 'BlacklistingTextInputFormatter';
  }
}
export { BlacklistingTextInputFormatter };
class WhitelistingTextInputFormatter extends FilteringTextInputFormatter {
  public constructor(whitelistedPattern?: any) {
    super();
    this['whitelistedPattern'] = whitelistedPattern;
    this.className = 'WhitelistingTextInputFormatter';
  }
}
export { WhitelistingTextInputFormatter };
class LengthLimitingTextInputFormatter extends TextInputFormatter {
  maxLength: number;
  public constructor(maxLength?: number) {
    super();
    this.maxLength = maxLength;
    this.className = 'LengthLimitingTextInputFormatter';
  }
}
export { LengthLimitingTextInputFormatter };
