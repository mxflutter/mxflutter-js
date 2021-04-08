// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DiagnosticLevel {
  hidden = '{ "_name": "DiagnosticLevel.hidden", "index": 0 }',
  fine = '{ "_name": "DiagnosticLevel.fine", "index": 1 }',
  debug = '{ "_name": "DiagnosticLevel.debug", "index": 2 }',
  info = '{ "_name": "DiagnosticLevel.info", "index": 3 }',
  warning = '{ "_name": "DiagnosticLevel.warning", "index": 4 }',
  hint = '{ "_name": "DiagnosticLevel.hint", "index": 5 }',
  summary = '{ "_name": "DiagnosticLevel.summary", "index": 6 }',
  error = '{ "_name": "DiagnosticLevel.error", "index": 7 }',
  off = '{ "_name": "DiagnosticLevel.off", "index": 8 }',
};

export { DiagnosticLevel };
enum DiagnosticsTreeStyle {
  none = '{ "_name": "DiagnosticsTreeStyle.none", "index": 0 }',
  sparse = '{ "_name": "DiagnosticsTreeStyle.sparse", "index": 1 }',
  offstage = '{ "_name": "DiagnosticsTreeStyle.offstage", "index": 2 }',
  dense = '{ "_name": "DiagnosticsTreeStyle.dense", "index": 3 }',
  transition = '{ "_name": "DiagnosticsTreeStyle.transition", "index": 4 }',
  error = '{ "_name": "DiagnosticsTreeStyle.error", "index": 5 }',
  whitespace = '{ "_name": "DiagnosticsTreeStyle.whitespace", "index": 6 }',
  flat = '{ "_name": "DiagnosticsTreeStyle.flat", "index": 7 }',
  singleLine = '{ "_name": "DiagnosticsTreeStyle.singleLine", "index": 8 }',
  errorProperty = '{ "_name": "DiagnosticsTreeStyle.errorProperty", "index": 9 }',
  shallow = '{ "_name": "DiagnosticsTreeStyle.shallow", "index": 10 }',
  truncateChildren = '{ "_name": "DiagnosticsTreeStyle.truncateChildren", "index": 11 }',
};

export { DiagnosticsTreeStyle };
class TextTreeConfiguration extends MXDartClass {
  prefixLineOne: string;
  suffixLineOne: string;
  prefixOtherLines: string;
  prefixLastChildLineOne: string;
  prefixOtherLinesRootNode: string;
  propertyPrefixIfChildren: string;
  propertyPrefixNoChildren: string;
  linkCharacter: string;
  childLinkSpace: string;
  lineBreak: string;
  lineBreakProperties: boolean;
  beforeName: string;
  afterName: string;
  afterDescriptionIfBody: string;
  afterDescription: string;
  beforeProperties: string;
  afterProperties: string;
  mandatoryAfterProperties: string;
  propertySeparator: string;
  bodyIndent: string;
  showChildren: boolean;
  addBlankLineIfNoChildren: boolean;
  isNameOnOwnLine: boolean;
  footer: string;
  mandatoryFooter: string;
  isBlankLineBetweenPropertiesAndChildren: boolean;
  public constructor(namedParameters: {prefixLineOne?: string, prefixOtherLines?: string, prefixLastChildLineOne?: string, prefixOtherLinesRootNode?: string, linkCharacter?: string, propertyPrefixIfChildren?: string, propertyPrefixNoChildren?: string, lineBreak?: string, lineBreakProperties?: boolean, afterName?: string, afterDescriptionIfBody?: string, afterDescription?: string, beforeProperties?: string, afterProperties?: string, mandatoryAfterProperties?: string, propertySeparator?: string, bodyIndent?: string, footer?: string, showChildren?: boolean, addBlankLineIfNoChildren?: boolean, isNameOnOwnLine?: boolean, isBlankLineBetweenPropertiesAndChildren?: boolean, beforeName?: string, suffixLineOne?: string, mandatoryFooter?: string} = {}) {
    super();
    this.prefixLineOne = namedParameters.prefixLineOne;
    this.prefixOtherLines = namedParameters.prefixOtherLines;
    this.prefixLastChildLineOne = namedParameters.prefixLastChildLineOne;
    this.prefixOtherLinesRootNode = namedParameters.prefixOtherLinesRootNode;
    this.linkCharacter = namedParameters.linkCharacter;
    this.propertyPrefixIfChildren = namedParameters.propertyPrefixIfChildren;
    this.propertyPrefixNoChildren = namedParameters.propertyPrefixNoChildren;
    this.lineBreak = namedParameters.lineBreak;
    this.lineBreakProperties = namedParameters.lineBreakProperties;
    this.afterName = namedParameters.afterName;
    this.afterDescriptionIfBody = namedParameters.afterDescriptionIfBody;
    this.afterDescription = namedParameters.afterDescription;
    this.beforeProperties = namedParameters.beforeProperties;
    this.afterProperties = namedParameters.afterProperties;
    this.mandatoryAfterProperties = namedParameters.mandatoryAfterProperties;
    this.propertySeparator = namedParameters.propertySeparator;
    this.bodyIndent = namedParameters.bodyIndent;
    this.footer = namedParameters.footer;
    this.showChildren = namedParameters.showChildren;
    this.addBlankLineIfNoChildren = namedParameters.addBlankLineIfNoChildren;
    this.isNameOnOwnLine = namedParameters.isNameOnOwnLine;
    this.isBlankLineBetweenPropertiesAndChildren = namedParameters.isBlankLineBetweenPropertiesAndChildren;
    this.beforeName = namedParameters.beforeName;
    this.suffixLineOne = namedParameters.suffixLineOne;
    this.mandatoryFooter = namedParameters.mandatoryFooter;
    this.className = 'TextTreeConfiguration';
  }
}
export { TextTreeConfiguration };
enum _WordWrapParseMode {
  inSpace = '{ "_name": "_WordWrapParseMode.inSpace", "index": 0 }',
  inWord = '{ "_name": "_WordWrapParseMode.inWord", "index": 1 }',
  atBreak = '{ "_name": "_WordWrapParseMode.atBreak", "index": 2 }',
};

export { _WordWrapParseMode };
class _PrefixedStringBuilder extends MXDartClass {
  prefixLineOne: string;
  prefixOtherLines: string;
  nextPrefixOtherLines: string;
  wrapWidth: number;
  buffer: any;
  currentLine: any;
  wrappableRanges: Array<any>;
  numLines: number;
  public constructor(namedParameters: {prefixLineOne?: string, prefixOtherLines?: string, wrapWidth?: number} = {}) {
    super();
    this.prefixLineOne = namedParameters.prefixLineOne;
    this.prefixOtherLines = namedParameters.prefixOtherLines;
    this.wrapWidth = namedParameters.wrapWidth;
    this.className = '_PrefixedStringBuilder';
  }
}
export { _PrefixedStringBuilder };
class _NoDefaultValue extends MXDartClass {}
export { _NoDefaultValue };
class TextTreeRenderer extends MXDartClass {
  wrapWidth: number;
  wrapWidthProperties: number;
  minLevel: DiagnosticLevel;
  maxDescendentsTruncatableNode: number;
  public constructor(namedParameters: {minLevel?: DiagnosticLevel, wrapWidth?: number, wrapWidthProperties?: number, maxDescendentsTruncatableNode?: number} = {}) {
    super();
    this.minLevel = namedParameters.minLevel;
    this.wrapWidth = namedParameters.wrapWidth;
    this.wrapWidthProperties = namedParameters.wrapWidthProperties;
    this.maxDescendentsTruncatableNode = namedParameters.maxDescendentsTruncatableNode;
    this.className = 'TextTreeRenderer';
  }
}
export { TextTreeRenderer };
class DiagnosticPropertiesBuilder extends MXDartClass {
  properties: Array<any>;
  defaultDiagnosticsTreeStyle: DiagnosticsTreeStyle;
  emptyBodyDescription: string;
  static fromProperties(properties?: Array<any>) {
    var jsObj = new DiagnosticPropertiesBuilder();
    jsObj.properties = properties;
    jsObj['constructorName'] = 'fromProperties';
    return jsObj;
  }
}
export { DiagnosticPropertiesBuilder };
abstract class DiagnosticableTree extends MXMirrorWidget {}
export { DiagnosticableTree };
abstract class DiagnosticableTreeMixin extends MXDartClass {}
export { DiagnosticableTreeMixin };
abstract class DiagnosticsSerializationDelegate extends MXDartClass {
  public constructor(namedParameters: {subtreeDepth?: number, includeProperties?: boolean} = {}) {
    super();
    this['subtreeDepth'] = namedParameters.subtreeDepth;
    this['includeProperties'] = namedParameters.includeProperties;
    this.className = 'DiagnosticsSerializationDelegate';
  }
}
export { DiagnosticsSerializationDelegate };
class _DefaultDiagnosticsSerializationDelegate extends MXDartClass {
  includeProperties: boolean;
  subtreeDepth: number;
  public constructor(namedParameters: {includeProperties?: boolean, subtreeDepth?: number} = {}) {
    super();
    this.includeProperties = namedParameters.includeProperties;
    this.subtreeDepth = namedParameters.subtreeDepth;
    this.className = '_DefaultDiagnosticsSerializationDelegate';
  }
}
export { _DefaultDiagnosticsSerializationDelegate };
