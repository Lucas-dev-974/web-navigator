import { LogoIcon } from "@renderer/icons/LogoIcon";
import { JSXElement } from "solid-js";
import { SearchBar } from "../search-bar/SearchInput";
import { IconSizeEnum, IconWrapper } from "../logo-wrapper/IconWrapper";
import Versions from "../Versions";

import "./Header.css";
import { currentWebview } from "@renderer/webview.manager";

export function HeaderApp(): JSXElement {
  return (
    <header class="header-app">
      <section>
        <IconWrapper icon={<LogoIcon />} size={IconSizeEnum.large} />
      </section>

      <section>
        <SearchBar defaultValue={currentWebview()?.src as string} />
      </section>

      <section>
        <Versions />
      </section>
    </header>
  );
}
