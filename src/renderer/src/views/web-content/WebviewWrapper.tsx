import { currentWebview, webviews } from "@renderer/webview.manager";
import { JSXElement, Show } from "solid-js";
import { WebviewList } from "./WebviewList";
import { Home } from "../home/Home";

export function WebviewWrapper(): JSXElement {
  return (
    <Show
      when={webviews().length > 0 && (currentWebview()?.src.length as number) > 0}
      fallback={<Home />}
    >
      <WebviewList />
    </Show>
  );
}
