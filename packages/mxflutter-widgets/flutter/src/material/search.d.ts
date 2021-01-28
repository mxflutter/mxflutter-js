import { Animation } from '../animation/animation';
import { PageRoute } from '../widgets/pages';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { ValueNotifier } from '../foundation/change-notifier';
import { ProxyAnimation } from '../animation/animations';
import { TextEditingController } from '../widgets/editable-text';
import { FocusNode } from '../widgets/focus-manager';
import { TextInputType, TextInputAction } from '../services/text-input';
import { TextStyle } from '../painting/text-style';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class SearchDelegate extends MXDartClass {
    searchFieldLabel: string;
    searchFieldStyle: TextStyle;
    keyboardType: TextInputType;
    textInputAction: TextInputAction;
    focusNode: FocusNode;
    queryTextController: TextEditingController;
    proxyAnimation: ProxyAnimation;
    currentBodyNotifier: ValueNotifier;
    route: _SearchPageRoute;
}
export { SearchDelegate };
declare enum _SearchBody {
    suggestions = "{ \"_name\": \"_SearchBody.suggestions\", \"index\": 0 }",
    results = "{ \"_name\": \"_SearchBody.results\", \"index\": 1 }"
}
export { _SearchBody };
declare class _SearchPageRoute extends PageRoute {
    delegate: SearchDelegate;
    constructor(namedParameters?: {
        delegate?: SearchDelegate;
    });
}
export { _SearchPageRoute };
declare class _SearchPage extends StatefulWidget$ {
    delegate: SearchDelegate;
    animation: Animation;
    constructor(namedParameters?: {
        delegate?: SearchDelegate;
        animation?: Animation;
    });
}
export { _SearchPage };
declare class _SearchPageState extends State$ {
    focusNode: FocusNode;
}
export { _SearchPageState };
