import './app.css';
import App from "./App.svelte";

Array.from(document.querySelectorAll(".smart-chat-portal")).forEach(
  (element) => {
    const app = new App({
      target: element,
    });

  }
);
