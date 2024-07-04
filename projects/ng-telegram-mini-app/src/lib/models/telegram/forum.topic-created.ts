/**
 * This object represents a service message about a new forum topic created in the chat.
 */
export interface ForumTopicCreated {
  /**
   * Name of the topic
   */
  name: string;

  /**
   * Color of the topic icon in RGB format
   */
  icon_color: number;

  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id?: string;
}
