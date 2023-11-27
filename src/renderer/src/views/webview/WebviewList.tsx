import { WebviewType, webviews } from "@renderer/webview.manager";
import { For, JSXElement, createEffect, createSignal } from "solid-js";
import { Webview } from "./Webview";

export function WebviewList(): JSXElement {
  const [list, setList] = createSignal<WebviewType[]>(webviews());
  createEffect(() => {
    if (webviews().length != list().length) setList(webviews());
  });

  return (
    <div class="webview-list">
      <For each={list()}>{(webview) => <Webview {...webview} />}</For>
    </div>
  );
}
