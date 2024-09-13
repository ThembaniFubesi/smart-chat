import { readable } from "svelte/store";
import * as uuid from "uuid";

function createUserStore() {
  const { subscribe } = readable(uuid.v4());

  return {
    subscribe,
  };
}

export const userStore = createUserStore();
