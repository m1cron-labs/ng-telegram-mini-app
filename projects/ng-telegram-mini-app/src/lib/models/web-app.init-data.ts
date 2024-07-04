import { ChatFromType } from './enums/chat-from.type';
import { WebAppChat } from './web-app.chat';
import { WebAppUser } from './web-app.user';

/**
 * This object contains data that is transferred to the Mini App when it is opened.
 * It is empty if the Mini App was launched from a keyboard button or from inline mode.
 */
export interface WebAppInitData {
  /**
   * Optional.
   * A unique identifier for the Mini App session, required for sending messages via the answerWebAppQuery method.
   */
  query_id?: string;

  /**
   * Optional.
   * An object containing data about the current user.
   */
  user?: WebAppUser;

  /**
   * Optional.
   * An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu.
   * Returned only for private chats and only for Mini Apps launched via the attachment menu.
   */
  receiver?: WebAppUser;

  /**
   * Optional.
   * An object containing data about the chat where the bot was launched via the attachment menu.
   * Returned for supergroups, channels and group chats – only for Mini Apps launched via the attachment menu.
   */
  chat?: WebAppChat;

  /**
   * Optional.
   * Type of the chat from which the Mini App was opened.
   * Can be either “sender” for a private chat with the user opening the link, “private”, “group”, “supergroup”, or “channel”.
   * Returned only for Mini Apps launched from direct links.
   */
  chat_type?: ChatFromType;

  /**
   * Optional. Global identifier, uniquely corresponding to the chat from which the Mini App was opened. Returned only for Mini Apps launched from a direct link.
   */
  chat_instance?: string;

  /**
   * Optional. The value of the startattach parameter, passed via link. Only returned for Mini Apps when launched from the attachment menu via link.
   *
   * The value of the start_param parameter will also be passed in the GET-parameter tgWebAppStartParam, so the Mini App can load the correct interface right away.
   */
  start_param?: string;

  /**
   * Optional. Time in seconds, after which a message can be sent via the answerWebAppQuery method.
   */
  can_send_after?: number;

  /**
   * Unix time when the form was opened.
   */
  auth_date: number;

  /**
   * A hash of all passed parameters, which the bot server can use to check their validity.
   */
  hash: string;
}
