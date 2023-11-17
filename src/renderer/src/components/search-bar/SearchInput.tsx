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
      <TextInput defautlValue={props.defaultValue} placeholder="Recherche" />
      <IconWrapper icon={<LoopIcon />} size={IconSizeEnum.large} />
    </div>
  );
}
