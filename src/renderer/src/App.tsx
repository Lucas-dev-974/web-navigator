/* eslint-disable solid/self-closing-comp */
import { type Component } from "solid-js";
import { HeaderApp } from "./components/header/Header";
// import { TabOptions } from "electron-tabs";

import "electron-tabs";
import { OngletListWrapper } from "./components/onglets/OngletListWrapper";
import { WebviewList } from "./views/webview/WebviewList";

const App: Component = () => {
  return (
    <main class="container">
      <HeaderApp />
      <OngletListWrapper />
      <WebviewList />
    </main>
  );
};

export default App;
