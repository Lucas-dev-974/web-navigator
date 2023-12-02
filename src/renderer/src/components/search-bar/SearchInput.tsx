import { JSXElement, createSignal } from "solid-js";
import { TextInput } from "../text-input/TextInput";

import { LoopIcon } from "@renderer/icons/LoopIcon";
import { IconSizeEnum, IconWrapper } from "../logo-wrapper/IconWrapper";

import "./SearchInput.css";
import { WebviewManager, currentWebview, setCurrentWeview } from "@renderer/webview.manager";
import { UrlUtils } from "@renderer/utils/url.utils";

interface SearchBarProps {
  defaultValue: string;
}

export function SearchBar(props: SearchBarProps): JSXElement {
  const [value, setValue] = createSignal<string>(props.defaultValue);

  let bufferSrc: string = props.defaultValue;

  function onInput(value: string): void {
    bufferSrc = value;
  }

  function onKeyPress(key: string): void {
    if (key == "Enter") {
      if (!currentWebview()) WebviewManager.newView({ src: UrlUtils.parseInputToUrl(bufferSrc) });
      else {
        setCurrentWeview((prev) => {
          if (!prev) return prev;
          return { ...prev, src: UrlUtils.parseInputToUrl(bufferSrc) };
        });
      }
      setValue(UrlUtils.cleanUrl(UrlUtils.parseInputToUrl(bufferSrc)));
    }
  }

  return (
    <div class="search-wrapper">
      <TextInput
        type="url"
        onInput={onInput}
        placeholder="https://google.com"
        defautlValue={value()}
        onKeyPress={onKeyPress}
      />
      <IconWrapper icon={<LoopIcon />} size={IconSizeEnum.large} />
    </div>
  );
}
