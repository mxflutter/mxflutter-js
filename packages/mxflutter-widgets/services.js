"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawKeyUpEvent = exports.RawKeyDownEvent = exports.RawKeyEvent = exports.RawKeyEventData = exports.ModifierKey = exports.KeyboardSide = exports.PlatformViewController = exports.UiKitViewController = exports.TextureAndroidViewController = exports.SurfaceAndroidViewController = exports.AndroidViewController = exports.AndroidMotionEvent = exports.AndroidPointerCoords = exports.AndroidPointerProperties = exports.PlatformViewsService = exports.PlatformViewsRegistry = exports.BinaryMessages = exports.EventChannel = exports.OptionalMethodChannel = exports.MethodChannel = exports.BasicMessageChannel = exports.StandardMethodCodec = exports.StandardMessageCodec = exports.JSONMethodCodec = exports.JSONMessageCodec = exports.StringCodec = exports.BinaryCodec = exports.MissingPluginException = exports.PlatformException = exports.MethodCodec = exports.MethodCall = exports.MessageCodec = exports.PhysicalKeyboardKey = exports.LogicalKeyboardKey = exports.KeyboardKey = exports.HapticFeedback = exports.FontLoader = exports.Clipboard = exports.ClipboardData = exports.ServicesBinding = exports.BinaryMessenger = exports.AutofillScopeMixin = exports.AutofillScope = exports.AutofillClient = exports.AutofillConfiguration = exports.AutofillHints = exports.PlatformAssetBundle = exports.CachingAssetBundle = exports.NetworkAssetBundle = exports.AssetBundle = void 0;
exports.TextInput = exports.TextInputConnection = exports.TextInputClient = exports.TextSelectionDelegate = exports.TextEditingValue = exports.RawFloatingCursorPoint = exports.FloatingCursorDragState = exports.TextInputConfiguration = exports.TextCapitalization = exports.TextInputAction = exports.TextInputType = exports.SmartQuotesType = exports.SmartDashesType = exports.LengthLimitingTextInputFormatter = exports.WhitelistingTextInputFormatter = exports.BlacklistingTextInputFormatter = exports.FilteringTextInputFormatter = exports.TextInputFormatter = exports.TextRange = exports.TextPosition = exports.TextAffinity = exports.TextSelection = exports.SystemSound = exports.SystemSoundType = exports.SystemNavigator = exports.Brightness = exports.SystemChrome = exports.SystemUiOverlayStyle = exports.SystemUiOverlay = exports.ApplicationSwitcherDescription = exports.DeviceOrientation = exports.SystemChannels = exports.RestorationBucket = exports.RestorationManager = exports.RawKeyEventDataWindows = exports.RawKeyEventDataWeb = exports.RawKeyEventDataMacOs = exports.GtkKeyHelper = exports.GLFWKeyHelper = exports.KeyHelper = exports.RawKeyEventDataLinux = exports.RawKeyEventDataFuchsia = exports.RawKeyEventDataAndroid = exports.RawKeyboard = void 0;
const text_input_1 = require("./flutter/src/services/text-input");
Object.defineProperty(exports, "SmartDashesType", { enumerable: true, get: function () { return text_input_1.SmartDashesType; } });
Object.defineProperty(exports, "SmartQuotesType", { enumerable: true, get: function () { return text_input_1.SmartQuotesType; } });
Object.defineProperty(exports, "TextInputType", { enumerable: true, get: function () { return text_input_1.TextInputType; } });
Object.defineProperty(exports, "TextInputAction", { enumerable: true, get: function () { return text_input_1.TextInputAction; } });
Object.defineProperty(exports, "TextCapitalization", { enumerable: true, get: function () { return text_input_1.TextCapitalization; } });
Object.defineProperty(exports, "TextInputConfiguration", { enumerable: true, get: function () { return text_input_1.TextInputConfiguration; } });
Object.defineProperty(exports, "FloatingCursorDragState", { enumerable: true, get: function () { return text_input_1.FloatingCursorDragState; } });
Object.defineProperty(exports, "RawFloatingCursorPoint", { enumerable: true, get: function () { return text_input_1.RawFloatingCursorPoint; } });
Object.defineProperty(exports, "TextEditingValue", { enumerable: true, get: function () { return text_input_1.TextEditingValue; } });
Object.defineProperty(exports, "TextSelectionDelegate", { enumerable: true, get: function () { return text_input_1.TextSelectionDelegate; } });
Object.defineProperty(exports, "TextInputClient", { enumerable: true, get: function () { return text_input_1.TextInputClient; } });
Object.defineProperty(exports, "TextInputConnection", { enumerable: true, get: function () { return text_input_1.TextInputConnection; } });
Object.defineProperty(exports, "TextInput", { enumerable: true, get: function () { return text_input_1.TextInput; } });
const text_formatter_1 = require("./flutter/src/services/text-formatter");
Object.defineProperty(exports, "TextInputFormatter", { enumerable: true, get: function () { return text_formatter_1.TextInputFormatter; } });
Object.defineProperty(exports, "FilteringTextInputFormatter", { enumerable: true, get: function () { return text_formatter_1.FilteringTextInputFormatter; } });
Object.defineProperty(exports, "BlacklistingTextInputFormatter", { enumerable: true, get: function () { return text_formatter_1.BlacklistingTextInputFormatter; } });
Object.defineProperty(exports, "WhitelistingTextInputFormatter", { enumerable: true, get: function () { return text_formatter_1.WhitelistingTextInputFormatter; } });
Object.defineProperty(exports, "LengthLimitingTextInputFormatter", { enumerable: true, get: function () { return text_formatter_1.LengthLimitingTextInputFormatter; } });
const text_editing_1 = require("./flutter/src/services/text-editing");
Object.defineProperty(exports, "TextSelection", { enumerable: true, get: function () { return text_editing_1.TextSelection; } });
const system_sound_1 = require("./flutter/src/services/system-sound");
Object.defineProperty(exports, "SystemSoundType", { enumerable: true, get: function () { return system_sound_1.SystemSoundType; } });
Object.defineProperty(exports, "SystemSound", { enumerable: true, get: function () { return system_sound_1.SystemSound; } });
const system_navigator_1 = require("./flutter/src/services/system-navigator");
Object.defineProperty(exports, "SystemNavigator", { enumerable: true, get: function () { return system_navigator_1.SystemNavigator; } });
const mx_dart_sdk_1 = require("./mx-dart-sdk");
Object.defineProperty(exports, "Brightness", { enumerable: true, get: function () { return mx_dart_sdk_1.Brightness; } });
Object.defineProperty(exports, "TextAffinity", { enumerable: true, get: function () { return mx_dart_sdk_1.TextAffinity; } });
Object.defineProperty(exports, "TextPosition", { enumerable: true, get: function () { return mx_dart_sdk_1.TextPosition; } });
Object.defineProperty(exports, "TextRange", { enumerable: true, get: function () { return mx_dart_sdk_1.TextRange; } });
const system_chrome_1 = require("./flutter/src/services/system-chrome");
Object.defineProperty(exports, "DeviceOrientation", { enumerable: true, get: function () { return system_chrome_1.DeviceOrientation; } });
Object.defineProperty(exports, "ApplicationSwitcherDescription", { enumerable: true, get: function () { return system_chrome_1.ApplicationSwitcherDescription; } });
Object.defineProperty(exports, "SystemUiOverlay", { enumerable: true, get: function () { return system_chrome_1.SystemUiOverlay; } });
Object.defineProperty(exports, "SystemUiOverlayStyle", { enumerable: true, get: function () { return system_chrome_1.SystemUiOverlayStyle; } });
Object.defineProperty(exports, "SystemChrome", { enumerable: true, get: function () { return system_chrome_1.SystemChrome; } });
const system_channels_1 = require("./flutter/src/services/system-channels");
Object.defineProperty(exports, "SystemChannels", { enumerable: true, get: function () { return system_channels_1.SystemChannels; } });
const restoration_1 = require("./flutter/src/services/restoration");
Object.defineProperty(exports, "RestorationManager", { enumerable: true, get: function () { return restoration_1.RestorationManager; } });
Object.defineProperty(exports, "RestorationBucket", { enumerable: true, get: function () { return restoration_1.RestorationBucket; } });
const raw_keyboard_windows_1 = require("./flutter/src/services/raw-keyboard-windows");
Object.defineProperty(exports, "RawKeyEventDataWindows", { enumerable: true, get: function () { return raw_keyboard_windows_1.RawKeyEventDataWindows; } });
const raw_keyboard_web_1 = require("./flutter/src/services/raw-keyboard-web");
Object.defineProperty(exports, "RawKeyEventDataWeb", { enumerable: true, get: function () { return raw_keyboard_web_1.RawKeyEventDataWeb; } });
const raw_keyboard_macos_1 = require("./flutter/src/services/raw-keyboard-macos");
Object.defineProperty(exports, "RawKeyEventDataMacOs", { enumerable: true, get: function () { return raw_keyboard_macos_1.RawKeyEventDataMacOs; } });
const raw_keyboard_linux_1 = require("./flutter/src/services/raw-keyboard-linux");
Object.defineProperty(exports, "RawKeyEventDataLinux", { enumerable: true, get: function () { return raw_keyboard_linux_1.RawKeyEventDataLinux; } });
Object.defineProperty(exports, "KeyHelper", { enumerable: true, get: function () { return raw_keyboard_linux_1.KeyHelper; } });
Object.defineProperty(exports, "GLFWKeyHelper", { enumerable: true, get: function () { return raw_keyboard_linux_1.GLFWKeyHelper; } });
Object.defineProperty(exports, "GtkKeyHelper", { enumerable: true, get: function () { return raw_keyboard_linux_1.GtkKeyHelper; } });
const raw_keyboard_fuchsia_1 = require("./flutter/src/services/raw-keyboard-fuchsia");
Object.defineProperty(exports, "RawKeyEventDataFuchsia", { enumerable: true, get: function () { return raw_keyboard_fuchsia_1.RawKeyEventDataFuchsia; } });
const raw_keyboard_android_1 = require("./flutter/src/services/raw-keyboard-android");
Object.defineProperty(exports, "RawKeyEventDataAndroid", { enumerable: true, get: function () { return raw_keyboard_android_1.RawKeyEventDataAndroid; } });
const raw_keyboard_1 = require("./flutter/src/services/raw-keyboard");
Object.defineProperty(exports, "KeyboardSide", { enumerable: true, get: function () { return raw_keyboard_1.KeyboardSide; } });
Object.defineProperty(exports, "ModifierKey", { enumerable: true, get: function () { return raw_keyboard_1.ModifierKey; } });
Object.defineProperty(exports, "RawKeyEventData", { enumerable: true, get: function () { return raw_keyboard_1.RawKeyEventData; } });
Object.defineProperty(exports, "RawKeyEvent", { enumerable: true, get: function () { return raw_keyboard_1.RawKeyEvent; } });
Object.defineProperty(exports, "RawKeyDownEvent", { enumerable: true, get: function () { return raw_keyboard_1.RawKeyDownEvent; } });
Object.defineProperty(exports, "RawKeyUpEvent", { enumerable: true, get: function () { return raw_keyboard_1.RawKeyUpEvent; } });
Object.defineProperty(exports, "RawKeyboard", { enumerable: true, get: function () { return raw_keyboard_1.RawKeyboard; } });
const platform_views_1 = require("./flutter/src/services/platform-views");
Object.defineProperty(exports, "PlatformViewsRegistry", { enumerable: true, get: function () { return platform_views_1.PlatformViewsRegistry; } });
Object.defineProperty(exports, "PlatformViewsService", { enumerable: true, get: function () { return platform_views_1.PlatformViewsService; } });
Object.defineProperty(exports, "AndroidPointerProperties", { enumerable: true, get: function () { return platform_views_1.AndroidPointerProperties; } });
Object.defineProperty(exports, "AndroidPointerCoords", { enumerable: true, get: function () { return platform_views_1.AndroidPointerCoords; } });
Object.defineProperty(exports, "AndroidMotionEvent", { enumerable: true, get: function () { return platform_views_1.AndroidMotionEvent; } });
Object.defineProperty(exports, "AndroidViewController", { enumerable: true, get: function () { return platform_views_1.AndroidViewController; } });
Object.defineProperty(exports, "SurfaceAndroidViewController", { enumerable: true, get: function () { return platform_views_1.SurfaceAndroidViewController; } });
Object.defineProperty(exports, "TextureAndroidViewController", { enumerable: true, get: function () { return platform_views_1.TextureAndroidViewController; } });
Object.defineProperty(exports, "UiKitViewController", { enumerable: true, get: function () { return platform_views_1.UiKitViewController; } });
Object.defineProperty(exports, "PlatformViewController", { enumerable: true, get: function () { return platform_views_1.PlatformViewController; } });
const platform_messages_1 = require("./flutter/src/services/platform-messages");
Object.defineProperty(exports, "BinaryMessages", { enumerable: true, get: function () { return platform_messages_1.BinaryMessages; } });
const platform_channel_1 = require("./flutter/src/services/platform-channel");
Object.defineProperty(exports, "BasicMessageChannel", { enumerable: true, get: function () { return platform_channel_1.BasicMessageChannel; } });
Object.defineProperty(exports, "MethodChannel", { enumerable: true, get: function () { return platform_channel_1.MethodChannel; } });
Object.defineProperty(exports, "OptionalMethodChannel", { enumerable: true, get: function () { return platform_channel_1.OptionalMethodChannel; } });
Object.defineProperty(exports, "EventChannel", { enumerable: true, get: function () { return platform_channel_1.EventChannel; } });
const message_codecs_1 = require("./flutter/src/services/message-codecs");
Object.defineProperty(exports, "BinaryCodec", { enumerable: true, get: function () { return message_codecs_1.BinaryCodec; } });
Object.defineProperty(exports, "StringCodec", { enumerable: true, get: function () { return message_codecs_1.StringCodec; } });
Object.defineProperty(exports, "JSONMessageCodec", { enumerable: true, get: function () { return message_codecs_1.JSONMessageCodec; } });
Object.defineProperty(exports, "JSONMethodCodec", { enumerable: true, get: function () { return message_codecs_1.JSONMethodCodec; } });
Object.defineProperty(exports, "StandardMessageCodec", { enumerable: true, get: function () { return message_codecs_1.StandardMessageCodec; } });
Object.defineProperty(exports, "StandardMethodCodec", { enumerable: true, get: function () { return message_codecs_1.StandardMethodCodec; } });
const message_codec_1 = require("./flutter/src/services/message-codec");
Object.defineProperty(exports, "MessageCodec", { enumerable: true, get: function () { return message_codec_1.MessageCodec; } });
Object.defineProperty(exports, "MethodCall", { enumerable: true, get: function () { return message_codec_1.MethodCall; } });
Object.defineProperty(exports, "MethodCodec", { enumerable: true, get: function () { return message_codec_1.MethodCodec; } });
Object.defineProperty(exports, "PlatformException", { enumerable: true, get: function () { return message_codec_1.PlatformException; } });
Object.defineProperty(exports, "MissingPluginException", { enumerable: true, get: function () { return message_codec_1.MissingPluginException; } });
const keyboard_key_1 = require("./flutter/src/services/keyboard-key");
Object.defineProperty(exports, "KeyboardKey", { enumerable: true, get: function () { return keyboard_key_1.KeyboardKey; } });
Object.defineProperty(exports, "LogicalKeyboardKey", { enumerable: true, get: function () { return keyboard_key_1.LogicalKeyboardKey; } });
Object.defineProperty(exports, "PhysicalKeyboardKey", { enumerable: true, get: function () { return keyboard_key_1.PhysicalKeyboardKey; } });
const haptic_feedback_1 = require("./flutter/src/services/haptic-feedback");
Object.defineProperty(exports, "HapticFeedback", { enumerable: true, get: function () { return haptic_feedback_1.HapticFeedback; } });
const font_loader_1 = require("./flutter/src/services/font-loader");
Object.defineProperty(exports, "FontLoader", { enumerable: true, get: function () { return font_loader_1.FontLoader; } });
const clipboard_1 = require("./flutter/src/services/clipboard");
Object.defineProperty(exports, "ClipboardData", { enumerable: true, get: function () { return clipboard_1.ClipboardData; } });
Object.defineProperty(exports, "Clipboard", { enumerable: true, get: function () { return clipboard_1.Clipboard; } });
const binding_1 = require("./flutter/src/services/binding");
Object.defineProperty(exports, "ServicesBinding", { enumerable: true, get: function () { return binding_1.ServicesBinding; } });
const binary_messenger_1 = require("./flutter/src/services/binary-messenger");
Object.defineProperty(exports, "BinaryMessenger", { enumerable: true, get: function () { return binary_messenger_1.BinaryMessenger; } });
const autofill_1 = require("./flutter/src/services/autofill");
Object.defineProperty(exports, "AutofillHints", { enumerable: true, get: function () { return autofill_1.AutofillHints; } });
Object.defineProperty(exports, "AutofillConfiguration", { enumerable: true, get: function () { return autofill_1.AutofillConfiguration; } });
Object.defineProperty(exports, "AutofillClient", { enumerable: true, get: function () { return autofill_1.AutofillClient; } });
Object.defineProperty(exports, "AutofillScope", { enumerable: true, get: function () { return autofill_1.AutofillScope; } });
Object.defineProperty(exports, "AutofillScopeMixin", { enumerable: true, get: function () { return autofill_1.AutofillScopeMixin; } });
const asset_bundle_1 = require("./flutter/src/services/asset-bundle");
Object.defineProperty(exports, "AssetBundle", { enumerable: true, get: function () { return asset_bundle_1.AssetBundle; } });
Object.defineProperty(exports, "NetworkAssetBundle", { enumerable: true, get: function () { return asset_bundle_1.NetworkAssetBundle; } });
Object.defineProperty(exports, "CachingAssetBundle", { enumerable: true, get: function () { return asset_bundle_1.CachingAssetBundle; } });
Object.defineProperty(exports, "PlatformAssetBundle", { enumerable: true, get: function () { return asset_bundle_1.PlatformAssetBundle; } });
