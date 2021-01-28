import { Listenable } from '../foundation/change-notifier';
import { ImageCache } from './image-cache';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class PaintingBinding extends MXDartClass {
    imageCache: ImageCache;
    systemFonts: _SystemFontsNotifier;
}
export { PaintingBinding };
declare class _SystemFontsNotifier extends Listenable {
    systemFontsCallbacks: Set<any>;
}
export { _SystemFontsNotifier };
