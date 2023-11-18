import type { Component } from "solid-js";
import Versions from "./components/Versions";
import { HeaderApp } from "./components/header/Header";
import { WebContent } from "./views/WebContent";

const App: Component = () => {
  return (
    <main class="container">
      <HeaderApp />
      <WebContent src="https://www.google.com" />
      <footer class="footer-app">
        <Versions />
      </footer>
    </main>
  );
};

export default App;
