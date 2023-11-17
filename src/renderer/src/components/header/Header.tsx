import { LogoIcon } from "@renderer/icons/LogoIcon";
import { SearchBar } from "../search-bar/Searchbar";
import "solid-js"
import {createSignal} from "solid-js"

export const [signal, setSignale] = createSignal("test")

export function HeaderApp() {
  return (
    <header class="header-app">
      <span class="header-logo-container">
        <LogoIcon />
      </span>
      <SearchBar value={signal()} />
    </header>
  )
}
