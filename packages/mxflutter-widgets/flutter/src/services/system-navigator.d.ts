import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class SystemNavigator extends MXDartClass {
    static routeInformationUpdated(namedParameters?: {
        location?: string;
        state?: any;
    }): MXDartClass;
    static routeUpdated(namedParameters?: {
        routeName?: string;
        previousRouteName?: string;
    }): MXDartClass;
}
export { SystemNavigator };
