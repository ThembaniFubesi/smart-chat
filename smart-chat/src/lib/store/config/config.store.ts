import { readable, writable } from "svelte/store";
import type { ConfigModel } from "../../models";

function createConfigStore() {
  const { subscribe } = readable<ConfigModel | null>(null, (set) => {
    function handleMessage(event: MessageEvent<ConfigModel>) {
      set(event.data);
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  });

  return {
    subscribe,
  };
}

export const configStore = createConfigStore();
