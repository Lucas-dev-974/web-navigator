import { JSXElement } from "solid-js";
import { TextInput } from "../text-input/TextInput";

import { LoopIcon } from "@renderer/icons/LoopIcon";
import { IconSizeEnum, IconWrapper } from "../logo-wrapper/IconWrapper";

import "./SearchInput.css";
import { setCurrentWeview } from "@renderer/webview.manager";

interface SearchBarProps {
  defaultValue: string;
}

export function SearchBar(props: SearchBarProps): JSXElement {
  let bufferSrc: string = props.defaultValue;

  function onInput(value: string): void {
    bufferSrc = value;
    console.log("buffer src:", bufferSrc);
  }

  function onKeyPress(key: string): void {
    if (key == "Enter") {
      setCurrentWeview((prev) => {
        if (!prev) return prev;
        const datas = { ...prev };
        datas.src = bufferSrc;
        return datas;
      });
    }
  }

  return (
    <div class="search-wrapper">
      <TextInput
        type="url"
        onInput={onInput}
        placeholder="https://google.com"
        defautlValue={props.defaultValue}
        onKeyPress={onKeyPress}
      />
      <IconWrapper icon={<LoopIcon />} size={IconSizeEnum.large} />
    </div>
  );
}
