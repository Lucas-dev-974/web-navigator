import type { Component } from 'solid-js'
import Versions from './components/Versions'
import { HeaderApp, setSignale } from './components/header/Header'

const App: Component = () => {
  return (
    <main class="container">
      <HeaderApp />
      <footer class="footer-app">
        <Versions />
      </footer>
    </main>
  )
}

export default App
