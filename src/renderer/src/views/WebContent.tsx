import { JSXElement, createEffect, createSignal } from "solid-js";

import "./WebContent.css";

type IframeItem = {
  name?: string;
  src: string;
};

export function WebContent(props: IframeItem): JSXElement {
  const [iframeRef, setIframeRef] = createSignal<HTMLIFrameElement>();

  createEffect(() => {
    console.log({ ...iframeRef() });
  });

  return (
    <iframe
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      class="web-content"
      ref={setIframeRef}
      src={props.src}
      loading="lazy"
    />
  );
}
