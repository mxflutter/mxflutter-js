"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderRadiusGeometry = exports.PaintingBinding = exports.BeveledRectangleBorder = exports.Locale = exports.TextPosition = exports.TextAffinity = exports.TextBox = exports.TextDirection = exports.TextDecorationStyle = exports.TextDecoration = exports.TextBaseline = exports.TextAlign = exports.FontWeight = exports.FontStyle = exports.Canvas = exports.VertexMode = exports.ImageShader = exports.TileMode = exports.Shader = exports.ColorFilter = exports.MaskFilter = exports.BlurStyle = exports.Path = exports.PathOperation = exports.PathFillType = exports.Paint = exports.Clip = exports.PaintingStyle = exports.StrokeJoin = exports.StrokeCap = exports.FilterQuality = exports.BlendMode = exports.Color = exports.RSTransform = exports.RRect = exports.Radius = exports.Rect = exports.Size = exports.Offset = exports.AxisDirection = exports.VerticalDirection = exports.Axis = exports.RenderComparison = exports.TextAlignVertical = exports.AlignmentDirectional = exports.Alignment = exports.AlignmentGeometry = exports.PlaceholderAlignment = exports.TextHeightBehavior = exports.Shadow = void 0;
exports.NetworkImageLoadException = exports.ExactAssetImage = exports.MemoryImage = exports.FileImage = exports.NetworkImage = exports.ResizeImage = exports.AssetBundleImageProvider = exports.AssetBundleImageKey = exports.ImageProvider = exports.ImageConfiguration = exports.ImageCacheStatus = exports.ImageCache = exports.SweepGradient = exports.RadialGradient = exports.LinearGradient = exports.Gradient = exports.GradientRotation = exports.GradientTransform = exports.FractionalOffset = exports.FlutterLogoDecoration = exports.FlutterLogoStyle = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.EdgeInsetsGeometry = exports.DecorationImagePainter = exports.DecorationImage = exports.ImageRepeat = exports.BoxPainter = exports.Decoration = exports.ImageSizeInfo = exports.ContinuousRectangleBorder = exports.ColorSwatch = exports.HSLColor = exports.HSVColor = exports.ClipContext = exports.CircleBorder = exports.BoxShadow = exports.FittedSizes = exports.BoxFit = exports.BoxDecoration = exports.BorderDirectional = exports.Border = exports.BoxBorder = exports.BoxShape = exports.OutlinedBorder = exports.ShapeBorder = exports.BorderSide = exports.BorderStyle = exports.BorderRadiusDirectional = exports.BorderRadius = void 0;
exports.TextRange = exports.TextSelection = exports.TextStyle = exports.TextSpan = exports.TextPainter = exports.TextWidthBasis = exports.PlaceholderDimensions = exports.StrutStyle = exports.StadiumBorder = exports.ShapeDecoration = exports.DefaultShaderWarmUp = exports.ShaderWarmUp = exports.RoundedRectangleBorder = exports.PlaceholderSpan = exports.AutomaticNotchedShape = exports.CircularNotchedRectangle = exports.NotchedShape = exports.MatrixUtils = exports.InlineSpan = exports.InlineSpanSemanticsInformation = exports.Accumulator = exports.MultiFrameImageStreamCompleter = exports.OneFrameImageStreamCompleter = exports.ImageStreamCompleter = exports.ImageStream = exports.ImageChunkEvent = exports.ImageStreamListener = exports.ImageInfo = exports.AssetImage = void 0;
const text_editing_1 = require("./flutter/src/services/text-editing");
Object.defineProperty(exports, "TextSelection", { enumerable: true, get: function () { return text_editing_1.TextSelection; } });
const text_style_1 = require("./flutter/src/painting/text-style");
Object.defineProperty(exports, "TextStyle", { enumerable: true, get: function () { return text_style_1.TextStyle; } });
const text_span_1 = require("./flutter/src/painting/text-span");
Object.defineProperty(exports, "TextSpan", { enumerable: true, get: function () { return text_span_1.TextSpan; } });
const text_painter_1 = require("./flutter/src/painting/text-painter");
Object.defineProperty(exports, "PlaceholderDimensions", { enumerable: true, get: function () { return text_painter_1.PlaceholderDimensions; } });
Object.defineProperty(exports, "TextWidthBasis", { enumerable: true, get: function () { return text_painter_1.TextWidthBasis; } });
Object.defineProperty(exports, "TextPainter", { enumerable: true, get: function () { return text_painter_1.TextPainter; } });
const strut_style_1 = require("./flutter/src/painting/strut-style");
Object.defineProperty(exports, "StrutStyle", { enumerable: true, get: function () { return strut_style_1.StrutStyle; } });
const stadium_border_1 = require("./flutter/src/painting/stadium-border");
Object.defineProperty(exports, "StadiumBorder", { enumerable: true, get: function () { return stadium_border_1.StadiumBorder; } });
const shape_decoration_1 = require("./flutter/src/painting/shape-decoration");
Object.defineProperty(exports, "ShapeDecoration", { enumerable: true, get: function () { return shape_decoration_1.ShapeDecoration; } });
const shader_warm_up_1 = require("./flutter/src/painting/shader-warm-up");
Object.defineProperty(exports, "ShaderWarmUp", { enumerable: true, get: function () { return shader_warm_up_1.ShaderWarmUp; } });
Object.defineProperty(exports, "DefaultShaderWarmUp", { enumerable: true, get: function () { return shader_warm_up_1.DefaultShaderWarmUp; } });
const rounded_rectangle_border_1 = require("./flutter/src/painting/rounded-rectangle-border");
Object.defineProperty(exports, "RoundedRectangleBorder", { enumerable: true, get: function () { return rounded_rectangle_border_1.RoundedRectangleBorder; } });
const placeholder_span_1 = require("./flutter/src/painting/placeholder-span");
Object.defineProperty(exports, "PlaceholderSpan", { enumerable: true, get: function () { return placeholder_span_1.PlaceholderSpan; } });
const notched_shapes_1 = require("./flutter/src/painting/notched-shapes");
Object.defineProperty(exports, "NotchedShape", { enumerable: true, get: function () { return notched_shapes_1.NotchedShape; } });
Object.defineProperty(exports, "CircularNotchedRectangle", { enumerable: true, get: function () { return notched_shapes_1.CircularNotchedRectangle; } });
Object.defineProperty(exports, "AutomaticNotchedShape", { enumerable: true, get: function () { return notched_shapes_1.AutomaticNotchedShape; } });
const matrix_utils_1 = require("./flutter/src/painting/matrix-utils");
Object.defineProperty(exports, "MatrixUtils", { enumerable: true, get: function () { return matrix_utils_1.MatrixUtils; } });
const inline_span_1 = require("./flutter/src/painting/inline-span");
Object.defineProperty(exports, "Accumulator", { enumerable: true, get: function () { return inline_span_1.Accumulator; } });
Object.defineProperty(exports, "InlineSpanSemanticsInformation", { enumerable: true, get: function () { return inline_span_1.InlineSpanSemanticsInformation; } });
Object.defineProperty(exports, "InlineSpan", { enumerable: true, get: function () { return inline_span_1.InlineSpan; } });
const image_stream_1 = require("./flutter/src/painting/image-stream");
Object.defineProperty(exports, "ImageInfo", { enumerable: true, get: function () { return image_stream_1.ImageInfo; } });
Object.defineProperty(exports, "ImageStreamListener", { enumerable: true, get: function () { return image_stream_1.ImageStreamListener; } });
Object.defineProperty(exports, "ImageChunkEvent", { enumerable: true, get: function () { return image_stream_1.ImageChunkEvent; } });
Object.defineProperty(exports, "ImageStream", { enumerable: true, get: function () { return image_stream_1.ImageStream; } });
Object.defineProperty(exports, "ImageStreamCompleter", { enumerable: true, get: function () { return image_stream_1.ImageStreamCompleter; } });
Object.defineProperty(exports, "OneFrameImageStreamCompleter", { enumerable: true, get: function () { return image_stream_1.OneFrameImageStreamCompleter; } });
Object.defineProperty(exports, "MultiFrameImageStreamCompleter", { enumerable: true, get: function () { return image_stream_1.MultiFrameImageStreamCompleter; } });
const image_resolution_1 = require("./flutter/src/painting/image-resolution");
Object.defineProperty(exports, "AssetImage", { enumerable: true, get: function () { return image_resolution_1.AssetImage; } });
const image_provider_1 = require("./flutter/src/painting/image-provider");
Object.defineProperty(exports, "ImageConfiguration", { enumerable: true, get: function () { return image_provider_1.ImageConfiguration; } });
Object.defineProperty(exports, "ImageProvider", { enumerable: true, get: function () { return image_provider_1.ImageProvider; } });
Object.defineProperty(exports, "AssetBundleImageKey", { enumerable: true, get: function () { return image_provider_1.AssetBundleImageKey; } });
Object.defineProperty(exports, "AssetBundleImageProvider", { enumerable: true, get: function () { return image_provider_1.AssetBundleImageProvider; } });
Object.defineProperty(exports, "ResizeImage", { enumerable: true, get: function () { return image_provider_1.ResizeImage; } });
Object.defineProperty(exports, "NetworkImage", { enumerable: true, get: function () { return image_provider_1.NetworkImage; } });
Object.defineProperty(exports, "FileImage", { enumerable: true, get: function () { return image_provider_1.FileImage; } });
Object.defineProperty(exports, "MemoryImage", { enumerable: true, get: function () { return image_provider_1.MemoryImage; } });
Object.defineProperty(exports, "ExactAssetImage", { enumerable: true, get: function () { return image_provider_1.ExactAssetImage; } });
Object.defineProperty(exports, "NetworkImageLoadException", { enumerable: true, get: function () { return image_provider_1.NetworkImageLoadException; } });
const image_cache_1 = require("./flutter/src/painting/image-cache");
Object.defineProperty(exports, "ImageCache", { enumerable: true, get: function () { return image_cache_1.ImageCache; } });
Object.defineProperty(exports, "ImageCacheStatus", { enumerable: true, get: function () { return image_cache_1.ImageCacheStatus; } });
const gradient_1 = require("./flutter/src/painting/gradient");
Object.defineProperty(exports, "GradientTransform", { enumerable: true, get: function () { return gradient_1.GradientTransform; } });
Object.defineProperty(exports, "GradientRotation", { enumerable: true, get: function () { return gradient_1.GradientRotation; } });
Object.defineProperty(exports, "Gradient", { enumerable: true, get: function () { return gradient_1.Gradient; } });
Object.defineProperty(exports, "LinearGradient", { enumerable: true, get: function () { return gradient_1.LinearGradient; } });
Object.defineProperty(exports, "RadialGradient", { enumerable: true, get: function () { return gradient_1.RadialGradient; } });
Object.defineProperty(exports, "SweepGradient", { enumerable: true, get: function () { return gradient_1.SweepGradient; } });
const fractional_offset_1 = require("./flutter/src/painting/fractional-offset");
Object.defineProperty(exports, "FractionalOffset", { enumerable: true, get: function () { return fractional_offset_1.FractionalOffset; } });
const flutter_logo_1 = require("./flutter/src/painting/flutter-logo");
Object.defineProperty(exports, "FlutterLogoStyle", { enumerable: true, get: function () { return flutter_logo_1.FlutterLogoStyle; } });
Object.defineProperty(exports, "FlutterLogoDecoration", { enumerable: true, get: function () { return flutter_logo_1.FlutterLogoDecoration; } });
const edge_insets_1 = require("./flutter/src/painting/edge-insets");
Object.defineProperty(exports, "EdgeInsetsGeometry", { enumerable: true, get: function () { return edge_insets_1.EdgeInsetsGeometry; } });
Object.defineProperty(exports, "EdgeInsets", { enumerable: true, get: function () { return edge_insets_1.EdgeInsets; } });
Object.defineProperty(exports, "EdgeInsetsDirectional", { enumerable: true, get: function () { return edge_insets_1.EdgeInsetsDirectional; } });
const decoration_image_1 = require("./flutter/src/painting/decoration-image");
Object.defineProperty(exports, "ImageRepeat", { enumerable: true, get: function () { return decoration_image_1.ImageRepeat; } });
Object.defineProperty(exports, "DecorationImage", { enumerable: true, get: function () { return decoration_image_1.DecorationImage; } });
Object.defineProperty(exports, "DecorationImagePainter", { enumerable: true, get: function () { return decoration_image_1.DecorationImagePainter; } });
const decoration_1 = require("./flutter/src/painting/decoration");
Object.defineProperty(exports, "Decoration", { enumerable: true, get: function () { return decoration_1.Decoration; } });
Object.defineProperty(exports, "BoxPainter", { enumerable: true, get: function () { return decoration_1.BoxPainter; } });
const debug_1 = require("./flutter/src/painting/debug");
Object.defineProperty(exports, "ImageSizeInfo", { enumerable: true, get: function () { return debug_1.ImageSizeInfo; } });
const continuous_rectangle_border_1 = require("./flutter/src/painting/continuous-rectangle-border");
Object.defineProperty(exports, "ContinuousRectangleBorder", { enumerable: true, get: function () { return continuous_rectangle_border_1.ContinuousRectangleBorder; } });
const colors_1 = require("./flutter/src/painting/colors");
Object.defineProperty(exports, "HSVColor", { enumerable: true, get: function () { return colors_1.HSVColor; } });
Object.defineProperty(exports, "HSLColor", { enumerable: true, get: function () { return colors_1.HSLColor; } });
Object.defineProperty(exports, "ColorSwatch", { enumerable: true, get: function () { return colors_1.ColorSwatch; } });
const clip_1 = require("./flutter/src/painting/clip");
Object.defineProperty(exports, "ClipContext", { enumerable: true, get: function () { return clip_1.ClipContext; } });
const circle_border_1 = require("./flutter/src/painting/circle-border");
Object.defineProperty(exports, "CircleBorder", { enumerable: true, get: function () { return circle_border_1.CircleBorder; } });
const box_shadow_1 = require("./flutter/src/painting/box-shadow");
Object.defineProperty(exports, "BoxShadow", { enumerable: true, get: function () { return box_shadow_1.BoxShadow; } });
const box_fit_1 = require("./flutter/src/painting/box-fit");
Object.defineProperty(exports, "BoxFit", { enumerable: true, get: function () { return box_fit_1.BoxFit; } });
Object.defineProperty(exports, "FittedSizes", { enumerable: true, get: function () { return box_fit_1.FittedSizes; } });
const box_decoration_1 = require("./flutter/src/painting/box-decoration");
Object.defineProperty(exports, "BoxDecoration", { enumerable: true, get: function () { return box_decoration_1.BoxDecoration; } });
const box_border_1 = require("./flutter/src/painting/box-border");
Object.defineProperty(exports, "BoxShape", { enumerable: true, get: function () { return box_border_1.BoxShape; } });
Object.defineProperty(exports, "BoxBorder", { enumerable: true, get: function () { return box_border_1.BoxBorder; } });
Object.defineProperty(exports, "Border", { enumerable: true, get: function () { return box_border_1.Border; } });
Object.defineProperty(exports, "BorderDirectional", { enumerable: true, get: function () { return box_border_1.BorderDirectional; } });
const borders_1 = require("./flutter/src/painting/borders");
Object.defineProperty(exports, "BorderStyle", { enumerable: true, get: function () { return borders_1.BorderStyle; } });
Object.defineProperty(exports, "BorderSide", { enumerable: true, get: function () { return borders_1.BorderSide; } });
Object.defineProperty(exports, "ShapeBorder", { enumerable: true, get: function () { return borders_1.ShapeBorder; } });
Object.defineProperty(exports, "OutlinedBorder", { enumerable: true, get: function () { return borders_1.OutlinedBorder; } });
const border_radius_1 = require("./flutter/src/painting/border-radius");
Object.defineProperty(exports, "BorderRadiusGeometry", { enumerable: true, get: function () { return border_radius_1.BorderRadiusGeometry; } });
Object.defineProperty(exports, "BorderRadius", { enumerable: true, get: function () { return border_radius_1.BorderRadius; } });
Object.defineProperty(exports, "BorderRadiusDirectional", { enumerable: true, get: function () { return border_radius_1.BorderRadiusDirectional; } });
const binding_1 = require("./flutter/src/painting/binding");
Object.defineProperty(exports, "PaintingBinding", { enumerable: true, get: function () { return binding_1.PaintingBinding; } });
const beveled_rectangle_border_1 = require("./flutter/src/painting/beveled-rectangle-border");
Object.defineProperty(exports, "BeveledRectangleBorder", { enumerable: true, get: function () { return beveled_rectangle_border_1.BeveledRectangleBorder; } });
const basic_types_1 = require("./flutter/src/painting/basic-types");
Object.defineProperty(exports, "RenderComparison", { enumerable: true, get: function () { return basic_types_1.RenderComparison; } });
Object.defineProperty(exports, "Axis", { enumerable: true, get: function () { return basic_types_1.Axis; } });
Object.defineProperty(exports, "VerticalDirection", { enumerable: true, get: function () { return basic_types_1.VerticalDirection; } });
Object.defineProperty(exports, "AxisDirection", { enumerable: true, get: function () { return basic_types_1.AxisDirection; } });
const alignment_1 = require("./flutter/src/painting/alignment");
Object.defineProperty(exports, "AlignmentGeometry", { enumerable: true, get: function () { return alignment_1.AlignmentGeometry; } });
Object.defineProperty(exports, "Alignment", { enumerable: true, get: function () { return alignment_1.Alignment; } });
Object.defineProperty(exports, "AlignmentDirectional", { enumerable: true, get: function () { return alignment_1.AlignmentDirectional; } });
Object.defineProperty(exports, "TextAlignVertical", { enumerable: true, get: function () { return alignment_1.TextAlignVertical; } });
const mx_dart_sdk_1 = require("./mx-dart-sdk");
Object.defineProperty(exports, "Shadow", { enumerable: true, get: function () { return mx_dart_sdk_1.Shadow; } });
Object.defineProperty(exports, "TextHeightBehavior", { enumerable: true, get: function () { return mx_dart_sdk_1.TextHeightBehavior; } });
Object.defineProperty(exports, "PlaceholderAlignment", { enumerable: true, get: function () { return mx_dart_sdk_1.PlaceholderAlignment; } });
Object.defineProperty(exports, "Offset", { enumerable: true, get: function () { return mx_dart_sdk_1.Offset; } });
Object.defineProperty(exports, "Size", { enumerable: true, get: function () { return mx_dart_sdk_1.Size; } });
Object.defineProperty(exports, "Rect", { enumerable: true, get: function () { return mx_dart_sdk_1.Rect; } });
Object.defineProperty(exports, "Radius", { enumerable: true, get: function () { return mx_dart_sdk_1.Radius; } });
Object.defineProperty(exports, "RRect", { enumerable: true, get: function () { return mx_dart_sdk_1.RRect; } });
Object.defineProperty(exports, "RSTransform", { enumerable: true, get: function () { return mx_dart_sdk_1.RSTransform; } });
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return mx_dart_sdk_1.Color; } });
Object.defineProperty(exports, "BlendMode", { enumerable: true, get: function () { return mx_dart_sdk_1.BlendMode; } });
Object.defineProperty(exports, "FilterQuality", { enumerable: true, get: function () { return mx_dart_sdk_1.FilterQuality; } });
Object.defineProperty(exports, "StrokeCap", { enumerable: true, get: function () { return mx_dart_sdk_1.StrokeCap; } });
Object.defineProperty(exports, "StrokeJoin", { enumerable: true, get: function () { return mx_dart_sdk_1.StrokeJoin; } });
Object.defineProperty(exports, "PaintingStyle", { enumerable: true, get: function () { return mx_dart_sdk_1.PaintingStyle; } });
Object.defineProperty(exports, "Clip", { enumerable: true, get: function () { return mx_dart_sdk_1.Clip; } });
Object.defineProperty(exports, "Paint", { enumerable: true, get: function () { return mx_dart_sdk_1.Paint; } });
Object.defineProperty(exports, "PathFillType", { enumerable: true, get: function () { return mx_dart_sdk_1.PathFillType; } });
Object.defineProperty(exports, "PathOperation", { enumerable: true, get: function () { return mx_dart_sdk_1.PathOperation; } });
Object.defineProperty(exports, "Path", { enumerable: true, get: function () { return mx_dart_sdk_1.Path; } });
Object.defineProperty(exports, "BlurStyle", { enumerable: true, get: function () { return mx_dart_sdk_1.BlurStyle; } });
Object.defineProperty(exports, "MaskFilter", { enumerable: true, get: function () { return mx_dart_sdk_1.MaskFilter; } });
Object.defineProperty(exports, "ColorFilter", { enumerable: true, get: function () { return mx_dart_sdk_1.ColorFilter; } });
Object.defineProperty(exports, "Shader", { enumerable: true, get: function () { return mx_dart_sdk_1.Shader; } });
Object.defineProperty(exports, "TileMode", { enumerable: true, get: function () { return mx_dart_sdk_1.TileMode; } });
Object.defineProperty(exports, "ImageShader", { enumerable: true, get: function () { return mx_dart_sdk_1.ImageShader; } });
Object.defineProperty(exports, "VertexMode", { enumerable: true, get: function () { return mx_dart_sdk_1.VertexMode; } });
Object.defineProperty(exports, "Canvas", { enumerable: true, get: function () { return mx_dart_sdk_1.Canvas; } });
Object.defineProperty(exports, "FontStyle", { enumerable: true, get: function () { return mx_dart_sdk_1.FontStyle; } });
Object.defineProperty(exports, "FontWeight", { enumerable: true, get: function () { return mx_dart_sdk_1.FontWeight; } });
Object.defineProperty(exports, "TextAlign", { enumerable: true, get: function () { return mx_dart_sdk_1.TextAlign; } });
Object.defineProperty(exports, "TextBaseline", { enumerable: true, get: function () { return mx_dart_sdk_1.TextBaseline; } });
Object.defineProperty(exports, "TextDecoration", { enumerable: true, get: function () { return mx_dart_sdk_1.TextDecoration; } });
Object.defineProperty(exports, "TextDecorationStyle", { enumerable: true, get: function () { return mx_dart_sdk_1.TextDecorationStyle; } });
Object.defineProperty(exports, "TextDirection", { enumerable: true, get: function () { return mx_dart_sdk_1.TextDirection; } });
Object.defineProperty(exports, "TextBox", { enumerable: true, get: function () { return mx_dart_sdk_1.TextBox; } });
Object.defineProperty(exports, "TextAffinity", { enumerable: true, get: function () { return mx_dart_sdk_1.TextAffinity; } });
Object.defineProperty(exports, "TextPosition", { enumerable: true, get: function () { return mx_dart_sdk_1.TextPosition; } });
Object.defineProperty(exports, "Locale", { enumerable: true, get: function () { return mx_dart_sdk_1.Locale; } });
Object.defineProperty(exports, "TextRange", { enumerable: true, get: function () { return mx_dart_sdk_1.TextRange; } });
