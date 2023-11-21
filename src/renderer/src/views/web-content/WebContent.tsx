import { JSXElement, Show, createEffect, createSignal } from "solid-js";

import "./WebContent.css";
import { WebviewType, currentWebview } from "@renderer/webview.manager";

type IframeItem = {
  webview: WebviewType;
};

export function WebContent(props: IframeItem): JSXElement {
  const [iframeRef, setIframeRef] = createSignal<HTMLIFrameElement>();

  createEffect(() => {
    console.log({ ...iframeRef() });
  });

  return (
    <Show when={currentWebview() == props.webview && (currentWebview()?.src.length as number) > 0}>
      <iframe
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-forms allow-scripts allow-pointer-lock allow-top-navigation allow-presentation"
        class="web-content"
        ref={setIframeRef}
        src={props.webview.src}
        loading="lazy"
      />
    </Show>
  );
}
