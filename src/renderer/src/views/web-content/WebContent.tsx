import { JSXElement, Show } from "solid-js";

import "./WebContent.css";
import { WebviewType, currentWebview } from "@renderer/webview.manager";

type IframeItem = {
  webview: WebviewType;
};

export function WebContent(props: IframeItem): JSXElement {
  return (
    <Show when={currentWebview() == props.webview}>
      <iframe
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-forms allow-scripts allow-pointer-lock allow-top-navigation allow-presentation"
        class="web-content"
        src={currentWebview()?.src ?? ""}
        loading="lazy"
      />
    </Show>
  );
}
