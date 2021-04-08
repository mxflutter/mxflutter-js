"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverMultiBoxAdaptor = exports.SliverMultiBoxAdaptorParentData = exports.RenderSliverWithKeepAliveMixin = exports.KeepAliveParentDataMixin = exports.RenderSliverBoxChildManager = void 0;
const sliver_1 = require("./sliver");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RenderSliverBoxChildManager extends mxflutter_base_1.MXDartClass {
}
exports.RenderSliverBoxChildManager = RenderSliverBoxChildManager;
class KeepAliveParentDataMixin extends mxflutter_base_1.MXDartClass {
}
exports.KeepAliveParentDataMixin = KeepAliveParentDataMixin;
class RenderSliverWithKeepAliveMixin extends mxflutter_base_1.MXDartClass {
}
exports.RenderSliverWithKeepAliveMixin = RenderSliverWithKeepAliveMixin;
class SliverMultiBoxAdaptorParentData extends sliver_1.SliverLogicalParentData {
}
exports.SliverMultiBoxAdaptorParentData = SliverMultiBoxAdaptorParentData;
class RenderSliverMultiBoxAdaptor extends sliver_1.RenderSliver {
}
exports.RenderSliverMultiBoxAdaptor = RenderSliverMultiBoxAdaptor;
