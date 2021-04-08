// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MaterialColor } from './colors';
import { DataTableThemeData } from './data-table-theme';
import { TextSelectionThemeData } from './text-selection-theme';
import { OutlinedButtonThemeData } from './outlined-button-theme';
import { ElevatedButtonThemeData } from './elevated-button-theme';
import { TextButtonThemeData } from './text-button-theme';
import { TimePickerThemeData } from './time-picker-theme';
import { BottomNavigationBarThemeData } from './bottom-navigation-bar-theme';
import { ButtonBarThemeData } from './button-bar-theme';
import { DividerThemeData } from './divider-theme';
import { MaterialBannerThemeData } from './banner-theme';
import { PopupMenuThemeData } from './popup-menu-theme';
import { BottomSheetThemeData } from './bottom-sheet-theme';
import { CupertinoThemeData } from '../cupertino/theme';
import { Typography } from './typography';
import { NavigationRailThemeData } from './navigation-rail-theme';
import { FloatingActionButtonThemeData } from './floating-action-button-theme';
import { DialogTheme } from './dialog-theme';
import { SnackBarThemeData } from './snack-bar-theme';
import { ColorScheme } from './color-scheme';
import { BottomAppBarTheme } from './bottom-app-bar-theme';
import { AppBarTheme } from './app-bar-theme';
import { PageTransitionsTheme } from './page-transitions-theme';
import { TargetPlatform } from '../foundation/platform';
import { ChipThemeData } from './chip-theme';
import { CardTheme } from './card-theme';
import { TooltipThemeData } from './tooltip-theme';
import { TabBarTheme } from './tab-bar-theme';
import { SliderThemeData } from './slider-theme';
import { IconThemeData } from '../widgets/icon-theme-data';
import { InputDecorationTheme } from './input-decorator';
import { TextTheme } from './text-theme';
import { ToggleButtonsThemeData } from './toggle-buttons-theme';
import { ButtonThemeData } from './button-theme';
import { InteractiveInkFeatureFactory } from './ink-well';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum MaterialTapTargetSize {
  padded = '{ "_name": "MaterialTapTargetSize.padded", "index": 0 }',
  shrinkWrap = '{ "_name": "MaterialTapTargetSize.shrinkWrap", "index": 1 }',
};

export { MaterialTapTargetSize };
class ThemeData extends MXDartClass {
  visualDensity: VisualDensity;
  primaryColor: Color;
  primaryColorBrightness: Brightness;
  primaryColorLight: Color;
  primaryColorDark: Color;
  canvasColor: Color;
  shadowColor: Color;
  accentColor: Color;
  accentColorBrightness: Brightness;
  scaffoldBackgroundColor: Color;
  bottomAppBarColor: Color;
  cardColor: Color;
  dividerColor: Color;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  splashColor: Color;
  splashFactory: InteractiveInkFeatureFactory;
  selectedRowColor: Color;
  unselectedWidgetColor: Color;
  disabledColor: Color;
  buttonTheme: ButtonThemeData;
  toggleButtonsTheme: ToggleButtonsThemeData;
  buttonColor: Color;
  secondaryHeaderColor: Color;
  textSelectionColor: Color;
  cursorColor: Color;
  textSelectionHandleColor: Color;
  backgroundColor: Color;
  dialogBackgroundColor: Color;
  indicatorColor: Color;
  hintColor: Color;
  errorColor: Color;
  toggleableActiveColor: Color;
  textTheme: TextTheme;
  primaryTextTheme: TextTheme;
  accentTextTheme: TextTheme;
  inputDecorationTheme: InputDecorationTheme;
  iconTheme: IconThemeData;
  primaryIconTheme: IconThemeData;
  accentIconTheme: IconThemeData;
  sliderTheme: SliderThemeData;
  tabBarTheme: TabBarTheme;
  tooltipTheme: TooltipThemeData;
  cardTheme: CardTheme;
  chipTheme: ChipThemeData;
  platform: TargetPlatform;
  materialTapTargetSize: MaterialTapTargetSize;
  applyElevationOverlayColor: boolean;
  pageTransitionsTheme: PageTransitionsTheme;
  appBarTheme: AppBarTheme;
  bottomAppBarTheme: BottomAppBarTheme;
  colorScheme: ColorScheme;
  snackBarTheme: SnackBarThemeData;
  dialogTheme: DialogTheme;
  floatingActionButtonTheme: FloatingActionButtonThemeData;
  navigationRailTheme: NavigationRailThemeData;
  typography: Typography;
  cupertinoOverrideTheme: CupertinoThemeData;
  bottomSheetTheme: BottomSheetThemeData;
  popupMenuTheme: PopupMenuThemeData;
  bannerTheme: MaterialBannerThemeData;
  dividerTheme: DividerThemeData;
  buttonBarTheme: ButtonBarThemeData;
  bottomNavigationBarTheme: BottomNavigationBarThemeData;
  timePickerTheme: TimePickerThemeData;
  textButtonTheme: TextButtonThemeData;
  elevatedButtonTheme: ElevatedButtonThemeData;
  outlinedButtonTheme: OutlinedButtonThemeData;
  textSelectionTheme: TextSelectionThemeData;
  dataTableTheme: DataTableThemeData;
  fixTextFieldOutlineLabel: boolean;
  useTextSelectionTheme: boolean;
  public constructor(namedParameters: {brightness?: Brightness, visualDensity?: VisualDensity, primarySwatch?: MaterialColor, primaryColor?: Color, primaryColorBrightness?: Brightness, primaryColorLight?: Color, primaryColorDark?: Color, accentColor?: Color, accentColorBrightness?: Brightness, canvasColor?: Color, shadowColor?: Color, scaffoldBackgroundColor?: Color, bottomAppBarColor?: Color, cardColor?: Color, dividerColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, splashFactory?: InteractiveInkFeatureFactory, selectedRowColor?: Color, unselectedWidgetColor?: Color, disabledColor?: Color, buttonColor?: Color, buttonTheme?: ButtonThemeData, toggleButtonsTheme?: ToggleButtonsThemeData, secondaryHeaderColor?: Color, textSelectionColor?: Color, cursorColor?: Color, textSelectionHandleColor?: Color, backgroundColor?: Color, dialogBackgroundColor?: Color, indicatorColor?: Color, hintColor?: Color, errorColor?: Color, toggleableActiveColor?: Color, fontFamily?: string, textTheme?: TextTheme, primaryTextTheme?: TextTheme, accentTextTheme?: TextTheme, inputDecorationTheme?: InputDecorationTheme, iconTheme?: IconThemeData, primaryIconTheme?: IconThemeData, accentIconTheme?: IconThemeData, sliderTheme?: SliderThemeData, tabBarTheme?: TabBarTheme, tooltipTheme?: TooltipThemeData, cardTheme?: CardTheme, chipTheme?: ChipThemeData, platform?: TargetPlatform, materialTapTargetSize?: MaterialTapTargetSize, applyElevationOverlayColor?: boolean, pageTransitionsTheme?: PageTransitionsTheme, appBarTheme?: AppBarTheme, bottomAppBarTheme?: BottomAppBarTheme, colorScheme?: ColorScheme, dialogTheme?: DialogTheme, floatingActionButtonTheme?: FloatingActionButtonThemeData, navigationRailTheme?: NavigationRailThemeData, typography?: Typography, cupertinoOverrideTheme?: CupertinoThemeData, snackBarTheme?: SnackBarThemeData, bottomSheetTheme?: BottomSheetThemeData, popupMenuTheme?: PopupMenuThemeData, bannerTheme?: MaterialBannerThemeData, dividerTheme?: DividerThemeData, buttonBarTheme?: ButtonBarThemeData, bottomNavigationBarTheme?: BottomNavigationBarThemeData, timePickerTheme?: TimePickerThemeData, textButtonTheme?: TextButtonThemeData, elevatedButtonTheme?: ElevatedButtonThemeData, outlinedButtonTheme?: OutlinedButtonThemeData, textSelectionTheme?: TextSelectionThemeData, dataTableTheme?: DataTableThemeData, fixTextFieldOutlineLabel?: boolean, useTextSelectionTheme?: boolean} = {}) {
    super();
    this['brightness'] = namedParameters.brightness;
    this.visualDensity = namedParameters.visualDensity;
    this['primarySwatch'] = namedParameters.primarySwatch;
    this.primaryColor = namedParameters.primaryColor;
    this.primaryColorBrightness = namedParameters.primaryColorBrightness;
    this.primaryColorLight = namedParameters.primaryColorLight;
    this.primaryColorDark = namedParameters.primaryColorDark;
    this.accentColor = namedParameters.accentColor;
    this.accentColorBrightness = namedParameters.accentColorBrightness;
    this.canvasColor = namedParameters.canvasColor;
    this.shadowColor = namedParameters.shadowColor;
    this.scaffoldBackgroundColor = namedParameters.scaffoldBackgroundColor;
    this.bottomAppBarColor = namedParameters.bottomAppBarColor;
    this.cardColor = namedParameters.cardColor;
    this.dividerColor = namedParameters.dividerColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.splashColor = namedParameters.splashColor;
    this.splashFactory = namedParameters.splashFactory;
    this.selectedRowColor = namedParameters.selectedRowColor;
    this.unselectedWidgetColor = namedParameters.unselectedWidgetColor;
    this.disabledColor = namedParameters.disabledColor;
    this.buttonColor = namedParameters.buttonColor;
    this.buttonTheme = namedParameters.buttonTheme;
    this.toggleButtonsTheme = namedParameters.toggleButtonsTheme;
    this.secondaryHeaderColor = namedParameters.secondaryHeaderColor;
    this.textSelectionColor = namedParameters.textSelectionColor;
    this.cursorColor = namedParameters.cursorColor;
    this.textSelectionHandleColor = namedParameters.textSelectionHandleColor;
    this.backgroundColor = namedParameters.backgroundColor;
    this.dialogBackgroundColor = namedParameters.dialogBackgroundColor;
    this.indicatorColor = namedParameters.indicatorColor;
    this.hintColor = namedParameters.hintColor;
    this.errorColor = namedParameters.errorColor;
    this.toggleableActiveColor = namedParameters.toggleableActiveColor;
    this['fontFamily'] = namedParameters.fontFamily;
    this.textTheme = namedParameters.textTheme;
    this.primaryTextTheme = namedParameters.primaryTextTheme;
    this.accentTextTheme = namedParameters.accentTextTheme;
    this.inputDecorationTheme = namedParameters.inputDecorationTheme;
    this.iconTheme = namedParameters.iconTheme;
    this.primaryIconTheme = namedParameters.primaryIconTheme;
    this.accentIconTheme = namedParameters.accentIconTheme;
    this.sliderTheme = namedParameters.sliderTheme;
    this.tabBarTheme = namedParameters.tabBarTheme;
    this.tooltipTheme = namedParameters.tooltipTheme;
    this.cardTheme = namedParameters.cardTheme;
    this.chipTheme = namedParameters.chipTheme;
    this.platform = namedParameters.platform;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.applyElevationOverlayColor = namedParameters.applyElevationOverlayColor;
    this.pageTransitionsTheme = namedParameters.pageTransitionsTheme;
    this.appBarTheme = namedParameters.appBarTheme;
    this.bottomAppBarTheme = namedParameters.bottomAppBarTheme;
    this.colorScheme = namedParameters.colorScheme;
    this.dialogTheme = namedParameters.dialogTheme;
    this.floatingActionButtonTheme = namedParameters.floatingActionButtonTheme;
    this.navigationRailTheme = namedParameters.navigationRailTheme;
    this.typography = namedParameters.typography;
    this.cupertinoOverrideTheme = namedParameters.cupertinoOverrideTheme;
    this.snackBarTheme = namedParameters.snackBarTheme;
    this.bottomSheetTheme = namedParameters.bottomSheetTheme;
    this.popupMenuTheme = namedParameters.popupMenuTheme;
    this.bannerTheme = namedParameters.bannerTheme;
    this.dividerTheme = namedParameters.dividerTheme;
    this.buttonBarTheme = namedParameters.buttonBarTheme;
    this.bottomNavigationBarTheme = namedParameters.bottomNavigationBarTheme;
    this.timePickerTheme = namedParameters.timePickerTheme;
    this.textButtonTheme = namedParameters.textButtonTheme;
    this.elevatedButtonTheme = namedParameters.elevatedButtonTheme;
    this.outlinedButtonTheme = namedParameters.outlinedButtonTheme;
    this.textSelectionTheme = namedParameters.textSelectionTheme;
    this.dataTableTheme = namedParameters.dataTableTheme;
    this.fixTextFieldOutlineLabel = namedParameters.fixTextFieldOutlineLabel;
    this.useTextSelectionTheme = namedParameters.useTextSelectionTheme;
    this.className = 'ThemeData';
    // MX Modified begin
    this['__mx_brightness'] = namedParameters.brightness ?? namedParameters.colorScheme?.brightness ?? Brightness.light;
    this.colorScheme = namedParameters.colorScheme ?? ColorScheme.fromSwatch({
      primarySwatch: namedParameters.primarySwatch,
      primaryColorDark: namedParameters.primaryColorDark,
      accentColor: namedParameters.accentColor,
      cardColor: namedParameters.cardColor,
      backgroundColor: namedParameters.backgroundColor,
      errorColor: namedParameters.errorColor,
      brightness: this['__mx_brightness'],
    });
    // MX Modified begin
  }
  static from(namedParameters: {colorScheme?: ColorScheme, textTheme?: TextTheme} = {}) {
    var jsObj = new ThemeData();
    jsObj.colorScheme = namedParameters.colorScheme;
    jsObj.textTheme = namedParameters.textTheme;
    jsObj['constructorName'] = 'from';
    return jsObj;
  }
  static light() {
    var jsObj = new ThemeData();
    jsObj['constructorName'] = 'light';
    return jsObj;
  }
  static dark() {
    var jsObj = new ThemeData();
    jsObj['constructorName'] = 'dark';
    return jsObj;
  }
  static fallback() {
    var jsObj = new ThemeData();
    jsObj['constructorName'] = 'fallback';
    return jsObj;
  }
  static raw(namedParameters: {visualDensity?: VisualDensity, primaryColor?: Color, primaryColorBrightness?: Brightness, primaryColorLight?: Color, primaryColorDark?: Color, canvasColor?: Color, shadowColor?: Color, accentColor?: Color, accentColorBrightness?: Brightness, scaffoldBackgroundColor?: Color, bottomAppBarColor?: Color, cardColor?: Color, dividerColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, splashFactory?: InteractiveInkFeatureFactory, selectedRowColor?: Color, unselectedWidgetColor?: Color, disabledColor?: Color, buttonTheme?: ButtonThemeData, buttonColor?: Color, toggleButtonsTheme?: ToggleButtonsThemeData, secondaryHeaderColor?: Color, textSelectionColor?: Color, cursorColor?: Color, textSelectionHandleColor?: Color, backgroundColor?: Color, dialogBackgroundColor?: Color, indicatorColor?: Color, hintColor?: Color, errorColor?: Color, toggleableActiveColor?: Color, textTheme?: TextTheme, primaryTextTheme?: TextTheme, accentTextTheme?: TextTheme, inputDecorationTheme?: InputDecorationTheme, iconTheme?: IconThemeData, primaryIconTheme?: IconThemeData, accentIconTheme?: IconThemeData, sliderTheme?: SliderThemeData, tabBarTheme?: TabBarTheme, tooltipTheme?: TooltipThemeData, cardTheme?: CardTheme, chipTheme?: ChipThemeData, platform?: TargetPlatform, materialTapTargetSize?: MaterialTapTargetSize, applyElevationOverlayColor?: boolean, pageTransitionsTheme?: PageTransitionsTheme, appBarTheme?: AppBarTheme, bottomAppBarTheme?: BottomAppBarTheme, colorScheme?: ColorScheme, dialogTheme?: DialogTheme, floatingActionButtonTheme?: FloatingActionButtonThemeData, navigationRailTheme?: NavigationRailThemeData, typography?: Typography, cupertinoOverrideTheme?: CupertinoThemeData, snackBarTheme?: SnackBarThemeData, bottomSheetTheme?: BottomSheetThemeData, popupMenuTheme?: PopupMenuThemeData, bannerTheme?: MaterialBannerThemeData, dividerTheme?: DividerThemeData, buttonBarTheme?: ButtonBarThemeData, bottomNavigationBarTheme?: BottomNavigationBarThemeData, timePickerTheme?: TimePickerThemeData, textButtonTheme?: TextButtonThemeData, elevatedButtonTheme?: ElevatedButtonThemeData, outlinedButtonTheme?: OutlinedButtonThemeData, textSelectionTheme?: TextSelectionThemeData, dataTableTheme?: DataTableThemeData, fixTextFieldOutlineLabel?: boolean, useTextSelectionTheme?: boolean} = {}) {
    var jsObj = new ThemeData();
    jsObj.visualDensity = namedParameters.visualDensity;
    jsObj.primaryColor = namedParameters.primaryColor;
    jsObj.primaryColorBrightness = namedParameters.primaryColorBrightness;
    jsObj.primaryColorLight = namedParameters.primaryColorLight;
    jsObj.primaryColorDark = namedParameters.primaryColorDark;
    jsObj.canvasColor = namedParameters.canvasColor;
    jsObj.shadowColor = namedParameters.shadowColor;
    jsObj.accentColor = namedParameters.accentColor;
    jsObj.accentColorBrightness = namedParameters.accentColorBrightness;
    jsObj.scaffoldBackgroundColor = namedParameters.scaffoldBackgroundColor;
    jsObj.bottomAppBarColor = namedParameters.bottomAppBarColor;
    jsObj.cardColor = namedParameters.cardColor;
    jsObj.dividerColor = namedParameters.dividerColor;
    jsObj.focusColor = namedParameters.focusColor;
    jsObj.hoverColor = namedParameters.hoverColor;
    jsObj.highlightColor = namedParameters.highlightColor;
    jsObj.splashColor = namedParameters.splashColor;
    jsObj.splashFactory = namedParameters.splashFactory;
    jsObj.selectedRowColor = namedParameters.selectedRowColor;
    jsObj.unselectedWidgetColor = namedParameters.unselectedWidgetColor;
    jsObj.disabledColor = namedParameters.disabledColor;
    jsObj.buttonTheme = namedParameters.buttonTheme;
    jsObj.buttonColor = namedParameters.buttonColor;
    jsObj.toggleButtonsTheme = namedParameters.toggleButtonsTheme;
    jsObj.secondaryHeaderColor = namedParameters.secondaryHeaderColor;
    jsObj.textSelectionColor = namedParameters.textSelectionColor;
    jsObj.cursorColor = namedParameters.cursorColor;
    jsObj.textSelectionHandleColor = namedParameters.textSelectionHandleColor;
    jsObj.backgroundColor = namedParameters.backgroundColor;
    jsObj.dialogBackgroundColor = namedParameters.dialogBackgroundColor;
    jsObj.indicatorColor = namedParameters.indicatorColor;
    jsObj.hintColor = namedParameters.hintColor;
    jsObj.errorColor = namedParameters.errorColor;
    jsObj.toggleableActiveColor = namedParameters.toggleableActiveColor;
    jsObj.textTheme = namedParameters.textTheme;
    jsObj.primaryTextTheme = namedParameters.primaryTextTheme;
    jsObj.accentTextTheme = namedParameters.accentTextTheme;
    jsObj.inputDecorationTheme = namedParameters.inputDecorationTheme;
    jsObj.iconTheme = namedParameters.iconTheme;
    jsObj.primaryIconTheme = namedParameters.primaryIconTheme;
    jsObj.accentIconTheme = namedParameters.accentIconTheme;
    jsObj.sliderTheme = namedParameters.sliderTheme;
    jsObj.tabBarTheme = namedParameters.tabBarTheme;
    jsObj.tooltipTheme = namedParameters.tooltipTheme;
    jsObj.cardTheme = namedParameters.cardTheme;
    jsObj.chipTheme = namedParameters.chipTheme;
    jsObj.platform = namedParameters.platform;
    jsObj.materialTapTargetSize = namedParameters.materialTapTargetSize;
    jsObj.applyElevationOverlayColor = namedParameters.applyElevationOverlayColor;
    jsObj.pageTransitionsTheme = namedParameters.pageTransitionsTheme;
    jsObj.appBarTheme = namedParameters.appBarTheme;
    jsObj.bottomAppBarTheme = namedParameters.bottomAppBarTheme;
    jsObj.colorScheme = namedParameters.colorScheme;
    jsObj.dialogTheme = namedParameters.dialogTheme;
    jsObj.floatingActionButtonTheme = namedParameters.floatingActionButtonTheme;
    jsObj.navigationRailTheme = namedParameters.navigationRailTheme;
    jsObj.typography = namedParameters.typography;
    jsObj.cupertinoOverrideTheme = namedParameters.cupertinoOverrideTheme;
    jsObj.snackBarTheme = namedParameters.snackBarTheme;
    jsObj.bottomSheetTheme = namedParameters.bottomSheetTheme;
    jsObj.popupMenuTheme = namedParameters.popupMenuTheme;
    jsObj.bannerTheme = namedParameters.bannerTheme;
    jsObj.dividerTheme = namedParameters.dividerTheme;
    jsObj.buttonBarTheme = namedParameters.buttonBarTheme;
    jsObj.bottomNavigationBarTheme = namedParameters.bottomNavigationBarTheme;
    jsObj.timePickerTheme = namedParameters.timePickerTheme;
    jsObj.textButtonTheme = namedParameters.textButtonTheme;
    jsObj.elevatedButtonTheme = namedParameters.elevatedButtonTheme;
    jsObj.outlinedButtonTheme = namedParameters.outlinedButtonTheme;
    jsObj.textSelectionTheme = namedParameters.textSelectionTheme;
    jsObj.dataTableTheme = namedParameters.dataTableTheme;
    jsObj.fixTextFieldOutlineLabel = namedParameters.fixTextFieldOutlineLabel;
    jsObj.useTextSelectionTheme = namedParameters.useTextSelectionTheme;
    jsObj['constructorName'] = 'raw';
    return jsObj;
  }
  // MX modified begin
  public static fromJson(mapObj: any) {
    if (mapObj === null || mapObj === undefined) {
      return null;
    }

    const obj = new ThemeData();

    for (const p in mapObj) {
      if (mapObj.hasOwnProperty(p)) {
        const v = mapObj[p];
        switch (p) {
          case 'primaryColor':
          case 'primaryColorLight':
          case 'primaryColorDark':
          case 'accentColor':
          case 'canvasColor':
          case 'scaffoldBackgroundColor':
          case 'bottomAppBarColor':
          case 'cardColor':
          case 'dividerColor':
          case 'highlightColor':
          case 'splashColor':
          case 'selectedRowColor':
          case 'unselectedWidgetColor':
          case 'disabledColor':
          case 'buttonColor':
          case 'secondaryHeaderColor':
          case 'textSelectionColor':
          case 'cursorColor':
          case 'textSelectionHandleColor':
          case 'backgroundColor':
          case 'dialogBackgroundColor':
          case 'indicatorColor':
          case 'hintColor':
          case 'errorColor':
          case 'toggleableActiveColor':
            obj[p] = new Color(v);
            break;

          case 'textTheme':
          case 'primaryTextTheme':
          case 'accentTextTheme':
            obj[p] = TextTheme.fromJson(v);
            break;

          default:
            obj[p] = v;
            break;
        }
      }
    }

    return obj;
  }
  // MX modified end
}
export { ThemeData };
class MaterialBasedCupertinoThemeData extends CupertinoThemeData {
  materialTheme: ThemeData;
  cupertinoOverrideTheme: CupertinoThemeData;
  public constructor(namedParameters: {materialTheme?: ThemeData} = {}) {
    super();
    this.materialTheme = namedParameters.materialTheme;
    this.className = 'MaterialBasedCupertinoThemeData';
  }
}
export { MaterialBasedCupertinoThemeData };
class _IdentityThemeDataCacheKey extends MXDartClass {
  baseTheme: ThemeData;
  localTextGeometry: TextTheme;
  public constructor(baseTheme?: ThemeData, localTextGeometry?: TextTheme) {
    super();
    this.baseTheme = baseTheme;
    this.localTextGeometry = localTextGeometry;
    this.className = '_IdentityThemeDataCacheKey';
  }
}
export { _IdentityThemeDataCacheKey };
class _FifoCache extends MXDartClass {
  cache: Map<any, any>;
  maximumSize: number;
  public constructor(_maximumSize?: number) {
    super();
    this.maximumSize = _maximumSize;
    this.className = '_FifoCache';
  }
}
export { _FifoCache };
class VisualDensity extends MXDartClass {
  horizontal: number;
  vertical: number;
  public constructor(namedParameters: {horizontal?: number, vertical?: number} = {}) {
    super();
    this.horizontal = namedParameters.horizontal;
    this.vertical = namedParameters.vertical;
    this.className = 'VisualDensity';
  }
  static get minimumDensity() {
    return -4.0;
  }
  static get maximumDensity() {
    return 4.0;
  }
  static get standard() {
    var jsObj = new VisualDensity();
    jsObj['className'] = 'VisualDensity';
    jsObj['constructorName'] = 'standard';
    return jsObj;
  }
  static get comfortable() {
    var jsObj = new VisualDensity();
    jsObj['className'] = 'VisualDensity';
    jsObj['constructorName'] = 'comfortable';
    return jsObj;
  }
  static get compact() {
    var jsObj = new VisualDensity();
    jsObj['className'] = 'VisualDensity';
    jsObj['constructorName'] = 'compact';
    return jsObj;
  }
}
export { VisualDensity };
