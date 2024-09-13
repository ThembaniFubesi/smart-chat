export interface MessageModel {
    text: string;
    isReply: boolean;
    createdAt: string;
    sender?: string;
}
