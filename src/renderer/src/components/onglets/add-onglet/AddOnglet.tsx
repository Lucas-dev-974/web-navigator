import { PlusIcon } from "@renderer/icons/PlusIcon";
import { WebviewManager } from "@renderer/webview.manager";
import { JSXElement } from "solid-js";

import "./AddOnglet.css";

export function AddOnglet(): JSXElement {
  function newOnglet(): void {
    WebviewManager.newView({});
  }
  return (
    <span onClick={newOnglet} class="add-onglet-btn">
      <PlusIcon />
    </span>
  );
}
