import { JSXElement } from "solid-js";

import "./TextInput.css";

interface TextInputProps {
  placeholder?: string;
  defautlValue?: string;
  onInput?: (value: string) => void;
  onKeyPress?: (key: string) => void;
}

export function TextInput(props: TextInputProps): JSXElement {
  function onInput(event: Event & { target: HTMLInputElement }): void {
    if (props.onInput) {
      props.onInput(event.target.value);
    }
  }

  function onKeyPress(event: KeyboardEvent): void {
    const { key } = event;
    if (props.onKeyPress) props.onKeyPress(key);
  }

  return (
    <input
      class="text-input"
      type="text"
      onInput={onInput}
      onKeyPress={onKeyPress}
      value={props.defautlValue ?? ""}
      placeholder={props.placeholder}
    />
  );
}
