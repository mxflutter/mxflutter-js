import { CustomPainter } from '../rendering/custom-paint';
import { TickerProvider } from '../scheduler/ticker';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { ColorTween } from '../animation/tween';
import { Animation } from '../animation/animation';
import { BottomNavigationBarItem } from '../widgets/bottom-navigation-bar-item';
import { Key } from '../foundation/key';
import { MouseCursor } from '../rendering/mouse-cursor';
import { TextStyle } from '../painting/text-style';
import { IconThemeData } from '../widgets/icon-theme-data';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, StatelessWidget, State } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum BottomNavigationBarType {
    fixed = "{ \"_name\": \"BottomNavigationBarType.fixed\", \"index\": 0 }",
    shifting = "{ \"_name\": \"BottomNavigationBarType.shifting\", \"index\": 1 }"
}
export { BottomNavigationBarType };
declare class BottomNavigationBar extends StatefulWidget {
    items: Array<any>;
    onTap: any;
    currentIndex: number;
    elevation: number;
    type: BottomNavigationBarType;
    backgroundColor: Color;
    iconSize: number;
    selectedItemColor: Color;
    unselectedItemColor: Color;
    selectedIconTheme: IconThemeData;
    unselectedIconTheme: IconThemeData;
    selectedLabelStyle: TextStyle;
    unselectedLabelStyle: TextStyle;
    selectedFontSize: number;
    unselectedFontSize: number;
    showUnselectedLabels: boolean;
    showSelectedLabels: boolean;
    mouseCursor: MouseCursor;
    constructor(namedParameters?: {
        key?: Key;
        items?: Array<any>;
        onTap?: any;
        currentIndex?: number;
        elevation?: number;
        type?: BottomNavigationBarType;
        fixedColor?: Color;
        backgroundColor?: Color;
        iconSize?: number;
        selectedItemColor?: Color;
        unselectedItemColor?: Color;
        selectedIconTheme?: IconThemeData;
        unselectedIconTheme?: IconThemeData;
        selectedFontSize?: number;
        unselectedFontSize?: number;
        selectedLabelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        showSelectedLabels?: boolean;
        showUnselectedLabels?: boolean;
        mouseCursor?: MouseCursor;
    });
}
export { BottomNavigationBar };
declare class _BottomNavigationTile extends StatelessWidget {
    type: BottomNavigationBarType;
    item: BottomNavigationBarItem;
    animation: Animation;
    iconSize: number;
    onTap: any;
    colorTween: ColorTween;
    flex: number;
    selected: boolean;
    selectedIconTheme: IconThemeData;
    unselectedIconTheme: IconThemeData;
    selectedLabelStyle: TextStyle;
    unselectedLabelStyle: TextStyle;
    indexLabel: string;
    showSelectedLabels: boolean;
    showUnselectedLabels: boolean;
    mouseCursor: MouseCursor;
    constructor(type?: BottomNavigationBarType, item?: BottomNavigationBarItem, animation?: Animation, iconSize?: number, namedParameters?: {
        onTap?: any;
        colorTween?: ColorTween;
        flex?: number;
        selected?: boolean;
        selectedLabelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        selectedIconTheme?: IconThemeData;
        unselectedIconTheme?: IconThemeData;
        showSelectedLabels?: boolean;
        showUnselectedLabels?: boolean;
        indexLabel?: string;
        mouseCursor?: MouseCursor;
    });
}
export { _BottomNavigationTile };
declare class _TileIcon extends StatelessWidget {
    colorTween: ColorTween;
    animation: Animation;
    iconSize: number;
    selected: boolean;
    item: BottomNavigationBarItem;
    selectedIconTheme: IconThemeData;
    unselectedIconTheme: IconThemeData;
    constructor(namedParameters?: {
        key?: Key;
        colorTween?: ColorTween;
        animation?: Animation;
        iconSize?: number;
        selected?: boolean;
        item?: BottomNavigationBarItem;
        selectedIconTheme?: IconThemeData;
        unselectedIconTheme?: IconThemeData;
    });
}
export { _TileIcon };
declare class _Label extends StatelessWidget {
    colorTween: ColorTween;
    animation: Animation;
    item: BottomNavigationBarItem;
    selectedLabelStyle: TextStyle;
    unselectedLabelStyle: TextStyle;
    showSelectedLabels: boolean;
    showUnselectedLabels: boolean;
    constructor(namedParameters?: {
        key?: Key;
        colorTween?: ColorTween;
        animation?: Animation;
        item?: BottomNavigationBarItem;
        selectedLabelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        showSelectedLabels?: boolean;
        showUnselectedLabels?: boolean;
    });
}
export { _Label };
declare class _BottomNavigationBarState extends State {
    controllers: Array<any>;
    animations: Array<any>;
    circles: any;
    backgroundColor: Color;
}
export { _BottomNavigationBarState };
declare class _Circle extends MXDartClass {
    state: _BottomNavigationBarState;
    index: number;
    color: Color;
    controller: AnimationController;
    animation: CurvedAnimation;
    constructor(namedParameters?: {
        state?: _BottomNavigationBarState;
        index?: number;
        color?: Color;
        vsync?: TickerProvider;
    });
}
export { _Circle };
declare class _RadialPainter extends CustomPainter {
    circles: Array<any>;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        circles?: Array<any>;
        textDirection?: TextDirection;
    });
}
export { _RadialPainter };
