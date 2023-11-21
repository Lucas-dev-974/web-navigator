import { JSXElement } from "solid-js";
import { OngletList } from "./OngletList";
import { AddOnglet } from "./add-onglet/AddOnglet";

export function OngletListWrapper(): JSXElement {
  return (
    <div class="onglet-list-wrapper">
      <OngletList />
      <AddOnglet />
    </div>
  );
}
