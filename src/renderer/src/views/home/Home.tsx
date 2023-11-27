import { JSXElement, onMount } from "solid-js";

import "./Home.css";
export function Home(): JSXElement {
  onMount(() => {
    console.log("home mounted");
  });

  return (
    <section class="home">
      <p>Home</p>
      <p>https://google.com</p>
    </section>
  );
}
