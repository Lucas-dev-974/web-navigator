import { JSXElement, onMount } from "solid-js";

export function Home(): JSXElement {
  onMount(() => {
    console.log("home mounted");
  });

  return <section>Home</section>;
}
