import { JSXElement, mergeProps } from "solid-js";

import "./TextInput.css";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  defautlValue?: string;
  onInput?: (value: string) => void;
  onKeyPress?: (key: string) => void;
}

export function TextInput(props: TextInputProps): JSXElement {
  const mergedProps = mergeProps({ type: "string" }, props);
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
      type={mergedProps.type}
      onInput={onInput}
      onKeyPress={onKeyPress}
      value={props.defautlValue ?? ""}
      placeholder={props.placeholder}
    />
  );
}
