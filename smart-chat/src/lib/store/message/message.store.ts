import { writable } from "svelte/store";
import type { MessageModel } from "../../models/message/message.model";
import dayjs from "dayjs";
import * as messageService from "../../services/message/message.service";
import {
  MessageState,
  MessageStatus,
} from "../../models/message/message.state";
import { timeoutPromise } from "../../utils";

function createMessageStore() {
  const { subscribe, set, update } = writable<MessageState>(
    MessageState.initial()
  );

  async function addMessage(text: string, userId?: string) {
    const message: MessageModel = {
      createdAt: dayjs().toJSON(),
      isReply: true,
      text: text,
      sender: userId,
    };
    update((state) =>
      state.copyWith({
        status: MessageStatus.loading,
        messages: [...state.messages, message],
      })
    );

    try {
      const response = await messageService.sendMessage(message);

      update((state) =>
        state.copyWith({
          messages: [...state.messages, response],
          status: MessageStatus.initial,
        })
      );

      await timeoutPromise(1000);

      update((state) => state.copyWith({ status: MessageStatus.completed }));
    } catch (e) {
      console.log(e);
      update((state) =>
        state.copyWith({
          error: e as unknown as string,
          status: MessageStatus.failed,
        })
      );
    }
  }

  async function initialMessages() {
    try {
      const messages = await messageService.initialMessages();

      for (const message of messages) {
        update((state) =>
          state.copyWith({
            status: MessageStatus.loading,
          })
        );
        await timeoutPromise(2000);
        update((state) =>
          state.copyWith({
            messages: [...state.messages, message],
            status: MessageStatus.initial,
          })
        );
      }

      await timeoutPromise(1000);

      update((state) => state.copyWith({ status: MessageStatus.idle }));
    } catch (e) {
      update((state) =>
        state.copyWith({
          error: e as unknown as string,
          status: MessageStatus.failed,
        })
      );
    }
  }

  function start() {
    update((state) => state.copyWith({ status: MessageStatus.completed }));
  }
  function reset() {
    set(MessageState.initial());
  }

  return {
    subscribe,
    addMessage,
    initialMessages,
    start,
    reset,
  };
}

export const messageStore = createMessageStore();
