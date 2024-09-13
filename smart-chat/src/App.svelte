<script lang="ts">
  import ChatBubble from "./lib/components/chat/ChatBubble.svelte";
  import MessageBox from "./lib/components/message/MessageBox.svelte";

  import {
    configStore,
    messageStore,
    userStore,
    type ConfigModel,
  } from "./lib";
  import Card from "./lib/components/layout/Card.svelte";
  import Header from "./lib/components/layout/Header.svelte";
  import { onMount } from "svelte";
  import ChatLoading from "./lib/components/chat/ChatLoading.svelte";
  import ChatInitializer from "./lib/components/chat/ChatInitializer.svelte";

  onMount(() => {
    onOpen();
  });

  function onOpen() {
    messageStore.initialMessages();
  }

  function onClose() {
    window.parent.postMessage("hide", "*");
  }

  function onStart() {
    messageStore.start();
  }

  function onSendMessage(event: CustomEvent<{ message: string }>) {
    messageStore.addMessage(event.detail.message, $userStore);
  }
</script>

<main class="absolute top-0 left-0 h-full w-full p-5 bg-transparent" data-theme="{$configStore?.theme ?? 'light'}">
  <Card>
    <Header
      title={$configStore?.title ?? "Title"}
      logoUrl={$configStore?.logoUrl ?? "./vite.svg"}
      subTitle={$configStore?.subTitle ?? "SubTitle"}
      slot="header"
      on:close={onClose}
    />
    <ChatBubble messages={$messageStore.messages} slot="chat-bubble" />

    <svelte:fragment slot="chat-loading">
      {#if $messageStore.isLoading}
        <ChatLoading />
      {/if}
    </svelte:fragment>

    <svelte:fragment slot="chat-initializer">
      {#if $messageStore.isIdle}
        <ChatInitializer on:start={onStart} />
      {/if}
    </svelte:fragment>

    <svelte:fragment slot="message-box">
      {#if $messageStore.isComplete}
        <MessageBox on:message={onSendMessage} />
      {/if}
    </svelte:fragment>
  </Card>
</main>

<style>
</style>
