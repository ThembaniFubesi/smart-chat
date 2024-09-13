<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onStart() {
    dispatch('start');
  }

</script>

<div class="chat chat-start">
  <button
  on:click={onStart}
    type="button"
    class=" text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 disabled:bg-primary/[.3] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4"
    >Yes I agree</button
  >
</div>
