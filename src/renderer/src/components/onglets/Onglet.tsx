import { CloseFilledCircleIcon } from "@renderer/icons/CloseFilledCircleIcon";
import { JSXElement, createEffect, createSignal, onMount } from "solid-js";

import "./Onglet.css";
import {
  WebviewManager,
  WebviewType,
  currentWebview,
  setCurrentWeview
} from "@renderer/webview.manager";

interface OngletProps {
  webview: WebviewType;
}

const [ondrag, setondrag] = createSignal<HTMLDivElement>();

export function Onglet(props: OngletProps): JSXElement {
  const [ongletElement, setOngletElement] = createSignal<HTMLElement>();
  onMount(() => {
    const ongletElement = document.getElementById("onglet-" + String(props.webview.id));
    setOngletElement(ongletElement ?? undefined);
  });

  createEffect(() => {
    if (currentWebview()) {
      if (currentWebview()?.id == props.webview.id) ongletElement()?.classList.add("active");
      else ongletElement()?.classList.remove("active");
    }
  });

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

  function onClick(): void {
    setCurrentWeview(props.webview);
  }

  function onClickClose(): void {
    WebviewManager.deleteWebview(props.webview.id);
  }

  return (
    <div
      id={"onglet-" + String(props.webview.id)}
      class="onglet"
      draggable="true"
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onClick={onClick}
    >
      <p>{props.webview.name}</p>
      <div class="onglet-close" onClick={onClickClose}>
        <CloseFilledCircleIcon />
      </div>
    </div>
  );
}
