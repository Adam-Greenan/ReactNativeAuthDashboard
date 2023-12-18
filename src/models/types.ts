import { RCAMessages } from "API";

export interface IRCAMessage extends RCAMessages {
  isMe: boolean;
  isRead: boolean;
}
