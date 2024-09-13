<script lang="ts">
  import { afterUpdate, beforeUpdate } from "svelte";

  let autoscroll: boolean;
  let element: HTMLElement;

  beforeUpdate(() => {
    autoscroll =
      element &&
      element.offsetHeight + element.scrollTop > element.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll) {
      element.scrollTo({behavior: 'smooth', top: element.scrollHeight})
    }
  });
</script>

<div class="card bg-base-300 w-full h-full min-h-96 max-w-full shadow-xl">
  <slot name="header" />
  <div class="card-body p-5 overflow-auto" bind:this={element}>
    <div>
      <slot name="chat-bubble" />
      <slot name="chat-loading" />
      <slot name="chat-initializer" />
      <slot name="message-box" />
    </div>
  </div>
</div>
