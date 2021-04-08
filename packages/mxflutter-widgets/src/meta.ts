// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Immutable extends MXDartClass {
  reason: string;
  public constructor(reason?: string) {
    super();
    this.reason = reason;
    this.className = 'Immutable';
  }
}
export { Immutable };
class Required extends MXDartClass {
  reason: string;
  public constructor(reason?: string) {
    super();
    this.reason = reason;
    this.className = 'Required';
  }
}
export { Required };
class _AlwaysThrows extends MXDartClass {}
export { _AlwaysThrows };
class _Checked extends MXDartClass {}
export { _Checked };
class _DoNotStore extends MXDartClass {}
export { _DoNotStore };
class _Experimental extends MXDartClass {}
export { _Experimental };
class _Factory extends MXDartClass {}
export { _Factory };
class _IsTest extends MXDartClass {}
export { _IsTest };
class _IsTestGroup extends MXDartClass {}
export { _IsTestGroup };
class _Literal extends MXDartClass {}
export { _Literal };
class _MustCallSuper extends MXDartClass {}
export { _MustCallSuper };
class _NonVirtual extends MXDartClass {}
export { _NonVirtual };
class _OptionalTypeArgs extends MXDartClass {}
export { _OptionalTypeArgs };
class _Protected extends MXDartClass {}
export { _Protected };
class _Sealed extends MXDartClass {}
export { _Sealed };
class _Virtual extends MXDartClass {}
export { _Virtual };
class _VisibleForOverriding extends MXDartClass {}
export { _VisibleForOverriding };
class _VisibleForTesting extends MXDartClass {}
export { _VisibleForTesting };
