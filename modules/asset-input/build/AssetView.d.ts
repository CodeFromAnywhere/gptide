/// <reference types="react" />
import { Asset } from "asset-type";
/**

`AssetBlobView` shows an `AssetBlob`

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration

 */
export declare const AssetView: (props: {
    asset: Asset;
    remove: () => void;
}) => JSX.Element;
//# sourceMappingURL=AssetView.d.ts.map