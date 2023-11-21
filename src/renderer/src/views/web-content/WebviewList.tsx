import { webviews } from "@renderer/webview.manager";
import { For, JSXElement } from "solid-js";
import { WebContent } from "./WebContent";

export function WebviewList(): JSXElement {
  return <For each={webviews()}>{(view) => <WebContent webview={view} />}</For>;
}
