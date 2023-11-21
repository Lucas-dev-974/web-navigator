import { CloseFilledCircleIcon } from "@renderer/icons/CloseFilledCircleIcon";
import { JSXElement, createSignal } from "solid-js";

import "./Onglet.css";

interface OngletProps {
  name: string;
}

const [ondrag, setondrag] = createSignal<HTMLDivElement>();

export function Onglet(props: OngletProps): JSXElement {
  function onDragEnter(event: Event): void {
    const target: HTMLDivElement = event.target as HTMLDivElement;
    if (ondrag() && target != ondrag()) {
      if (target.compareDocumentPosition(ondrag() as HTMLDivElement) == 2) {
        target.parentNode?.insertBefore(ondrag() as HTMLDivElement, target.nextSibling);
      } else if (target.compareDocumentPosition(ondrag() as HTMLDivElement) == 4) {
        try {
          target.insertBefore(ondrag() as HTMLDivElement, target);
        } catch (error) {
          target.insertAdjacentElement("beforebegin", ondrag() as HTMLDivElement);
          console.log(error);
        }
      }
    }
  }

  function onDragStart(event: Event): void {
    setondrag(event.target as HTMLDivElement);
    const target: HTMLDivElement = event.target as HTMLDivElement;
    target.style.opacity = "0.5";
  }

  function onDragEnd(event: Event): void {
    setondrag(undefined);
    const target: HTMLDivElement = event.target as HTMLDivElement;
    target.style.opacity = "1";
  }

  return (
    <div
      class="onglet"
      draggable="true"
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      <p>{props.name}</p>
      <div class="onglet-close">
        <CloseFilledCircleIcon />
      </div>
    </div>
  );
}