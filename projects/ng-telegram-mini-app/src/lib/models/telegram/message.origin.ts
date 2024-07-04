import { Chat } from './chat';
import { User } from './user';

/**
 * This object describes the origin of a message. It can be one of:
 * - MessageOriginUser
 * - MessageOriginHiddenUser
 * - MessageOriginChat
 * - MessageOriginChannel
 */
export type MessageOrigin =
  | MessageOriginUser
  | MessageOriginHiddenUser
  | MessageOriginChat
  | MessageOriginChannel;

/**
 * The message was originally sent by a known user.
 */
export interface MessageOriginUser {
  /**
   * Type of the message origin, always “user”
   */
  type: 'user';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * User that sent the message originally
   */
  sender_user: User;
}

/**
 * The message was originally sent by an unknown user.
 */
export interface MessageOriginHiddenUser {
  /**
   * Type of the message origin, always “hidden_user”
   */
  type: 'hidden_user';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Name of the user that sent the message originally
   */
  sender_user_name: string;
}

/**
 * The message was originally sent on behalf of a chat to a group chat.
 */
export interface MessageOriginChat {
  /**
   * Type of the message origin, always “chat”
   */
  type: 'chat';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Chat that sent the message originally
   */
  sender_chat: Chat;

  /**
   * Optional. For messages originally sent by an anonymous chat administrator, original message author signature
   */
  author_signature?: string;
}

/**
 * The message was originally sent to a channel chat.
 */
export interface MessageOriginChannel {
  /**
   * Type of the message origin, always “channel”
   */
  type: 'channel';

  /**
   * Date the message was sent originally in Unix time
   */
  date: number;

  /**
   * Channel chat to which the message was originally sent
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Optional. Signature of the original post author
   */
  author_signature?: string;
}
