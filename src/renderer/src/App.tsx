import { type Component, onMount } from "solid-js";
import { HeaderApp } from "./components/header/Header";

import { WebviewManager, webviews } from "./webview.manager";
import { WebviewWrapper } from "./views/web-content/WebviewWrapper";
import { OngletListWrapper } from "./components/onglets/OngletListWrapper";

const App: Component = () => {
  onMount(() => {
    if (webviews().length == 0) WebviewManager.newView({});
  });

  return (
    <main class="container">
      <OngletListWrapper />
      <HeaderApp />
      <WebviewWrapper />
    </main>
  );
};

export default App;
