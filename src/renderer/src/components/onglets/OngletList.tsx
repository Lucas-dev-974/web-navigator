import { For, JSXElement } from "solid-js";
import { Onglet } from "./Onglet";
import { webviews } from "@renderer/webview.manager";

export function OngletList(): JSXElement {
  return (
    <div class="onglet-list">
      <For each={webviews()}>{(webview) => <Onglet webview={webview} />}</For>
    </div>
  );
}
