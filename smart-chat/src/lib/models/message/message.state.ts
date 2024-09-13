import dayjs from "dayjs";
import type { MessageModel } from "./message.model";

export enum MessageStatus {
  initial,
  loading,
  idle,
  completed,
  failed,
}

export interface MessageStateModel {
  status: MessageStatus;
  error?: string | null;
  messages: MessageModel[];
}

export class MessageState implements MessageStateModel {
  get isLoading() {
    return this.status == MessageStatus.loading;
  }

  get isComplete() {
    return this.status == MessageStatus.completed;
  }

  get isIdle() {
    return this.status == MessageStatus.idle;
  }

  constructor(
    public status: MessageStatus,
    public error: string | null,
    public messages: MessageModel[]
  ) {}

  copyWith(model: Partial<MessageStateModel>) {
    return new MessageState(
      model?.status ?? this.status,
      model.error ?? this.error,
      model.messages ?? this.messages
    );
  }

  static initial() {
    return new MessageState(MessageStatus.initial, null, []);
  }
}
