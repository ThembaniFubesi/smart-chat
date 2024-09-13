<script lang="ts">
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
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
    {/if}

    <div class="chat-bubble" class:chat-bubble-primary={message.isReply}>
      {@html message.text}
    </div>
  </div>
{/each}
