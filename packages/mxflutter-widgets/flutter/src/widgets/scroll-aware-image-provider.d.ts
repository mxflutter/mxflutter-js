import { DisposableBuildContext } from './disposable-build-context';
import { ImageProvider } from '../painting/image-provider';
declare class ScrollAwareImageProvider extends ImageProvider {
    context: DisposableBuildContext;
    imageProvider: ImageProvider;
    constructor(namedParameters?: {
        context?: DisposableBuildContext;
        imageProvider?: ImageProvider;
    });
}
export { ScrollAwareImageProvider };
