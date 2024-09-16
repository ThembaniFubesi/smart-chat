<script lang="ts">
  import { marked } from "marked";
  import { fade, fly } from "svelte/transition";
  import type { MessageModel } from "../../models";

  export let messages: MessageModel[];
</script>

{#each messages as message}
  <div
    class="chat"
    class:chat-start={!message.isReply}
    class:chat-end={message.isReply}
    in:fly|global={{ y: 20, duration: 500 }}
    out:fade|global
  >
    {#if !message.isReply}
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Bot Avatar"
            src="https://static.landbot.io/daisho/img/avatar-landbot-5.png"
          />
        </div>
      </div>
    {/if}

    <div class="chat-bubble" class:chat-bubble-primary={message.isReply}>
      {@html marked(message.text)}
    </div>
  </div>
{/each}

<style>
  .chat-bubble :global(p) { margin-bottom: 15px; }
  .chat-bubble :global(p):last-child { margin-bottom: 0px; }
  .chat-bubble :global(a) { text-decoration: underline; }
</style>
