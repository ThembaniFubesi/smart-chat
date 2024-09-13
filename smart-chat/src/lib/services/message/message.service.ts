import dayjs from "dayjs";
import type { MessageModel } from "../../models/message/message.model";

export function sendMessage(model: MessageModel): Promise<MessageModel> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message: MessageModel = {
        createdAt: dayjs().toJSON(),
        isReply: false,
        text: `Response to: ${model.text}`,
      };
      resolve(message);
    }, 3000);
  });
}

export function initialMessages(): Promise<MessageModel[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const messages: MessageModel[] = [
        `Hi there!, I'm <strong>smart chat</strong>`,
        `I am an A.i powered chat platform that will reply to your query with <strong>no human involvement</strong>. 🤖Please see our <a href="#" target="_blank">terms of use</a>.`,
        `Do you understand and agree to proceed?`,
      ].map((message) => ({
        createdAt: dayjs().toJSON(),
        isReply: false,
        text: message,
      }));
      resolve(messages);
    }, 2000);
  });
}
