<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export function sendMessage() {
    dispatch("message", { message });
  }

  let message = "";
</script>

<form
  in:fly|global={{ y: 20, duration: 500 }}
  on:submit|preventDefault={sendMessage}
>
  <div
    class="w-full mt-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700"
  >
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="message">What would you like to know?</label
    >
    <textarea
      bind:value={message}
      id="message"
      rows="3"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
    ></textarea>
    <button
      disabled={!message}
      type="submit"
      class=" text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 disabled:bg-primary/[.3] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4"
      >Send</button
    >
  </div>
</form>
