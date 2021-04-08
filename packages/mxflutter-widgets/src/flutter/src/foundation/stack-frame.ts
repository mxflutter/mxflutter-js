// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class StackFrame extends MXDartClass {
  source: string;
  number: number;
  packageScheme: string;
  __mx_package: string;
  packagePath: string;
  line: number;
  column: number;
  className: string;
  method: string;
  isConstructor: boolean;
  public constructor(namedParameters: {number?: number, column?: number, line?: number, packageScheme?: string, __mx_package?: string, packagePath?: string, className?: string, method?: string, isConstructor?: boolean, source?: string} = {}) {
    super();
    this.number = namedParameters.number;
    this.column = namedParameters.column;
    this.line = namedParameters.line;
    this.packageScheme = namedParameters.packageScheme;
    this.__mx_package = namedParameters.__mx_package;
    this.packagePath = namedParameters.packagePath;
    this.className = namedParameters.className;
    this.method = namedParameters.method;
    this.isConstructor = namedParameters.isConstructor;
    this.source = namedParameters.source;
    this.className = 'StackFrame';
  }
  static get asynchronousSuspension() {
    var jsObj = new StackFrame();
    jsObj['className'] = 'StackFrame';
    jsObj['constructorName'] = 'asynchronousSuspension';
    return jsObj;
  }
  static get stackOverFlowElision() {
    var jsObj = new StackFrame();
    jsObj['className'] = 'StackFrame';
    jsObj['constructorName'] = 'stackOverFlowElision';
    return jsObj;
  }
}
export { StackFrame };
