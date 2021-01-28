import { MethodChannel, BasicMessageChannel } from './platform-channel';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class SystemChannels extends MXDartClass {
    static get navigation(): MethodChannel;
    static get platform(): MethodChannel;
    static get textInput(): MethodChannel;
    static get keyEvent(): BasicMessageChannel;
    static get lifecycle(): BasicMessageChannel;
    static get system(): BasicMessageChannel;
    static get accessibility(): BasicMessageChannel;
    static get platform_views(): MethodChannel;
    static get skia(): MethodChannel;
    static get mouseCursor(): MethodChannel;
}
export { SystemChannels };
