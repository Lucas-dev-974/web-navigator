/// <reference types="vite/client" />
import { WebviewTag } from "electron";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      webview: Partial<WebviewTag>;
    }
  }
}
