import type { Component } from "solid-js";
import { HeaderApp } from "./components/header/Header";
import { WebContent } from "./views/WebContent";

import { WebviewManager } from "./webview.manager";

const App: Component = () => {
  console.log(WebviewManager.newView());

  return (
    <main class="container">
      <HeaderApp />
      <WebContent src="https://www.google.com" />
    </main>
  );
};

export default App;
