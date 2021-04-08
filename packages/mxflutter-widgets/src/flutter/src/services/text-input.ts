// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MethodChannel } from './platform-channel';
import { Matrix4 } from '../../../vector-math-64';
import { TextSelection } from './text-editing';
import { Brightness, Offset, TextRange, Size } from '../../../mx-dart-sdk';
import { AutofillConfiguration } from './autofill';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum SmartDashesType {
  disabled = '{ "_name": "SmartDashesType.disabled", "index": 0 }',
  enabled = '{ "_name": "SmartDashesType.enabled", "index": 1 }',
};

export { SmartDashesType };
enum SmartQuotesType {
  disabled = '{ "_name": "SmartQuotesType.disabled", "index": 0 }',
  enabled = '{ "_name": "SmartQuotesType.enabled", "index": 1 }',
};

export { SmartQuotesType };
class TextInputType extends MXDartClass {
  index: number;
  signed: boolean;
  decimal: boolean;
  static get text() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'text';
    return jsObj;
  }
  static get multiline() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'multiline';
    return jsObj;
  }
  static get number() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'number';
    return jsObj;
  }
  static get phone() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'phone';
    return jsObj;
  }
  static get datetime() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'datetime';
    return jsObj;
  }
  static get emailAddress() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'emailAddress';
    return jsObj;
  }
  static get url() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'url';
    return jsObj;
  }
  static get visiblePassword() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'visiblePassword';
    return jsObj;
  }
  static get mxName() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'name';
    return jsObj;
  }
  static get streetAddress() {
    var jsObj = new TextInputType();
    jsObj['className'] = 'TextInputType';
    jsObj['constructorName'] = 'streetAddress';
    return jsObj;
  }
  static get values() {
    return [TextInputType.text, TextInputType.multiline, TextInputType.number, TextInputType.phone, TextInputType.datetime, TextInputType.emailAddress, TextInputType.url, TextInputType.visiblePassword, TextInputType.name, TextInputType.streetAddress];
  }
  static numberWithOptions(namedParameters: {signed?: boolean, decimal?: boolean} = {}) {
    var jsObj = new TextInputType();
    jsObj.signed = namedParameters.signed;
    jsObj.decimal = namedParameters.decimal;
    jsObj['constructorName'] = 'numberWithOptions';
    return jsObj;
  }
}
export { TextInputType };
enum TextInputAction {
  none = '{ "_name": "TextInputAction.none", "index": 0 }',
  unspecified = '{ "_name": "TextInputAction.unspecified", "index": 1 }',
  done = '{ "_name": "TextInputAction.done", "index": 2 }',
  go = '{ "_name": "TextInputAction.go", "index": 3 }',
  search = '{ "_name": "TextInputAction.search", "index": 4 }',
  send = '{ "_name": "TextInputAction.send", "index": 5 }',
  next = '{ "_name": "TextInputAction.next", "index": 6 }',
  previous = '{ "_name": "TextInputAction.previous", "index": 7 }',
  continueAction = '{ "_name": "TextInputAction.continueAction", "index": 8 }',
  join = '{ "_name": "TextInputAction.join", "index": 9 }',
  route = '{ "_name": "TextInputAction.route", "index": 10 }',
  emergencyCall = '{ "_name": "TextInputAction.emergencyCall", "index": 11 }',
  newline = '{ "_name": "TextInputAction.newline", "index": 12 }',
};

export { TextInputAction };
enum TextCapitalization {
  words = '{ "_name": "TextCapitalization.words", "index": 0 }',
  sentences = '{ "_name": "TextCapitalization.sentences", "index": 1 }',
  characters = '{ "_name": "TextCapitalization.characters", "index": 2 }',
  none = '{ "_name": "TextCapitalization.none", "index": 3 }',
};

export { TextCapitalization };
class TextInputConfiguration extends MXDartClass {
  inputType: TextInputType;
  readOnly: boolean;
  obscureText: boolean;
  autocorrect: boolean;
  autofillConfiguration: AutofillConfiguration;
  smartDashesType: SmartDashesType;
  smartQuotesType: SmartQuotesType;
  enableSuggestions: boolean;
  actionLabel: string;
  inputAction: TextInputAction;
  textCapitalization: TextCapitalization;
  keyboardAppearance: Brightness;
  public constructor(namedParameters: {inputType?: TextInputType, readOnly?: boolean, obscureText?: boolean, autocorrect?: boolean, smartDashesType?: SmartDashesType, smartQuotesType?: SmartQuotesType, enableSuggestions?: boolean, actionLabel?: string, inputAction?: TextInputAction, keyboardAppearance?: Brightness, textCapitalization?: TextCapitalization, autofillConfiguration?: AutofillConfiguration} = {}) {
    super();
    this.inputType = namedParameters.inputType;
    this.readOnly = namedParameters.readOnly;
    this.obscureText = namedParameters.obscureText;
    this.autocorrect = namedParameters.autocorrect;
    this.smartDashesType = namedParameters.smartDashesType;
    this.smartQuotesType = namedParameters.smartQuotesType;
    this.enableSuggestions = namedParameters.enableSuggestions;
    this.actionLabel = namedParameters.actionLabel;
    this.inputAction = namedParameters.inputAction;
    this.keyboardAppearance = namedParameters.keyboardAppearance;
    this.textCapitalization = namedParameters.textCapitalization;
    this.autofillConfiguration = namedParameters.autofillConfiguration;
    this.className = 'TextInputConfiguration';
  }
}
export { TextInputConfiguration };
enum FloatingCursorDragState {
  Start = '{ "_name": "FloatingCursorDragState.Start", "index": 0 }',
  Update = '{ "_name": "FloatingCursorDragState.Update", "index": 1 }',
  End = '{ "_name": "FloatingCursorDragState.End", "index": 2 }',
};

export { FloatingCursorDragState };
class RawFloatingCursorPoint extends MXDartClass {
  offset: Offset;
  state: FloatingCursorDragState;
  public constructor(namedParameters: {offset?: Offset, state?: FloatingCursorDragState} = {}) {
    super();
    this.offset = namedParameters.offset;
    this.state = namedParameters.state;
    this.className = 'RawFloatingCursorPoint';
  }
}
export { RawFloatingCursorPoint };
class TextEditingValue extends MXDartClass {
  text: string;
  selection: TextSelection;
  composing: TextRange;
  public constructor(namedParameters: {text?: string, selection?: TextSelection, composing?: TextRange} = {}) {
    super();
    this.text = namedParameters.text;
    this.selection = namedParameters.selection;
    this.composing = namedParameters.composing;
    this.className = 'TextEditingValue';
  }
  static get empty() {
    var jsObj = new TextEditingValue();
    jsObj['className'] = 'TextEditingValue';
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
  static fromJSON(encoded?: Map<any, any>) {
    var jsObj = new TextEditingValue();
    jsObj['encoded'] = encoded;
    jsObj['constructorName'] = 'fromJSON';
    return jsObj;
  }
}
export { TextEditingValue };
abstract class TextSelectionDelegate extends MXDartClass {}
export { TextSelectionDelegate };
abstract class TextInputClient extends MXDartClass {}
export { TextInputClient };
class TextInputConnection extends MXDartClass {
  cachedSize: Size;
  cachedTransform: Matrix4;
  id: number;
  client: TextInputClient;
  static debugResetId(namedParameters: {to?: number} = {}) {
    var jsObj = new MXDartClass();
    jsObj['to'] = namedParameters.to;
    jsObj.className = 'TextInputConnection';
    jsObj['constructorName'] = 'debugResetId';
    return jsObj;
  }
}
export { TextInputConnection };
class TextInput extends MXDartClass {
  channel: MethodChannel;
  currentConnection: TextInputConnection;
  currentConfiguration: TextInputConfiguration;
  hidePending: boolean;
  static setChannel(newChannel?: MethodChannel) {
    var jsObj = new MXDartClass();
    jsObj['newChannel'] = newChannel;
    jsObj.className = 'TextInput';
    jsObj['constructorName'] = 'setChannel';
    return jsObj;
  }
  static finishAutofillContext(namedParameters: {shouldSave?: boolean} = {}) {
    var jsObj = new MXDartClass();
    jsObj['shouldSave'] = namedParameters.shouldSave;
    jsObj.className = 'TextInput';
    jsObj['constructorName'] = 'finishAutofillContext';
    return jsObj;
  }
}
export { TextInput };
