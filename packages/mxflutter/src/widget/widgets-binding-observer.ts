//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

// Interface for classes that register with the Widgets layer binding.

export abstract class WidgetsBindingObserver {
  // Called when the system tells the app to pop the current route.
  public didPopRoute(): Promise<boolean> {
    return new Promise<boolean>(function (resolve, reject) {
      reject(false);
    });
  }

  // Called when the host tells the app to push a new route onto the
  // eslint-disable-next-line sonarjs/no-identical-functions
  public didPushRoute(): Promise<boolean> {
    return new Promise<boolean>(function (resolve, reject) {
      reject(false);
    });
  }

  // Called when the application's dimensions change. For example,
  public didChangeMetrics() {}

  // Called when the platform's text scale factor changes.
  public didChangeTextScaleFactor() {}

  // Called when the platform brightness changes.
  public didChangePlatformBrightness() {}

  // Called when the system tells the app that the user's locale has
  public didChangeLocales(locale: any) {}

  // Called when the system puts the app in the background or returns
  public didChangeAppLifecycleState(state: any) {}

  // Called when the system is running low on memory.
  public didHaveMemoryPressure() {}

  // Called when the system changes the set of currently active accessibility
  public didChangeAccessibilityFeatures() {}
}
