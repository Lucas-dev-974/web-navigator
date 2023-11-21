import { webviews } from "@renderer/webview.manager";
import { For, JSXElement } from "solid-js";
import { Onglet } from "./Onglet";

export function OngletList(): JSXElement {
  return (
    <div class="onglet-list">
      <For each={webviews()}>{(webview) => <Onglet name={webview.name} />}</For>
    </div>
  );
}
