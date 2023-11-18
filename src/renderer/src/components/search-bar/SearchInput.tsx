import { JSXElement } from "solid-js";
import { TextInput } from "../text-input/TextInput";

import { LoopIcon } from "@renderer/icons/LoopIcon";
import { IconSizeEnum, IconWrapper } from "../logo-wrapper/IconWrapper";

import "./SearchInput.css";

interface SearchBarProps {
  defaultValue: string;
}

export function SearchBar(props: SearchBarProps): JSXElement {
  return (
    <div class="search-wrapper">
      <TextInput type="url" placeholder="https://google.com" defautlValue={props.defaultValue} />
      <IconWrapper icon={<LoopIcon />} size={IconSizeEnum.large} />
    </div>
  );
}
