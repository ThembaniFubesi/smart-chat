import dayjs from "dayjs";
import type { MessageModel } from "../../models/message/message.model";
import type { MessagePost } from "../../models";
import { environment } from "../../config/environment";

export async function sendMessage(model: MessagePost): Promise<MessageModel> {
  const headers = new Headers();
  headers.set("Authorization", `Basic ${environment.auth}`);
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");
  const request: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(model),
  };
  try {
    const response = await fetch(`${environment.api}/conversations`, request);
    const message = (await response.json()) as Partial<MessagePost>;

    return {
      text: message.text ?? "",
      createdAt: dayjs().toJSON(),
      isReply: false,
    };
  } catch (e) {
    return {
      text: "An error occurred, please try again",
      createdAt: dayjs().toJSON(),
      isReply: false,
    };
  }
}

export function initialMessages(): Promise<MessageModel[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const messages: MessageModel[] = [
        `Hi there, I'm <strong>WCED Education Bot</strong>. 👋`,
        `I am an A.i powered chat platform that will reply to your query with <strong>no human involvement</strong>. 🤖<br/><br/>Please see our <a href="https://www.westerncape.gov.za/terms" target="_blank">terms of use</a>.`,
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
