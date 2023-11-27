import { PageTitleUpdatedEvent, WebviewTag } from "electron";
import { JSXElement, createEffect, createSignal, onMount } from "solid-js";
import { WebviewManager, WebviewType, currentWebview } from "@renderer/webview.manager";

import "./Webview.css";

export function Webview(props: WebviewType): JSXElement {
  const [webviewSrc, setWebviewSrc] = createSignal<string>();
  const [viewElement, setViewElement] = createSignal<HTMLElement>();

  onMount(() => {
    const viewElement = document.getElementById("webview-" + String(webview().id));
    WebviewManager.updateWebview({
      id: props.id,
      view: viewElement as HTMLElement
    });

    viewElement?.addEventListener("update-target-url", (event) => {
      const target: WebviewTag = event.target as WebviewTag;
      WebviewManager.updateWebview({ id: props.id, src: target.src });
    });

    viewElement?.addEventListener("page-title-updated", (event) => {
      const target: PageTitleUpdatedEvent = event as PageTitleUpdatedEvent;
      WebviewManager.updateWebview({ id: props.id, name: target.title });
    });

    setViewElement(viewElement ?? undefined);
  });

  createEffect(() => {
    // * Compare if currentWebview is the webview given on props
    // * If true, add class "active"
    if (currentWebview()) {
      if (currentWebview()?.id == webview().id) {
        viewElement()?.classList.add("active");
      } else viewElement()?.classList.remove("active");
    }
  });

  // *  Handle URL change
  createEffect(() => {
    if (currentWebview() && currentWebview()?.id == webview().id) {
      console.log(currentWebview()?.src, props.src, props.src.length);
      if (currentWebview()?.src != webviewSrc()) {
        console.log("ok:", webviewSrc());
        setWebviewSrc(currentWebview()?.src);
      }
    }
  });

  const webview = (): WebviewType => props;

  const Webview = (props: { class: string } & Partial<WebviewTag>): JSXElement => (
    <webview {...props} src={webviewSrc()} />
  );

  return <Webview class="webview" id={"webview-" + String(webview().id)} />;
}
