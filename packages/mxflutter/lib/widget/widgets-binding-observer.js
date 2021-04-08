"use strict";
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetsBindingObserver = void 0;
// Interface for classes that register with the Widgets layer binding.
class WidgetsBindingObserver {
    // Called when the system tells the app to pop the current route.
    didPopRoute() {
        return new Promise(function (resolve, reject) {
            reject(false);
        });
    }
    // Called when the host tells the app to push a new route onto the
    // eslint-disable-next-line sonarjs/no-identical-functions
    didPushRoute() {
        return new Promise(function (resolve, reject) {
            reject(false);
        });
    }
    // Called when the application's dimensions change. For example,
    didChangeMetrics() { }
    // Called when the platform's text scale factor changes.
    didChangeTextScaleFactor() { }
    // Called when the platform brightness changes.
    didChangePlatformBrightness() { }
    // Called when the system tells the app that the user's locale has
    didChangeLocales(locale) { }
    // Called when the system puts the app in the background or returns
    didChangeAppLifecycleState(state) { }
    // Called when the system is running low on memory.
    didHaveMemoryPressure() { }
    // Called when the system changes the set of currently active accessibility
    didChangeAccessibilityFeatures() { }
}
exports.WidgetsBindingObserver = WidgetsBindingObserver;
