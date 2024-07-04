import { Chat } from './chat';

/**
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.
 */
export interface InaccessibleMessage {
  /**
   * Chat the message belonged to
   */
  chat: Chat;

  /**
   * Unique message identifier inside the chat
   */
  message_id: number;

  /**
   * Always 0. The field can be used to differentiate regular and inaccessible messages.
   */
  date: number;
}
